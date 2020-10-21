import styled, { ThemeProvider } from 'styled-components';
import { useTranslation } from 'react-i18next';
import Theme from '../../styles/Theme';

const ComingSoonTitle = styled.h1`
  font-size: 75px;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  padding: 100px;
`;

const LogoImg = styled.img`
  width: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const ComingSoonPage = () => {
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={Theme}>
      <div className="py-20">
        <LogoImg src="/assets/images/SolutionsNeededLogo.png" alt="Logo" />
        <ComingSoonTitle>{t('COMING_SOON_TITLE')}</ComingSoonTitle>
      </div>
    </ThemeProvider>
  );
};

export default ComingSoonPage;
