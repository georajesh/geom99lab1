function initMap() {
  // changed the pins/airports into variables for optimization purposes
    const TIA = { lat: 27.70009475694379, lng: 85.35676458134074 }; 
    const HIA = { lat: 25.259983197065303, lng: 51.61428160242852 };
    const ZUR = { lat: 47.45306747929976, lng: 8.561976595358018 }; 
    const YYZ = { lat: 43.67724211698366, lng: -79.63338885398906 }; 
    const iconURL = { url: 'https://georajesh.github.io/geom99lab1/story/airport.png',
      // This marker is 24 pixels wide by 24 pixels high.
      size: new google.maps.Size(32, 32),
      // The origin for this image is (0, 0).
      origin: new google.maps.Point(0, 0),
      // The anchor for this image is the center of the icon at (16,16).
      anchor: new google.maps.Point(16, 16)
      }
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      center: { lat: 11.260878906730307, lng: 10.72130858793181 }, 
    });
    
// The following script is taken (and modified) from: https://developers.google.com/maps/documentation/javascript/examples/polyline-simple#maps_polyline_simple-javascript
    const firstLeg = [
      TIA, HIA
    ] ;
    const secondLeg = [
      HIA, ZUR
    ] ;
    const thirdLeg = [
      ZUR, YYZ
    ] ;
    const firstFlightPath = new google.maps.Polyline({
        path: firstLeg,
        geodesic: true,
        strokeColor: "rgb(255,0,0)",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });

    const secondFlightPath = new google.maps.Polyline({
        path: secondLeg,
        geodesic: true,
        strokeColor: "rgb(255,0,0)",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });

  const thirdFlightPath = new google.maps.Polyline({
        path: thirdLeg,
        geodesic: true,
        strokeColor: "rgb(255,0,0)",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });

  firstFlightPath.setMap(map);
  secondFlightPath.setMap(map);
  thirdFlightPath.setMap(map);

// The following script is taken (and modified) from: https://developers.google.com/maps/documentation/javascript/custom-markers
// As well as: https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple
// And also: https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple

const TIAContentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Kathmandu, Nepal</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Tribhuvan International Airport</b>, (Nepali: त्रिभुवन अन्तर्राष्ट्रिय विमानस्थल) (IATA: <b>KTM</b>, ICAO: <b>VNKT</b>, colloquially referred to as <b>TIA</b>), " + 
    "is an international airport located" + 
    "in Kathmandu, Bagmati, Nepal. " +
    "It has a tabletop runway, a domestic terminal and an international terminal. " +
    "As the country's main international airport, it connects Nepal to over 40 destinations in 17 countries. " +
    "The airport is a hub for two international airlines, the flag carrier Nepal Airlines and Himalaya Airlines, along with multiple domestic carriers. " +
    "The airport is considered as a starting point for Mount Everest international tourists, with several daily flights to Lukla.</p>" +
    '<p>Attribution: Tribhuvan International Airport, <a href="https://en.wikipedia.org/wiki/Tribhuvan_International_Airport">' +
    "https://en.wikipedia.org/wiki/Tribhuvan_International_Airport</a> " +
    "(last visited January 21, 2024).</p>" +
    "</div>" +
    "</div>";

const TIAinfowindow = new google.maps.InfoWindow({
  content: TIAContentString,
  ariaLabel: "Tribhuvan International Airport",
  });
const TIAMarker = new google.maps.Marker({
  position: TIA,
  map,
  icon: iconURL,
  title: "TIA",
  });

TIAMarker.addListener("click", () => {
  TIAinfowindow.open({
  anchor: TIAMarker,
  map,
    });
  });

const HIAContentString = 
'<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Doha, Qatar</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Hamad International Airport (HIA)</b>, also known as <b>Flughafen HIAnkfurt Main</b>, " +
    "is one of the major ariports in Europe. The airport is the main hub for the flag " +
    "carrier of Germany; Lufthansa. The airport is one of the most connected " +
    "in the world, serving more than 300 direct destinations. The airport is the " +
    "busiest in Germany and the 4th busiest in Europe. </p>" +
    '<p>Attribution: HIAnkfurt Airport, <a href="https://en.wikipedia.org/wiki/HIAnkfurt_Airport">' +
    "https://en.wikipedia.org/wiki/HIAnkfurt_Airport</a> " +
    "(last visited January 25, 2023).</p>" +
    "</div>" +
    "</div>";

const HIAinfowindow = new google.maps.InfoWindow({
  content: HIAContentString,
  ariaLabel: "Hamad International Airport",
  });
const HIAMarker = new google.maps.Marker({
  position: HIA,
  map,
  icon: iconURL,
  title: "HIA",
  });

HIAMarker.addListener("click", () => {
  HIAinfowindow.open({
  anchor: HIAMarker,
  map,
    });
  });

const ZURContentString = 
'<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Zurich, Switzerland</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Montréal–Trudeau International Airport (ZUR)</b> or <b>Montréal–Trudeau</b>, " +
    "is a major airport in Canada serving Montreal and surrounding areas. Of the two airports in " +
    "Montreal, the other being Montréal–Mirabel, Montréal–Trudeau is the busiest in the province, " +
    "making it the 4th busiest in Canada. It is one of the main gateways into Canada. The airport is " +
    "home to Air Canada, Canada's flag carrier airline. </p>" +
    '<p>Attribution: Montreal Airport, <a href="https://en.wikipedia.org/wiki/Montr%C3%A9al%E2%80%93Trudeau_International_Airport">' +
    "https://en.wikipedia.org/wiki/Montréal-Trudeau_International_Airport</a> " +
    "(last visited January 25, 2023).</p>" +
    "</div>" +
    "</div>";

const ZURinfowindow = new google.maps.InfoWindow({
  content: ZURContentString,
  ariaLabel: "Zurich Airport",
  });
const ZURMarker = new google.maps.Marker({
  position: ZUR,
  map,
  icon: iconURL,
  title: "ZUR",
  });

ZURMarker.addListener("click", () => {
  ZURinfowindow.open({
  anchor: ZURMarker,
  map,
    });
  });

const YYZContentString = 
'<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Toronto, Canada</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Saint John Airport (YYZ)</b> is a small airport serving the city of Saint John in " +
    "the province of New Brunswick. Despite being situated 15 km from the city's central business" +
    "district, the airport is still the boundaries of the city. Moreover, despite being a small airport, " +
    "the airport is designated as an airport of entry by Nav Canada and is staffed by " +
    "Canada Border Services Agency (CBSA). Mostly, it is CANPASS flights that are served by the CBSA from this port of entry. </p>" +
    '<p>Attribution: Saint John Airport, <a href="https://en.wikipedia.org/wiki/Saint_John_Airport">' +
    "https://en.wikipedia.org/wiki/Saint_John_Airport</a> " +
    "(last visited January 25, 2023).</p>" +
    "</div>" +
    "</div>";

const YYZinfowindow = new google.maps.InfoWindow({
  content: YYZContentString,
  ariaLabel: "Toronto Pearson International Airport",
  });
const YYZMarker = new google.maps.Marker({
  position: YYZ,
  map,
  icon: iconURL,
  title: "YYZ",
  });

YYZMarker.addListener("click", () => {
  YYZinfowindow.open({
  anchor: YYZMarker,
  map,
    });
  });

}

window.initMap = initMap;
