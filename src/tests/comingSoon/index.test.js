import React from 'react';
import { render } from '@testing-library/react';
import ComingSoonPage from '../../pages/comingSoon/index';

describe('ComingSoon index test', () => {
  it('index page main text', async () => {
    const { getByText } = render(<ComingSoonPage text="COMING SOON!" />);
    expect(getByText('PRONTO!')).toBeDefined();
  });
});
