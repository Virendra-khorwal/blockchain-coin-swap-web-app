const { default: Sidebar } = require("./Sidebar");

const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-9">
      <div className="">
        <Sidebar />
      </div>
      <div className="col-span-8">{children}</div>
    </div>
  );
};

export default Layout;
