import styled from 'styled-components';

const LogoImg = styled.img`
  width: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export default function Logo() {
  return <LogoImg src="/SolutionsNeededLogo.png" alt="Logo" />;
}
