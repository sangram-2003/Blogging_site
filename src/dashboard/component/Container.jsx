import { Outlet } from "react-router-dom";


const Container = () => {
  return (
    <>
      <div className="w-full sm:pb-20 h-screen flex justify-center  overflow-auto relative  sm:block sm:w-full md:w-full lg:w-full    ">
        <Outlet />
      </div>
    </>
  );
};

export default Container;
