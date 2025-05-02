const data = () => {
  return [
    {
      id: 1,
      name: "Megabox 프로젝트",
      comment:
        "HTML과 CSS를 배경으로 첫 팀프로젝트로 Megabox 페이지를 구현하였습니다. 4명의 팀원이 각각 하나의 파트를 담당하였으며 저는 선호극장 파트를 구현하였습니다.",
      createdAt: new Date("2023-01-01"),
      likes: 0,
      projectInfo: {
        title: "Megabox",
        image:
          "https://blog.kakaocdn.net/dn/cDTpif/btrbgnYMHUX/KskkZ9BgNaOp6a3Tgh8RFk/img.jpg",
        link: "https://ori0li.github.io/TeamPortfolio_Megabox/",
        skills: ["HTML", "CSS"],
      },
    },
    {
      id: 2,
      name: "KIA 프로젝트",
      comment:
        "HTML과 CSS에 JavaScript를 활용하여 동적인 이벤트를 구현하였습니다. 두번째 팀프로젝트로 메인페이지와 상세페이지로의 이동을 구현하였습니다.",
      createdAt: new Date("2023-02-01"),
      likes: 0,
      projectInfo: {
        title: "KIA",
        image: "https://worldwide.kia.com/kr/image/og/the-new-kia-og-image.jpg",
        link: "https://gn-lee.github.io/KiaCarInfo/",
        skills: ["HTML", "CSS", "JS"],
      },
    },
    {
      id: 3,
      name: "KGM 프로젝트",
      comment:
        "HTML과 CSS에 JavaScript를 활용한 첫 개인 프로젝트입니다. JS의 라이브러리와 프레임 워크를 적극 활용하였습니다.",
      createdAt: new Date("2023-03-01"),
      likes: 0,
      projectInfo: {
        title: "KGM",
        image:
          "https://www.chandlers.co.uk/images/content/thumbnails/1429_article_790x600.jpg?14:12:24&_e=.jpg",
        link: "https://gn-lee.github.io/Personal_Project-KGM-/",
        skills: ["HTML", "CSS", "JS", "Swiper", "GSAP"],
      },
    },
    {
      id: 4,
      name: "To-Do-List 프로젝트",
      comment:
        "JavaScripot와 TypeScript에 이어 React를 활용한 개인 To-do-List 페이지입니다. 동적인 이벤트를 더한 단적인 페이지이며 vercel을 사용하여 배포하였습니다.",
      createdAt: new Date("2023-04-01"),
      likes: 0,
      projectInfo: {
        title: "To-Do-List",
        image:
          "https://i.namu.wiki/i/dkiWjzXeEWyS8ZI2E6XlmCUGRwHaxW8-Xau9Nd13SFWccCeD39OrjYvteXITxDrwhpLIfjRY32gwewqPw0Pb_A.webp",
        link: "https://tsx-todolist-new.vercel.app",
        skills: ["HTML", "CSS", "JS", "TS", "React"],
      },
    },
    {
      id: 5,
      name: "Spotify 프로젝트",
      comment:
        "JavaScript에 이어 TypeScript와 React 그리고 Next.js를 활용한 팀프로젝트입니다. Next.js를 적극활용하였으며 처음으로 Firebase라는 DB에 데이터를 담아 활용하였으며 Justand로 데이터보관을 전송 및 보관하였습니다.",
      createdAt: new Date("2023-05-01"),
      likes: 0,
      projectInfo: {
        title: "Spotify",
        image:
          "https://miro.medium.com/v2/da:true/resize:fit:1200/0*7koOzWGkuNS2YNZM",
        link: "https://team-spotify-zeta.vercel.app/",
        skills: [
          "Tailwind",
          "JS",
          "TS",
          "React",
          "Next.js",
          "Firebase",
          "Zustand",
        ],
      },
    },
    {
      id: 6,
      name: "게시판 구현중",
      comment:
        "DB를 활용한 게시판을 연동 및 구현하였고 추후 백엔드 서버를 배포하여 구현할 예정입니다.",
      createdAt: new Date("2023-05-02"),
      likes: 0,
      projectInfo: {
        title: "게시판",
        image:
          "https://cdn.pixabay.com/photo/2013/02/04/22/37/guest-book-guest-77941_1280.jpg",
        link: "javascript:alert('곧 배포 예정입니다')",
        skills: ["React", "Next.js", "Nest.js", "MySQL", "Docker"],
      },
    },
  ];
};

export default data;
