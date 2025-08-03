import { useEffect } from "react";
import Sidebar from './component/Sidebar'
import Nav from './component/Nav'
import Container from "./component/Container";
const Dashboard = () => {
  return (
    <>
      <div className="w-full h-screen sm:flex gap-2   ">
        <div className="hidden sm:w-4/12 md:w-3/12 lg:w-2/12 sm:block h-auto ">
          <Sidebar />
        </div>
        <div
          className=" w-full sm:w-8/12 md:w-9/12 lg:w-10/12  overflow-hidden h-screen   flex-col   "
        >
          <div className="w-full h-16  ">
            <Nav />
          </div>
          <div className="w-full  h-full py-2 px-2">
            <Container />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

{
  /* <div className="w-full h-screen  flex space-x-4 gap-8  ">
            <div className="w-1/5 fixed  h-full ">
            <Sidebar/>
            </div>
            <div className="w-full h-full   flex-col space-y-4">
               <div className="w-full h-16 ">
                <Nav/>
               </div>
               <div className="w-full h-screen ">
                 <Container/>
               </div>
            </div>

         </div> */
}
