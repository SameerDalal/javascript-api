const url = undefined;
        // create the url with the opening query and its componets such as the api key and endpoints

        async function getData() {
            const response = await fetch(url);
            const data = await response.json();
            // converts the respose to json type
            console.log(data)
        }       
    getData();
