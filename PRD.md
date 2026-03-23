# 🌿 VitaCore — 건강 기능식품 웹사이트 PRD (Product Requirements Document)

**버전**: v1.0.0  
**작성일**: 2026-03-23  
**작성자**: Claude AI (Anthropic)  
**상태**: Draft

---

## 1. 제품 개요 (Product Overview)

### 1.1 제품명
**VitaCore** — 과학적으로 검증된 건강 기능식품 전문 쇼핑몰

### 1.2 비전
"모든 사람이 건강을 과학적으로 이해하고, 자신에게 맞는 영양소를 쉽게 선택할 수 있는 플랫폼"

### 1.3 목표
- 비타민/미네랄/기능성 원료의 효능 정보를 신뢰도 높게 제공
- 사용자 맞춤형 추천 시스템으로 구매 전환율 향상
- 2026년 국내 건강 기능식품 시장(약 6조원) 공략

---

## 2. 대상 사용자 (Target Users)

| 세그먼트 | 연령 | 특성 |
|----------|------|------|
| 건강관심 MZ세대 | 25~39세 | SNS를 통한 정보탐색, 성분 중심 구매 |
| 중장년 건강관리층 | 40~60세 | 만성질환 예방, 가족 건강 챙기기 |
| 시니어 | 60세 이상 | 뼈·관절·눈 건강 집중 관심 |
| 피트니스 마니아 | 20~45세 | 운동 퍼포먼스, 단백질·BCAA |

---

## 3. 핵심 기능 요구사항 (Core Features)

### 3.1 메인 홈페이지 (index.html)
- [ ] 히어로 섹션: 브랜드 스토리 + CTA 버튼
- [ ] 비타민 효능 카드 섹션 (A, B군, C, D, E, K)
- [ ] TOP 10 인기 제품 추천 섹션
- [ ] 건강 고민별 솔루션 탐색 (피로, 면역, 피부, 뼈·관절 등)
- [ ] 뉴스레터 구독 CTA
- [ ] 반응형 네비게이션 + 검색

### 3.2 서브 페이지 (CLI 요청 예정)
- `/vitamins` — 비타민 전성분 도감
- `/products` — 제품 목록 / 필터 / 정렬
- `/product/:id` — 제품 상세 (성분, 원산지, 리뷰)
- `/quiz` — 건강 맞춤 추천 퀴즈
- `/cart` — 장바구니
- `/mypage` — 마이페이지

### 3.3 비타민 정보 DB
- 비타민 A, B1, B2, B3, B5, B6, B7, B9, B12, C, D, E, K
- 각 비타민별: 효능, 권장 섭취량, 결핍 증상, 과잉 주의사항, 좋은 식품원

### 3.4 TOP 10 추천 제품
1. 마그네슘 (수면·근육이완)
2. 비타민 D3+K2 (뼈·면역)
3. 오메가-3 (심혈관·뇌건강)
4. 비타민 C 1000mg (면역·항산화)
5. 프로바이오틱스 (장내 유익균)
6. 콜라겐 펩타이드 (피부·관절)
7. 코엔자임 Q10 (항산화·에너지)
8. 루테인·지아잔틴 (눈건강)
9. 아연 (면역·피부·생식기능)
10. 멀티비타민 (종합 영양 보충)

---

## 4. 비기능적 요구사항 (Non-functional Requirements)

| 항목 | 요구사항 |
|------|----------|
| 성능 | LCP < 2.5s, FID < 100ms |
| 반응형 | 모바일 320px ~ 데스크탑 1920px |
| 접근성 | WCAG 2.1 AA 준수 |
| SEO | 시맨틱 HTML, 메타태그, OG 태그 |
| 보안 | HTTPS, XSS 방지, CSRF 토큰 |
| 브라우저 | Chrome, Safari, Firefox, Edge 최신버전 |

---

## 5. 기술 스택 (Tech Stack)

```
Frontend:  HTML5, CSS3 (Custom Properties), Vanilla JS ES2022
아이콘:    Font Awesome / SVG 직접 작성
폰트:      Google Fonts (Playfair Display + Noto Sans KR)
빌드:      없음 (순수 정적 파일)
배포:      Vercel / Netlify / GitHub Pages
```

---

## 6. 멀티 에이전트 아키텍처 (Multi-Agent Architecture)

### Agent 개요
총 **5명의 SKILL Agent** + **1명의 Review Agent**로 구성

```
┌─────────────────────────────────────────────────────────┐
│                   REVIEW AGENT (Orchestrator)            │
│              품질 검토, 일관성 검증, 최종 승인             │
└─────────────────────┬───────────────────────────────────┘
                      │
        ┌─────────────┼──────────────┐
        ▼             ▼              ▼
   [Agent 1]     [Agent 2]      [Agent 3]
   Content       UI/UX          SEO &
   Writer        Designer       Accessibility
        
        ┌─────────────┼──────────────┐
        ▼             ▼
   [Agent 4]     [Agent 5]
   Product       Data &
   Manager       Analytics
```

