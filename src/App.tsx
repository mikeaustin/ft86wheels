import React from 'react';

import './App.css';

const wheelColors = [
  'Matte Gunmetal',
  'Silver',
  'Anthracite',
  'Black',
  'Gray',
];

const wheels = [
  {
    title: 'Enkei Racing RS05RR', image: 'ENKEI-RS05RR-GM-190-WEB.png', colors: [0, 1], details: [
      { size: 18, width: 8.5, inset: 42, price: 500 },
      { size: 18, width: 8.5, inset: 50, weight: 18.12, price: 500 },
      { size: 18, width: 9, inset: 40, price: 500 },
      { size: 18, width: 9.5, inset: 43, price: 500 },
    ]
  },
  {
    title: 'Enkei Racing GTC01RR', image: 'ENKEI-GTR-GM-186-WEB.jpg', colors: [0], details: [
      { size: 18, width: 8.5, inset: 42, price: 550 },
      { size: 18, width: 9, inset: 40, price: 550 },
      { size: 18, width: 9.5, inset: 35, price: 550 },
    ]
  },
  {
    title: 'APEX ARC-8', image: '18-arc8-5120-smbk-profile1_3.png', colors: [2, 1, 3], details: [
      { size: 18, width: 8.5, inset: 42, price: 550 },
      { size: 18, width: 9, inset: 40, price: 550 },
      { size: 18, width: 9.5, inset: 35, price: 550 },
    ]
  },
  {
    title: 'O.Z. Racing Hyper GT HLT', image: '02_HyperGT-hlt-Star-Graphite-jpg-100x750-2.png', colors: [4, 3], details: [
      { size: 18, width: 8.5, inset: 42, price: 550 },
      { size: 18, width: 9, inset: 40, price: 550 },
      { size: 18, width: 9.5, inset: 35, price: 550 },
    ]
  },
];

const View = ({
  flex,
  horizontal,
  children,
  style,
  as: Component = 'div',
  ...props
}: any) => {
  return (
    <Component style={{ display: 'flex', flexDirection: horizontal ? 'row' : 'column', flex: flex ? 1 : undefined, ...style }} {...props}>
      {children}
    </Component>
  );
};

const Text = ({ children, ...props }: any) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
};

