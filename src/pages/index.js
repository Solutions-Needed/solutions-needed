import MainLayout from '../components/MainLayout';
import Header from '../components/Templates/Header';

const IndexPage = () => {
  return (
    <>
      <Header />
    </>
  );
};

IndexPage.getMainLayout = (page) => <MainLayout>{page}</MainLayout>;

export default IndexPage;
