const search = document.getElementById("search-university")
const sendButton = document.getElementById("send-message");

// let university = document.getElementById("universities-selector");

// Variables need for send contact form information trough EmailJS
let senderName = document.getElementById("name");
let senderEmail = document.getElementById("email");
let senderSubject = document.getElementById("subject");
let senderMessage = document.getElementById("message");

//Google Maps API Key
const APIKey = "AIzaSyDbYqP9y8KHdAtJ_ZQge11s_9AiKD16VIw";

// This is an array containing the universities location for Google Maps
const universities = [
  {
    name: "Universidad de Almería",
    lat: 36.828992,
    lng: -2.406031
  },
  {
    name: "Universidad de Cádiz",
    lat: 36.595673,
    lng: -5.682514
  },
  {
    name: "Universidad de Granada",
    lat: 37.881641,
    lng: -4.779391
  },
  {
    name: "Universidad de Huelva",
    lat: 37.184915,
    lng: -3.609459
  },
  {
    name: "Universidad Internacional de Andalucía",
    lat: 37.270443,
    lng: -6.922918
  },
  {
    name: "Universidad de Jaén",
    lat: 37.398771,
    lng: -6.008657
  },
  {
    name: "Universidad de Málaga",
    lat: 37.788533,
    lng:-3.777665
  },
  {
    name: "Universidad Pablo de Olavide",
    lat: 36.720448,
    lng: -4.416075
  },
  {
    name: "Universidad de Sevilla",
    lat: 37.355087,
    lng:-5.937286
  },
  {
    name: "Universidad de Zaragoza",
    lat: 37.380826,
    lng: -5.991585
  },
  {
    name: "Universidad San Jorge",
    lat: 41.642076,
    lng: -0.901477
  },
  {
    name: "Universidad de La Laguna",
    lat: 41.756228,
    lng: -0.833770
  },
  {
    name: "Universidad de Las Palmas de Gran Canaria",
    lat:28.481197,
    lng: -16.316014
  },
  {
    name: "Universidad de Cantabria",
    lat:28.099415,
    lng: -15.419915
  },
  {
    name: "Universidad Internacional Menéndez Pelayo UIMP",
    lat:43.471831,
    lng: -3.801610
  },
  {
    name: "Universidad de Castilla-La Mancha",
    lat:38.9934873,
    lng: -3.926504
  },
  {
    name: "Universidad de Burgos",
    lat:38.993566,
    lng: -3.925555
  },
  {
    name: "Universidad Católica de Ávila",
    lat:42.340882,
    lng: -3.727445
  },
  {
    name: "Universidad Europea Miguel de Cervantes",
    lat:40.066935,
    lng: -4.704830
  },
  {
    name: "IE Universidad",
    lat:41.625961,
    lng: -4.715527
  },
  {
    name: "Universidad de León",
    lat: 40.952884,
    lng: -4.118825 
  },
  {
    name: "Universidad Pontificia de Salamanca",
    lat: 42.594308,
    lng: -5.561161
  },
  {
    name: "Universidad de Salamanca",
    lat: 40.963124,
    lng: -5.666946
  },
  {
    name: "Universidad de Valladolid",
    lat:40.961394 ,
    lng: -5.667030
  },
  {
    name: "Universitat Abat Oliba CEU",
    lat: 41.656928,
    lng: -4.714060
  },
  {
    name:"Universidad Autónoma de Barcelona",
    lat:41.409945,
    lng: 2.126404 
  },
  {
    name: "Universidad de Barcelona",
    lat: 41.502071,
    lng: 2.104733 
  },
  {
    name: "Universidad de Girona",
    lat: 41.386629,
    lng: 2.163935
  },
  {
    name: "Universidad Internacional de Cataluña",
    lat: 41.985701,
    lng: 2.827164
  },
  {
    name: "Universitat de Lleida",
    lat:41.406011,
    lng: 2.123503
  },
  {
    name: "Universitat Oberta de Catalunya",
    lat: 41.614816,
    lng: 0.619713
  },
  {
    name: "Universidad Pompeu Fabra",
    lat: 41.406580,
    lng: 2.194544 
  },
  {
    name: "Universidad Ramón Llull",
    lat:41.379021,
    lng: 2.179670
  },
  {
    name: "Universidad Rovira i Virgili",
    lat: 41.411930,
    lng: 2.131236
  },
  {
    name: "Universidad de Vic",
    lat: 41.119667,
    lng: 1.260524
  },
  {
    name: "Universidad Alfonso X El Sabio",
    lat:41.933723,
    lng: 2.247245
  },

  {
    name: "Universidad de Alcalá",
    lat:40.465419,
    lng: -3.676813
  },
  {
    name: "Universidad Antonio de Nebrija",
    lat:40.482485,
    lng: -3.362866
  },
  {
    name: "Universidad Autónoma de Madrid",
    lat: 40.429616,
    lng:-3.713067
  },
  {
    name: "Universidad Camilo José Cela",
    lat:40.546703,
    lng: -3.694348
  },
  {
    name: "Universidad Carlos III de Madrid",
    lat:40.472519,
    lng: -3.940374
  },
  {
    name: "Universidad Complutense de Madrid",
    lat:40.332481,
    lng: -3.765112
  },
  {
    name: "Universidad a Distancia de Madrid",
    lat: 40.445265,
    lng: -3.729824
  },
  {
    name:"Universidad Europea de Madrid",
    lat:40.631408,
    lng: -3.999020
  },
  {
    name: "Universidad Francisco de Vitoria",
    lat:40.373130,
    lng: -3.919195
  },
  {
    name: "Universidad Nacional de Educación a Distancia U.N.E.D",
    lat:40.441221,
    lng:-3.834552
  },
  {
    name:"Universidad Politécnica de Madrid",
    lat:40.438004,
    lng: -30704073
  },
  {
    name: "Universidad Pontificia Comillas",
    lat:40.448696,
    lng: -3.719317
  },
  {
    name: "Universidad Rey Juan Carlos",
    lat:40.4292198,
    lng: -3.711859
  },
  {
    name:"Universidad San Pablo C.E.U.",
    lat: 40.335707,
    lng: -3.876884
  },
  {
    name: "Universidad de Navarra",
    lat:40.4423422,
    lng: -3.7189129
  },

  {
    name:"Universidad Pública de Navarra",
    lat:42.8015382,
    lng: -1.6598362
  },
  {
    name: "Universidad de Alicante", 
    lat:42.8005243,
    lng: -1.6389523
  },
  {
    name: "Universitat Jaume I de Castellón",
    lat:38.3852446,
    lng: -0.5165048
  },
  {
    name: "Universidad Miguel Hernández de Elche",
    lat:39.9945711,
    lng: -0.071089
  },
  {
    name: "Universidad Politécnica de Valéncia",
    lat:38.274814,
    lng: -0.6846265
  },
  {
    name: "Universitat de València",
    lat: 39.4807985,
    lng: -0.3428186 
  },
  {
    name: "Universidad Cardenal Herrera - CEU",
    lat: 39.4793254,
    lng: -0.3615465
  },
  {
    name: "Universidad Católica de Valencia S. Vicente M.",
    lat: 39.547283,
    lng: -0.3889937
  },
  {
    name: "Universidad de Extremadura",
    lat:39.47024,
    lng: -0.3826548
  },
  {
    name:"Universidad de A Coruña",
    lat:38.8834507,
    lng: -7.0074564
  },
  {
    name: "Universidad de Santiago de Compostela",
    lat:43.3193449,
    lng: -8.394845
  },
  {
    name: "Universidade de Vigo",
    lat:42.8885225,
    lng: -8.5471613 
  },
  {
    name: "Universitat de las Illes Balears",
    lat:42.1697632,
    lng: -8.6867671
  },
  {
    name: "Universidad de La Rioja",
    lat:39.641222,
    lng: 2.6433703
  },
  {
    name: "Universidad Mondragon Unibertsitatea",
    lat: 42.4649339,
    lng: -2.4266107
  },
  {
    name: "Universidad de Deusto",
    lat:43.0512568,
    lng: -2.5187638
  },
  {
    name: "Universidad del País Vasco",
    lat:43.2715634,
    lng: -2.9413362
  },
  {
    name:  "Universidad de Oviedo",
    lat: 43.3314059,
    lng: -2.9793605
  },
  {
    name: "Universidad Politécnica de Cartagena",
    lat: 43.3617481,
    lng: -5.8484669
  },
  {
    name: "Universidad Católica San Antonio de Murcia",
    lat:37.6019241,
    lng: -0.9828
  },
  {
    name: "Universidad de Murcia",
    lat: 37.9874348,
    lng: -1.144788
  }   
];

