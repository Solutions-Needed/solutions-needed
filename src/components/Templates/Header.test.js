import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import Header from './Header';
import i18n from '../../i18n';

describe('Header title test', () => {
  it('index page header title', async () => {
    const { getByText } = render(
      <I18nextProvider i18n={i18n}>
        <Header />
      </I18nextProvider>
    );
    expect(getByText('¿A qué problema buscas solución?')).toBeDefined();
  });
});
