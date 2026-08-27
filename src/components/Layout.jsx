
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children}) => {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-[#072344]">
        <Header />
        <main className="flex-grow px-2 pt-20 sm:px-6 sm:pt-28 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;