// Array containing heroslide parameters
const heroSlide = [
  {
    image: "./assets/images/fotowebugr15102019.jpg",
    title: 'Study in Spain',
    cta: 'https://www.ugr.es/'
  },
  {
    image:'./assets/images/img2.rtve.es.jpg',
    title:'Study in Spain2',
    cta:'https://www.ucm.es'
  },
  {
    image:'./assets/images/Selectividad-Universidades_publicas-Educacion-Reportajes_323230131_87439154_1024x576.jpg',
    title:'Study in Spain3',
    cta:'https://www.ucm.es'
  },
  {
    image:'./assets/images/university-madrid.jpg',
    title:'Study in Spain4',
    cta: 'http://www.uam.es/UAM/Home.htm?language=en'
  },
]
// Hero slide section
let currentSlide = 0;
const heroImage = document.querySelector("#hero-img");
const heroTitle = document.querySelector("#hero-title");
const heroCta = document.querySelector("#hero-cta");

function slider (){
  console.log(currentSlide);
  if((currentSlide +1) < heroSlide.length) {
    currentSlide = currentSlide + 1;
  } else {
    currentSlide = 0;
  }
  console.log(currentSlide);
  heroImage.setAttribute('src', heroSlide[currentSlide].image);
  heroTitle.innerHTML = heroSlide[currentSlide].title;
  heroCta.setAttribute('href', heroSlide[currentSlide].cta);
}

