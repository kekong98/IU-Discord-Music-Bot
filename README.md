<h1 align="center">
  <br>
  <img src="https://github.com/kekong98/IU-Discord-Music-Bot/blob/main/img/readmeimage2.gif" alt="IU README IMG"></a>
</h1>

<h3 align="center"><img src="https://github.com/kekong98/IU-Discord-Music-Bot/blob/main/img/uaenalogo.png" width="20" alt="UAENA LOGO"></a> 아이유 디스코드 노래 봇 <img src="https://github.com/kekong98/IU-Discord-Music-Bot/blob/main/img/uaenalogo.png" width="20"alt="UAENA LOGO"></h3>
<h4 align="center">Since 2021.09.28</h4>
<p align="center">
  <a href="#overview">소개</a>
  •
  <a href="#update_log">업데이트</a>
  •
  <a href="#command">명령어</a>
  •
  <a href="#installation">설치</a>
  •
  <a href="#License">라이선스</a>
</p>

## Overview
`Youtube API` 를 이용하여 Discord 에서 Bot 을 통해 노래를 재생시킬 수 있는 디스코드 노래 봇 입니다. 
<h4 align="center"><img src="https://github.com/kekong98/IU-Discord-Music-Bot/blob/main/img/discord1.jpg" width="400" alt="discord1"><img src="https://github.com/kekong98/IU-Discord-Music-Bot/blob/main/img/discord2.jpg" width="415" alt="discord2"></h4>
<h4 align="center">현재 Discord 내에 아이유사랑해, 아이유좋아해 봇이 있습니다.</h4>

## Update_Log
- **[2021.10.04]** </br>
**1.** 24/7 작동을 위한 `keep_alive.js` 파일 생성 </br>
```sh
const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('/// name'));

app.listen(port, () => console.log(`Connected to http://localhost:${port}`));
```
**2.** `index.js` 에서 `keep_alive.js` 를 불러오는 명령 추가
```sh
const { keep_alive } = require("./keep_alive");
```

- **[2021.09.28]** </br>
**1.** **아이유사랑해, 아이유좋아해 봇 제작** </br>

## Command

- `help` or `h` --    **명령어 모음, 도움말**
- `invite` --    **봇 초대 링크 생성**
- `play` or `p` --    **노래 검색 및 재생**
- `link` or `l` --    **Youtube 링크를 통한 노래 재생**
- `pause` --    **노래 일시정지**
- `unpause` or `resume`  --    **노래 다시 재생**
- `stop`  --    **노래 정지**
- `playlist` --    **Youtube 내 플레이리스트 재생**
- `queue` or `list` --    **대기열 표시**
- `volume` or `v` --    **노래 볼륨 조절**
- `skip` --    **노래 넘기기**
- `skipto` --    **특정 대기열까지 노래 넘기기**
- `move` --    **대기열에서 노래 이동**
- `delete` or `remove` --    **대기열에 있는 노래 삭제**
- `shuffle` --    **대기열에 있는 노래 무작위 설정**
- `uptime` --    **봇 가동 시간 확인**
- `ping` --    **봇의 평균 핑 수치 확인**

-- **추후 추가 예정**

## Installation
Installed with [![Run on Repl.it](https://repl.it/badge/github/kekong98/IU-Discord-Music-Bot)](https://repl.it/github/kekong98/IU-Discord-Music-Bot) </br>
Required Discord Bot TOKEN, [Youtube API Key](https://developers.google.com/youtube/v3/getting-started), [Latest Node.js](https://nodejs.org/en/download/), [ffmpeg@latest](https://ffmpeg.org)</br>


**1.** Open Replit [![Run on Repl.it](https://repl.it/badge/github/kekong98/IU-Discord-Music-Bot)](https://repl.it/github/kekong98/IU-Discord-Music-Bot) </br>
**2.** In `Config.json`, put your `Discord Bot TOKEN` and `Youtube API Key` </br>
**3.** **At Console**, Enter `npm install` </br>
**4.** And then, Enter `node index.js` </br>
**5.** Press `Run` or Enter `node .` at Console </br>

**With 24/7** </br>
**6.** Open [**UptimeRobot**](https://uptimerobot.com/) </br>
**7.** Press **+Add New Monitor** and **HTTP(s)** in Monitor Type  </br>
**8.** Put your Replit link ex. `https://replitfilename.yourusername.repl.co` </br>

## License

1. This repo is under the MIT license and specially appreciation to github @eritislami/evobot, which also under the MIT license. </br>
2. [**IU**](https://en.wikipedia.org/wiki/IU_(singer)), also known as [**Lee Ji-eun**](https://en.wikipedia.org/wiki/IU_(singer)) is a South Korean singer-songwriter and actress. </br>
3. <img src="https://github.com/kekong98/IU-Discord-Music-Bot/blob/main/img/uaenalogo.png" width="20" alt="UAENA LOGO">, the logo of IU Fanclub. All copyrights are reserved to [**EDAM Entertainment**](http://edam-ent.com/) </br>
4. The head of [**REAMD.md gif file**](https://github.com/kekong98/IU-Discord-Music-Bot/blob/main/img/readmeimage2.gif) is made by [**DEL**<img src="https://github.com/kekong98/IU-Discord-Music-Bot/blob/main/img/uaenalogo.png" width="15" alt="UAENA LOGO">](https://twitter.com/iudel0819?lang=en). All copyright of this gif is reserved to DEL. </br>


