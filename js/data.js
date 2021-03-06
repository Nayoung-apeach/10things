const qnaList = [
  {
    q: '1. 나는 매운 음식을 좋아한다?',
    a: [
      { answer: 'a. 엽떡 착한맛 물없이 못 먹는다.', score: 2 },
      { answer: 'b. 불닭 물 없이 먹는다.', score: 4 },
      { answer: 'c. 엽떡 매운맛은 기본이다.', score: 6 }
    ]
  },
  {
    q: '2. 혼밥을 할 때면 주로 먹는 것은?',
    a: [
      { answer: 'a. 얼큰한 국물류', score: 6 },
      { answer: 'b. 고급진 회', score: 4 },
      { answer: 'c. 한국인은 밥심!', score: 7 },
      { answer: 'd. 신속정확한 중식', score: 2 },
      { answer: 'e. 커피, 과자 만한게 없지', score: 1 }
    ]
  },
  {
    q: '3. 무슨 종류의 음식을 선호하는가?',
    a: [
      { answer: 'a. 야들야들한 면종류의 음식', score: 4 },
      { answer: 'b. 달달구리한 디저트', score: 2 },
      { answer: 'c. 간편하고 맛있게 먹을 수 있는 길거리 음식', score: 5 },
      { answer: 'd. 뜨끈하고, 얼큰한 국물음식', score: 7 },
      { answer: 'e. 한 메뉴만 시켜도 반찬이 많이 나오는 백반정식', score: 6 }
    ]
  },
  {
    q: '4. 하와이안 피자를 좋아하는가?',
    a: [
      { answer: 'a. 있으면 먹고 없으면 안 먹고', score: 4 },
      { answer: 'b. 느끼한건 딱 질색! 차라리 김치를 올려먹는다.', score: 6 },
      { answer: 'c. 좋아한다.', score: 2 },
      { answer: 'd. 환장한다.', score: 1 }
    ]
  },
  {
    q: '5. 내가 가장 잘 만드는 요리는?',
    a: [
      { answer: 'a. 김치볶음밥', score: 6 },
      { answer: 'b. 팬케이크', score: 4 },
      { answer: 'c. 시식을 가장 잘한다.', score: 3 },
      { answer: 'd. 라면', score: 5 }
    ]
  },
  {
    q: '6. 평생 이 음식만 먹어야 한다면?',
    a: [
      { answer: 'a. 밥! 무조건 탄수화물!', score: 6 },
      { answer: 'b. 고기를 먹어야 힘이 나지', score: 4 },
      { answer: 'c. 빵은 못버려...♥', score: 2 }
    ]
  },
  {
    q: '7. 냉면을 먹을 때 뭐 먼저?',
    a: [
      { answer: 'a. 식초, 겨자 뿌리기', score: 6 },
      { answer: 'b. 면 자르기', score: 2 },
      { answer: 'c. 달걀 먹기', score: 4 }
    ]
  },
  {
    q: '8. 나는 음식의 간을?',
    a: [
      { answer: 'a. 맵게한다.', score: 6 },
      { answer: 'b. 짜고 맵게한다.', score: 7 },
      { answer: 'c. 짜게한다.', score: 5 },
      { answer: 'd. 있는데로 먹는다', score: 4 },
      { answer: 'e. 달게한다.', score: 3 },
      { answer: 'f. 싱겁게', score: 2 },
      { answer: 'g. 단짠으로', score: 1 }
    ]
  },
  {
    q: '9. 내가 주로 먹는 음식의 가격대는?',
    a: [
      { answer: 'a. 3만원정도', score: 7 },
      { answer: 'b. 만원정도', score: 6 },
      { answer: 'c. 오천원에서 만원정도', score: 4 },
      { answer: 'd. 삼천원에서 오천원정도', score: 2 },
      { answer: 'e. 천원정도', score: 1 }
    ]
  },
  {
    q: '10. 나는 민트초코를 좋아한다?',
    a: [
      { answer: 'a. 극혐한다.', score: 4 },
      { answer: 'b. 있으면 먹고 없으면 안 먹는다.', score: 2 },
      { answer: 'c. 찾아다닌다.', score: 3 },
      { answer: 'd. 손이 잘 안 간다.', score: 5 },
      { answer: 'e. SOSO', score: 6 },
      { answer: 'f. 먹어본 적 없다.', score: 1 }
    ]
  }
]

const infoList = [
  {
    from: 10,
    to: 20,
    mLeft: '아무거나파',
    name: '국밥',
    desc: '이것도 좋고 저것도 좋은 당신은 착한 사람. 하지만 밥 먹을 때 고민을 가장 많이 합니다. 복잡한 세상 편하게 삽시다 우리 안 그래도 고민거리 많잖아요? 그래서 한번에 와앙 먹을 수 있는 국밥 추천드립니다.'
  },
  {
    from: 21,
    to: 30,
    mLeft: '디저트파',
    name: '커피',
    desc: '당신은 쓴 커피마자 잘 마시는 이 시대의 리더입니다. 커피의 진정한 맛을 모르는 사람들은 아마 당신의 진짜 매력을 아직 모르고 있을 것 입니다. 세상을 향해 당신의 매력을 맘껏 뽐내 주세요. 오늘의 추천 음식은 당신과 같은 커피입니다.'
  },
  {
    from: 31,
    to: 40,
    mLeft: '달달한음식파',
    name: '슈크림빵',
    desc: '당신은 퐁실퐁실 단 디저트를 좋아하는 귀여운 사람입니다. 입맛과 같이 성격도 달달하여 스윗하다는 소리를 듣습니다. 쓰디쓴 이 세상에서 당신과 같은 사람을 만나는 사람은 참 행운일 겁니다. 그런 의미로 바삭한 꼬끄 안에 달달한 생크림이 일품인 슈 추천드립니다.'
  },
  {
    from: 41,
    to: 50,
    mLeft: '면요리파',
    name: '라면',
    desc: '당신은 뜨끈한 국물을 좋아하는 열정의 아이콘입니다. 게다가 모난 부분없이 부드러워 친구들이 항상 많습니다. 모든 일이 잘풀리는 당신을 위한 추천메뉴는 끊임없이 들어가는 호로록 라면입니다.'
  },
  {
    from: 51,
    to: 60,
    mLeft: '간식파',
    name: '핫도그',
    desc: '당신은 매인요리보다는 사이드 매뉴를 더 좋아하는 독특한 사람입니다. 그런 당신의 매력으로 주변의 사람들에게 힘을 줍니다. 항상 모든 이들에게 힘을 주는 핫한 당신 오늘의 메뉴로는 핫한 핫도그 어떠신가요?'
  },
  {
    from: 61,
    to: 70,
    mLeft: '한식파',
    name: '부대찌개',
    desc: '당신은 한식을 좋아하는 한식파의 사람입니다. 편식을 잘 하지 않으면 누구에게나 사랑받는 사람입니다. 부대찌개같이 많은 매력을 보유하고 계십니다. 그런 의미에서 오늘 저녁으로는 맛있는 부대찌개 추천드립니다!!'
  }
]