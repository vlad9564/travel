import React from 'react';
import "@ui5/webcomponents/dist/ShellBar";
import * as pht from "../../photo/iconTrip.png"

class Header extends React.Component {

    render() {
        return (
            <div>
                <div>

                    <ui5-shellbar
                        profile={pht}
                        primary-title="Trip"
                        secondary-title="Vlad Ciobanu"
                        logo={pht}
                    >
                    </ui5-shellbar>

                </div>
            </div>

        )
    }

}

export default Header;