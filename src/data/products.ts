const products = [
  {
    title: 'Enkei Racing RS05RR',
    brand: 'enkei',
    image: 'ENKEI-RS05RR-GM-190-WEB.png',
    colors: ['gray', 'silver'],
    finishes: ['matte', 'satin'],
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
    title: 'Enkei Racing RPF1',
    brand: 'enkei',
    image: 'ENKEI-RPF1-BK-132-WEB.jpg',
    colors: ['black', 'silver', 'gold'],
    finishes: ['satin'],
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
    title: 'APEX ARC-8',
    brand: 'apex',
    image: '17-arc8-5120-smbk-profile1_8.png',
    colors: ['gray', 'silver', 'black', 'bronze'],
    finishes: ['satin', 'gloss'],
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
    finishes: ['satin', 'gloss'],
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
    finishes: ['matte'],
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
    finishes: ['satin', 'gloss'],
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
    finishes: ['matte', 'satin', 'gloss'],
    images: [
      { color: 'Flat Black', url: 'ssr_gtv01_black__16618.jpg' },
      { color: 'Glare Silver', url: 'ssr_gtv01_silver__46923.jpg' },
      // { color: 'Phantom Silver', url: 'F24231.jpg' },
    ],
    url: 'https://www.ssr-wheels.com/gtv01',
    details: [
      { size: 18, width: 8.5, inset: 44, weight: 21.5, price: 570 },
      // { size: 18, width: 8.5, inset: 40, price: 550 },
      // { size: 18, width: 9.5, inset: 35, price: 550 },
    ]
  },
  {
    brand: 'superspeed',
    title: 'SuperSpeed RF03RR',
    image: 'd87593_e66d44003f954fbf973b203e8bafa7ac~mv2.jpg',
    colors: ['black', 'gray', 'bronze'],
    finishes: ['matte', 'satin'],
    images: [
      { color: 'Matte Black', url: 'd87593_e66d44003f954fbf973b203e8bafa7ac~mv2.jpg' },
      { color: 'Matte Gunmetal', url: 'd87593_5d2ec00d82164effa9aa8e426a58f179~mv2.jpg' },
      { color: 'Satin Bronze', url: 'd87593_6de17010e2a845ddbbecdae892697553~mv2.jpg' },
    ],
    url: 'https://www.superspeedwheels.com/flowform-rf03rr',
    details: [
      { size: 18, width: 8.5, inset: 35, weight: 18.1, price: 276 },
      { size: 18, width: 9.5, inset: 42, weight: 18.7, price: 288 },
      { size: 18, width: 9.5, inset: 38, weight: 18.7, price: 288 },
    ]
  },
  {
    brand: 'fastwheels',
    title: 'FastWheels FC04',
    image: 'FC04-FC04-BLACK-METALLIC-(FLAT).jpg',
    colors: ['black', 'gray', 'bronze', 'gold'],
    finishes: ['matte', 'gloss'],
    images: [
      { color: 'Metallica Black', url: 'FC04-FC04-BLACK-METALLIC-(FLAT).jpg' },
      { color: 'Titanium', url: 'FC04-FC04-TITANIUM-(FLAT).jpg' },
      { color: 'Matte Bronze', url: 'FC04-FC04-MATTE-BRONZE-(FLAT).jpg' },
      { color: 'Gold', url: 'FC04-FC04-GOLD-(FLAT).jpg' },
    ],
    url: 'https://www.superspeedwheels.com/flowform-rf03rr',
    details: [
      { size: 18, width: 8, inset: 40, weight: 18.6, price: 290 },
      { size: 18, width: 9, inset: 40, weight: 19, price: 300 },
    ]
  },
  {
    brand: 'fastwheels',
    title: 'FastWheels FC08',
    image: 'FC08A-FC08A-BLACK-(FLAT).jpg',
    colors: ['black', 'bronze'],
    finishes: ['satin', 'gloss'],
    images: [
      { color: 'Gloss Black', url: 'FC08A-FC08A-BLACK-(FLAT).jpg' },
      { color: 'Bronzed Carbon', url: 'FC08A-FC08A-BRONZED-CARBON-(FLAT).jpg' },
    ],
    url: 'https://www.superspeedwheels.com/flowform-rf03rr',
    details: [
      { size: 18, width: 8, inset: 40, weight: 18.8, price: 270 },
    ]
  },
];

export default products;
