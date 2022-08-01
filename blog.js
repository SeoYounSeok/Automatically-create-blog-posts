// 설치된 puppeteer 모듈 사용하기
import puppeteer from "puppeteer";
import baekjoon from "./assets/baekjoon.js";

(async () => {
  // headless 브라우저 실행
  const browser = await puppeteer.launch({ headless: false });
  // 백준 페이지 설정 (캡쳐 및 크롤링 예정 )
  const page = await browser.newPage();
  await page.setViewport({ width: 0, height: 0 });
  await page.goto("https://www.acmicpc.net/problem/" + baekjoon.no);

  //
  const blogPage = await browser.newPage();
  await blogPage.goto("https://www.tistory.com/auth/login");
  const loginButton = await blogPage.$(".btn_login link_kakao_id");
  await loginButton.click();
  await page.waitForNavigation();
  // inputArea = await page.$(".gLFyf");
  // searchBtn = await page.$(
  //   ".FPdoLc > center:nth-child(1) > input:nth-child(1)"
  // );

  // await inputArea.type("puppeteer test");
  // await searchBtn.click();

  // await page.waitForNavigation();

  // `screen1.png` 스크린샷을 캡처 하여 screen 폴더에 저장
  // await page.screenshot({ path: "./screen/screen1.png" });

  // 모든 스크래핑 작업을 마치고 브라우저 닫기
  //await browser.close();
})();