### Agent 상세 역할

#### 🖊️ Agent 1 — Content Writer Agent
- **역할**: 비타민 효능 정보, 제품 설명, 블로그 콘텐츠 작성
- **입력**: 성분명, 타겟 사용자, SEO 키워드
- **출력**: 마케팅 카피, 제품 상세 설명, 효능 요약 카드
- **스킬**: medical_copywriting, korean_nlp, keyword_optimization
- **검증 기준**: 건강기능식품법 광고 표현 준수, 과장 광고 없음

#### 🎨 Agent 2 — UI/UX Designer Agent
- **역할**: 디자인 시스템, 컴포넌트, 레이아웃 설계
- **입력**: 브랜드 가이드라인, 사용자 페르소나, 와이어프레임
- **출력**: HTML/CSS 컴포넌트, 디자인 토큰, 반응형 레이아웃
- **스킬**: css_design_system, animation, accessibility_design
- **검증 기준**: 모바일 퍼스트, 명도 대비 4.5:1 이상

#### 🔍 Agent 3 — SEO & Accessibility Agent
- **역할**: 검색 최적화, 웹 접근성, 성능 최적화
- **입력**: HTML 파일, 키워드 리스트
- **출력**: 메타태그, 구조화 데이터(Schema.org), alt텍스트, ARIA 레이블
- **스킬**: seo_audit, lighthouse_optimization, schema_markup
- **검증 기준**: Google PageSpeed 90점 이상, WCAG 2.1 AA

#### 📦 Agent 4 — Product Manager Agent
- **역할**: 제품 DB 관리, 카테고리 기획, 추천 로직 설계
- **입력**: 제품 원료, 기능성 데이터, 판매 데이터
- **출력**: 제품 JSON 스키마, 추천 알고리즘 로직, 카테고리 구조
- **스킬**: product_cataloging, recommendation_engine, pricing_strategy
- **검증 기준**: 식약처 기능성 원료 인정 여부 확인

#### 📊 Agent 5 — Data & Analytics Agent
- **역할**: 사용자 행동 분석, A/B 테스트, 전환율 최적화
- **입력**: 페이지뷰, 클릭 이벤트, 구매 데이터
- **출력**: 대시보드 리포트, 인사이트, 개선 제안
- **스킬**: ga4_integration, heatmap_analysis, conversion_optimization
- **검증 기준**: 통계적 유의미성 95% 이상

#### ✅ Review Agent — Quality Assurance Orchestrator
- **역할**: 전체 산출물 품질 검토, 법적 적합성 검증, 최종 배포 승인
- **점검 항목**:
  - 건강기능식품법 광고 표현 준수
  - 크로스 브라우저 호환성
  - 디자인 일관성 (디자인 토큰 사용 여부)
  - 콘텐츠 사실 확인 (효능 정보 출처)
  - 보안 취약점 스캔
  - 최종 배포 전 QA 체크리스트 완료

---

## 7. 프로젝트 파일 구조

```
vitacore/
├── index.html              # 메인 홈페이지
├── styles.css              # 전역 스타일 + 디자인 시스템
├── main.js                 # 메인 인터랙션 로직
├── README.md               # 프로젝트 설명서
├── PRD.md                  # 이 문서
├── agents/
│   ├── content-writer.md   # Agent 1 프롬프트 & 가이드
│   ├── ui-designer.md      # Agent 2 프롬프트 & 가이드
│   ├── seo-agent.md        # Agent 3 프롬프트 & 가이드
│   ├── product-manager.md  # Agent 4 프롬프트 & 가이드
│   ├── data-analytics.md   # Agent 5 프롬프트 & 가이드
│   └── review-agent.md     # Review Agent 프롬프트 & 가이드
├── data/
│   ├── vitamins.json       # 비타민 효능 DB
│   └── products.json       # 제품 DB
└── pages/                  # 서브페이지 (CLI 요청 시 생성)
    ├── vitamins.html
    ├── products.html
    ├── quiz.html
    └── cart.html
```

---

## 8. 마일스톤

| 단계 | 내용 | 담당 Agent |
|------|------|-----------|
| M1 | PRD 확정 + 디자인 시스템 | Agent 2 |
| M2 | index.html + CSS + JS | Agent 1, 2 |
| M3 | 비타민 DB + 제품 DB | Agent 1, 4 |
| M4 | 서브페이지 구현 | Agent 1, 2, 3 |
| M5 | SEO + 성능 최적화 | Agent 3 |
| M6 | 분석 연동 + QA | Agent 5, Review |
| M7 | 배포 | All |

---

## 9. 성공 지표 (KPIs)

- 월간 방문자 10만 명 달성 (6개월 내)
- 제품 상세 페이지 전환율 3% 이상
- 평균 세션 시간 3분 이상
- 구글 검색 1페이지 노출 (비타민 관련 주요 키워드)
- NPS (순추천지수) 40점 이상

---

*© 2026 VitaCore. PRD v1.0.0*
