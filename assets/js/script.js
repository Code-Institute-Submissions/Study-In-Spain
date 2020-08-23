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
    lat: 36.8290435,
    lng: -2.4085415
  },
  {
    name: "Universidad de Cádiz",
    lat: 36.5376145,
    lng: -6.3026846
  },
  {
    name: "Universidad de Granada",
    lat: 37.1727607,
    lng: -3.6254233
  },
  {
    name: "Universidad de Huelva",
    lat: 37.2703746,
    lng: -6.9252031
  },
  {
    name: "Universidad Internacional de Andalucía",
    lat: 37.3985668,
    lng: -6.0108777
  },
  {
    name: "Universidad de Jaén",
    lat: 37.788533,
    lng: -3.777665
  },
  {
    name: "Universidad de Málaga",
    lat: 36.720448,
    lng:-4.416075
  },
  {
    name: "Universidad Pablo de Olavide",
    lat: 37.3552405,
    lng: -5.9395928
  },
  {
    name: "Universidad de Sevilla",
    lat: 37.3807579,
    lng:-5.9934194
  },
  {
    name: "Universidad de Zaragoza",
    lat: 41.6420639,
    lng: -0.9036952
  },
  {
    name: "Universidad San Jorge",
    lat: 41.7562122,
    lng: -0.8361195
  },
  {
    name: "Universidad de La Laguna",
    lat: 28.4810934,
    lng: -16.3180308
  },
  {
    name: "Universidad de Las Palmas de Gran Canaria",
    lat:28.0991889,
    lng: -15.4221074
  },
  {
    name: "Universidad de Cantabria",
    lat:43.4717039,
    lng: -3.8041625
  },
  {
    name: "Universidad Internacional Menéndez Pelayo UIMP",
    lat:43.4724469,
    lng: -3.7978149
  },
  {
    name: "Universidad de Castilla-La Mancha",
    lat:38.9934998,
    lng: -3.9276252
  },
  {
    name: "Universidad de Burgos",
    lat:42.34088,
    lng: -3.7296287
  },
  {
    name: "Universidad Católica de Ávila",
    lat:40.66687,
    lng: -4.7070727
  },
  {
    name: "Universidad Europea Miguel de Cervantes",
    lat:41.625981,
    lng: -4.7177047
  },
  {
    name: "IE Universidad",
    lat:40.9528852,
    lng: -4.1210251
  },
  {
    name: "Universidad de León",
    lat: 42.5942855,
    lng: -5.5699503
  },
  {
    name: "Universidad Pontificia de Salamanca",
    lat: 40.9631352,
    lng: -5.6690981
  },
  {
    name: "Universidad de Salamanca",
    lat: 40.9613376,
    lng: -5.6691138
  },
  {
    name: "Universidad de Valladolid",
    lat: 41.6569271 ,
    lng: -4.7162434
  },
  {
    name: "Universitat Abat Oliba CEU",
    lat: 41.409934,
    lng: 2.1241903
  },
  {
    name:"Universidad Autónoma de Barcelona",
    lat:41.5020282,
    lng: 2.1024979
  },
  {
    name: "Universidad de Barcelona",
    lat: 41.3866167,
    lng: 2.1617593 
  },
  {
    name: "Universidad de Girona",
    lat: 41.9857028,
    lng: 2.8250124
  },
  {
    name: "Universidad Internacional de Cataluña",
    lat: 41.405983,
    lng: 2.1212568
  },
  {
    name: "Universitat de Lleida",
    lat:41.6147654,
    lng: 0.617428
  },
  {
    name: "Universitat Oberta de Catalunya",
    lat: 41.4065636,
    lng: 2.1923929
  },
  {
    name: "Universidad Pompeu Fabra",
    lat: 41.3789955,
    lng: 2.177447
  },
  {
    name: "Universidad Ramón Llull",
    lat:41.411921,
    lng: 2.1137105
  },
  {
    name: "Universidad Rovira i Virgili",
    lat: 40.9867591,
    lng: 0.6107252
  },
  {
    name: "Universidad de Vic",
    lat: 41.9337609,
    lng: 2.2450932
  },
  {
    name: "Universidad Alfonso X El Sabio",
    lat:40.465405,
    lng: -3.6790474
  },

  {
    name: "Universidad de Alcalá",
    lat:40.4824722,
    lng: -3.3650561
  },
  {
    name: "Universidad Antonio de Nebrija",
    lat:40.4295038,
    lng: -3.7152578
  },
  {
    name: "Universidad Autónoma de Madrid",
    lat: 40.5466983,
    lng:-3.6965506
  },
  {
    name: "Universidad Camilo José Cela",
    lat:40.472508,
    lng: -3.9425317
  },
  {
    name: "Universidad Carlos III de Madrid",
    lat:40.3289083,
    lng: -3.7535093
  },
  {
    name: "Universidad Complutense de Madrid",
    lat:40.4454368,
    lng: -3.7321311
  },
  {
    name: "Universidad a Distancia de Madrid",
    lat: 40.6314045,
    lng: -4.0012371
  },
  {
    name:"Universidad Europea de Madrid",
    lat:40.3730607,
    lng: -3.9212715
  },
  {
    name: "Universidad Francisco de Vitoria",
    lat:40.4412685,
    lng: -3.8367478
  },
  {
    name: "Universidad Nacional de Educación a Distancia U.N.E.D",
    lat:40.4380164,
    lng:-3.7062415
  },
  {
    name:"Universidad Politécnica de Madrid",
    lat:40.4486372,
    lng: -3.7214685
  },
  {
    name: "Universidad Pontificia Comillas",
    lat:40.4295293,
    lng: -3.7136078
  },
  {
    name: "Universidad Rey Juan Carlos",
    lat:40.3357969,
    lng: -3.8790723
  },
  {
    name:"Universidad San Pablo C.E.U.",
    lat: 40.4426616,
    lng: -3.7198941
  },
  {
    name: "Universidad de Navarra",
    lat:42.8014918,
    lng: -1.7297744
  },

  {
    name:"Universidad Pública de Navarra",
    lat:42.8005243,
    lng: -1.6389523
  },
  {
    name: "Universidad de Alicante", 
    lat:38.3852446,
    lng: -0.5165048
  },
  {
    name: "Universitat Jaume I de Castellón",
    lat:39.9945711,
    lng: -0.071089
  },
  {
    name: "Universidad Miguel Hernández de Elche",
    lat:38.274814,
    lng: -0.6861645
  },
  {
    name: "Universidad Politécnica de Valéncia",
    lat:39.4807985,
    lng:-0.3428186
  },
  {
    name: "Universitat de València",
    lat: 39.4793254,
    lng: -0.361575
  },
  {
    name: "Universidad Cardenal Herrera - CEU",
    lat: 39.547283,
    lng: -0.3889937
  },
  {
    name: "Universidad Católica de Valencia S. Vicente M.",
    lat: 39.47024,
    lng: -0.3826548
  },
  {
    name: "Universidad de Extremadura",
    lat:38.8834507,
    lng: -7.0074847
  },
  {
    name:"Universidad de A Coruña",
    lat:43.3521822,
    lng: -8.4226314
  },
  {
    name: "Universidad de Santiago de Compostela",
    lat:42.8885225,
    lng: -8.5471613
  },
  {
    name: "Universidade de Vigo",
    lat:42.1697632,
    lng: -8.6867671
  },
  {
    name: "Universitat de las Illes Balears",
    lat:39.6242222,
    lng: 2.6276033
  },
  {
    name: "Universidad de La Rioja",
    lat:42.4649339,
    lng: 2.4266107
  },
  {
    name: "Universidad Mondragon Unibertsitatea",
    lat: 43.0512578,
    lng: -2.5099446
  },
  {
    name: "Universidad de Deusto",
    lat:43.290342,
    lng: -2.7381041
  },
  {
    name: "Universidad del País Vasco",
    lat:43.2553174,
    lng: -2.7500779
  },
  {
    name:  "Universidad de Oviedo",
    lat: 43.3617481,
    lng: -5.8484669
  },
  {
    name: "Universidad Politécnica de Cartagena",
    lat: 37.6019241,
    lng: -0.9828
  },
  {
    name: "Universidad Católica San Antonio de Murcia",
    lat:37.9914675,
    lng: -1.1876643
  },
  {
    name: "Universidad de Murcia",
    lat: 38.018751,
    lng: -1.1715687
  }   
];

