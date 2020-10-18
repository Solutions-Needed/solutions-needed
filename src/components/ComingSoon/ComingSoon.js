import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const ComingSoonTitle = styled.h1`
  font-size: 75px;
  color: black;
  text-align: center;
  padding: 100px;
`;

const ComingSoon = () => {
  const { t } = useTranslation();
  return <ComingSoonTitle>{t('COMING_SOON_TITLE')}</ComingSoonTitle>;
};

export default ComingSoon;
