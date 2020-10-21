import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import i18n from '../../i18n';
import Footer from './Footer';

describe('Footer test', () => {
  it('Footer main text', async () => {
    const { getByText } = render(
      <I18nextProvider i18n={i18n}>
        <Footer />
      </I18nextProvider>
    );
    expect(getByText('With ❤ for Solutions Needed Team')).toBeDefined();
  });
});