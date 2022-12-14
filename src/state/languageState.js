import { atom } from "recoil";

export const languageState = atom({
  key: "languageState",
  default: "english",
});

export const textState = atom({
  key: "textState",
  default: {
    english: {
      title: "The stats for newbie frontend developers in South Korea",
      subTitle: "All of stats based on wanted.co.kr",
      frontTitle: "React, Vue, Angular ๐ค",
      frontSubTitle:
        "How the company does require three of most popular framework/library? \nFollowing is based on 120 of job position requires at least one of these skills.",
      topTenTitle: "The most mentioned tech stack๐ฅ",
      topTenSubTitle:
        "What of tech stack mostly mentioned on the job description? \nFollowing is based on 274 of frontend developer job positions.",
    },
    korean: {
      title: "๊ตญ๋ด ์ ์ ํ๋ก ํธ์๋ ๊ฐ๋ฐ์๋ฅผ ์ํ ํต๊ณ",
      subTitle: "wanted.co.kr์ ๊ธฐ๋ฐํ์ฌ ์ง๊ณ๋จ",
      frontTitle: "React, Vue, Angular ๐ค",
      frontSubTitle:
        "์ฑ์ฉ๊ณต๊ณ ์์๋ ์์ 3๊ฐ์ง ๊ธฐ์ ์ด ์ผ๋ง๋ ์ธ๊ธ๋๊ณ  ์์๊น์? \n์๋์ ๊ฒฐ๊ณผ๋ ์ด ๊ธฐ์ ์ ์ธ๊ธํ ์ฑ์ฉ๊ณต๊ณ  120๊ฐ๋ฅผ ๋ถ์ํ ๊ฒฐ๊ณผ์๋๋ค.",
      topTenTitle: "๊ฐ์ฅ ๋ง์ด ์ธ๊ธ๋ ๊ธฐ์ ์คํ๐ฅ",
      topTenSubTitle:
        "์ด๋ค ๊ธฐ์ ์ด ์ฑ์ฉ ๊ณต๊ณ ์ ๊ฐ์ฅ ๋ง์ด ์ธ๊ธ๋๊ณ  ์์๊น์? \n์๋์ ๊ฒฐ๊ณผ๋ ํ๋ก ํธ์๋ ๊ฐ๋ฐ์ ์ฑ์ฉ๊ณต๊ณ  274๊ฐ๋ฅผ ๋ถ์ํ ๊ฒฐ๊ณผ์๋๋ค.",
    },
  },
});
