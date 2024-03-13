import { useState } from "react";
import "./App.css";
import Teams from "./components/menu/Teams";
import Folders from "./components/menu/folders/Folders";
import Footer from "./components/menu/footer/Footer";
import Container from "./components/container/Container";
import { FaUserLarge } from "react-icons/fa6";
import ContainerFooter from "./components/container/ContainerFooter";
import Menu from "./components/menu/Menu";
import { CiBurger, CiMenuBurger } from "react-icons/ci";
function App() {
  const [selectedCount, setSelectedCount] = useState(0);

  const [toggle, setToggle] = useState(true);

  return (
    <>
      <div className="main">
        <div className="menu relative border-[1.5px]">
          <Menu />
        </div>
        <div className="container border-[1.5px] relative">
          <Container
            selectedCount={selectedCount}
            setSelectedCount={setSelectedCount}
          />
          <ContainerFooter selectedCount={0} />
        </div>
      </div>
    </>
  );
}

export default App;
