import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 45.6524567,
            lng: 25.5264228
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDP8-1VEYcU8haY6KHHrfL-pvnCTIq4oBk" /* YOUR KEY HERE */ }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={45.6524567}
                        lng={25.5264228}
                        text="My Marker"
                    // 45.6524567,25.5264228
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;