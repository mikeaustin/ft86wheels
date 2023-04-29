import React, { useEffect, useMemo, useState } from 'react';
import { apply, uniq, min, max } from 'rambda';

import { View, Text, Button } from '../../shared/components';

import productColors from '../../data/productColors';
import productFinishes from '../../data/productFinishes';

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
}

const Product = ({ title, image, colors, finishes, images, url, details }: ProductProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const sizes = uniq(details.map(detail => detail.size));
  const widths = uniq(details.map(detail => detail.width));
  const prices = uniq(details.map(detail => detail.price));
  const weights = uniq(details.map(detail => detail.weight));
  const loads = uniq(details.map(detail => detail.load));

  const minPrice = apply(Math.min, prices);
  const maxPrice = apply(Math.max, prices);
  const minWeight = apply(Math.min, weights).toFixed(1);
  const maxWeight = apply(Math.max, weights).toFixed(1);
  const minLoad = apply(Math.min, loads);
  const maxLoad = apply(Math.max, loads);

  // const priceWeight = details[0].price / (22 - details[0].weight);
  const priceWeight = details[0].price / (22 - details[0].weight);

  return (
    <View className={'notched'}>
      <View
        horizontal
        style={{ background: 'white', paddingLeft: 24, cursor: 'pointer' }}
        onClick={() => setIsExpanded(isExpanded => !isExpanded)}
      >
        <img width={130} src={`images/${image}`} alt={title} style={{ objectFit: 'contain' }} />
        <View flex style={{ padding: '16px 24px' }}>
          <Text style={{ fontSize: 24, fontFamily: 'Bebas Neue' }}>{title}</Text>
          <div style={{ height: 8 }} />
          <View horizontal style={{ display: 'flex', gap: 24 }}>
            <View>
              <Text style={{ fontSize: 11, color: '#808080', textTransform: 'uppercase' }}>Color</Text>
              <View horizontal style={{ gap: 8 }}>
                {colors.map(color => (
                  <Text key={color} style={{ fontSize: 14, fontWeight: 600 }}>{productColors.find(p => p.value === color)?.label}</Text>
                ))}
              </View>
            </View>
            <View>
              <Text style={{ fontSize: 11, color: '#808080', textTransform: 'uppercase' }}>Finishes</Text>
              <View horizontal style={{ gap: 8 }}>
                {finishes.map(finish => (
                  <Text key={finish} style={{ fontSize: 14, fontWeight: 600 }}>{productFinishes.find(p => p.value === finish)?.label}</Text>
                ))}
              </View>
            </View>
          </View>
          <div style={{ height: 8 }} />
          <View horizontal style={{ display: 'flex', gap: 24 }}>
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
            <View>
              <Text style={{ fontSize: 11, color: '#808080', textTransform: 'uppercase' }}>Load Rating</Text>
              <Text style={{ fontSize: 14, fontWeight: 600 }}>{minLoad} – {maxLoad} lbs</Text>
            </View>
          </View>
        </View>
        <div style={{ width: 1, background: '#343a40', margin: '8px 0' }} />
        <View style={{ padding: '16px 24px', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 11, color: '#808080', textTransform: 'uppercase', marginBottom: -2 }}>Min</Text>
          <Text style={{ fontFamily: 'Bebas Neue', fontSize: 24 }}>${minPrice}</Text>
          <View style={{ height: 6 }} />
          <Text style={{ fontSize: 11, color: '#808080', textTransform: 'uppercase', marginBottom: -2 }}>Max</Text>
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
                  <Text key={index} style={{ fontWeight: 600, lineHeight: 1.5 }}>{size}x{width.toFixed(1)} &nbsp; ET-{inset} &nbsp; {weight.toFixed(1)} lbs</Text>
                ))}
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <View horizontal style={{ padding: '16px 24px 4px 24px', borderTop: '1px solid #dee2e6', borderBottom: '1px solid #dee2e6' }}>
                <Text style={{ fontSize: 16, opacity: 0.5 }}>Available Colors</Text>
              </View>
              <View horizontal style={{ flex: 1, background: 'white', padding: '12px 0 12px 16px' }}>
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
            <View horizontal style={{ flex: 1, background: 'white', padding: '16px 0 16px 24px', gap: 24 }}>
              <a href={url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <Text style={{ fontWeight: 600, lineHeight: 1.5, color: '#339af0' }}>Vendor product page</Text>
              </a>
              <a href={`https://www.google.com/search?q=${title.split(' ').join('+')}+brz&tbm=isch`} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <Text style={{ fontWeight: 600, lineHeight: 1.5, color: '#339af0' }}>Google image search</Text>
              </a>
              <a href={`https://www.google.com/search?q=${title.split(' ').join('+')}+5x100&tbm=shop`} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <Text style={{ fontWeight: 600, lineHeight: 1.5, color: '#339af0' }}>Google shopping search</Text>
              </a>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default Product;
