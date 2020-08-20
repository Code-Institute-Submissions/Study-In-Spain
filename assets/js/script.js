const sendButton = document.getElementById("send-message");
const APIKey = "AIzaSyDbYqP9y8KHdAtJ_ZQge11s_9AiKD16VIw";
let senderName = document.getElementById("name");
let senderEmail = document.getElementById("email");
let senderSubject = document.getElementById("subject");
let senderMessage = document.getElementById("message");


function sendMail(){
    emailjs.send("gmail", "studyinspain", {
        "email-name": senderName.value,
        "email-address": senderEmail.value,
        "email-subject": senderSubject.value,
        "email-message": senderMessage.value,
        "email-copy": senderEmail.value
    })
    .then (function (response){
        $("#contact-notification").css("visibility", "visible").append(`
            <div class="alert alert-success" role="alert"> 
                Your email has been successfully sent, you´ll receive a copy.
            </div>
        `);
        $('form :input').val('');
        console.log("SUCCESS", response);
    },
    function (error){
        $('#contact-notification').css("visibility", "visible").append(`
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                There is the following error with your request: ${error}.
                Please, refresh this page or try again later
            </div>
        `)
        console.log("FAILED", error)
    });
    return false;
}


sendButton.addEventListener('click', function (){
    event.preventDefault();
    sendMail();
})

const universities = [
    "Universidad de Almería",
    "Universidad de Cádiz",
    "Universidad de Córdoba",
    "Universidad de Granada",
    "Universidad de Huelva",
    "Universidad Internacional de Andalucía",
    "Universidad de Jaén",
    "Universidad de Málaga",
    "Universidad Pablo de Olavide",
    "Universidad de Sevilla", p
    "Universidad de Zaragoza",
    "Universidad San Jorge",
    "Universidad de La Laguna",
    "Universidad de Las Palmas de Gran Canaria",
    "Universidad de Cantabria",
    "Universidad Internacional Menéndez Pelayo UIMP",
    "Universidad de Castilla-La Mancha",
    "Universidad de Burgos",
    "Universidad Católica de Ávila",
    "Universidad Europea Miguel de Cervantes",
    "IE Universidad",
    "Universidad de León",
    "Universidad Pontificia de Salamanca",
    "Universidad de Salamanca",
    "Universidad de Valladolid",
    "Universitat Abat Oliba CEU",
    "Universidad Autónoma de Barcelona",
    "Universidad de Barcelona",
    "Universidad de Girona",
    "Universidad Internacional de Cataluña",
    "Universitat de Lleida",
    "Universitat Oberta de Catalunya",
    "Universidad Pompeu Fabra",
    "Universidad Ramón Llull",
    "Universidad Rovira i Virgili",
    "Universidad de Vic",
    "Universidad Alfonso X El Sabio",
    "Universidad de Alcalá",
    "Universidad Antonio de Nebrija",
    "Universidad Autónoma de Madrid",
    "Universidad Camilo José Cela",
    "Universidad Carlos III de Madrid",
    "Universidad Complutense de Madrid",
    "Universidad a Distancia de Madrid",
    "Universidad Europea de Madrid",
    "Universidad Francisco de Vitoria",
    "Universidad Nacional de Educación a Distancia U.N.E.D",
    "Universidad Politécnica de Madrid",
    "Universidad Pontificia Comillas",
    "Universidad Rey Juan Carlos",
    "Universidad San Pablo C.E.U.",
    "Universidad de Navarra",
    "Universidad Pública de Navarra",
    "Universidad de Alicante",
    "Universitat Jaume I de Castellón",
    "Universidad Miguel Hernández de Elche",
    "Universidad Politécnica de Valéncia",
    "Universitat de València",
    "Universidad Cardenal Herrera - CEU",
    "Universidad Católica de Valencia S. Vicente M.",
    "Universidad de Extremadura",
    "Universidad de A Coruña",
    "Universidad de Santiago de Compostela",
    "Universidade de Vigo",
    "Universitat de las Illes Balears",
    "Universidad de La Rioja",
    "Universidad Mondragon Unibertsitatea",
    "Universidad de Deusto",
    "Universidad del País Vasco",
    "Universidad de Oviedo",
    "Universidad Politécnica de Cartagena",
    "Universidad Católica San Antonio de Murcia",
    "Universidad de Murcia"
];

const locations = [
    {lat: 36.828992 , lng:-2.406031},
    {lat: 36.595673 , lng:-5.682514},
    {lat: 37.881641 , lng:-4.779391},
    {lat: 37.184915 , lng:-3.609459},
    {lat: 37.270443 , lng:-6.922918},
    {lat: 37.398771 , lng:-6.008657},
    {lat: 37.788533 , lng:-3.777665},
    {lat: 36.720448 , lng:-4.416075},
    {lat: 37.355087 , lng:-5.937286},
    {lat: 37.380826 , lng:-5.991585},
    {lat: , lng:},
    {lat: , lng:},
    {lat: , lng:},
    {lat: , lng:},
    {lat: , lng:},
    {lat: , lng:},
    {lat: , lng:},
    {lat: , lng:},
    {lat: , lng:},
    {lat: , lng:},
    {lat: , lng:},
    {lat: , lng:},
    {lat: , lng:},
    {lat: , lng:},
    {lat: , lng:},


];

function initMap() {
    let map = new google.maps.Map(document.getElementById("map"),{
            zoom : 3,
            center : {
                lat:40.738220,
                lng:-4.053081,
            }
    });
}

window.addEventListener('load', initMap());