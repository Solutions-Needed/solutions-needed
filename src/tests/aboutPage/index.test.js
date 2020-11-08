import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { render, cleanup } from '@testing-library/react';
import AboutPage from '../../pages/aboutPage/index';
import i18n from '../../i18n';

afterEach(cleanup);

describe('About Page index test', () => {
  it('index page main title', async () => {
    const { getByText } = render(
      <I18nextProvider i18n={i18n}>
        <AboutPage />
      </I18nextProvider>
    );
    expect(getByText('Acerca del proyecto')).toBeDefined();
    expect(getByText('Enlace al repositorio del proyecto')).toBeDefined();
  });
});
