import { Outlet } from "react-router-dom";
import { AppSidebar } from "./AppSidebar";
import { Header } from "./Header";

const AppLayout = () => {
  return (
    <>
      <AppSidebar />
      <main className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 p-6 bg-gray-50">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default AppLayout;
