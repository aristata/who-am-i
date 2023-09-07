# 개요

2023년 06월 29일 기준으로 내가 학습하고 경험했던 기술들을 사용하여 나를 소개하고, 블로깅 하는 홈페이지

# 사용 기술 스택

1.  Base

- Next.js ver 13
- TypeScript
- ESLint - airbnb
- Prettier

2. UI & Animation

- MUI
- TailwindCSS
- styled-components (MUI 내장)
- Framer

3. API 통신 및 캐싱

- axios
- SWR
- Iron Session
- Session Storage

4. Form 및 Table

- react-hook-form
- MUI Table

5. 상태 관리

- recoil

6. 데이터 베이스 및 ORM

- MySQL or PlanetScale
- Prisma

7. DevOps

- GitHub
- Teamcity (CI/CD)
- AWS EC2 or Vercel
- AWS RDS or PlanetScale

# 어떤 내용을 채울까?

1. 대시보드
2. 나의 이력서
   1. 정보
   2. 사상
   3. 기술
   4. 경력
3. 블로그

### 예제 활용

```
yarn create next-app -e https://github.com/inyourcare/next-example/tree/main/my-blogify
```

---

## Prisma 설치 및 기본 세팅

```
yarn add prisma @prisma/client --save-dev
npx prisma init --datasource-provider sqlite
npx prisma migrate dev --name init
```

### 마이그레이션 명령어

```
npx prisma migrate dev --name table_post_create
```

### 클라이언트 오브잭트 동기화

```
npx prisma generate
```

### 프리즈마 스튜디오

```
npx prisma studio
```

---

# 프로젝트 설치

```
yarn
```

---

# 프로젝트 실행

```
yarn dev
```
