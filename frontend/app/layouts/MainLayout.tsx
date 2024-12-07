import Navbar from "../components/Navbar";
import { ChildrenProps } from "../types";
const MainLayout = ({ children }: ChildrenProps) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
