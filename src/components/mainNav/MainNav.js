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
  width: 150px;
  height: auto;
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
    <StyledDiv>
      <span>
        <MyLogo />
      </span>
      <span />
      <span>
        <StyledUl>
          {links2.map(({ href, label }) => (
            <li className="p-5" key={`${href}${label}`}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </StyledUl>
      </span>
    </StyledDiv>
  );
}
