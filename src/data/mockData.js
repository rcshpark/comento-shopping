export const mockTheme1Produdcts = [
    {
      id: 1,
      name: "비숑 블랙 머그잔",
      description:
        "쌀쌀한 날씨에 따뜻한 우유, 커피 한잔하기 좋은 블랙 & 화이트 비숑 머그잔입니다.",
      thumbnail:
        "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1.jpg",
    },
    {
      id: 3,
      name: "가열 보온 티코스터 온열 원터치 컵 받침대",
      description:
        "언제나 따뜻하게 최대 :2시간 동안 최대 60도의 온도로 따듯한 차를 즐길 수 있습니다.",
      thumbnail:
        "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product2.jpg",
    },
    {
      id: 10,
      name: "벨루즈까사 솜사탕 파스텔 머그 4종 세트",
      description:
        "솜사탕처럼 부드러: 쉐입에 스트라이프 조각이 더해져 심플하면서도 세련된 파스텔 컬러의 머그.",
      thumbnail:
        "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product3.jpg",
    },
  ];
 
  export const mockTheme2Produdcts = [
    {
      id: 7,
      name: "쏘쿨 냉감 이불",
      description: "점점 더워지는 여름, 소쿨 냉감 이불 덮고 주무세요",
      thumbnail:
        "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product4.jpg",
    },
    {
      id: 5,
      name: "리모컨 에어 서큘레이터",
      description: "자연 바람 그대로를 담은, 리모컨 에어 서큘레이터",
      thumbnail:
        "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product5.jpg",
    },
    {
      id: 6,
      name: "얼음 트레이 얼음틀 36구 4p + 아이스큐브",
      description:
        "여름에만 얼음을 이용하지 않는 것처럼, 이제는 냉동실에 한번 얼려서 사계절 내내 드세요",
      thumbnail:
        "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product6.jpg",
    },
  ];

  export const getProductDetail = (productId) => {
    return [...mockTheme1Produdcts, 
      ...mockTheme2Produdcts].find((product) => {
      return product.id === Number(productId);
    });
  };

  export const mockReviews = [
    {
      id: 1,
      username: "상냥한 어피치",
      score: "★★★★",
      createdDate: "2021.11.03",
      profileImage:
        "https://file.namu.moe/file/8de19da261c4f463a5778501b02e33c33df5aaefb9f393c33caf1186dfddf5d1",
      reviewText: "good",
    },
    {
      id: 2,
      username: "다정한 네오",
      score: "★★★★",
      createdDate: "2021.11.01",
      profileImage:
        "https://file.namu.moe/file/6a56f5cedbf8f10e53d81458886d2ebaa725df10498adb9faa301245b0ab7948f47c249caba1cbb15bb894472e29ba73ca56c9f817b26f4524b14902a2f2d6f9",
      reviewText: "good!",
    },
    {
      id: 3,
      username: "다정한 네오",
      score: "★★★★",
      createdDate: "2021.10.14",
      profileImage:
        "https://file.namu.moe/file/6a56f5cedbf8f10e53d81458886d2ebaa725df10498adb9faa301245b0ab7948f47c249caba1cbb15bb894472e29ba73ca56c9f817b26f4524b14902a2f2d6f9",
      reviewText: "good",
    },
  ];