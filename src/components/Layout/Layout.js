import MainNav from '../components/mainNav';
import Footer from '../components/Footer';

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
