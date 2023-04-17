import React, { useEffect, useState } from 'react';
import { apply, uniq, min, max } from 'rambda';

import './App.css';

import products from './data/products';
import productColors from './data/productColors';

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

const Button = ({ title, selected, ...props }: any) => {
  return (
    <View
      style={{
        padding: '8px 16px',
        marginBottom: 1,
        cursor: 'pointer',
        color: !selected ? 'white' : undefined,
        fontWeight: selected ? 700 : undefined,
        background: selected ? 'white' : 'none',
        border: 'none',
      }}
      className="notched"
      {...props}
    >
      <Text>
        {title}
      </Text>
    </View>
  );
};

interface ProductProps {
  title: string;
  image: string;
  colors: string[];
  url: string;
  details: {
    size: number;
    width: number;
    inset: number;
    price: number;
  }[];
  expanded: boolean;
}

const Product = ({ title, image, colors, url, details }: ProductProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const widths = uniq(details.map(detail => detail.width));
  const prices = uniq(details.map(detail => detail.price));
  const minPrice = apply(Math.min, prices);
  const maxPrice = apply(Math.max, prices);

  return (
    <View className={'notched'}>
      <View
        horizontal
        style={{ background: 'white', paddingLeft: 16, cursor: 'pointer' }}
        onClick={() => setIsExpanded(isExpanded => !isExpanded)}
      >
        <img width={150} src={`images/${image}`} alt={title} style={{ objectFit: 'contain' }} />
        <View flex style={{ padding: '24px 16px' }}>
          <Text style={{ fontSize: 24, fontFamily: 'Bebas Neue' }}>{title}</Text>
          <div style={{ height: 8 }} />
          <View>
            <Text style={{ fontSize: 11, color: '#808080', textTransform: 'uppercase' }}>Colors</Text>
            <View horizontal style={{ gap: 8 }}>
              {colors.map(color => (
                <Text style={{ fontSize: 14, fontWeight: 600 }}>{productColors.find(p => p.value === color)?.label}</Text>
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
              <View horizontal style={{ gap: 8 }}>
                {widths.map(width => (
                  <Text style={{ fontSize: 14, fontWeight: 600 }}>{width}</Text>
                ))}
              </View>
            </View>
            <View>
              <Text style={{ fontSize: 11, color: '#808080', textTransform: 'uppercase' }}>Weight</Text>
              <Text style={{ fontSize: 14, fontWeight: 600 }}>18 – 20 lbs</Text>
            </View>
          </View>
        </View>
        <div style={{ width: 1, background: '#343a40', margin: '8px 0' }} />
        <View style={{ padding: '16px 24px', justifyContent: 'center' }}>
          <Text style={{ fontSize: 11, color: '#808080', textTransform: 'uppercase' }}>Min</Text>
          <Text style={{ fontFamily: 'Bebas Neue', fontSize: 24 }}>${minPrice}</Text>
          <View style={{ height: 8 }} />
          <Text style={{ fontSize: 11, color: '#808080', textTransform: 'uppercase' }}>Max</Text>
          <Text style={{ fontFamily: 'Bebas Neue', fontSize: 24 }}>${maxPrice}</Text>
        </View>
      </View>
      {isExpanded && (
        <View>
          <View horizontal style={{ background: '#f1f3f5' }}>
            <View>
              <View horizontal style={{ padding: '16px 24px 4px 24px', borderTop: '1px solid #dee2e6', borderBottom: '1px solid #dee2e6' }}>
                <Text style={{ fontSize: 16, opacity: 0.5 }}>Available Sizes</Text>
              </View>
              <View style={{ flex: 1, background: 'white', padding: '16px 0 16px 24px' }}>
                {details.map(details => (
                  <Text style={{ fontWeight: 600, lineHeight: 1.5 }}>{details.size}x{details.width} ET-{details.inset}</Text>
                ))}
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <View horizontal style={{ padding: '16px 24px 4px 24px', borderTop: '1px solid #dee2e6', borderBottom: '1px solid #dee2e6' }}>
                <Text style={{ fontSize: 16, opacity: 0.5 }}>Available Colors</Text>
              </View>
              <View horizontal style={{ flex: 1, background: 'white', padding: '4px 0 4px 12px' }}>
                <img width={100} src={`images/ENKEI-RS05RR-GM-190-WEB.png`} alt="Matte Gunmetal" style={{ objectFit: 'contain' }} />
                <img width={100} src={`images/ENKEI-RS05RR-SP-164-WEB.jpg`} alt="Sparkle Silver" style={{ objectFit: 'contain' }} />
              </View>
            </View>
          </View>
          <View style={{ background: '#f1f3f5' }}>
            <View horizontal style={{ padding: '16px 24px 4px 24px', borderTop: '1px solid #dee2e6', borderBottom: '1px solid #dee2e6' }}>
              <Text style={{ fontSize: 16, opacity: 0.5 }}>Resources</Text>
            </View>
            <View style={{ flex: 1, background: 'white', padding: '16px 0 16px 24px' }}>
              <a href={url} target="_blank" rel="noreferrer"><Text style={{ fontWeight: 600, lineHeight: 1.5 }}>Vendor product page</Text></a>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

interface FilterProps<T> {
  title: string;
  options: {
    label: string;
    value: T;
  }[];
  selectedOptions: T[];
  onSelect: (value: T[]) => void;
  onClear: () => void;
}

const Filter = <T,>({ title, options, selectedOptions, onSelect, onClear }: FilterProps<T>) => {
  const handleClear = () => {
    onClear();
  };

  const handleSelect = (value: T) => {
    const newSelectedOptions = new Set(selectedOptions).has(value)
      ? selectedOptions.filter(v => v !== value)
      : new Set([...selectedOptions, value]);

    onSelect([...newSelectedOptions]);
  };

  return (
    <View>
      <Text style={{ color: 'white', padding: '0px 8px 0 0px', fontFamily: 'Bebas Neue', fontSize: 24 }}>{title}</Text>
      <View style={{ height: 4 }} />
      <Button
        title="All"
        selected={selectedOptions.length === 0}
        onPointerDown={handleClear}
      />
      {options.map(option => (
        <Button
          title={option.label}
          selected={selectedOptions.includes(option.value)}
          onPointerDown={() => handleSelect(option.value)}
        />
      ))}
    </View>
  );
};

const productBrands = [
  { label: 'APEX Wheels', value: 'apex' },
  { label: 'Enkei Racing', value: 'enkei' },
  { label: 'KÖNIG', value: 'konig' },
  { label: 'O.Z. Racing', value: 'oz-racing' },
  { label: 'TSW', value: 'tsw' },
];

const productSizes = [
  { label: '17"', value: 17 },
  { label: '18"', value: 18 },
];

const productWidths = [
  { label: '8"', value: 8 },
  { label: '8.5"', value: 8.5 },
  { label: '9"', value: 9 },
  { label: '9.5"', value: 9.5 },
];

function App() {
  const [colors, setColors] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [sizes, setSizes] = useState<number[]>([]);
  const [widths, setWidths] = useState<number[]>([]);

  const [filteredProducts, setFilteredProducts] = useState<typeof products>(products);

  useEffect(() => {
    const filteredProducts = products
      .filter(product => sizes.length === 0 || sizes.some(size => product.details.map(d => d.size).includes(size)))
      .filter(product => widths.length === 0 || widths.some(width => product.details.map(d => d.width).includes(width)))
      .filter(product => colors.length === 0 || colors.some(color => product.colors.includes(color)))
      .filter(product => brands.length === 0 || brands.includes(product.brand));

    setFilteredProducts(filteredProducts);
  }, [sizes, widths, colors, brands]);

  return (
    <div className="App" style={{ display: 'flex', maxWidth: 1024, margin: 'auto', alignItems: 'flex-start' }}>
      <aside style={{ position: 'sticky', top: 0, width: 256, padding: 8, paddingRight: 0 }}>
        <Filter
          title="Size"
          options={productSizes}
          selectedOptions={sizes}
          onSelect={sizes => setSizes(sizes)}
          onClear={() => setSizes([])}
        />
        <View style={{ height: 8 }} />
        <Filter
          title="Width"
          options={productWidths}
          selectedOptions={widths}
          onSelect={brands => setWidths(brands)}
          onClear={() => setWidths([])}
        />
        <View style={{ height: 8 }} />
        <Filter
          title="Color"
          options={productColors}
          selectedOptions={colors}
          onSelect={colors => setColors(colors)}
          onClear={() => setColors([])}
        />
        <View style={{ height: 8 }} />
        <Filter
          title="Brand"
          options={productBrands}
          selectedOptions={brands}
          onSelect={brands => setBrands(brands)}
          onClear={() => setBrands([])}
        />
      </aside>
      <View flex as="main" style={{ padding: 8, rowGap: 8 }}>
        <View horizontal>
          <View flex style={{ justifyContent: 'center' }}>
            <Text style={{ color: 'white', fontWeight: 500 }}>
              {filteredProducts.length} products found
            </Text>
          </View>
          <select style={{ appearance: 'none', padding: '4px 16px', border: 'none', fontFamily: 'Exo' }} className="notched">
            <option>Sort by Price</option>
            <option>Sort by Weight</option>
          </select>
        </View>
        {filteredProducts.map((product, index) => (
          <Product
            key={product.title}
            title={product.title}
            image={product.image}
            colors={product.colors}
            url={product.url}
            details={product.details}
            expanded={index === 0}
          />
        ))}
      </View>
    </div>
  );
}

export default App;
