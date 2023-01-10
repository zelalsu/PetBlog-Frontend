import React, { Component } from 'react';
import { Button } from 'reactstrap';
import "./searchbar.css";

class SearchBar extends Component {
	state =
		{
			search: ''
		};

	inputChanged = event => {
		// console.log(event.target.value);

		this.setState({
			search: event.target.value
		});
	}


	searchImage = () => {
		// console.log("basarılı");
		this.props.onSearchImage(this.state.search)
	}

	render() {
		return (
			<div className="search-bar-container ui input">

				<h3 style={{ marginTop: "3em", display: "flex", alignItems: "center", justifyContent: "center" }}>Aramak istediğiniz hayvanın ismini girin ve ara butonuna tıklayın..  </h3>
				<input style={{ marginLeft: "500px", marginTop: "52px", width: "500px", height: "50px" }} type="text" onKeyPress={(e) => {
					if (e.key === 'Enter') {
						this.searchImage();
					}
				}}
					onChange={this.inputChanged} placeholder="Ara..." />
				<Button style={{ marginLeft: "50px", height: "50px", width: "300px" }} className="ui icon button" onClick={this.searchImage}>
					<i className="search icon"></i>
					Ara..
				</Button>

			</div>

		)
	}

}

export default SearchBar;




