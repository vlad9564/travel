import React from 'react';
import "@ui5/webcomponents/dist/Popover";


class popOver extends React.Component {

    constructor(props) {
        super(props);
        debugger;
        this.onClosePopOver = React.createRef();
    }

    componentDidMount() {

        this.onClosePopOver.current.addEventListener('press', event => {
            var popover = document.getElementById("hello-popover");
            popover.close();
            debugger;
        });
    }


    render() {
        return (
            <div>
                <ui5-popover id="hello-popover" header-text="Newsletter subscription">
                    <div >
                        <div class="flex-column">
                            <ui5-label for="emailInput" required>Email: </ui5-label>
                            <ui5-input id="emailInput" placeholder="Enter Email"></ui5-input>
                        </div>
                    </div>
                    <div>
                        <div ></div>
                        <ui5-button ref={this.onClosePopOver} id="closePopoverButton" design="Emphasized">Subscribe</ui5-button>
                    </div>
                </ui5-popover>
            </div >
        )
    }
}

export default popOver;

