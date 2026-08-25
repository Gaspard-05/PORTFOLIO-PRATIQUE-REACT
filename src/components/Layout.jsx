
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children}) => {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-[#072344]">
        <Header />
        <main className="mx-auto flex-grow max-w-6xl pt-20 sm:pt-28 lg:pt-32">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;