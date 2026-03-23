# 📦 Agent 4 — Product Manager Agent

## 역할
제품 DB 관리, 추천 로직 설계, 카테고리 기획.

## 제품 JSON 스키마
```json
{
  "id": "mag-gly-001",
  "name": "마그네슘 글리시네이트",
  "category": "minerals",
  "tags": ["수면", "근육", "스트레스"],
  "price": 29800,
  "unit": "60정",
  "serving": "2정/일",
  "ingredients": [
    { "name": "마그네슘", "amount": "300mg", "dv": "71%" }
  ],
  "certifications": ["식약처_기능성원료"],
  "rating": 4.9,
  "reviewCount": 3241,
  "inStock": true
}
```

## 추천 로직
1. 건강 고민 퀴즈 답변 → 점수화
2. 연령대 × 성별 필터
3. 인기도 × 리뷰 점수 가중치
4. 재고 여부 최종 확인