// Array containing heroslide parameters
const heroSlide = [
  {
    image: "./assets/images/fotowebugr15102019.jpg",
    title: 'Polytechnic University',
    cta: 'https://www.upm.es/'
  },
  {
    image:'./assets/images/img2.rtve.es.jpg',
    title:'University Of Granada',
    cta:'https://www.ugr.es'
  },
  {
    image:'./assets/images/Selectividad-Universidades_publicas-Educacion-Reportajes_323230131_87439154_1024x576.jpg',
    title:'Complutense University',
    cta:'https://www.ucm.es'
  },
  {
    image:'./assets/images/university-madrid.jpg',
    title:'Autonomous University of Madrid',
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

// Scroll Reveal Scripts
window.sr = ScrollReveal();

sr.reveal('.navbar', {
  duration: 2000,
  origin: 'top'
});

sr.reveal('#hero-section', {
  duration: 2000,
  origin: 'bottom',
  distance: '300px'
});

sr.reveal('#why-to-title', {
  duration: 2000,
  origin: 'right'
});

sr.reveal('#why-img-container', {
  duration: 2000,
  origin: 'left',
  distance: '200px'
});

sr.reveal('.why-text', {
  duration: 2000,
  origin: 'bottom',
  distance: '300px'
});

sr.reveal('#what-to-section', {
  duration: 2000,
  origin: 'bottom',
  distance: '300px'
});

sr.reveal('.card', {
  duration: 2000,
  origin: 'right',
  distance: '300px',
});

sr.reveal('#university-locator-title', {
  duration: 2000,
  origin: 'top',
  distance: '300px'
});

sr.reveal('#map', {
  duration: 2000,
  origin: 'bottom',
  distance: '300px'
});

sr.reveal('#contact-title', {
  duration: 2000,
  origin: 'left',
  distance: '300px'
});

sr.reveal('#contact-subtitle', {
  duration: 2000,
  origin: 'left',
  distance: '300px'
});

sr.reveal('.form-group', {
  duration: 2000,
  origin: 'right',
  distance: '300px'
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Events 

// Loading functions with index.html
window.setInterval(slider, 5000);
window.addEventListener('load', slider());
window.addEventListener('load', initMap());

// Send EMail Function will load when sndButton is clicked. 
sendButton.addEventListener('click', function (){
  event.preventDefault();
  sendMail();
})