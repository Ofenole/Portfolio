import Header from "../pages/Header"
import { PropTypes } from "prop-types"
import Footer from "../pages/Footer";

const Layout = ({children}) => {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  )
}
Layout.propTypes={
  children: PropTypes.node.isRequired
};
export default Layout