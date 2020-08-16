

function getCountries(){
    // Getting countries information
    fetch (`https://restcountries.eu/rest/v2/all`)
    .then (response => {
        if (!response.ok){
            throw Error (`Exception ${response.status}`);
        }
        return response.json();
    })
    .then (data => countriesInfo(data))
    .catch(error => {
        $("#error-notification").append(`${error}`);
    });
    return;
    
    //Parsing response for beign displayed
    function countriesInfo(data){
        data.map((country, index) =>{
            $("#countries-container").append(`
                <div id=${country.name} class="country card col-sm-2 btn" data-toggle="modal" data-target="#validator-modal">
                    <div class="d-block my-auto">
                        <img class="country-flag" src=${country.flag}>
                        <h6 class="mt-2">${country.name} </h6>
                    </div>
                </div>
            `)
        })
    }
}

$(document).ready(getCountries())