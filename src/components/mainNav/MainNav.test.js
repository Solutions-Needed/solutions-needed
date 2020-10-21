import React from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import MainNav from '.';

describe('Should find the text MainNav', () => {
  it('looks for text in links', async () => {
    const { getByText } = render(
      <I18nextProvider i18n={i18n}>
        <MainNav />
      </I18nextProvider>
    );
    expect(getByText('Código de conducta')).toBeDefined();
    expect(getByText('Acerca del proyecto')).toBeDefined();
  });
});

describe('Test the logo', () => {
  it('look for LogoImg src', async () => {
    const { getByAltText } = render(<MainNav LogoImg="Logo" />);
    expect(getByAltText('Logo')).toHaveAttribute(
      'src',
      '/assets/images/SolutionsNeededLogo.png'
    );
  });
});
