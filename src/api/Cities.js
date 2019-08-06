class Cities {

    getCities(that) {
        var data;
        fetch("https://roloca.coldfuse.io/judete") //https://roloca.coldfuse.io/orase
            .then(res => res.json())
            .then(
                (result) => {
                    debugger;
                    data = result;
                    that.setState = ({
                        state: ""
                    })
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    debugger;
                }
            )
        return data;
    }

}

export default Cities;