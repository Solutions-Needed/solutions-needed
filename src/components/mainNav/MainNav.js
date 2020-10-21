import Link from 'next/link';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const links = () => {
  const { t } = useTranslation();
  return [
    {
      href: 'https://github.com/vercel/next.js',
      label: t('MAIN_NAV_CODE_LABEL'),
    },
    { href: 'https://nextjs.org/docs', label: t('MAIN_NAV_ABOUT_LABEL') },
  ];
};

const LogoImg = styled.img`
  width: 300px;
  height: auto;
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
`;

const MyLogo = () => {
  return (
    <Link href="/comingSoon">
      <LogoImg src="/assets/images/SolutionsNeededLogo.png" alt="Logo" />
    </Link>
  );
};

export default function Nav() {
  const links2 = links();
  return (
    <div className="grid grid-cols-3 gap-4 justify-items-stretch h-65 p-5">
      <div />
      <span className="flex justify-center">
        <MyLogo />
      </span>
      <span className="flex justify-end ">
        <StyledUl>
          {links2.map(({ href, label }) => (
            <li className="p-5" key={`${href}${label}`}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </StyledUl>
      </span>
    </div>
  );
}
