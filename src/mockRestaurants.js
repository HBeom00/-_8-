const mockRestaurants = [
  {
    id: 1,
    storeName: '맛있는 김밥',
    image: ['https://example.com/kimbap1.jpg', 'https://example.com/kimbap2.jpg'],
    address: '서울시 강남구 역삼동 123-45',
    region: '서울',
    rating: 4,
    review: '김밥이 정말 맛있어요! 특히 참치김밥이 일품입니다.',
    createdAt: '2023-08-15T09:00:00Z'
  },
  {
    id: 2,
    storeName: '화덕 피자',
    image: ['https://example.com/pizza1.jpg'],
    address: '경기도 성남시 분당구 정자동 789-10',
    region: '경기',
    rating: 5,
    review: '화덕에서 직접 구운 피자 맛이 일품! 도우가 정말 쫄깃해요.',
    createdAt: '2023-08-14T14:30:00Z'
  },
  {
    id: 3,
    storeName: '해물파전 맛집',
    image: ['https://example.com/pajeon1.jpg', 'https://example.com/pajeon2.jpg', 'https://example.com/pajeon3.jpg'],
    address: '부산시 해운대구 우동 456-78',
    region: '부산',
    rating: 3,
    review: '해물이 듬뿍 들어간 파전이 맛있어요. 하지만 기름이 좀 많은 편이에요.',
    createdAt: '2023-08-13T18:45:00Z'
  }
];

export default mockRestaurants;
