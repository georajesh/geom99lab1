function initMap() {
  // changed the pins/airports into variables for optimization purposes
    const dxb = { lat: 25.253290925785134, lng: 55.36555478073066 };
    const fra = { lat: 50.0379603540928, lng: 8.562533606281635 };
    const yul = { lat: 45.46604694658018, lng: -73.74507989720708 };
    const ysj = { lat: 45.32915634620157, lng: -65.89039652882502 };
    const iconURL = { url: 'https://francis-soriano.github.io/geom99lab1/story/airport.png' }
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      center: { lat: 43.43464856542449, lng: -27.339630669624995 },
    });
    
// The following script is taken (and modified) from: https://developers.google.com/maps/documentation/javascript/examples/polyline-simple#maps_polyline_simple-javascript
    const firstLeg = [
      dxb, fra
    ] ;
    const secondLeg = [
      fra, yul
    ] ;
    const thirdLeg = [
      yul, ysj
    ] ;
    const firstFlightPath = new google.maps.Polyline({
        path: firstLeg,
        geodesic: true,
        strokeColor: "#FFADAD",
        strokeOpacity: 1.0,
        strokeWeight: 4,
    });

    const secondFlightPath = new google.maps.Polyline({
        path: secondLeg,
        geodesic: true,
        strokeColor: "#CAFFBF",
        strokeOpacity: 1.0,
        strokeWeight: 4,
    });

  const thirdFlightPath = new google.maps.Polyline({
        path: thirdLeg,
        geodesic: true,
        strokeColor: "#BDB2FF",
        strokeOpacity: 1.0,
        strokeWeight: 4,
    });

  firstFlightPath.setMap(map);
  secondFlightPath.setMap(map);
  thirdFlightPath.setMap(map);

// The following script is taken (and modified) from: https://developers.google.com/maps/documentation/javascript/custom-markers
// As well as: https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple
// And also: https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple

const dxbContentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Dubai</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Dubai International Airport</b>, known by the airport code <b>DXB</b>, is the largest " +
    "international airport in the United Arab Emirates. It is one of " +
    "the world's busiest airports -- the busiest for Airbus A380 and Boeing " +
    "B777 movements. The airport is the hub for Emirates, the largest airline " +
    "in the Middle East. The airline operates out of the airport's " +
    "Terminal 3.</p>" +
    '<p>Attribution: Dubai International Airport, <a href="https://en.wikipedia.org/wiki/Dubai_International_Airport">' +
    "https://en.wikipedia.org/wiki/Dubai_International_Airport</a> " +
    "(last visited January 25, 2023).</p>" +
    "</div>" +
    "</div>";

const dxbinfowindow = new google.maps.InfoWindow({
  content: dxbContentString,
  ariaLabel: "Dubai Airport",
  });
const dxbMarker = new google.maps.Marker({
  position: dxb,
  map,
  icon: iconURL,
  title: "DXB",
  });

dxbMarker.addListener("click", () => {
  dxbinfowindow.open({
  anchor: dxbMarker,
  map,
    });
  });

const fraContentString = 
'<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Frankfurt</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Frankfurt Airport (FRA)</b>, also known as <b>Flughafen Frankfurt Main</b>, " +
    "is one of the major ariports in Europe. The airport is the main hub for the flag " +
    "carrier of Germany; Lufthansa. The airport is one of the most connected " +
    "in the world, serving more than 300 direct destinations. The airport is the " +
    "busiest in Germany and the 4th busiest in Europe. </p>" +
    '<p>Attribution: Frankfurt Airport, <a href="https://en.wikipedia.org/wiki/Frankfurt_Airport">' +
    "https://en.wikipedia.org/wiki/Frankfurt_Airport</a> " +
    "(last visited January 25, 2023).</p>" +
    "</div>" +
    "</div>";

const frainfowindow = new google.maps.InfoWindow({
  content: fraContentString,
  ariaLabel: "Frankfurt Airport",
  });
const fraMarker = new google.maps.Marker({
  position: fra,
  map,
  icon: iconURL,
  title: "FRA",
  });

fraMarker.addListener("click", () => {
  frainfowindow.open({
  anchor: fraMarker,
  map,
    });
  });

const yulContentString = 
'<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Montreal</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Montréal–Trudeau International Airport (YUL)</b> or <b>Montréal–Trudeau</b>, " +
    "is a major airport in Canada serving Montreal and surrounding areas. Of the two airports in " +
    "Montreal, the other being Montréal–Mirabel, Montréal–Trudeau is the busiest in the province, " +
    "making it the 4th busiest in Canada. It is one of the main gateways into Canada. The airport is " +
    "home to Air Canada, Canada's flag carrier airline. </p>" +
    '<p>Attribution: Montreal Airport, <a href="https://en.wikipedia.org/wiki/Montr%C3%A9al%E2%80%93Trudeau_International_Airport">' +
    "https://en.wikipedia.org/wiki/Montréal-Trudeau_International_Airport</a> " +
    "(last visited January 25, 2023).</p>" +
    "</div>" +
    "</div>";

const yulinfowindow = new google.maps.InfoWindow({
  content: yulContentString,
  ariaLabel: "Montreal Airport",
  });
const yulMarker = new google.maps.Marker({
  position: yul,
  map,
  icon: iconURL,
  title: "YUL",
  });

yulMarker.addListener("click", () => {
  yulinfowindow.open({
  anchor: yulMarker,
  map,
    });
  });

const ysjContentString = 
'<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Saint John</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Saint John Airport (YSJ)</b> is a small airport serving the city of Saint John in " +
    "the province of New Brunswick. Despite being situated 15 km from the city's central business" +
    "district, the airport is still the boundaries of the city. Moreover, despite being a small airport, " +
    "the airport is designated as an airport of entry by Nav Canada and is staffed by " +
    "Canada Border Services Agency (CBSA). Mostly, it is CANPASS flights that are served by the CBSA from this port of entry. </p>" +
    '<p>Attribution: Saint John Airport, <a href="https://en.wikipedia.org/wiki/Saint_John_Airport">' +
    "https://en.wikipedia.org/wiki/Saint_John_Airport</a> " +
    "(last visited January 25, 2023).</p>" +
    "</div>" +
    "</div>";

const ysjinfowindow = new google.maps.InfoWindow({
  content: ysjContentString,
  ariaLabel: "Saint John Airport",
  });
const ysjMarker = new google.maps.Marker({
  position: ysj,
  map,
  icon: iconURL,
  title: "YSJ",
  });

ysjMarker.addListener("click", () => {
  ysjinfowindow.open({
  anchor: ysjMarker,
  map,
    });
  });

}

window.initMap = initMap;
