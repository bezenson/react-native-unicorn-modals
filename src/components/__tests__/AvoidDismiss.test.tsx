import React from 'react';
import { render, screen } from '@testing-library/react-native';

import AvoidDismiss from '../AvoidDismiss';

describe('AvoidDismiss', () => {
  it('should match snapshot', () => {
    render(<AvoidDismiss style={{ backgroundColor: 'red' }} />);
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
