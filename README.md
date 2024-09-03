# 프로젝트 이름

- 맛있는 발견(미정)

# 프로젝트 소개 👨‍🏫

이 프로젝트는 맛집 경험을 공유하고, 다른 사람들이 맛집 피드를 실시간으로 확인할 수 있는 뉴스피드입니다. React 기반으로 구축되었으며, 맛집 탐험가들을 위한 소셜 플랫폼을 제공합니다.

# 팀 소개

- **팀명**: 💲연매출 8조
- **팀 소개**: 저희는 맛집을 사랑하는 5명의 개발자가 모인 팀입니다! 각자의 맛집 탐방 경험과 기술적 역량을 바탕으로, 혁신적인 플랫폼을 만들어가고 있습니다.

## 개발 기간 ⏲️

- 2024.02.26(월) ~ 2024.04.04(목)

## 역할 분담

- **최지민**: 와이어프레임, 작성폼 페이지
- **김진형**: Supabase 담당
- **이보영**: 회원가입, 로그인 기능 구현
- **임기철**: 메인, 상세페이지
- **신희범**: 초기 셋업, 마이페이지

## 주요 기능 💜

- 로그인, 회원가입 기능
- 사용자 프로필 수정 및 내 게시글 관리
- 실시간 맛집 리뷰 피드
- 맛집 검색 및 필터링
- 맛집 게시글 CRUD (생성, 읽기, 수정, 삭제)

## 기술 스택 📚️

- React
- React-Router-Dom
- Styled-components
- SweetAlert2
- Supabase

## 개발 환경

- VScode
- GitHub
- Figma

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

- ![와이어프레임](./images/newSpeed.png)

## 실제 배포 사이트 이미지

-
