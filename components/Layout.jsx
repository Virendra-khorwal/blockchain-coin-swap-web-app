import Navbar from "./Navbar";

const { default: Sidebar } = require("./Sidebar");

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-dark-primary">
      <div className="">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 flex  px-10 py-6">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
