import React, { Component } from "react";
import CityNames from "./cityNames";

class CityList extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {cities: []};
        this.addCity = this.addCity.bind(this);
    }

    /* add city */
    addCity(event) {
        var cityArray = this.state.cities;

        if (this._inputElement.value !== "") {
            let cityName = this._inputElement.value;
            const API_KEY = '881e5cfb2b59db252b06f24d269ad3c2'
            const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`
            const apiURL = `${ROOT_URL}&q=${cityName}`

            fetch(apiURL)
                .then((result) => { 
                    console.log("result", result)
                    if(result.status == 200){
                        return result.json(); 
                    }
                    else{
                        alert("City not found / Something went wrong");
                    }
                })
                .then((jsonResult) => {
                    
                    cityArray.unshift({
                        text: this._inputElement.value,
                        temp : jsonResult.main.temp,
                        key: Date.now()
                    });

                    this.setState({
                        cities: cityArray
                    });

                    this._inputElement.value = "";
                    return;
                })
        }

        //console.log("city array ----", cityArray);
        event.preventDefault();
    }

    render() {
        return (
                <div className="text-center">
                    <div>
                        <form onSubmit={this.addCity}>
                            <input ref={(add) => this._inputElement = add}  placeholder="enter city">
                            </input>
                            <button type="submit">Add City</button>
                        </form>
                    </div>
                    <CityNames entries={this.state.cities}/>
                </div>
            );
    }
}

export default CityList;