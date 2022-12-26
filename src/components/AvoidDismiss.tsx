import type { PropsWithChildren } from 'react';
import React from 'react';
import type { TouchableOpacityProps } from 'react-native';
import { TouchableOpacity } from 'react-native';

interface AvoidDismissProps {
  style?: TouchableOpacityProps['style'];
}

const AvoidDismiss: React.FC<PropsWithChildren<AvoidDismissProps>> = ({ children, style }) => {
  return (
    <TouchableOpacity activeOpacity={1} style={style}>
      {children}
    </TouchableOpacity>
  );
};

export default AvoidDismiss;
