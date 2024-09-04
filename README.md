# 프로젝트 이름

- 맛있는 발견

# 프로젝트 소개 👨‍🏫

이 프로젝트는 맛집 경험을 공유하고, 다른 사람들이 맛집 피드를 실시간으로 확인할 수 있는 뉴스피드입니다. React 기반으로 구축되었으며, 맛집 탐험가들을 위한 소셜 플랫폼을 제공합니다.

## 배포 주소
<https://deliciousdiscovery-heebeoms-projects-028cd87b.vercel.app/>

# 팀 소개

- **팀명**: 💲연매출 8조
- **팀 소개**: 저희는 맛집을 사랑하는 5명의 개발자가 모인 팀입니다! 각자의 맛집 탐방 경험과 기술적 역량을 바탕으로, 혁신적인 플랫폼을 만들어가고 있습니다.

## 개발 기간 ⏲️

- 2024.08.28(수) ~ 2024.09.04(수)

## 역할 분담

- **최지민**
  - 와이어 프레임
  - 작성 폼 페이지 제작
- **김진형**
  - Supabase 초기 셋업(Table 제작 및 Table 관계 연결)
  - 권한별 페이지 라우팅 구현
- **이보영**
  - 회원가입, 로그인 페이지 구현
- **임기철**
  - 메인페이지, 상세 페이지 구현
- **신희범**
  - 프로젝트 초기 셋업(GitHub, 각종 주요 패키지 설치, prettierrc, 기본 라우팅)
  - 마이페이지 구현, 프로필 이미지 수정 기능 구현

## 주요 기능 💜

- 로그인, 회원가입 기능
- 사용자 프로필 수정 및 내 게시글 관리
- 실시간 맛집 리뷰 피드
- 맛집 검색 및 필터링
- 맛집 게시글 CRUD (생성, 읽기, 수정, 삭제)

## 기술 스택 📚️

<div style="text-align: left;">
  <div style="margin: ; text-align: left;" "text-align: left;">
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
    <img src="https://img.shields.io/badge/StyledComponents-DB7093?style=for-the-badge&logo=StyledComponents&logoColor=white">
    <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white">
    <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white">
    <img src="https://img.shields.io/badge/Eslint-4B32C3?style=for-the-badge&logo=Eslint&logoColor=white">
  <br/></div>
</div>


## 개발 환경 

<div style="text-align: left;">
  <div style="margin: ; text-align: left;" "text-align: left;">
    <img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white">
    <img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=white">
    <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white">
  <br/></div>
</div>

## 프로젝트 구조

```
맛집뉴스피드프로젝트/
│
├── public/
│   └── images/
│       └── (필요한 이미지 파일들)
│
├── src/
│   ├── components/
│   │   ├── WriteForm.jsx
│   │   ├── Mypost.jsx
│   │   ├── MyInfo.jsx
│   │   ├── MainListSort.jsx
│   │   ├── MainList.jsx
│   │   ├── MainItem.jsx
│   │   └── DetailItem.jsx
│   │
│   ├── context/
│   │   ├── LoginContext.js
│   │   ├── MainContext.js
│   │   └── MypageContext.js
│   │
│   ├── layout/
│   │   ├── Aside.jsx
│   │   ├── ContentBox.jsx
│   │   ├── ContentBox2.jsx
│   │   ├── Header.jsx
│   │   ├── MainBox.jsx
│   │   └── ProtectedAsidebar.jsx
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Main.jsx
│   │   ├── MyPage.jsx
│   │   ├── SignUp.jsx
│   │   ├── Writing.jsx
│   │   ├── ProtectedMain.jsx
│   │   └── Detail.jsx
│   │
│   ├── router/
│   │   ├── ProtectedRouter.js
│   │   └── Router.js
│   │
│   ├── App.jsx
│   ├── GlobalStyles.js
│   └── reset.css
│
├── package.json
└── README.md
```

## 페이지별 기능

- **로그인 페이지**
  > 사용자 인증
- **회원가입 페이지**
  > 새 사용자 계정 생성, 사용자 정보 입력 및 유효성 검사
- **메인 페이지**
  > 실시간 맛집 피드 표시, 지역 정렬 필터링, 맛집 검색 기능
- **디테일 페이지**
  > 개별 피드의 상세 정보 표시
- **마이 페이지**
  > 사용자 프로필 정보 표시 및 수정, 사용자가 작성한 피드 목록 관리
- **피드 작성 폼 페이지**
  > 새로운 피드 생성 및 수정, 이미지 핸들링

## 와이어프레임

![와이어프레임](https://github.com/HBeom00/newfeed_8/blob/44d5d89bea4632bf37a9a6dc519fb03f4475dd33/public/images/newSpeed.png)

## 실제 배포 사이트 이미지
- 메인 페이지<br>
![와이어프레임](https://github.com/HBeom00/newfeed_8/blob/26bf7938acfa1d9cfa8c5f0893ca07465ca9310f/public/images/notloginhome.png)
- 회원가입 페이지<br>
![와이어프레임](https://github.com/HBeom00/newfeed_8/blob/26bf7938acfa1d9cfa8c5f0893ca07465ca9310f/public/images/signup.png)
- 로그인 페이지<br>
![와이어프레임](https://github.com/HBeom00/newfeed_8/blob/26bf7938acfa1d9cfa8c5f0893ca07465ca9310f/public/images/login.png)
- 로그인 된 유저가 보는 메인 페이지<br>
![와이어프레임](https://github.com/HBeom00/newfeed_8/blob/26bf7938acfa1d9cfa8c5f0893ca07465ca9310f/public/images/loginhome.png)
- 상세 페이지<br>
![와이어프레임](https://github.com/HBeom00/newfeed_8/blob/26bf7938acfa1d9cfa8c5f0893ca07465ca9310f/public/images/detail.png)
- 작성 페이지<br>
![와이어프레임](https://github.com/HBeom00/newfeed_8/blob/26bf7938acfa1d9cfa8c5f0893ca07465ca9310f/public/images/write.png)
- 마이페이지(내 정보)<br>
![와이어프레임](https://github.com/HBeom00/newfeed_8/blob/26bf7938acfa1d9cfa8c5f0893ca07465ca9310f/public/images/mypage_myinfo.png)
- 마이페이지(내 게시글)<br>
![와이어프레임](https://github.com/HBeom00/newfeed_8/blob/26bf7938acfa1d9cfa8c5f0893ca07465ca9310f/public/images/mypage_mywrite.png)
