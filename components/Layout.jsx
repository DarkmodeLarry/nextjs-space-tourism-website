import Navbar from './Navbar';
import MobileNav from './MobileNav';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <MobileNav />
      <main>{children}</main>
    </>
  );
}
