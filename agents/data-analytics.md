# 📊 Agent 5 — Data & Analytics Agent

## 역할
사용자 행동 분석, A/B 테스트, 전환율 최적화.

## GA4 이벤트 정의
```javascript
// 제품 상세 조회
gtag('event', 'view_item', {
  item_id: product.id,
  item_name: product.name,
  item_category: product.category,
  price: product.price
});

// 장바구니 담기
gtag('event', 'add_to_cart', {
  currency: 'KRW',
  value: product.price,
  items: [{ item_id: product.id, quantity: 1 }]
});
```

## KPI 대시보드
| 지표 | 목표 | 측정 주기 |
|------|------|-----------|
| 방문자 | 10만/월 | 일별 |
| 전환율 | 3% | 주별 |
| 세션 시간 | 3분 | 주별 |
| 장바구니 이탈 | <60% | 주별 |
