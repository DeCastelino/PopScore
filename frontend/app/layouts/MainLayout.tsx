import Navbar from "../components/Navbar";
import { ChildrenProps } from "../types";
import "../styles/globals.css";
const MainLayout = ({ children }: ChildrenProps) => {
  return (
    //background
    <div className="realtive">
      <div className="fixed h-full w-screen min-h-screen bg-black">
        {/* foreground */}
        <div className="right-25 top-25 absolute h-96 w-96 rounded-full bg-orange-800 blur-[300px]"></div>
        <div className="left-0 bottom-0 absolute h-96 w-96 rounded-full bg-orange-800 blur-[300px]"></div>
        <div className="h-screen min-h-screen bg-gray-950 bg-blend-lighten">
          <div className="relative overflow-auto bg-transparent h-full w-full">
            <div className="container">
              <Navbar />
              {children}
            </div>
          </div>
        </div>
      </div >
    </div>
  );
};

export default MainLayout;
