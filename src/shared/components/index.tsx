import React from 'react';

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

export {
  View,
  Text,
  Button,
};
