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
    "<p><b>Hamad International Airport (HIA)</b>, (IATA: <b>DOH</b>, ICAO: <b>OTHH</b>) (Arabic: مطار حمد الدولي, Maṭār Ḥamad al-Duwalī) is an international airport in the State of Qatar," +
    "and the home of Qatar’s flag carrier airline, Qatar Airways. Located east of its capital, Doha, it replaced the nearby " +
    "Doha International Airport as Qatar's principal and main national airport. " +
    "Formerly known as New Doha International Airport (NDIA), Hamad International Airport was originally scheduled to open in 2008, " +
    "but after a series of costly delays, the airport finally opened six years overdue on 30 April 2014 with a ceremonial Qatar Airways flight landing from nearby Doha International.  </p>" +
    '<p>Attribution: Hamad International Airport, <a href="https://en.wikipedia.org/wiki/Hamad_International_Airport">' +
    "https://en.wikipedia.org/wiki/Hamad_International_Airport</a> " +
    "(last visited January 21, 2024).</p>" +
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
    "<p><b>Zurich Airport (ZRH)</b> (IATA: <b>ZRH</b>, ICAO: <b>LSZH</b>) is the largest international airport " +
    "of Switzerland and the principal hub of Swiss International Air Lines. " +
    "It serves Zürich, Switzerland's largest city, and, with its surface transport links, much of the rest of the country." +
    "The airport is located 13 kilometres (8 mi) north of central Zürich, in the municipalities of Kloten, Rümlang, " +
    "Oberglatt, Winkel, and Opfikon, all of which are within the canton of Zürich. </p>" +
    '<p>Attribution: Zurich Airport, <a href="https://en.wikipedia.org/wiki/Zurich_Airport">' +
    "https://en.wikipedia.org/wiki/Zurich_Airport</a> " +
    "(last visited January 21, 2024).</p>" +
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
    "<p><b>Toronto Pearson International Airport</b> (IATA: <b>YYZ</b>, ICAO: <b>CYYZ</b>; " +
    "originally <b>Malton Airport</b>, simply <b>Toronto Pearson</b> or <b>Pearson</b>, " +
    "and officially <b>Lester B. Pearson International Airport</b>) is an international airport located in Mississauga, Ontario, Canada. " +
    "It is the main airport serving Toronto, its metropolitan area, and the surrounding region known as the Golden Horseshoe. " +
    "The airport is named in honour of Lester B. Pearson, who served as the 14th Prime minister of Canada (1963–1968) and received the Nobel Peace Prize in 1957 for his humanitarian work in peacekeeping. </p>" +
    '<p>Attribution: Toronto Pearson International Airport, <a href="https://en.wikipedia.org/wiki/Toronto_Pearson_International_Airport">' +
    "https://en.wikipedia.org/wiki/Toronto_Pearson_International_Airport</a> " +
    "(last visited January 21, 2024).</p>" +
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
