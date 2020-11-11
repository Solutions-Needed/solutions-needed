import { useTranslation } from 'react-i18next';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../../styles/Theme';
import Button from '../Atoms/Button';
import PublishButton from '../Atoms/Button';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const WrapperContainer = styled.div`
  border: 1px solid black;
  border-width: thin;
  padding: 30px;
`;

const StyledDescription = styled.h2`
  color: 'black';
  padding: 10px 45px 10px 45px;
`;

const StyledTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  padding: 10px 45px 10px 45px;
`;

const Header = () => {
  const { t } = useTranslation();
  return (
    <>
      <ThemeProvider theme={Theme}>
        <StyledContainer>
          <StyledTitle>{t('FIND_SOLUTION_LABEL')}</StyledTitle>
          <Button textButton={t('POST_PROBLEM_BTN')} />
        </StyledContainer>
        <StyledContainer>
          <StyledDescription>{t('FIND_SOLUTION_DESC')}</StyledDescription>
        </StyledContainer>
      </ThemeProvider>
    </>
  );
};

export default Header;
