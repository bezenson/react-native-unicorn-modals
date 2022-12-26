import { StyleSheet } from 'react-native';
import type { AlertButtonVariant, PredefinedSupportedThemes } from '../../../types';

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
  },
});

export function getTextStyle(theme: PredefinedSupportedThemes, variant?: AlertButtonVariant) {
  switch (variant) {
    case 'cancel': {
      return {
        color: theme === 'dark' ? '#888' : '#666',
      };
    }
    case 'destructive': {
      return {
        color: '#eb6868',
      };
    }
    default:
      return {
        color: '#4695eb',
      };
  }
}

export default styles;
