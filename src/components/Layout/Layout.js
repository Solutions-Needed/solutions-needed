import MainNav from '../mainNav';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <MainNav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
