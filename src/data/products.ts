const products = [
  {
    title: 'Enkei Racing RS05RR',
    brand: 'enkei',
    colors: ['gray', 'silver'],
    finishes: ['matte', 'satin'],
    country: 'japan',
    tests: ['JWL', 'VIA'],
    details: [
      { size: 18, width: 8.5, inset: 42, weight: 18.07, price: 530, load: 1543, },
      { size: 18, width: 8.5, inset: 50, weight: 18.07, price: 530, load: 1543, },
      { size: 18, width: 9, inset: 40, weight: 18.82, price: 550, load: 1543, },
      { size: 18, width: 9.5, inset: 43, weight: 19.29, price: 570, load: 1543 },
    ],
    images: [
      { color: 'Matte Gunmetal', url: 'ENKEI-RS05RR-GM-190-WEB.jpg' },
      { color: 'Sparkle Silver', url: 'ENKEI-RS05RR-SP-164-WEB.jpg' },
    ],
    url: 'https://enkei.com/shop/wheels/racingrevolution/rs05rr',
  },
  {
    title: 'Enkei Racing RPF1',
    brand: 'enkei',
    colors: ['black', 'silver', 'gold'],
    finishes: ['satin'],
    country: 'japan',
    tests: ['JWL', 'VIA'],
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
  {
    title: 'Enkei Tuning T6S',
    brand: 'enkei',
    colors: ['black', 'silver', 'gold'],
    finishes: ['matte', 'gloss'],
    country: 'thailand',
    tests: ['JWL', 'VIA'],
    details: [
      { size: 17, width: 8, inset: 45, weight: 20.55, price: 240, load: 0 },
      { size: 17, width: 9, inset: 45, weight: 22.45, price: 250, load: 0 },
      { size: 18, width: 8, inset: 45, weight: 21.5, price: 260, load: 0 },
      { size: 18, width: 8.5, inset: 45, weight: 21.9, price: 270, load: 0 },
      { size: 18, width: 9.5, inset: 45, weight: 22.7, price: 280, load: 0 },
    ],
    images: [
      { color: 'Matte Black', url: 'ENKEI-TOCLIP-T6S-BK-198-SM143.jpg' },
      { color: 'Matte Silver', url: 'ENKEI-TOCLIP-T6S-SP-188-SM137.jpg' },
      { color: 'Gold', url: 'ENKEI-TOCLIP-T6S-GG-160-SM119.jpg' },
    ],
    url: 'https://enkei.com/shop/wheels/tuning/t6s',
  },
  {
    title: 'Enkei Tuning TSP6',
    brand: 'enkei',
    colors: ['gray', 'silver'],
    finishes: ['satin', 'gloss'],
    // country: 'thailand',
    tests: ['JWL', 'VIA'],
    details: [
      { size: 17, width: 8, inset: 45, weight: 19.95, price: 240, load: 0 },
      { size: 17, width: 9, inset: 45, weight: 21.7, price: 250, load: 0 },
      { size: 18, width: 8, inset: 45, weight: 20.15, price: 260, load: 0 },
      { size: 18, width: 8.5, inset: 45, weight: 20.95, price: 270, load: 0 },
      { size: 18, width: 9.5, inset: 45, weight: 22.55, price: 280, load: 0 },
    ],
    images: [
      { color: 'Gunmetal', url: 'ENKEI-TOCLIP-TSP6-GM-03.jpg' },
      { color: 'Hyper Silver', url: 'ENKEI-TOCLIP-TSP6-HS-16.jpg' },
    ],
    url: 'https://enkei.com/shop/wheels/tuning/tsp6-2',
  },
  {
    title: 'Enkei Racing GTC01RR',
    brand: 'enkei',
    colors: ['gray'],
    finishes: ['matte'],
    country: 'japan',
    tests: ['JWL', 'VIA'],
    details: [
      { size: 18, width: 8.5, inset: 42, weight: 19.4, load: 1540, price: 550 },
      { size: 18, width: 9, inset: 40, weight: 19.5, load: 1540, price: 560 },
      { size: 18, width: 9.5, inset: 35, weight: 19.6, load: 1540, price: 570 },
    ],
    images: [
      { color: 'Matte Gunmetal', url: 'ENKEI-GTR-GM-186-WEB.jpg' },
    ],
    url: 'https://enkei.com/shop/wheels/racingrevolution/gtc01rr',
  },
  {
    title: 'Enkei Tuning Raijin',
    brand: 'enkei',
    colors: ['black', 'gray', 'bronze', 'silver'],
    finishes: ['matte', 'gloss'],
    country: 'japan',
    tests: ['JWL', 'VIA'],
    details: [
      { size: 18, width: 8, inset: 35, weight: 21, load: 0, price: 250 },
      { size: 18, width: 8, inset: 45, weight: 21, load: 0, price: 250 },
      { size: 18, width: 8.5, inset: 45, weight: 21.15, load: 0, price: 260 },
      { size: 18, width: 9.5, inset: 45, weight: 21.4, load: 0, price: 270 },
    ],
    images: [
      { color: 'Black', url: 'ENKEI-TOCLIP-RAIJIN-BK-122-SM105-1.jpg' },
      { color: 'Matte Gunmetal', url: 'raijin-black-flat-cap-sold-separately-1.jpg' },
      { color: 'Bronze', url: 'ENKEI-BRONZE-Raijin-02.jpg' },
      { color: 'Silver', url: 'ENKEI-TOCLIP-RAIJIN-HS-174-SM125-1.jpg' },
    ],
    url: 'https://enkei.com/shop/wheels/tuning/raijin',
  },
  {
    title: 'APEX ARC-8',
    brand: 'apex',
    colors: ['gray', 'silver', 'black', 'bronze'],
    finishes: ['satin', 'gloss'],
    country: 'china',
    tests: ['JWL', 'VIA'],
    notes: 'https://www.2addicts.com/forums/showpost.php?p=24068643&postcount=14',
    details: [
      // { size: 17, width: 8.5, inset: 42, weight: 17.2, price: 350 },
      { size: 17, width: 9, inset: 42, weight: 17.8, price: 300, load: 1450 },
      // { size: 17, width: 9.5, inset: 35, weight: 0, price: 570 },
    ],
    images: [
      { color: 'Anthracite', url: '17-arc-8-an-profile1-anglek-5x120_8.jpg' },
      { color: 'Race Silver', url: '17-arc-8-hs-profile1-anglek-5x120_8.jpg' },
      { color: 'Satin Black', url: '17-arc8-5120-smbk-profile1_8.jpg' },
      { color: 'Satin Bronze', url: '17-arc8-5120-sbz-profile1.jpg' },
    ],
    url: 'https://www.apexraceparts.com/store/wheels/arc-8-wheels.html',
  },
  {
    title: 'O.Z. Racing Hyper GT HLT',
    brand: 'oz-racing',
    colors: ['black', 'gray'],
    finishes: ['satin', 'gloss'],
    country: 'italy',
    tests: ['TÜV'],
    details: [
      { size: 18, width: 8, inset: 35, weight: 20, price: 285, load: 1356 },
      { size: 18, width: 8, inset: 45, weight: 19.8, price: 385, load: 1356 },
    ],
    images: [
      { color: 'Star Graphite', url: '02_HyperGT-hlt-Star-Graphite-jpg-100x750-2.jpg' },
      { color: 'Gloss Black', url: '02_HyperGT_HLT_GlossBlack.jpg' },
    ],
    url: 'https://www.ozracing.com/alloy-wheels/oz-racing/i-tech/hypergt-hlt',
  },
  {
    title: 'O.Z. Racing Alleggerita HLT',
    brand: 'oz-racing',
    colors: ['black', 'bronze', 'gold', 'silver', 'white'],
    finishes: ['matte', 'satin', 'gloss'],
    country: 'italy',
    tests: ['TÜV'],
    details: [
      { size: 17, width: 8, inset: 48, weight: 15.4, price: 440, load: 0 },
      { size: 18, width: 8, inset: 48, weight: 17.4, price: 460, load: 0 },
    ],
    images: [
      { color: 'Matte Black', url: '02_alleggerita-hlt-matt-black-jpg 1000x750.jpg' },
      { color: 'Matte Bronze', url: '02_alleggerita-hlt-matt-bronze-jpg 1000x750.jpg' },
      { color: 'Race Gold', url: '02_alleggerita-hlt-race-gold-jpg 1000x750.jpg' },
      { color: 'Star Silver', url: '02-alleggerita-hlt-star-silver-jpg-1000x750-2.jpg' },
      { color: 'Race White', url: '02_alleggerita-hlt-race-white-jpg 1000x750.jpg' },
    ],
    url: 'https://www.ozracing.com/alloy-wheels/oz-racing/i-tech/hypergt-hlt',
  },
  {
    title: 'KONIG Rennform',
    brand: 'konig',
    colors: ['gray'],
    finishes: ['matte'],
    country: 'china',
    details: [
      { size: 18, width: 8, inset: 40, weight: 18.62, price: 250, load: 1190 },
      { size: 18, width: 9, inset: 38, weight: 19.17, price: 270, load: 1190 },
    ],
    images: [
      { color: 'Matte Grey', url: 'kon-rennform-grey.jpg' },
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
    colors: ['gray', 'silver', 'bronze'],
    finishes: ['gloss'],
    country: 'china',
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
    title: 'KONIG Hexaform',
    brand: 'konig',
    colors: ['black', 'bronze', 'white'],
    finishes: ['matte', 'gloss'],
    country: 'china',
    details: [
      { size: 17, width: 8, inset: 40, weight: 17.2, price: 250, load: 1543 },
      { size: 17, width: 9, inset: 40, weight: 18.52, price: 260, load: 1543 },
      { size: 18, width: 8.5, inset: 40, weight: 19.12, price: 290, load: 1543 },
    ],
    images: [
      { color: 'Matte Black', url: 'hex-dmg.png.jpg' },
      { color: 'Matte Bronze', url: 'hex-bro.png.jpg' },
      { color: 'Gloss White', url: 'hexaform-w-34.png.jpg' },
    ],
    url: 'https://konigwheels.com/wheels/flow-formed-wheels/rennform',
  },
  {
    title: 'TSW Neptune',
    brand: 'tsw',
    colors: ['black', 'gray', 'bronze'],
    finishes: ['satin', 'gloss'],
    country: 'china',
    details: [
      { size: 18, width: 8, inset: 35, weight: 20, price: 330, load: 1350 },
      // { size: 18, width: 8.5, inset: 40, price: 550 },
      // { size: 18, width: 9.5, inset: 35, price: 550 },
    ],
    images: [
      { color: 'Semigloss Black', url: 'alloy-wheels-rims-tsw-neptune-5-lug-semi-gloss-black-std-700.jpg' },
      { color: 'Battleship Gray', url: 'alloy-wheels-rims-tsw-neptune-5-lug-battleship-gray-std-700.jpg' },
      { color: 'Bronze', url: 'alloy-wheels-rims-tsw-neptune-5-lug-bronze-std-700.jpg' },
    ],
    url: 'https://www.tsw.com/alloy_wheels_neptune.php',
  },
  {
    title: 'TSW Imatra',
    brand: 'tsw',
    colors: ['black', 'gray'],
    finishes: ['matte', 'satin'],
    country: 'china',
    details: [
      { size: 18, width: 8.5, inset: 38, weight: 18, price: 310, load: 1375 },
      { size: 18, width: 9.5, inset: 38, weight: 20, price: 320, load: 1375 },
    ],
    images: [
      { color: 'Matte Black', url: 'TSW IMATRA 18X9.5 5LUG ET25 DARK MATTE BLK-std-700.jpg' },
      { color: 'Satin Dark Blue', url: 'TSW IMATRA 18X9.5 5LUG ET25 DARK MATTE BLUE-std-700.jpg' },
    ],
    url: 'https://www.tsw.com/alloy_wheels_imatra.php',
  },
  {
    title: 'SSR GTV01',
    brand: 'ssr',
    colors: ['black', 'silver'],
    finishes: ['matte', 'satin'],
    country: 'japan',
    tests: ['JWL', 'VIA'],
    details: [
      { size: 18, width: 8.5, inset: 44, weight: 21.5, price: 570, load: 0 },
    ],
    images: [
      { color: 'Flat Black', url: 'ssr_gtv01_black__16618.jpg' },
      { color: 'Glare Silver', url: 'ssr_gtv01_silver__46923.jpg' },
    ],
    url: 'https://www.ssr-wheels.com/gtv01',
  },
  {
    title: 'SSR GTV02',
    brand: 'ssr',
    colors: ['black', 'silver'],
    finishes: ['matte', 'satin'],
    country: 'japan',
    tests: ['JWL', 'VIA'],
    details: [
      { size: 18, width: 8.5, inset: 44, weight: 21.2, price: 520, load: 0 },
    ],
    images: [
      { color: 'Flat Black', url: 'gtv02_fb_640x480.jpg' },
      { color: 'Glare Silver', url: 'gtv02_ps_640x480.jpg' },
    ],
    url: 'https://www.ssr-wheels.com/gtv01',
  },
  {
    title: 'SuperSpeed RF03RR',
    brand: 'superspeed',
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
    title: 'SuperSpeed RF06RR',
    brand: 'superspeed',
    colors: ['black', 'bronze'],
    finishes: ['matte', 'satin'],
    details: [
      { size: 17, width: 9, inset: 38, weight: 18.5, price: 290, load: 1520 },
      { size: 18, width: 8.5, inset: 40, weight: 18.9, price: 320, load: 1520 },
      { size: 18, width: 9.5, inset: 38, weight: 19.4, price: 350, load: 1520 },
      { size: 18, width: 9.5, inset: 42, weight: 19.4, price: 350, load: 1520 },
    ],
    images: [
      { color: 'Matte Black', url: 'd87593_82fb6b7fa64b40aca6049fd6cacc28fc~mv2.jpg' },
      { color: 'Satin Bronze', url: 'd87593_5241bd5b64814c7895dade34998d5689~mv2.jpg' },
    ],
    url: 'https://www.superspeedwheels.com/flowform-rf06rr',
    tests: ['jwl', 'via']
  },
  {
    title: 'FastWheels FC04',
    brand: 'fastwheels',
    colors: ['black', 'gray', 'bronze', 'gold'],
    finishes: ['matte', 'gloss'],
    country: 'china',
    details: [
      { size: 18, width: 8, inset: 40, weight: 18.6, price: 290, load: 1576 },
      { size: 18, width: 9, inset: 40, weight: 19, price: 300, load: 1576 },
    ],
    images: [
      { color: 'Metallic Black', url: 'FC04-FC04-BLACK-METALLIC-(FLAT).jpg' },
      { color: 'Titanium', url: 'FC04-FC04-TITANIUM-(FLAT).jpg' },
      { color: 'Matte Bronze', url: 'FC04-FC04-MATTE-BRONZE-(FLAT).jpg' },
      { color: 'Gold', url: 'FC04-FC04-GOLD-(FLAT).jpg' },
    ],
    url: 'https://www.superspeedwheels.com/flowform-rf03rr',
  },
  {
    title: 'FastWheels FC08',
    brand: 'fastwheels',
    colors: ['black', 'bronze'],
    finishes: ['satin', 'gloss'],
    country: 'china',
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
    title: 'FastWheels FC09',
    brand: 'fastwheels',
    colors: ['black'],
    finishes: ['gloss'],
    country: 'china',
    details: [
      { size: 18, width: 8, inset: 35, weight: 19.8, price: 270, load: 1594 },
      { size: 18, width: 8, inset: 45, weight: 19.8, price: 270, load: 1594 },
    ],
    images: [
      { color: 'Metallic Gunmetal', url: 'FC09A-FC09A-(FLAT)-GUNMETAL-METALLIC.jpg' },
    ],
    url: 'https://fastco.ca/fast-wheels/alloy-wheels/stylefinish?carmake=Scion&caryear=2013&carmodel=FR-S&carsubmodel=Base&caroptions=S&stylefinish=FC09%7CGM%2B%252f%2BMET',
  },
  {
    title: 'WORK Emotion ZR10',
    brand: 'work',
    colors: ['black', 'silver', 'bronze', 'gold'],
    finishes: ['satin', 'gloss'],
    country: 'japan',
    tests: ['JWL', 'VIA'],
    details: [
      { size: 18, width: 7.5, inset: 47, weight: 21.1, price: 470, load: 0 },
      { size: 18, width: 7.5, inset: 53, weight: 21.1, price: 470, load: 0 },
      { size: 18, width: 8.5, inset: 47, weight: 21.3, price: 500, load: 0 },
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
    title: 'WORK Emotion T7R',
    brand: 'work',
    colors: ['gray', 'bronze', 'white'],
    finishes: ['matte', 'gloss'],
    country: 'japan',
    tests: ['JWL', 'VIA'],
    details: [
      { size: 18, width: 7.5, inset: 47, weight: 22.1, price: 470, load: 0 },
      { size: 18, width: 7.5, inset: 53, weight: 22.1, price: 470, load: 0 },
      { size: 18, width: 8.5, inset: 45, weight: 22.3, price: 500, load: 0 },
    ],
    images: [
      { color: 'Matte Gunmetal', url: 'T7R-2P-MGM-2.jpg' },
      { color: 'Matte Bronze', url: 'T7R-2P-AHG-2.jpg' },
      { color: 'White', url: 'T7R-2P-SR-WHT-2.jpg' },
    ],
    url: 'https://www.workwheelsusa.com/product/emotion-t7r-2p',
  },
  {
    title: 'WedsSport TC105X',
    brand: 'wedssport',
    colors: ['gray'],
    finishes: ['gloss'],
    country: 'japan',
    tests: ['JWL', 'VIA'],
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
    colors: ['black', 'bronze'],
    finishes: ['matte', 'gloss'],
    country: 'japan',
    tests: ['JWL', 'VIA'],
    details: [
      { size: 18, width: 8.5, inset: 45, weight: 19.5, price: 410, load: 0 },
      { size: 18, width: 9.5, inset: 45, weight: 20.3, price: 430, load: 0 },
    ],
    images: [
      { color: 'Matte Black', url: 'SA75R_1885_MATBLACK.jpg' },
      { color: 'Hyper Black', url: 'SA75R_1875_HBC.jpg' },
      { color: 'EJ Bronze', url: 'SA75R_1885_EJB.jpg' },
    ],
    url: 'https://www.weds.co.jp/english/wedssport/sa75r',
  },
  {
    title: 'Titan 7 T-R10',
    brand: 'titan-7',
    colors: ['black', 'gray', 'bronze', 'white'],
    finishes: ['satin', 'gloss'],
    country: 'china',
    details: [
      { size: 18, width: 9, inset: 47, weight: 18.8, price: 535, load: 1433 },
      { size: 18, width: 9.5, inset: 40, weight: 18.9, price: 565, load: 1521 },
    ],
    images: [
      { color: 'Machine Black', url: 'rt10-side-black_42d2cc46-7174-4383-8b92-179c1c88b143_1024x1024@2x.jpg' },
    ],
    url: 'https://titan-7.com/products/t-r10-forged-10-spoke-wheel?variant=39957411004504',
  },
  {
    title: 'Titan 7 T-D6',
    brand: 'titan-7',
    colors: ['black', 'bronze'],
    finishes: ['satin', 'gloss'],
    country: 'china',
    details: [
      { size: 17, width: 9, inset: 47, weight: 30, price: 535, load: 0 },
      { size: 18, width: 9, inset: 47, weight: 30, price: 565, load: 1521 },
    ],
    images: [
      { color: 'Machine Black', url: 'rt10-side-black_42d2cc46-7174-4383-8b92-179c1c88b143_1024x1024@2x.jpg' },
    ],
    url: 'https://titan-7.com/products/t-r10-forged-10-spoke-wheel?variant=39957411004504',
  },
  {
    title: 'Advan RG-4',
    brand: 'advan',
    colors: ['black', 'bronze', 'silver', 'white'],
    finishes: ['satin', 'gloss'],
    country: 'japan',
    tests: ['JWL', 'VIA'],
    details: [
      { size: 18, width: 8, inset: 47, weight: 17.6, price: 650, load: 0 },
      { size: 18, width: 8.5, inset: 44, weight: 17.8, price: 660, load: 0 },
      { size: 18, width: 9.5, inset: 45, weight: 18, price: 680, load: 0 },
    ],
    images: [
      { color: 'Semi Gloss Black', url: 'ADVAN-RG-4-SEMI-GLOSS-BLACK_640x640.jpg' },
      { color: 'Racing Copper', url: 'ADVAN-RG-4-COPPER-BRONZE_640x640.jpg' },
      { color: 'Racing Hyper Black', url: 'ADVAN-RG-4-HYPER-BLACK_640x640.jpg' },
      { color: 'Racing White Metallica', url: 'ADVAN-RG-4-RACING-WHITE_640x640.jpg' },
    ],
    url: 'https://www.yokohama.com.au/wheels/ADRG4',
  },
  {
    title: 'Advan RS-3',
    brand: 'advan',
    colors: ['black', 'bronze', 'silver', 'white'],
    finishes: ['satin', 'gloss'],
    country: 'japan',
    tests: ['JWL', 'VIA'],
    details: [
      { size: 18, width: 8, inset: 48, weight: 17, price: 660, load: 0 },
      { size: 18, width: 8, inset: 37, weight: 17, price: 660, load: 0 },
      { size: 18, width: 8.5, inset: 47, weight: 18, price: 660, load: 0 },
      { size: 18, width: 9, inset: 50, weight: 18.2, price: 670, load: 0 },
      { size: 18, width: 9.5, inset: 45, weight: 18.4, price: 670, load: 0 },
    ],
    images: [
      { color: 'Black Gun Metallic', url: 'Advan_RSIII_BGR.jpg' },
      { color: 'Racing Hyper Black', url: 'Advan_RSIII_HBR.jpg' },
      { color: 'Umber Bronze Metallic', url: 'Advan_RSIII_UBR.jpg' },
      { color: 'Racing White Metallica', url: 'Advan_RSIII_WMR.jpg' },
    ],
    url: 'https://www.yokohama.com.au/wheels/ADRS3',
  },
  {
    title: 'ESR AP6',
    brand: 'esr',
    colors: ['black', 'bronze', 'silver', 'white'],
    finishes: ['matte', 'satin', 'gloss'],
    details: [
      { size: 18, width: 8.5, inset: 30, weight: 29, price: 340, load: 1587 },
      { size: 18, width: 9.5, inset: 35, weight: 29, price: 347, load: 1587 },
    ],
    images: [
      { color: 'Matte Black Gloss Lip', url: 'esr-ap7-wheel-5lug-matte-black-gloss-black-lip-19x11-2000_600x.jpg' },
      { color: 'Matte Bronze Machine Lip', url: 'esr-ap7-wheel-5lug-bronze-machine-lip-19x11-2000_600x.jpg' },
      { color: 'Hyper Silver Machine Lip', url: 'esr-ap7-wheel-5lug-silver-machined-lip-19x11-2000_600x.jpg' },
      { color: 'Gloss White', url: 'esr-apx6-wheel-5lug-gloss-white-18x10-5-2000_600x.jpg' },
    ],
    url: 'https://esrwheels.com/collections/apex-series/products/ap7-matte-black-gloss-black-lip',
  },
  {
    title: 'ESR AP8',
    brand: 'esr',
    colors: ['black', 'bronze', 'silver'],
    finishes: ['matte', 'satin', 'gloss'],
    details: [
      { size: 18, width: 8.5, inset: 30, weight: 29, price: 340, load: 1750 },
      { size: 18, width: 9.5, inset: 35, weight: 29, price: 347, load: 1750 },
    ],
    images: [
      { color: 'Matte Black Gloss Lip', url: 'esr-ap8-wheel-5lug-matte-black-gloss-black-lip-19x11-2000_600x.jpg' },
      { color: 'Matte Bronze Machine Lip', url: 'esr-ap8-wheel-5lug-bronze-machine-lip-19x11-2000_600x.jpg' },
      { color: 'Hyper Silver Machine Lip', url: 'esr-ap8-wheel-5lug-silver-machined-lip-19x11-2000_1_4db3f379-b8bb-4a40-8690-894627341917_600x.jpg' },
    ],
    url: 'https://esrwheels.com/collections/apex-series/products/ap8',
  },
  {
    title: 'ForgeStar F14',
    brand: 'forgestar',
    colors: ['black'],
    finishes: ['satin'],
    // country: 'usa',
    details: [
      { size: 18, width: 8.5, inset: 0, weight: 18.5, price: 480, load: 0 },
    ],
    images: [
      { color: 'Gloss Black', url: 'forgestar-f14-wheel-5lug-gloss-black-19x11.jpg' },
    ],
    url: 'https://www.forgestar.com/wheels/performance/f14',
  },
  {
    title: 'HRE FF15',
    brand: 'hre',
    colors: ['black', 'silver'],
    finishes: ['matte', 'gloss'],
    country: 'japan',
    tests: ['JWL', 'VIA', 'TÜV'],
    details: [
      { size: 18, width: 9, inset: 40, weight: 19.6, price: 550, load: 0 },
    ],
    images: [
      { color: 'Tarmac', url: '142981859506b51edec816d5cb8bafe7b121ee189c.jpg' },
      { color: 'Liquid Silver', url: '1429818902f1415c2b6b3b459a3784dc83fa6394ac.jpg' },
    ],
    url: 'https://www.hrewheels.com/wheels/hre-flowform/ff15',
  },
  {
    title: 'HRE FF01',
    brand: 'hre',
    colors: ['black', 'silver'],
    finishes: ['matte', 'gloss'],
    country: 'japan',
    tests: ['JWL', 'VIA', 'TÜV'],
    details: [
      { size: 18, width: 9, inset: 40, weight: 21.6, price: 500, load: 0 },
    ],
    images: [
      { color: 'Tarmac', url: '1491432120599581cf711b33c7cca1bae71795a1e6.jpg' },
      { color: 'Liquid Silver', url: '149143211536e91c493938a143dc0213680f7b138e.jpg' },
    ],
    url: 'https://www.hrewheels.com/wheels/hre-flowform/ff01',
  },
  {
    title: 'NEUSPEED RSe11R',
    brand: 'neuspeed',
    colors: ['black', 'gray'],
    finishes: ['gloss'],
    // country: 'japan',
    // tests: ['JWL', 'VIA', 'TÜV'],
    details: [
      { size: 18, width: 8.5, inset: 34, weight: 19.7, price: 360, load: 1543 },
    ],
    images: [
      { color: 'Gloss Black', url: '8811217B_c7545522-e96b-4573-8a25-00a0c8d03cfb_799x599.jpg.jpg' },
      { color: 'Gloss Gun Metalic', url: '8811217G_799x599.jpg.jpg' },
    ],
    url: 'https://neuspeedrswheels.com/collections/vw-audi/products/neuspeed-rse11r-88112',
  },
];

export default products;
