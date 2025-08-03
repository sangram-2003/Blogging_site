import Manu from "./Manu";

const Sidebar = () => {
  return (
    <>
      <div className="w-full h-full bg-sky-200/50 py-4  relative hidden 
      sm:block  lg:w-full">
        <h6 className="text-center text-2xl font-bold tracking-wide">
          DashBoard
        </h6>

        <div className="border-b-2 border-white h-0 w-full mt-3"></div>

        <Manu />

        <div className="absolute w-full bottom-4 flex justify-center items-center">
          <button className="text-xl font-bold bg-pink-400 w-10/12 h-12 text-black rounded-md">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;


// sm	40rem (640px)	@media (width >= 40rem) { ... }
// md	48rem (768px)	@media (width >= 48rem) { ... }
// lg	64rem (1024px)	@media (width >= 64rem) { ... }
// xl	80rem (1280px)	@media (width >= 80rem) { ... }
// 2xl	96rem (1536px)	@media (width >= 96rem) { ... }
