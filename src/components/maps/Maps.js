import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './markers';
import PopOver from './popOver';

const AnyReactComponent = ({ text }) => <div>
    {/* <ui5-icon src="sap-icon://map"></ui5-icon> */}
    <ui5-icon class="marker" src="sap-icon://map"  ></ui5-icon>

</div>;

var datas = AnyReactComponent;

class SimpleMap extends Component {

    constructor(props) {
        super(props);
        this.test = this.test.bind(this);
    }
    static defaultProps = {
        center: {
            lat: 45.6524567,
            lng: 25.5264228
        },
        zoom: 11
    };

    onSetPoint(event) {
        debugger;
        // TODO: You are sure?
        // alert(event.lat + ":" + event.lng);
        var popoverOpener = document.getElementById("maps");
        var popover = document.getElementById("hello-popover");
        popover.openBy(popoverOpener);


    }

    test(eve) {
        debugger;
    }
    render() {
        return (
            // Important! Always set the container height explicitly
            <div>
                <div id="maps" style={{ height: '50vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyDP8-1VEYcU8haY6KHHrfL-pvnCTIq4oBk" /* YOUR KEY HERE */ }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                        onClick={this.onSetPoint}>


                        <Marker ></Marker>
                        <Marker></Marker>
                        <Marker></Marker>

                    </GoogleMapReact>

                </div>
                <button id="eu" onClick={this.test}>Test</button>
                <PopOver id="popOver"></PopOver>
            </div>
        );
    }
}

export default SimpleMap;