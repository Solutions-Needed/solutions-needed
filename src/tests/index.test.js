import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import Index from '../pages/index';
import i18n from '../i18n';

describe('first test', () => {
  it('index page main text', async () => {
    const { getByText } = render(
      <I18nextProvider i18n={i18n}>
        <Index />
      </I18nextProvider>
    );
    getByText('Next.js + Tailwind CSS');
  });
});
