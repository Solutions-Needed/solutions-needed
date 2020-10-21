import { render } from '@testing-library/react';
import Index from '../pages/index';

describe('first test', () => {
  it('index page main text', async () => {
    const { getByText } = render(<Index />);
    getByText('Next.js + Tailwind CSS');
  });
});
