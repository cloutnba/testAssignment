import Header from "../../components/Header/Header";
import ContactUs from "../../components/ContactUs/ContactUs";
import Footer from "../../components/Footer/Footer";
import {useContext} from "react";
import {MenuContext} from "../../context";


const Main = () => {
    const {isMenuOpen} = useContext(MenuContext);
  return(
      <>
        <Header/>
        <main>
            {!isMenuOpen && <ContactUs/>}
        </main>
          {!isMenuOpen && <Footer/>}
      </>

  )
}

export default Main;