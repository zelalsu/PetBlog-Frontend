import React, { Component } from 'react'
import SearchBar from './SearchBar'
import axios from "axios";
import ImageList  from './ImageList';
 class AppFoto extends Component {
    state={
        images:[]
    }
    onSearchImage=async(search)=>
    {
        console.log('app'+search);
        const results=await axios.get('https://api.unsplash.com/search/photos?',{
            params:{
                query:search
               
            },
            headers:
            {
                Authorization: "Client-ID RfOqBnvuRPkuP0h1iOA9er2cRs0WYTsJUpwspkX4m8g"
            }
        })
        this.setState({
            images: results.data.results//gelen isteğe göre images güncellendi yukarda state olarak images i boş bir diziye atamıştık

        })
    }
  render() {
    return (
      <div className='app-container' >
        <SearchBar onSearchImage={this.onSearchImage}/>
        <ImageList images={this.state.images}/>
      </div>
    )
  }
}
export default AppFoto