// Contact with an university section

// This function creates a map element in index.html
function initMap() {
  let map;
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.0778269, lng: -6.0531472},
    zoom: 5,
  });
  // Creating a Marker for each university in our map.
  for (let i = 0; i < universities.length; i++){
    var marker = new google.maps.Marker({
      position: {lat: universities[i].lat, lng: universities[i].lng},
      map: map,
      title: universities[i].name,
    });
  }
};

// This function allows us to send mails trough the contact form using EmailJS service
function sendMail(){
  emailjs.send("gmail", "studyinspain", {
    "email-name": senderName.value,
    "email-address": senderEmail.value,
    "email-subject": senderSubject.value,
    "email-message": senderMessage.value,
    "email-copy": senderEmail.value
    })
    //  If the email is correctly sent, you´ll receive a "success notification" indicating it.
  .then (function (response){
    $("#contact-notification").css("visibility", "visible").append(`
        <div class="alert alert-success" role="alert"> 
            Your email has been successfully sent, you´ll receive a copy.
        </div>
    `);
    $('form :input').val('');
    console.log("SUCCESS", response);
  },
  //  If the email is correctly sent, you´ll receive a "fail notification" indicating it.
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

// Events 

// Loading functions with indexedDB.html
window.setInterval(slider, 5000);
window.addEventListener('load', slider());
window.addEventListener('load', initMap());

// Send EMail Function will load when sndButton is clicked. 
sendButton.addEventListener('click', function (){
  event.preventDefault();
  sendMail();
})