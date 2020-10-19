import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const ComingSoonTitle = styled.h1`
  font-size: 75px;
  color: black;
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
    <div className="py-20">
      <LogoImg src="/SolutionsNeededLogo.png" alt="Logo" />
      <ComingSoonTitle>{t('COMING_SOON_TITLE')}</ComingSoonTitle>
    </div>
  );
};

export default ComingSoonPage;
