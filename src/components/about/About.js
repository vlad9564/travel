import React from 'react';
import "@ui5/webcomponents/dist/Card";


class About extends React.Component {

    render() {
        return (
            <div>
                <ui5-card avatar="sap-icon://group" heading="Team Space" subtitle="Direct Reports" status="1 of 1">
                    <div class="card-content">
                        <ui5-list separators="None">
                            <ui5-li description="Software Enginier">Vlad Ciobanu</ui5-li>
                        </ui5-list>

                    </div>
                </ui5-card>
            </div>
        )
    }

}
export default About;