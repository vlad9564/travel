import React from 'react';
import "@ui5/webcomponents/dist/Panel";
import "@ui5/webcomponents/dist/Badge";


class StatisticDetails extends React.Component {

    render() {
        return (
            <div>
                <ui5-panel
                    width="100%"
                    accessible-role="Complementary"
                    collapsed="false"
                    header-text="2019 summary">
                    <h1>2019 summary</h1>
                    <ui5-label wrap>Statistics for 2019</ui5-label>

                    <div style={{ display: "table-caption", width: "min-content" }}>
                        <ui5-badge color-scheme="8">Place to visit this year: 3</ui5-badge>
                        <ui5-badge color-scheme="7">Place visited: 8</ui5-badge>
                    </div>
                    <div>

                    </div>
                </ui5-panel>
            </div>
        )
    }

}
export default StatisticDetails;