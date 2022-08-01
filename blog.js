// 설치된 puppeteer 모듈 사용하기
import puppeteer from "puppeteer";
import baekjoon from "./assets/baekjoon.js";

(async () => {
  // headless 브라우저 실행
  const browser = await puppeteer.launch({ headless: false });
  // 새로운 페이지 열기
  const page = await browser.newPage();
  await page.setViewport({
    width: 1366,
    height: 768,
  });
  // `https://www.google.com/` URL에 접속
  await page.goto("https://www.acmicpc.net/problem/" + baekjoon.no);

  // inputArea = await page.$(".gLFyf");
  // searchBtn = await page.$(
  //   ".FPdoLc > center:nth-child(1) > input:nth-child(1)"
  // );

  // await inputArea.type("puppeteer test");
  // await searchBtn.click();

  // await page.waitForNavigation();
  console.log(baekjoon.comment);
  // `screen1.png` 스크린샷을 캡처 하여 screen 폴더에 저장
  // await page.screenshot({ path: "./screen/screen1.png" });

  // 모든 스크래핑 작업을 마치고 브라우저 닫기
  //await browser.close();
})();
