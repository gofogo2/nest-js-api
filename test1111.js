import dgram from 'dgram';
import { Buffer } from 'buffer';
const mainDuration = 131;
const Send = (msg) => {
  const message = Buffer.from(msg);
  const client = dgram.createSocket('udp4');
  client.send(message, 5555, 'localhost', (err) => {
    client.close();
  });
};

let time;

//서버 실행
//udp 전송
const st = () => {
  time = Date.now();
  wow();
  Send('start');
  setInterval(wow, 1000);
};

const wow = () => {
  var severTime = new Date();
  var startTime = new Date(time);
  const serverTime_ticks = severTime.getTime();
  const startTime_ticks = startTime.getTime();
  let current_play_time = serverTime_ticks - startTime_ticks;
  current_play_time = current_play_time / 1000;
  current_play_time = (current_play_time % 131).toFixed(3);
  console.log(`current_play_time:${current_play_time}`);
};
st();
