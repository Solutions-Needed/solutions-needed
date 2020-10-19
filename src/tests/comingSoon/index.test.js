import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import ComingSoonPage from '../../pages/comingSoon/index';
import i18n from '../../i18n';

describe('ComingSoon index test', () => {
  it('index page main text', async () => {
    const { getByText } = render(
      <I18nextProvider i18n={i18n}>
        <ComingSoonPage />
      </I18nextProvider>
    );
    expect(getByText('Pronto!')).toBeDefined();
  });
});
