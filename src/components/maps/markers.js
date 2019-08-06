import React from 'react';
import "@ui5/webcomponents/dist/Icon";
import './maps.css'

class Markers extends React.Component {
    constructor(props) {
        super(props)
        this.onClickMarker = React.createRef();
    }

    componentDidMount() {
        this.onClickMarker.current.addEventListener('press', event => {
            debugger;
        });
    }


    render() {
        return (
            <div>
                {/* <ui5-icon class="marker" src="sap-icon://map"  ></ui5-icon> */}
                <ui5-button icon="sap-icon://map" design="Transparent" aria-labelledby="lblCamera" ref={this.onClickMarker} ></ui5-button>
            </div>

        )
    }
}
export default Markers;