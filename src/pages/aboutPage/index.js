import Link from 'next/link';
import styled, { ThemeProvider } from 'styled-components';
import { useTranslation } from 'react-i18next';
import Theme from '../../styles/Theme';

const LogoImg = styled.img`
  width: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const MyLogo = () => {
  return (
    <Link
      href="https://github.com/Solutions-Needed/solutions-needed"
      alt="repoLink"
    >
      <LogoImg src="/assets/images/GitHubLogo.png" alt="Logo" />
    </Link>
  );
};

const AboutPageTitle = styled.h1`
  font-size: 50px;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  padding: 20px;
`;

const AboutPageText = styled.h5`
  font-size: 20px;
  color: ${(props) => props.theme.colors.darkgray};
  text-align: justify;
  padding: 20px;
`;

const AboutPageTextCentered = styled.h5`
  font-size: 20px;
  color: ${(props) => props.theme.colors.darkgray};
  text-align: center;
  padding: 20px;
`;

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={Theme}>
      <div className="py-20">
        <AboutPageTitle>{t('ABOUT_PAGE_TITLE')}</AboutPageTitle>
      </div>
      <div className="py-20">
        <AboutPageText>{t('ABOUT_PAGE_CONTENT')}</AboutPageText>
      </div>
      <div className="py-20">
        <AboutPageTextCentered>
          {t('PROJECT_LINK')}
          <MyLogo />
        </AboutPageTextCentered>
      </div>
    </ThemeProvider>
  );
};

export default AboutPage;
