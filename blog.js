// 설치된 puppeteer 모듈 사용하기
import puppeteer from "puppeteer";
import baekjoon from "./assets/baekjoon.js";
import auth from "./assets/auth.js";
import blogData from "./assets/blogData.js";

(async () => {
  // headless 브라우저 실행
  const browser = await puppeteer.launch({ headless: false });
  // 백준 페이지 설정 (캡쳐 및 크롤링 예정 )
  const page = await browser.newPage();
  await page.setViewport({ width: 0, height: 0 });
  await page.goto("https://www.acmicpc.net/problem/" + baekjoon.no);
  // `screen1.png` 스크린샷을 캡처 하여 screen 폴더에 저장
  // await page.screenshot({ path: "./screen/screen1.png" });

  // 티스토리 페이지 설정 (페이지 작성 예정)
  const blogPage = await browser.newPage();
  await blogPage.setViewport({ width: 0, height: 0 });
  await blogPage.goto("https://www.tistory.com/auth/login");
  await blogPage.waitForSelector(".btn_login.link_kakao_id");
  await blogPage.click(".btn_login.link_kakao_id");

  await blogPage.waitForSelector("#id_email_2");
  await blogPage.waitForSelector("#id_password_3");

  await blogPage.evaluate((kakao) => {
    document.querySelector("#id_email_2").value = kakao.id;
    document.querySelector("#id_password_3").value = kakao.pw;
  }, auth);
  await blogPage.waitForSelector(".btn_g.btn_confirm.submit");
  await blogPage.click(".btn_g.btn_confirm.submit");

  await blogPage.waitForSelector(".thumb_profile");
  await blogPage.click(".thumb_profile");

  await blogPage.waitForSelector(".img_common_tistory.link_edit");
  await blogPage.click(".img_common_tistory.link_edit");

  // 작성페이지로 이동 - 자동 저장을 수정하고 진행할 예정
  await blogPage.waitForSelector(".textarea_tit");
  await blogPage.waitForSelector("#tinymce");
  await blogPage.evaluate((data) => {
    document.querySelector(".textarea_tit").value = data.code;
    document.querySelector("#tinymce").value = data.code;
  }, blogData);
})();
