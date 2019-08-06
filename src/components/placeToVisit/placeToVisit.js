import React from 'react';
import Cities from '../../api/Cities';
import "@ui5/webcomponents/dist/MessageStrip";

class placeToVisit extends React.Component {

    _state = [];

    constructor(props) {
        super(props);

        const cities = new Cities();
        this._state = cities.getCities(this);

        this.state = {
            state: null,
        };
    }


    componentDidMount() {

        debugger;
        // this.setState({
        //     state = this._state
        // });
        debugger;
        // Add some suggestions, can receive them from back end as well
        var ui5_database_entries = ["Argentina", "Albania", "Algeria", "Angola", "Austria", "Australia", "Bulgaria", "Canada", "Columbia", "Croatia", "Denmark",
            "England", "Finland", "France", "Germany", "Hungary", "Ireland", "Italy", "Kuwait", , "Romania", "Luxembourg", "Mexico", "Morocco", "Norway", "Paraguay", "Philippines", "Portugal", "Spain", "Sweden", "Sri Lanka", "Senegal", "United Kingdom", "USA"];

        var oInput = document.getElementById("suggestions-input");
        // Listen for the input event
        oInput.addEventListener("input", function (event) {
            var value = event.target.value;
            var suggestionItems = Array();
            // Find the new suggestions
            if (value) {
                suggestionItems = ui5_database_entries.filter(function (item) {
                    return item.toUpperCase().indexOf(value.toUpperCase()) === 0;
                });
            }
            // Clear the current suggestions
            [].slice.call(oInput.children).forEach(function (child) {
                if (child.id !== "user-icon") {
                    oInput.removeChild(child);
                }
            });
            // Add the new suggestions in the DOM
            suggestionItems.forEach(function (item) {
                var li = document.createElement("ui5-li");
                li.icon = "sap-icon://world";
                li.id = item;
                li.textContent = item;
                oInput.appendChild(li);
            });
        });
    }
    render() {
        return (
            // <div>Place to visit</div>
            <div>
                <ui5-input id="suggestions-input" show-suggestions placeholder="Start typing country name"></ui5-input>
                <ui5-button design="Positive" icon="sap-icon://functional-location">Add location</ui5-button>
                <ui5-messagestrip type="Positive">Positive MessageStrip</ui5-messagestrip>

            </div>
        )
    }
}

export default placeToVisit;