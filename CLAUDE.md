# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 소개

**VitaCore** — 건강 기능식품 정보 제공 및 판매를 위한 순수 정적 웹사이트 (빌드 도구 없음).

## 실행 방법

빌드 단계 없음. 아래 중 하나로 로컬 서버 실행:

```bash
# Python 3
python -m http.server 8080

# Node.js
npx serve .
```

브라우저에서 `http://localhost:8080` 접속. 또는 `index.html`을 브라우저에서 바로 열어도 됨.

> `pages/` 서브페이지는 아직 미생성 상태. 내비게이션 링크(quiz, cart, products, mypage)는 현재 404.

## 아키텍처 핵심

### 데이터 흐름

모든 데이터는 `js/main.js` 상단에 인라인 배열로 정의되어 있음 (`data/` 폴더 미사용):
- `vitaminsData` — 비타민 13종 (A, B1~B12, C, D, E, K)
- `productsData` — TOP 10 제품 랭킹
- `healthGoals` — 건강 고민 6개 카테고리

`DOMContentLoaded`에서 각 배열을 순회하여 `document.createElement()`로 카드를 동적 렌더링. 서버/API 없음.

### CSS 구조

`css/styles.css`는 단일 파일로 전체 스타일 관리. `:root`에 정의된 CSS 변수가 디자인 시스템의 근간:
- `--clr-*` — 색상 토큰 (다크 그린 테마, 기본이 다크 모드)
- `--space-*` — 간격 스케일
- `--font-*` — 폰트 패밀리 (Cormorant Garamond/디스플레이, Noto Sans KR/본문, DM Mono/코드)

신규 컴포넌트는 반드시 CSS 변수를 사용해야 함 (하드코딩된 색상/간격 지양).

### 서브페이지 생성 규칙

`pages/` 디렉터리에 서브페이지를 추가할 때:
- CSS: `../css/styles.css` 경로로 참조
- JS: `../js/main.js` 또는 별도 JS 파일
- 내비게이션 컴포넌트를 `index.html`과 동일하게 유지

## 디자인 원칙 (agents/ui-designer.md)

- 테마: Organic Luxury · Botanical Dark
- 주조색: `#4ade80` (Primary Green), 배경: `#0a0f0d`
- 모바일 퍼스트 작성
- 명도 대비 4.5:1 이상 유지
- CSS 변수(`--clr-*`, `--space-*`) 반드시 사용

## 콘텐츠 작성 규칙 (agents/content-writer.md)

건강기능식품법 준수 필수:
- "치료", "완치", "의약품" 표현 사용 금지
- 효능 표현은 "~에 도움을 줄 수 있습니다" 수준
- 식약처 인정 기능성 원료만 기능성 표시
- 권장 섭취량은 한국영양학회 기준 적용

## 미완성 항목

| 항목 | 설명 |
|------|------|
| `pages/` | quiz.html, cart.html, products.html, product-detail.html, mypage.html 미생성 |
| `data/` | vitamins.json, products.json 미생성 (현재 JS 인라인) |
| `cli.js` | 서브페이지 자동 생성 CLI 미구현 |
