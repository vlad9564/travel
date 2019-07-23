import React from 'react'
import "@ui5/webcomponents/dist/ShellBar";
import "@ui5/webcomponents/dist/TabContainer";
import "@ui5/webcomponents/dist/Tab";
import "@ui5/webcomponents/dist/TabSeparator";
import TimeLine from './timeline/TimeLine'
import "@ui5/webcomponents/dist/List";
import "@ui5/webcomponents/dist/StandardListItem";
import "@ui5/webcomponents/dist/CustomListItem";
import "@ui5/webcomponents/dist/GroupHeaderListItem";
import * as pht from "../photo/iconTrip.png"
import Maps from "./maps/Maps";


const map = [
    {
        id: "Home",
        Page: "Home"
    },
    {
        id: "LastTrips",
        Page: "Last trips"
    }
]


class App extends React.Component {


    constructor(props, state) {
        super(props, state);

    }
    render() {
        return (
            <div>

                <div className="row">
                    <div className="column">
                        <ui5-list id="myList" class="full-width" mode="SingleSelect" >
                            <ui5-li icon="sap-icon://home" description="Home" ></ui5-li>
                            <ui5-li icon="sap-icon://flight" description="Last trips" selected ></ui5-li>
                            <ui5-li icon="sap-icon://choropleth-chart" description="Maps"></ui5-li>
                            <ui5-li icon="sap-icon://message-information" description="About"></ui5-li>
                        </ui5-list>

                    </div>
                    <div style={{
                        width: "70%", float: "left",

                        padding: "10px",
                        height: "300px"
                    }}>
                        <Maps></Maps>
                    </div>
                </div>
            </div>
        )
    }

}


export default App