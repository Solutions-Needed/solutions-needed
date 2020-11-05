import styled, { ThemeProvider } from 'styled-components';
import { useTranslation } from 'react-i18next';
import Theme from '../../styles/Theme';

const CodeOfConductTitle = styled.h1`
  font-size: 50px;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  padding: 20px;
`;

const CodeOfConductText = styled.h5`
  font-size: 20px;
  color: ${(props) => props.theme.colors.darkgray};
  text-align: justify;
  padding: 20px;
`;

const CodeOfConduct = () => {
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={Theme}>
      <div className="py-20">
        <CodeOfConductTitle>{t('CODE_TITLE')}</CodeOfConductTitle>
      </div>
      <div className="py-20">
        <CodeOfConductText>{t('CODE_CONTENT')}</CodeOfConductText>
      </div>
    </ThemeProvider>
  );
};

export default CodeOfConduct;
