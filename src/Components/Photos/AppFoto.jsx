import React, { Component } from 'react';
import SearchBar from "./SearchBar";
import axios from "axios";
import "./app.css";
import ImageList from "./ImageList";
import { Footer } from '../Footer/Footer';


class App extends Component
{
  state=
  {
    images:[]
  };

  onSearchImage = async(search) =>
  {
    // console.log('App: '+search);
   const result = await axios.get('https://api.unsplash.com/search/photos',{
      params:{
        query :search
      },
      headers:
      {
        Authorization : 'Client-ID GfHdTcW1PGZzD6-e9tuSDrbyzuR_4VxCLKpb_gqB6qc'
      }

    })
    // console.log(result.data.results);
    this.setState({
      images:result.data.results
    });
  }

  render()
  {
    return (
      <div className="app-container">
      <SearchBar onSearchImage={this.onSearchImage}/>
      <ImageList images={this.state.images}/>
      <Footer/>
      </div>
    )

  }
  
};


export default App;
