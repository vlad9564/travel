import React from 'react'

import "@ui5/webcomponents/dist/ShellBar";
import "@ui5/webcomponents/dist/TabContainer";
import "@ui5/webcomponents/dist/Tab";
import "@ui5/webcomponents/dist/TabSeparator";
import "@ui5/webcomponents/dist/List";
import "@ui5/webcomponents/dist/StandardListItem";
import "@ui5/webcomponents/dist/CustomListItem";
import "@ui5/webcomponents/dist/GroupHeaderListItem";

// import * as pht from "../photo/iconTrip.png"

import TimeLine from './timeline/TimeLine'
import Maps from "./maps/Maps";
import About from './about/About'
import Home from './home/Home';
import PlaceToVisit from './placeToVisit/placeToVisit';


class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = { Page: <Home /> }
        this.onChangeView = React.createRef();


    }

    componentDidMount() {
        this.onChangeView.current.addEventListener('selectionChange', event => {
            debugger;
            var selectedItems = event.detail.selectedItems;
            var crtSelection = selectedItems[0].id;
            switch (crtSelection) {
                case "idMaps":
                    this.setState({ Page: <Maps /> });
                    break;

                case "idLastTrips":
                    this.setState({ Page: <TimeLine /> });
                    break;

                case "idAbout":
                    this.setState({ Page: <About /> });
                    break;

                case "idHome":
                    this.setState({ Page: <Home /> });
                    break;

                case "idToVisit":
                    this.setState({ Page: <PlaceToVisit /> });
                    break;

                default:
                    break;
            }

        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="column">
                        <ui5-list id="myList" class="full-width" mode="SingleSelect" ref={this.onChangeView} >
                            <ui5-li id="idHome" icon="sap-icon://home" selected description="Home" ></ui5-li>
                            <ui5-li id="idLastTrips" icon="sap-icon://flight" description="Last trips"  ></ui5-li>
                            <ui5-li id="idMaps" icon="sap-icon://choropleth-chart" description="Maps"></ui5-li>
                            <ui5-li id="idToVisit" icon="sap-icon://map" description="Place to visit"></ui5-li>
                            <ui5-li id="idAbout" icon="sap-icon://message-information" description="About"></ui5-li>
                        </ui5-list>

                    </div>
                    <div style={{
                        width: "70%", float: "left",
                        padding: "10px",
                        height: "300px"
                    }}>
                        {this.state.Page}
                    </div>
                </div>
            </div>
        )
    }

}


export default App