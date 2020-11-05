import styled from 'styled-components';
import MainNav from '../mainNav';
import Footer from '../Footer';

const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

const ContentWrap = styled.div`
  padding-bottom: 100vh;
`;

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100vh;
`;

const MainLayout = ({ children }) => {
  return (
    <PageContainer>
      <MainNav />
      <ContentWrap>{children}</ContentWrap>
      <Footer style={StyledFooter} />
    </PageContainer>
  );
};

export const getMainLayout = (page) => <MainLayout>{page}</MainLayout>;

export default MainLayout;
