import styled, { ThemeProvider } from 'styled-components';
import Theme from '../../styles/Theme';

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.color ? props.color : props.theme.colors.primary};
  color: ${(props) => (props.color ? props.color : 'white')};
  padding: 10px 45px 10px 45px;
`;

const PublishButton = ({ textButton }) => {
  return (
    <ThemeProvider theme={Theme}>
      <StyledButton>{textButton}</StyledButton>
    </ThemeProvider>
  );
};

export default PublishButton;
