import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './../App';

test('buttons render', () => {
  const { getByTestId } = rtl.render(<App />);
  getByTestId('next');
  getByTestId('previous');
});