const Product = ({ title, image, colors, expanded }: any) => {
  return (
    <View className={'notched'}>
      <View horizontal style={{ background: 'white', paddingLeft: 16 }}>
        <img width={150} src={`images/${image}`} />
        <View flex style={{ padding: '24px 16px' }}>
          <Text style={{ fontSize: 24, fontFamily: 'Bebas Neue' }}>{title}</Text>
          <div style={{ height: 8 }} />
          <View>
            <Text style={{ fontSize: 11, color: '#808080', textTransform: 'uppercase' }}>Colors</Text>
            <View horizontal style={{ gap: 8 }}>
              {colors.map((color: any) => (
                <Text style={{ fontSize: 14, fontWeight: 600 }}>{wheelColors[color]}</Text>
              ))}
            </View>
          </View>
          <div style={{ height: 8 }} />
          <View horizontal style={{ display: 'flex', gap: 16 }}>
            <View>
              <Text style={{ fontSize: 11, color: '#808080', textTransform: 'uppercase' }}>Size</Text>
              <Text style={{ fontSize: 14, fontWeight: 600 }}>18"</Text>
            </View>
            <View>
              <Text style={{ fontSize: 11, color: '#808080', textTransform: 'uppercase' }}>Width</Text>
              <Text style={{ fontSize: 14, fontWeight: 600 }}>8.5&nbsp;&nbsp;9.0&nbsp;&nbsp;9.5</Text>
            </View>
            <View>
              <Text style={{ fontSize: 11, color: '#808080', textTransform: 'uppercase' }}>Weight</Text>
              <Text style={{ fontSize: 14, fontWeight: 600 }}>18 – 20 lbs</Text>
            </View>
          </View>
        </View>
        <div style={{ width: 1, background: '#343a40', margin: '8px 0' }} />
        <View style={{ padding: '16px 24px', justifyContent: 'center' }}>
          <Text style={{ fontFamily: 'Bebas Neue', fontSize: 24 }}>$500</Text>
        </View>
      </View>
      {expanded && (
        <View horizontal style={{ background: '#f1f3f5' }}>
          <View>
            <View horizontal style={{ padding: '16px 24px 4px 24px', borderTop: '1px solid #dee2e6', borderBottom: '1px solid #dee2e6' }}>
              <Text style={{ fontSize: 16, opacity: 0.5 }}>Available Sizes</Text>
            </View>
            <View style={{ flex: 1, background: 'white', padding: '16px 0 16px 24px' }}>
              <Text style={{ fontWeight: 600, lineHeight: 1.5 }}>18x8.5 ET-42</Text>
              <Text style={{ fontWeight: 600, lineHeight: 1.5 }}>18x8.5 ET-50</Text>
              <Text style={{ fontWeight: 600, lineHeight: 1.5 }}>18x9.0 ET-40</Text>
              <Text style={{ fontWeight: 600, lineHeight: 1.5 }}>18x9.5 ET-43</Text>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <View horizontal style={{ padding: '16px 24px 4px 24px', borderTop: '1px solid #dee2e6', borderBottom: '1px solid #dee2e6' }}>
              <Text style={{ fontSize: 16, opacity: 0.5 }}>Available Colors</Text>
            </View>
            <View horizontal style={{ flex: 1, background: 'white', padding: '4px 0 4px 12px' }}>
              <img width={100} src={`images/ENKEI-RS05RR-GM-189-WEB.jpg`} alt="Matte Gunmetal" style={{ objectFit: 'contain' }} />
              <img width={100} src={`images/ENKEI-RS05RR-SP-163-WEB.jpg`} alt="Sparkle Silver" style={{ objectFit: 'contain' }} />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

function App() {
  return (
    <div className="App" style={{ display: 'flex', maxWidth: 1000, margin: 'auto' }}>
      <aside style={{ position: 'sticky', width: 256, padding: 8, paddingRight: 0 }}>
        <Text style={{ color: 'white', padding: '0px 8px 0 0px', fontFamily: 'Bebas Neue', fontSize: 24 }}>Color</Text>
        <View style={{ height: 8 }} />
        <Text style={{ color: 'black', fontWeight: 700, padding: '8px 16px', background: 'white' }} className="notched">All</Text>
        <Text style={{ color: 'white', padding: '8px 16px' }}>Black</Text>
        <Text style={{ color: 'white', padding: '8px 16px' }}>Gray</Text>
        <Text style={{ color: 'white', padding: '8px 16px' }}>Silver</Text>
        <View style={{ height: 8 }} />
        <Text style={{ color: 'white', padding: '8px 8px 0 0px', fontFamily: 'Bebas Neue', fontSize: 24 }}>Size</Text>
        <View style={{ height: 8 }} />
        <Text style={{ color: 'white', padding: '8px 16px' }}>All</Text>
        <Text style={{ color: 'white', padding: '8px 16px' }}>17"</Text>
        <Text style={{ color: 'black', fontWeight: 700, padding: '8px 16px', background: 'white' }} className="notched">18"</Text>
        <View style={{ height: 8 }} />
        <Text style={{ color: 'white', padding: '8px 8px 0 0px', fontFamily: 'Bebas Neue', fontSize: 24 }}>Width</Text>
        <View style={{ height: 8 }} />
        <Text style={{ color: 'white', padding: '8px 16px' }}>8.0"</Text>
        <Text style={{ color: 'black', fontWeight: 700, padding: '8px 16px', background: 'white' }} className="notched">8.5"</Text>
        <Text style={{ color: 'white', padding: '8px 16px' }}>9.0"</Text>
      </aside>
      <View flex as="main" style={{ padding: 8, rowGap: 8 }}>
        {/* <View horizontal>
          <select style={{ appearance: 'none', padding: '8px 16px' }} className="notched">
            <option>Sort by Price</option>
            <option>Sort by Weight</option>
          </select>
        </View> */}
        {wheels.map((product, index) => (
          <Product title={product.title} image={product.image} colors={product.colors} expanded={index === 0} />
        ))}
      </View>
    </div>
  );
}

export default App;
