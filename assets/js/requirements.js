
// This function allow us to get countries information from restcountries API
function getCountries(){
    // Getting countries information
    fetch (`https://restcountries.eu/rest/v2/all`)
    
    .then (response => {
        if (!response.ok){
            throw Error (`Exception ${response.status}`);
        }
        return response.json();
    })
    // if API response is OK:
    .then (data => countriesInfo(data))
    // IF an error happens:
    .catch(error => {
        $("#error-notification").append(`${error}`);
    });
    return;
    
    //Parsing response for beign displayed
    function countriesInfo(data){
        // creating each single country element:
        data.map((country) =>{

            // Appends country information to container
            $("#countries-container").append(`
                <div id=${country.alpha2Code} class="country card col-sm-2 btn" data-toggle="modal" data-target="#validator-modal">
                    <div class="d-block my-auto">
                        <img class="country-flag" src=${country.flag}>
                        <h6 class="mt-2">${country.name} </h6>
                        <p class="country-code"> (${country.alpha2Code}) </p>
                    </div>
                </div>
            `)

            // When clicking on a country an alert element will appear on screen with requerimients for that especific country
            $(`#${country.alpha2Code}`).click(function(){
                // Cleaning container before append content
                $(`#modal-validator-content`).html("");

                // Append content to alert 
                $(`#modal-validator-content`).append(`
                    <div class="modal-header d-block ">
                        <div>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        
                        <div class="d-flex justify-content-center">
                            <img class="country-flag" src=${country.flag}>
                            <h3 class="modal-tittle ml-2 align-middle" id="">${country.name}</h3>
                        </div>  
                    </div>
                    <div class="m4 ml-2">
                        <p>You need to homologate you High School degree <a target="_blank" href="http://www.educacionyfp.gob.es/servicios-al-ciudadano/catalogo/gestion-titulos/estudios-no-universitarios/titulos-extranjeros/homologacion-convalidacion-no-universitarios.html">(More Info)</a></p>
                        <h6><b>What do you need?</b></h6>
                        <ul class="required-documents">
                            <li>Fill this  <a target="_blank" href="http://www.educacionyfp.gob.es/dam/jcr:adca0146-8ff7-4535-adcd-f7beb1ab11f2/solicitud-vf2.pdf">Request Form</li>
                            <li><a target="_blank"href="http://www.educacionyfp.gob.es/servicios-al-ciudadano/catalogo/general/0/tasa-790-079-ingreso.html">Tax 790</a> Payment <a href="http://www.educacionyfp.gob.es/servicios-al-ciudadano/catalogo/general/0/tasa-790-079-ingreso.html">(See More)</a></li>
                            <li>Certified photocopy of passport</li>
                            <li>Certified photocopy of the official title or diploma whose homologation is requested</li>
                            <li>Certified photocopy of the accrediting certification of the courses taken, stating the subjects followed, the grades obtained and the academic years in which the respective courses were taken.</li>
                        </ul>
                        <h6><b>Where to carry out the procedure?</b></h6>
                        <ul>
                        <li>Embassy or Spain Consulate</li>
                        <p>If you are in Spain, you can <a target="_blank" href="http://administracion.gob.es/pagFront/atencionCiudadana/oficinas/encuentraOficina.htm#.VkNuCNIve1t">Look for an Office</a></p>
                        
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger modal-ok mx-auto" data-dismiss="modal">Acept</button>
                    </div>`);

                // If country language is diferent than spanish this will append a translation Request, this is obtained from restcountries API
                if (`${country.languages[0].name}` !== "Spanish"){
                    $(".required-documents").append(`
                        <li>Official translation by a sworn translator, duly authorized or registered in Spain</li>
                    `)};

                // If a country doesn´t belong to European Union this will appends a legalization or apostille requirement this is obtained from rescountries API
                if (`${country.regionalBlocs[0].name}` !== "European Union"){
                    $(".required-documents").append(`
                        <li>Legalization or "apostille" issued by the competent authorities of the country <a href="http://www.hcch.net/index_es.php?act=conventions.authorities&cid=41">(see apostille signataries countries)</a></li>
                    `)
                }
            });       
        });        
    };
};


// Events
// Loading get Countries function 
window.addEventListener('load', getCountries());