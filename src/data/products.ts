const products = [
  {
    brand: 'enkei',
    title: 'Enkei Racing RS05RR',
    image: 'ENKEI-RS05RR-GM-190-WEB.png',
    colors: ['gray', 'silver'],
    images: [
      { color: 'Matte Gunmetal', url: 'ENKEI-RS05RR-GM-190-WEB.png' },
      { color: 'Sparkle Silver', url: 'ENKEI-RS05RR-SP-164-WEB.jpg' },
    ],
    url: 'https://enkei.com/shop/wheels/racingrevolution/rs05rr',
    details: [
      { size: 18, width: 8.5, inset: 42, weight: 18.07, price: 530 },
      { size: 18, width: 8.5, inset: 50, weight: 18.07, price: 530 },
      { size: 18, width: 9, inset: 40, weight: 18.82, price: 550 },
      { size: 18, width: 9.5, inset: 43, weight: 19.29, price: 570 },
    ]
  },
  {
    brand: 'enkei',
    title: 'Enkei Racing RPF1',
    image: 'ENKEI-RPF1-BK-132-WEB.jpg',
    colors: ['black', 'silver', 'gold'],
    images: [
      { color: 'Black', url: 'ENKEI-RPF1-BK-132-WEB.jpg' },
      { color: 'Silver', url: 'ENKEI-RPF1-SP-144-WEB.jpg' },
      { color: 'Gold', url: 'ENKEI-RPF1-GG-120-WEB.jpg' },
    ],
    url: 'https://enkei.com/shop/wheels/racingrevolution/rs05rr',
    details: [
      { size: 17, width: 8, inset: 35, weight: 16.10, price: 285 },
      { size: 17, width: 8, inset: 45, weight: 16.05, price: 285 },
      { size: 18, width: 8, inset: 35, weight: 18, price: 350 },
      { size: 18, width: 8, inset: 45, weight: 17.95, price: 350 },
    ]
  },
  // {
  //   title: 'Enkei Racing GTC01RR', image: 'ENKEI-GTR-GM-186-WEB.jpg', colors: [0, 5], details: [
  //     { size: 18, width: 8.5, inset: 42, price: 550 },
  //     { size: 18, width: 9, inset: 40, price: 570 },
  //     { size: 18, width: 9.5, inset: 35, price: 600 },
  //   ]
  // },
  {
    brand: 'apex',
    title: 'APEX ARC-8',
    image: '17-arc8-5120-smbk-profile1_8.png',
    colors: ['gray', 'silver', 'black'],
    images: [
      { color: 'Anthracite', url: '17-arc-8-an-profile1-anglek-5x120_8.jpg' },
      { color: 'Race Silver', url: '17-arc-8-hs-profile1-anglek-5x120_8.jpg' },
      { color: 'Satin Black', url: '17-arc8-5120-smbk-profile1_8.png' },
      { color: 'Satin Bronze', url: '17-arc8-5120-sbz-profile1.png' },
    ],
    url: 'https://www.apexraceparts.com/store/wheels/arc-8-wheels.html',
    details: [
      // { size: 17, width: 8.5, inset: 42, weight: 17.2, price: 350 },
      { size: 17, width: 9, inset: 42, weight: 17.8, price: 300 },
      // { size: 17, width: 9.5, inset: 35, weight: 0, price: 570 },
    ]
  },
  {
    brand: 'oz-racing',
    title: 'O.Z. Racing Hyper GT HLT',
    image: '02_HyperGT-hlt-Star-Graphite-jpg-100x750-2.png',
    colors: ['gray', 'black'],
    images: [
      { color: 'Star Graphite', url: '02_HyperGT-hlt-Star-Graphite-jpg-100x750-2.png' },
      { color: 'Gloss Black', url: '02_HyperGT_HLT_GlossBlack.jpg' },
    ],
    url: 'https://www.ozracing.com/alloy-wheels/oz-racing/i-tech/hypergt-hlt',
    details: [
      // { size: 18, width: 7.5, inset: 35, weight: 19.2, price: 285 },
      { size: 18, width: 8, inset: 45, weight: 19.8, price: 385 },
    ]
  },
  {
    brand: 'konig',
    title: 'KONIG Rennform',
    image: 'kon-rennform-grey.png',
    colors: ['gray'],
    images: [
      { color: 'Matte Grey', url: 'kon-rennform-grey.png' },
    ],
    url: 'https://konigwheels.com/wheels/flow-formed-wheels/rennform',
    details: [
      { size: 18, width: 8, inset: 40, weight: 18.62, price: 250 },
      { size: 18, width: 9, inset: 38, weight: 19.17, price: 270 },
    ]
  },
  {
    brand: 'tsw',
    title: 'TSW Neptune',
    image: 'alloy-wheels-rims-tsw-neptune-5-lug-semi-gloss-black-std-700.jpg',
    colors: ['black', 'gray', 'bronze'],
    images: [
      { color: 'Battleship Gray', url: 'alloy-wheels-rims-tsw-neptune-5-lug-battleship-gray-std-700.jpg' },
      { color: 'Semigloss Black', url: 'alloy-wheels-rims-tsw-neptune-5-lug-semi-gloss-black-std-700.jpg' },
      { color: 'Bronze', url: 'alloy-wheels-rims-tsw-neptune-5-lug-bronze-std-700.jpg' },
    ],
    url: 'https://www.tsw.com/alloy_wheels_neptune.php',
    details: [
      { size: 18, width: 8, inset: 35, weight: 20, price: 330 },
      // { size: 18, width: 8.5, inset: 40, price: 550 },
      // { size: 18, width: 9.5, inset: 35, price: 550 },
    ]
  },
  {
    brand: 'ssr',
    title: 'SSR GTV01',
    image: 'ssr_gtv01_black__16618.jpg',
    colors: ['black', 'silver'],
    images: [
      { color: 'Flat Black', url: 'ssr_gtv01_black__16618.jpg' },
      { color: 'Glare Silver', url: 'ssr_gtv01_silver__46923.jpg' },
      { color: 'Phantom Silver', url: 'F24231.jpg' },
    ],
    url: 'https://www.ssr-wheels.com/gtv01',
    details: [
      { size: 18, width: 8.5, inset: 44, weight: 21.5, price: 570 },
      // { size: 18, width: 8.5, inset: 40, price: 550 },
      // { size: 18, width: 9.5, inset: 35, price: 550 },
    ]
  },
];

export default products;
