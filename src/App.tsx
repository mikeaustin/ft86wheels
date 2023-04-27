import React, { useEffect, useMemo, useState } from 'react';
import { apply, uniq, min, max } from 'rambda';

import { View, Text, Button } from './shared/components';

import Product from './components/product/Product';

import './App.css';

import products from './data/products';
import productBrands from './data/productBrands';
import productSizes from './data/productSizes';
import productWidths from './data/productWidths';
import productColors from './data/productColors';
import productFinishes from './data/productFinishes';

interface ProductProps {
  title: string;
  image: string;
  colors: string[];
  finishes: string[];
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
    load: number;
    price: number;
  }[];
  filters: {
    sizesFilter: number[];
    widthsFilter: number[];
  };
}

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

function App() {
  const [colorsFilter, setColorsFilter] = useState<string[]>([]);
  const [finishesFilter, setFinishesFilter] = useState<string[]>([]);
  const [brandsFilter, setBrandsFilter] = useState<string[]>([]);
  const [sizesFilter, setSizesFilter] = useState<number[]>([]);
  const [widthsFilter, setWidthsFilter] = useState<number[]>([]);
  const [sortFilter, setSortFilter] = useState<string>('price');

  const [filteredProducts, setFilteredProducts] = useState<typeof products>(products);

  const filters = useMemo(() => ({
    sizesFilter,
    widthsFilter,
  }), [sizesFilter, widthsFilter]);

  useEffect(() => {
    const filteredProducts = products
      .filter(product => sizesFilter.length === 0 || sizesFilter.some(size => product.details.map(d => d.size).includes(size)))
      .filter(product => widthsFilter.length === 0 || widthsFilter.some(width => product.details.map(d => d.width).includes(width)))
      .filter(product => colorsFilter.length === 0 || colorsFilter.some(color => product.colors.includes(color)))
      .filter(product => finishesFilter.length === 0 || finishesFilter.some(finish => product.finishes.includes(finish)))
      .filter(product => brandsFilter.length === 0 || brandsFilter.includes(product.brand))
      .sort((a, b) => sortFilter === 'price' ? a.details[0].price - b.details[0].price : a.details[0].weight - b.details[0].weight);

    setFilteredProducts(filteredProducts);
  }, [sizesFilter, widthsFilter, colorsFilter, finishesFilter, brandsFilter, sortFilter]);

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
        <Filter
          title="Finish"
          options={productFinishes}
          selectedValues={finishesFilter}
          onSelect={finishes => setFinishesFilter(finishes)}
          onClear={() => setFinishesFilter([])}
        />
        <View style={{ height: 16 }} />
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
              finishes={product.finishes}
              images={product.images}
              url={product.url}
              details={product.details}
              filters={filters}
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
