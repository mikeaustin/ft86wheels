const products = [
  {
    title: 'Enkei Racing RS05RR',
    brand: 'enkei',
    image: 'ENKEI-RS05RR-GM-190-WEB.png',
    colors: ['gray', 'silver'],
    finishes: ['matte', 'satin'],
    country: 'japan',
    details: [
      { size: 18, width: 8.5, inset: 42, weight: 18.07, price: 530, load: 1543, },
      { size: 18, width: 8.5, inset: 50, weight: 18.07, price: 530, load: 1543, },
      { size: 18, width: 9, inset: 40, weight: 18.82, price: 550, load: 1543, },
      { size: 18, width: 9.5, inset: 43, weight: 19.29, price: 570, load: 1543 },
    ],
    images: [
      { color: 'Matte Gunmetal', url: 'ENKEI-RS05RR-GM-190-WEB.png' },
      { color: 'Sparkle Silver', url: 'ENKEI-RS05RR-SP-164-WEB.jpg' },
    ],
    url: 'https://enkei.com/shop/wheels/racingrevolution/rs05rr',
  },
  {
    title: 'Enkei Racing RPF1',
    brand: 'enkei',
    image: 'ENKEI-RPF1-BK-132-WEB.jpg',
    colors: ['black', 'silver', 'gold'],
    finishes: ['satin'],
    details: [
      { size: 17, width: 8, inset: 35, weight: 16.10, price: 285, load: 1521 },
      { size: 17, width: 8, inset: 45, weight: 16.05, price: 285, load: 1521 },
      { size: 18, width: 8, inset: 35, weight: 18, price: 350, load: 1521 },
      { size: 18, width: 8, inset: 45, weight: 17.95, price: 350, load: 1521 },
    ],
    images: [
      { color: 'Black', url: 'ENKEI-RPF1-BK-132-WEB.jpg' },
      { color: 'Silver', url: 'ENKEI-RPF1-SP-144-WEB.jpg' },
      { color: 'Gold', url: 'ENKEI-RPF1-GG-120-WEB.jpg' },
    ],
    url: 'https://enkei.com/shop/wheels/racingrevolution/rs05rr',
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
    details: [
      // { size: 17, width: 8.5, inset: 42, weight: 17.2, price: 350 },
      { size: 17, width: 9, inset: 42, weight: 17.8, price: 300, load: 1450 },
      // { size: 17, width: 9.5, inset: 35, weight: 0, price: 570 },
    ],
    images: [
      { color: 'Anthracite', url: '17-arc-8-an-profile1-anglek-5x120_8.jpg' },
      { color: 'Race Silver', url: '17-arc-8-hs-profile1-anglek-5x120_8.jpg' },
      { color: 'Satin Black', url: '17-arc8-5120-smbk-profile1_8.png' },
      { color: 'Satin Bronze', url: '17-arc8-5120-sbz-profile1.png' },
    ],
    url: 'https://www.apexraceparts.com/store/wheels/arc-8-wheels.html',
  },
  {
    title: 'O.Z. Racing Hyper GT HLT',
    brand: 'oz-racing',
    image: '02_HyperGT-hlt-Star-Graphite-jpg-100x750-2.png',
    colors: ['gray', 'black'],
    finishes: ['satin', 'gloss'],
    details: [
      { size: 18, width: 8, inset: 35, weight: 20, price: 285, load: 1356 },
      { size: 18, width: 8, inset: 45, weight: 19.8, price: 385, load: 1356 },
    ],
    images: [
      { color: 'Star Graphite', url: '02_HyperGT-hlt-Star-Graphite-jpg-100x750-2.png' },
      { color: 'Gloss Black', url: '02_HyperGT_HLT_GlossBlack.jpg' },
    ],
    url: 'https://www.ozracing.com/alloy-wheels/oz-racing/i-tech/hypergt-hlt',
  },
  {
    title: 'KONIG Rennform',
    brand: 'konig',
    image: 'kon-rennform-grey.png',
    colors: ['gray'],
    finishes: ['matte'],
    details: [
      { size: 18, width: 8, inset: 40, weight: 18.62, price: 250, load: 1190 },
      { size: 18, width: 9, inset: 38, weight: 19.17, price: 270, load: 1190 },
    ],
    images: [
      { color: 'Matte Grey', url: 'kon-rennform-grey.png' },
    ],
    url: 'https://konigwheels.com/wheels/flow-formed-wheels/rennform',
  },
  // {
  //   title: 'KONIG Ultragram',
  //   brand: 'konig',
  //   image: 'ultra-bz-34angle.jpg',
  //   colors: ['gray', 'silver'],
  //   finishes: ['gloss'],
  //   details: [
  //     { size: 17, width: 8, inset: 38, weight: 17.59, price: 0, load: 1433 },
  //     { size: 18, width: 8.5, inset: 38, weight: 18.54, price: 0, load: 1543 },
  //     { size: 18, width: 9.5, inset: 36, weight: 18.76, price: 0, load: 1543 },
  //   ],
  //   images: [
  //     { color: 'Carbon Bronze Metallic', url: 'ultra-bz-34angle.jpg' },
  //     { color: 'Titanium Metallic', url: 'ultra-slv-angle-white.jpg' },


  //   ],
  //   url: 'https://konigwheels.com/wheels/flow-formed-wheels/rennform',
  // },
  {
    title: 'KONIG Hypergram',
    brand: 'konig',
    image: 'hypergram-mb-34.jpg',
    colors: ['gray', 'silver'],
    finishes: ['gloss'],
    details: [
      { size: 17, width: 8, inset: 40, weight: 16.55, price: 240, load: 1190 },
      { size: 18, width: 8.5, inset: 38, weight: 18.2, price: 260, load: 1190 },
    ],
    images: [
      { color: 'Matte Black', url: 'hypergram-mb-34.jpg' },
      { color: 'Metallic Carbon', url: 'hypergram-carbon.jpg' },
      { color: 'Matte Grey', url: 'Hypergram-1.jpg' },
      { color: 'Race Bronze', url: 'Hypergram-1_Bronze.jpg' },
    ],
    url: 'https://konigwheels.com/wheels/flow-formed-wheels/rennform',
  },
  {
    title: 'TSW Neptune',
    brand: 'tsw',
    image: 'alloy-wheels-rims-tsw-neptune-5-lug-semi-gloss-black-std-700.jpg',
    colors: ['black', 'gray', 'bronze'],
    finishes: ['satin', 'gloss'],
    details: [
      { size: 18, width: 8, inset: 35, weight: 20, price: 330, load: 1350 },
      // { size: 18, width: 8.5, inset: 40, price: 550 },
      // { size: 18, width: 9.5, inset: 35, price: 550 },
    ],
    images: [
      { color: 'Battleship Gray', url: 'alloy-wheels-rims-tsw-neptune-5-lug-battleship-gray-std-700.jpg' },
      { color: 'Semigloss Black', url: 'alloy-wheels-rims-tsw-neptune-5-lug-semi-gloss-black-std-700.jpg' },
      { color: 'Bronze', url: 'alloy-wheels-rims-tsw-neptune-5-lug-bronze-std-700.jpg' },
    ],
    url: 'https://www.tsw.com/alloy_wheels_neptune.php',
  },
  {
    title: 'SSR GTV01',
    brand: 'ssr',
    image: 'ssr_gtv01_black__16618.jpg',
    colors: ['black', 'silver'],
    finishes: ['matte', 'satin', 'gloss'],
    details: [
      { size: 18, width: 8.5, inset: 44, weight: 21.5, price: 570, load: 0 },
      // { size: 18, width: 8.5, inset: 40, price: 550 },
      // { size: 18, width: 9.5, inset: 35, price: 550 },
    ],
    images: [
      { color: 'Flat Black', url: 'ssr_gtv01_black__16618.jpg' },
      { color: 'Glare Silver', url: 'ssr_gtv01_silver__46923.jpg' },
      // { color: 'Phantom Silver', url: 'F24231.jpg' },
    ],
    url: 'https://www.ssr-wheels.com/gtv01',
  },
  {
    title: 'SuperSpeed RF03RR',
    brand: 'superspeed',
    image: 'd87593_e66d44003f954fbf973b203e8bafa7ac~mv2.jpg',
    colors: ['black', 'gray', 'bronze'],
    finishes: ['matte', 'satin'],
    details: [
      { size: 18, width: 8.5, inset: 35, weight: 18.1, price: 276, load: 1521 },
      { size: 18, width: 9.5, inset: 42, weight: 18.7, price: 288, load: 1521 },
      { size: 18, width: 9.5, inset: 38, weight: 18.7, price: 288, load: 1521 },
    ],
    images: [
      { color: 'Matte Black', url: 'd87593_e66d44003f954fbf973b203e8bafa7ac~mv2.jpg' },
      { color: 'Matte Gunmetal', url: 'd87593_5d2ec00d82164effa9aa8e426a58f179~mv2.jpg' },
      { color: 'Satin Bronze', url: 'd87593_6de17010e2a845ddbbecdae892697553~mv2.jpg' },
    ],
    url: 'https://www.superspeedwheels.com/flowform-rf03rr',
  },
  {
    title: 'FastWheels FC04',
    brand: 'fastwheels',
    image: 'FC04-FC04-BLACK-METALLIC-(FLAT).jpg',
    colors: ['black', 'gray', 'bronze', 'gold'],
    finishes: ['matte', 'gloss'],
    details: [
      { size: 18, width: 8, inset: 40, weight: 18.6, price: 290, load: 1521 },
      { size: 18, width: 9, inset: 40, weight: 19, price: 300, load: 1521 },
    ],
    images: [
      { color: 'Metallica Black', url: 'FC04-FC04-BLACK-METALLIC-(FLAT).jpg' },
      { color: 'Titanium', url: 'FC04-FC04-TITANIUM-(FLAT).jpg' },
      { color: 'Matte Bronze', url: 'FC04-FC04-MATTE-BRONZE-(FLAT).jpg' },
      { color: 'Gold', url: 'FC04-FC04-GOLD-(FLAT).jpg' },
    ],
    url: 'https://www.superspeedwheels.com/flowform-rf03rr',
  },
  {
    title: 'FastWheels FC08',
    brand: 'fastwheels',
    image: 'FC08A-FC08A-BLACK-(FLAT).jpg',
    colors: ['black', 'bronze'],
    finishes: ['satin', 'gloss'],
    details: [
      { size: 18, width: 8, inset: 40, weight: 18.8, price: 270, load: 1521 },
    ],
    images: [
      { color: 'Gloss Black', url: 'FC08A-FC08A-BLACK-(FLAT).jpg' },
      { color: 'Bronzed Carbon', url: 'FC08A-FC08A-BRONZED-CARBON-(FLAT).jpg' },
    ],
    url: 'https://www.superspeedwheels.com/flowform-rf03rr',
  },
  {
    title: 'WORK Emotion ZR10',
    brand: 'work',
    image: '5e2e9abe3eef4.jpg',
    colors: ['black', 'silver', 'bronze', 'gold'],
    finishes: ['satin', 'gloss'],
    details: [
      { size: 18, width: 7.5, inset: 47, weight: 100, price: 470, load: 0 },
      { size: 18, width: 7.5, inset: 53, weight: 100, price: 470, load: 0 },
      { size: 18, width: 8.5, inset: 47, weight: 100, price: 500, load: 0 },
    ],
    images: [
      { color: 'Black Diamond Lip Cut', url: '5e2e9abe3eef4.jpg' },
      { color: 'Titanium Diamond Lip Cut', url: '5e2e9b1439f8b.jpg' },
      { color: 'Glim Black Diamond Cut Rim', url: '5de5e11a885bf.jpg' },
      { color: 'Candy Imperial Gold', url: '5de5e45b11cfb.jpg' },
    ],
    url: 'https://www.workwheelsusa.com/product/emotion-zr10',
  },
  {
    title: 'WedsSport TC105X',
    brand: 'wedssport',
    image: 'pic-ws-tc105x-7-1.jpg',
    colors: ['gray'],
    finishes: ['gloss'],
    details: [
      { size: 18, width: 8, inset: 45, weight: 16.2, price: 550, load: 1543 },
      { size: 18, width: 8.5, inset: 43, weight: 16.42, price: 580, load: 1543 },
      { size: 18, width: 9, inset: 45, weight: 16.8, price: 590, load: 1543 },
      { size: 18, width: 9.5, inset: 45, weight: 17.5, price: 600, load: 1543 },
    ],
    images: [
      { color: 'EJ-Titan', url: 'pic-ws-tc105x-7-1.jpg' },
    ],
    url: 'https://www.weds.co.jp/english/wedssport/tc105x',
  },
  {
    title: 'WedsSport SA-75R',
    brand: 'wedssport',
    image: 'pic-ws-tc105x-7-1.jpg',
    colors: ['black'],
    finishes: ['matte'],
    details: [
      { size: 18, width: 8.5, inset: 45, weight: 19.5, price: 410, load: 0 },
      { size: 18, width: 9.5, inset: 45, weight: 20.3, price: 430, load: 0 },
    ],
    images: [
      { color: 'MAT Black', url: 'pic-ws-tc105x-7-1.jpg' },
    ],
    url: 'https://www.weds.co.jp/english/wedssport/sa75r',
  },
  {
    title: 'Titan 7 T-R10',
    brand: 'titan7',
    image: 'rt10-side-black_42d2cc46-7174-4383-8b92-179c1c88b143_1024x1024@2x.jpg',
    colors: ['black', 'gray', 'bronze', 'white'],
    finishes: ['satin', 'gloss'],
    details: [
      { size: 18, width: 9, inset: 47, weight: 18.8, price: 535, load: 1433 },
      { size: 18, width: 9.5, inset: 40, weight: 18.9, price: 565, load: 1521 },
    ],
    images: [
      { color: 'Machine Black', url: 'rt10-side-black_42d2cc46-7174-4383-8b92-179c1c88b143_1024x1024@2x.jpg' },
    ],
    url: 'https://titan-7.com/products/t-r10-forged-10-spoke-wheel?variant=39957411004504',
  },
];

export default products;
