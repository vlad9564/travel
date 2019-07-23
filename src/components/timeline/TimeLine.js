import React from 'react';
import "@ui5/webcomponents/dist/Timeline";
import "@ui5/webcomponents/dist/TimelineItem"
import "@ui5/webcomponents/dist/RadioButton";
import "@ui5/webcomponents/dist/Button";



import './timeline.css';

class TimeLine extends React.Component {


    render() {
        return (
            <div >
                <div>
                    <ui5-button design="Positive" icon="sap-icon://add">Add new trip</ui5-button>

                </div>
                <div >
                    <ui5-timeline>
                        <ui5-timeline-item id="test-item" title-text="called" subtitle-text="20.02.2017 11:30" icon="sap-icon://phone" item-name="John Smith" item-name-clickable></ui5-timeline-item>
                        <ui5-timeline-item title-text="Weekly Sync - CP Design" subtitle-text="27.07.2017 (11:00 - 12:30)" icon="sap-icon://calendar">
                            <div>MR SOF02 2.43</div>
                        </ui5-timeline-item>
                        <ui5-timeline-item title-text="Video Converence Call - UI5" subtitle-text="31.01.2018 (12:00 - 13:00)" icon="sap-icon://calendar">
                            <div>Online meeting</div>
                        </ui5-timeline-item>
                        <ui5-timeline-item title-text="Video Converence Call - UI5" subtitle-text="31.01.2018 (12:00 - 13:00)" icon="sap-icon://calendar">
                            <div>Online meeting</div>
                        </ui5-timeline-item>
                    </ui5-timeline>
                </div>

            </div>
        )
    }

}
export default TimeLine;