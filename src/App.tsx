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
  images: {
    color: string;
    url: string;
  }[];
  details: {
    size: number;
    width: number;
    inset: number;
    weight: number;
    price: number;
  }[];
  expanded: boolean;
}

const Product = ({ title, image, colors, images, url, details }: ProductProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const sizes = uniq(details.map(detail => detail.size));
  const widths = uniq(details.map(detail => detail.width));
  const prices = uniq(details.map(detail => detail.price));
  const weights = uniq(details.map(detail => detail.weight));
  const minPrice = apply(Math.min, prices);
  const maxPrice = apply(Math.max, prices);
  const minWeight = apply(Math.min, weights);
  const maxWeight = apply(Math.max, weights);

  return (
    <View className={'notched'}>
      <View
        horizontal
        style={{ background: 'white', paddingLeft: 24, cursor: 'pointer' }}
        onClick={() => setIsExpanded(isExpanded => !isExpanded)}
      >
        <img width={130} src={`images/${image}`} alt={title} style={{ objectFit: 'contain' }} />
        <View flex style={{ padding: '24px 24px' }}>
          <Text style={{ fontSize: 24, fontFamily: 'Bebas Neue' }}>{title}</Text>
          <div style={{ height: 8 }} />
          <View>
            <Text style={{ fontSize: 11, color: '#808080', textTransform: 'uppercase' }}>Color</Text>
            <View horizontal style={{ gap: 8 }}>
              {colors.map(color => (
                <Text key={color} style={{ fontSize: 14, fontWeight: 600 }}>{productColors.find(p => p.value === color)?.label}</Text>
              ))}
            </View>
          </View>
          <div style={{ height: 8 }} />
          <View horizontal style={{ display: 'flex', gap: 16 }}>
            <View>
              <Text style={{ fontSize: 11, color: '#808080', textTransform: 'uppercase' }}>Size</Text>
              <View horizontal style={{ gap: 8 }}>
                {sizes.map(size => (
                  <Text key={size} style={{ fontSize: 14, fontWeight: 600 }}>{size}"</Text>
                ))}
              </View>
            </View>
            <View>
              <Text style={{ fontSize: 11, color: '#808080', textTransform: 'uppercase' }}>Width</Text>
              <View horizontal style={{ gap: 8 }}>
                {widths.map(width => (
                  <Text key={width} style={{ fontSize: 14, fontWeight: 600 }}>{width}"</Text>
                ))}
              </View>
            </View>
            <View>
              <Text style={{ fontSize: 11, color: '#808080', textTransform: 'uppercase' }}>Weight</Text>
              <Text style={{ fontSize: 14, fontWeight: 600 }}>{minWeight} – {maxWeight} lbs</Text>
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
            <View style={{ width: 180 }}>
              <View horizontal style={{ padding: '16px 24px 4px 24px', borderTop: '1px solid #dee2e6', borderBottom: '1px solid #dee2e6' }}>
                <Text style={{ fontSize: 16, opacity: 0.5 }}>Available Sizes</Text>
              </View>
              <View style={{ flex: 1, background: 'white', padding: '16px 0 16px 24px' }}>
                {details.map(({ size, width, inset, weight }, index) => (
                  <Text key={index} style={{ fontWeight: 600, lineHeight: 1.5 }}>{size}x{width} ET-{inset} &nbsp; {weight} lbs</Text>
                ))}
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <View horizontal style={{ padding: '16px 24px 4px 24px', borderTop: '1px solid #dee2e6', borderBottom: '1px solid #dee2e6' }}>
                <Text style={{ fontSize: 16, opacity: 0.5 }}>Available Colors</Text>
              </View>
              <View horizontal style={{ flex: 1, background: 'white', padding: '4px 0 4px 16px' }}>
                {images.map(({ color, url }, index) => (
                  <View key={index} style={{ position: 'relative', padding: 4 }}>
                    <img width={90} src={`images/${url}`} alt={color} title={color} style={{ objectFit: 'contain' }} />
                  </View>
                ))}
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
  selectedValues: T[];
  onSelect: (value: T[]) => void;
  onClear: () => void;
}

const Filter = <T,>({ title, options, selectedValues, onSelect, onClear }: FilterProps<T>) => {
  const handleClear = () => {
    onClear();
  };

  const handleSelect = (value: T) => {
    const newSelectedOptions = new Set(selectedValues).has(value)
      ? selectedValues.filter(v => v !== value)
      : new Set([...selectedValues, value]);

    onSelect([...newSelectedOptions]);
  };

  return (
    <View>
      <Text style={{ color: 'white', padding: '0px 8px 0 0px', fontFamily: 'Bebas Neue', fontSize: 24, margin: '-5px 0' }}>{title}</Text>
      <View style={{ height: 10 }} />
      <Button
        title="All"
        selected={selectedValues.length === 0}
        onPointerDown={handleClear}
      />
      {options.map(option => (
        <Button
          key={option.value}
          title={option.label}
          selected={selectedValues.includes(option.value)}
          onPointerDown={() => handleSelect(option.value)}
        />
      ))}
    </View>
  );
};

const productFinishes = [
  { label: 'Matte', value: 'matte' },
  { label: 'Satin', value: 'satin' },
  { label: 'Gloss', value: 'gloss' },
];

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
  const [colorsFilter, setColorsFilter] = useState<string[]>([]);
  const [finishesFilter, setFinishesFilter] = useState<string[]>([]);
  const [brandsFilter, setBrandsFilter] = useState<string[]>([]);
  const [sizesFilter, setSizesFilter] = useState<number[]>([]);
  const [widthsFilter, setWidthsFilter] = useState<number[]>([]);
  const [sortFilter, setSortFilter] = useState<string>('price');

  const [filteredProducts, setFilteredProducts] = useState<typeof products>(products);

  useEffect(() => {
    const filteredProducts = products
      .filter(product => sizesFilter.length === 0 || sizesFilter.some(size => product.details.map(d => d.size).includes(size)))
      .filter(product => widthsFilter.length === 0 || widthsFilter.some(width => product.details.map(d => d.width).includes(width)))
      .filter(product => colorsFilter.length === 0 || colorsFilter.some(color => product.colors.includes(color)))
      .filter(product => brandsFilter.length === 0 || brandsFilter.includes(product.brand))
      .sort((a, b) => sortFilter === 'price' ? a.details[0].price - b.details[0].price : a.details[0].weight - b.details[0].weight);

    setFilteredProducts(filteredProducts);
  }, [sizesFilter, widthsFilter, colorsFilter, brandsFilter, sortFilter]);

  return (
    <div className="App" style={{ display: 'flex', maxWidth: 1024, margin: 'auto', alignItems: 'flex-start' }}>
      <aside style={{ position: 'sticky', top: 0, width: 256, padding: '16px 0 16px 8px' }}>
        <Filter
          title="Size"
          options={productSizes}
          selectedValues={sizesFilter}
          onSelect={sizes => setSizesFilter(sizes)}
          onClear={() => setSizesFilter([])}
        />
        <View style={{ height: 16 }} />
        <Filter
          title="Width"
          options={productWidths}
          selectedValues={widthsFilter}
          onSelect={brands => setWidthsFilter(brands)}
          onClear={() => setWidthsFilter([])}
        />
        <View style={{ height: 16 }} />
        <Filter
          title="Color"
          options={productColors}
          selectedValues={colorsFilter}
          onSelect={colors => setColorsFilter(colors)}
          onClear={() => setColorsFilter([])}
        />
        <View style={{ height: 16 }} />
        {/* <Filter
          title="Finish"
          options={productFinishes}
          selectedValues={finishesFilter}
          onSelect={finishes => setFinishesFilter(finishes)}
          onClear={() => setFinishesFilter([])}
        />
        <View style={{ height: 16 }} /> */}
        <Filter
          title="Brand"
          options={productBrands}
          selectedValues={brandsFilter}
          onSelect={brands => setBrandsFilter(brands)}
          onClear={() => setBrandsFilter([])}
        />
      </aside>
      <View flex as="main" style={{ padding: '16px 8px', gap: 8 }}>
        <View horizontal style={{ gap: 8 }}>
          <View flex style={{ justifyContent: 'center' }}>
            <Text style={{ fontFamily: 'Bebas Neue', fontSize: 24, color: 'white', fontWeight: 500, margin: '-5px 0' }}>
              {filteredProducts.length} products found
            </Text>
          </View>
          {/* <View>
            <Button title="Expand All" />
          </View> */}
          <select
            style={{ appearance: 'none', outline: 'none', padding: '3px 16px', marginBottom: -1, border: 'none', fontFamily: 'Exo', fontWeight: 600 }}
            className="notched"
            onChange={(e) => setSortFilter(e.target.value)}
          >
            <option value="price">Sort by Price</option>
            <option value="weight">Sort by Weight</option>
          </select>
        </View>
        <View style={{ gap: 8 }}>
          {filteredProducts.map((product, index) => (
            <Product
              key={product.title}
              title={product.title}
              image={product.image}
              colors={product.colors}
              images={product.images}
              url={product.url}
              details={product.details}
              expanded={index === 0}
            />
          ))}
        </View>
      </View>
      {/* <View style={{ position: 'fixed', inset: 0, alignItems: 'flex-end' }}>
        <View style={{ position: 'absolute', inset: 0, background: 'hsla(0, 0%, 0%, 0.5)' }} />
        <View style={{ height: '100%', justifyContent: 'center', background: 'white', boxShadow: '0 0 32px hsla(0, 0%, 0%, 0.5), 0 0 0 1px hsla(0, 0%, 0%, 0.05)', zIndex: 1 }}>
          <img width={600} src="/images/ENKEI-RS05RR-GM-190-WEB.png" style={{ objectFit: 'contain' }} />
        </View>
      </View> */}
    </div>
  );
}

export default App;
