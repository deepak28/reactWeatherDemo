import React, { Component } from "react";

class CityNames extends Component {
    constructor(props, context) {
        super(props, context);
        this.createCities = this.createCities.bind(this);
    }

    /* Show city name and temperature */
    createCities(city) {
        return <li key={city.key}> <span className="text-left"><i className="fa fa-map-marker"></i> {city.text} </span><span className="text-right"> <i className="fa fa-cloud"></i> {city.temp}</span></li>
    }

    render() {
        var cityEntries = this.props.entries;
        var listCities = cityEntries.map(this.createCities);

        return (
                <ul>
                    {listCities}
                </ul>
                );
    }
};

export default CityNames;