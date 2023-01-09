
import './App.css';
import DashBoard from './Components/DashBoard';
import Kopek from "./Components/Header/Kopek/Kopek"
import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react'
import Kedi from './Components/Header/Kedi/Kedi';
import AppFoto from './Components/Photos/AppFoto'
import AnimalList from './Components/NavigationItem/AnimalList';
import Blog from './Components/Blog/Blog';
import BlogPage from './Components/Blog/BlogPage';
import Iletisim from './Components/Header/İletisim/Iletisim';
import "./Components/navigation.css"
import Navigation from './Components/Navigation';
import Kedimama from './Components/Header/Kedi/Kedimama';
import Kopekmama from './Components/Header/Kopek/Kopekmama';
import GirisApp from './Components/Login/GirisApp';
import UyeOl from './Components/Login/UyeOl'
import  Favorites  from './Components/Favorites/Favorites';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    }
    this.loginOrLogout = this.loginOrLogout.bind(this);
  }
  componentDidMount() {
    var username = localStorage.getItem("userName");
    if (username) {
      this.setState({ isLogin: true })
    } else {
      this.setState({ isLogin: false })
    }
  }
  componentDidUpdate() {
    var username = localStorage.getItem("userName");
    if (username) {
      this.state.isLogin = true;
    } else {
      this.state.isLogin = false;
    }
  }

  loginOrLogout() {
    debugger
    var username = localStorage.getItem("userName");
    if (username) {
      this.state.isLogin = true;
      // this.setState({ isLogin: true })
    } else {
      this.state.isLogin = false;
      // this.setState({ isLogin: false })
    }
  }

  render() {
    // const isLoggin = localStorage.getItem("login");
    // const isAuthRoute = ["/Navigation"].includes(Route.path);
    const { isLogin } = this.state;
    return (
      <div>
        {/* {isLoggin === "true" && !isAuthRoute ? <Navigation /> : ""} */}
        <Navigation isLogin={isLogin} loginOrLogout={this.loginOrLogout} />
        <Switch>
          <Route exact path='/'><DashBoard /></Route>
          <Route path='/anasayfa'><DashBoard /></Route>
          <Route path='/kopek-mama/yetiskin-kopek'><AnimalList ItemId="12" /></Route>
          <Route path='/kopek-mama/yavru-kopek'> <AnimalList ItemId="6" /></Route>
          <Route path='/kopek-mama' >< Kopekmama /></Route>
          <Route path='/kopek-aksesuar' >< AnimalList ItemId="7" /></Route>
          <Route path='/kopek-tasima' >< AnimalList ItemId="8" /></Route>
          <Route path='/kedi-mama/yetiskin-kedi'> <AnimalList ItemId="13" /></Route>
          <Route path='/kedi-mama/yavru-kedi'> <AnimalList ItemId="1" /></Route>
          <Route path='/kedi-mama' >< Kedimama /></Route>
          <Route path='/kedi-aksesuar'>< AnimalList ItemId="2" /></Route>
          <Route path='/kedi-tasima'>< AnimalList ItemId="3" /></Route>

          <Route path='/balik-aksesuar'>< AnimalList ItemId="10" /></Route>
          <Route path='/balik-tasima'>< AnimalList ItemId="11" /></Route>
          <Route path='/kopek'><Kopek /></Route>
          <Route path='/kedi' ><Kedi /></Route>

          <Route path='/fotograf'><AppFoto /></Route>
          <Route path='/blog-page'><BlogPage /></Route>
          <Route path='/blog' ><Blog /></Route>
          <Route path='/giris-uye' ><GirisApp /></Route>
          <Route path='/uye-ol' ><UyeOl /></Route>
          <Route path='/iletisim'><Iletisim /></Route>
          <Route path='/favorites'> <Favorites /></Route>
        </Switch>
      </div>


    )
  }
}
export default App