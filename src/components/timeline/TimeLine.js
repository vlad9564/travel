import React from 'react';
import "@ui5/webcomponents/dist/Timeline";
import "@ui5/webcomponents/dist/TimelineItem"
import "@ui5/webcomponents/dist/RadioButton";
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/Input.js";
import "@ui5/webcomponents/dist/features/InputSuggestions.js";



import './timeline.css';

class TimeLine extends React.Component {


    render() {
        return (
            <div >
                <div style={{ width: "20%", position: "left" }}>
                    <ui5-input id="searchInput" placeholder="Enter search criteria ..." >
                        <ui5-icon id="searchIcon" slot="icon" src="sap-icon://search" class="inputIcon"></ui5-icon>
                    </ui5-input>
                </div>
                <div >
                    <ui5-timeline>
                        <ui5-timeline-item
                            id="test-item"
                            title-text="Castelul Huniazilor"
                            subtitle-text="30.03.2019"
                            icon="sap-icon://functional-location"
                            item-name="Hunedoara"
                            item-name-clickable>
                        </ui5-timeline-item>
                        <ui5-timeline-item
                            id="test-item"
                            title-text="Cetatea Alba-Iulia"
                            subtitle-text="30.03.2019"
                            icon="sap-icon://functional-location"
                            item-name="Alba-Iulia"
                            item-name-clickable>
                        </ui5-timeline-item>
                        <ui5-timeline-item
                            id="test-item"
                            title-text="Cetatea Sighisoara"
                            subtitle-text="31.03.2019"
                            icon="sap-icon://functional-location"
                            item-name="Sighisoara"
                            item-name-clickable>
                        </ui5-timeline-item>

                    </ui5-timeline>
                </div>

            </div>
        )
    }

}
export default TimeLine;