import React from 'react';
import "./navigation.css";
import { GiCat, GiCirclingFish } from "react-icons/gi";
import { FaDog } from "react-icons/fa"
import { FcHome } from "react-icons/fc"
import { Link } from 'react-router-dom';
import { SiBloglovin } from "react-icons/si";
import { MdOutlineContactSupport } from "react-icons/md";
import { BiImageAlt } from "react-icons/bi"

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: this.props.isLogin || false
    }
  }
  componentDidMount() {
  
   this.setState({
    isLogin : this.props.isLogin || false
  })
 
  }
  componentDidUpdate() {
    if (this.props.isLogin && this.props.isLogin !== this.state.isLogin) {
      this.setState({ isLogin: this.props.isLogin })
    
    }
  }
 
  logOut = () => {

    localStorage.removeItem("userToken");
    localStorage.removeItem("userName");
    localStorage.removeItem("password");
    localStorage.removeItem("userId");
    localStorage.removeItem("isAdmin");
    window.location.reload(false);
  }
  render() {
    const { isLogin } = this.state;
    const { loginOrLogout } = this.props;
    return (
      <div >

        <nav className="menu">
          <ol>
            <li className="menu-item">
              <Link to={'/anasayfa'}> <FcHome color='white' size="40px" />  Anasayfa </Link>
            </li>
            <li className="menu-item">
              <Link to={'/kopek'}> <FaDog color='white' size="35px" />  Köpek </Link>
              <ol className="sub-menu">
                <Link to={'/kopek-mama'} className="menu-item"> Kopek Mama </Link>
                <Link to={'/kopek-tasima'} className="menu-item"> Kopek Taşıma </Link>
                <Link to={'/kopek-aksesuar'} className="menu-item"> Kopek Aksesuar </Link>
              </ol>
            </li>
            <li className="menu-item">
              <Link to={'/kedi'}> <GiCat color='white' size="35px" />  Kedi </Link>
              <ol className="sub-menu">
                <Link to={'/kedi-mama'} className="menu-item"> Kedi Mama </Link>
                <Link to={'/kedi-tasima'} className="menu-item"> Kedi Taşıma </Link>
                <Link to={'/kedi-aksesuar'} className="menu-item"> Kedi Aksesuar </Link>
              </ol>
            </li>
            {/* <li className="menu-item">
              <Link to={'/balik'}> <GiCirclingFish color='white' size="35px" />  Balık </Link>
              <ol className="sub-menu">
                <Link to={'/balik-mama'} className="menu-item"> Balik Mama </Link>
                <Link to={'/balik-tasima'} className="menu-item"> Balik Taşıma </Link>
                <Link to={'/balik-aksesuar'} className="menu-item"> Balik Aksesuar </Link>
              </ol>
            </li> */}
            <Link style={{ color: "white" }} to={'/iletisim'} className="menu-item">  <MdOutlineContactSupport color='white' size="30px" />  İletisim </Link>
            <Link style={{ color: "white" }} to={'/fotograf'} className="menu-item"> <BiImageAlt color='white' size="30px" />Fotoğraf's</Link>
            <Link style={{ color: "white" }} to={'/blog'} className="menu-item">  <SiBloglovin color="white " size="25px" /> Blog </Link>
            {isLogin ?
              <Link style={{ color: "white" }} to={'/giris-uye'} onClick={() => { this.logOut(); this.setState({ isLogin: false }); loginOrLogout(); }} className="menu-item"> Çıkış Yap </Link>
              :
              <Link style={{ color: "white" }} to={'/giris-uye'}  className="menu-item"> Giriş Yap </Link>
            }
          </ol>

        </nav>


      </div>
    );
  }
}