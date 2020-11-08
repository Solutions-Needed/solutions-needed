import MainLayout from '../components/MainLayout';

const IndexPage = () => {
  return (
    <div className="py-20">
      <h1 className="text-5xl text-center text-accent-1">
        Next.js + Tailwind CSS
      </h1>
    </div>
  );
};

IndexPage.getMainLayout = (page) => <MainLayout>{page}</MainLayout>;

export default IndexPage;
