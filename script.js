Vue.createApp({
  data() {
    return {
      bridgeCoords: {
        '01': [[[
          [113.5609692,22.2045011],
          [113.5614145,22.2031452],
          [113.562187,22.2006618],
          [113.562482,22.1996387],
          [113.5623479,22.199435],
          [113.5622996,22.1992016],
          [113.5623854,22.1988639],
          [113.5626805,22.1985609],
          [113.5628951,22.1981685],
          [113.5630023,22.1975129],
          [113.5630292,22.197339],
          [113.5630882,22.1956205],
          [113.5631043,22.1915327],
          [113.5631204,22.1882047],
          [113.5631311,22.1832424],
          [113.5631418,22.1760793],
          [113.5631204,22.172741],
          [113.5631847,22.1688264],
          [113.5631204,22.1665213],
          [113.5631096,22.1661139],
          [113.5630774,22.1656867],
          [113.5629594,22.1654582],
          [113.5628897,22.1651998],
          [113.5626966,22.1648571],
          [113.5625786,22.1646087],
          [113.5626322,22.1643901],
          [113.562777,22.1643354],
          [113.5630989,22.1646583],
          [113.5633832,22.1649663],
          [113.5637534,22.1651551],
          [113.5638714,22.1651055],
          [113.5643274,22.1650011],
          [113.5645849,22.1649316],
          [113.5649389,22.1648372],
          [113.5649979,22.165016],
          [113.5645688,22.1651949],
          [113.5644776,22.1653539],
          [113.5645419,22.1656668],
          [113.5646063,22.1658308],
          [113.5646868,22.1660096],
          [113.5647029,22.1663574],
          [113.5645634,22.1664965],
          [113.5643864,22.16672],
          [113.5639465,22.1670479],
          [113.5638446,22.1673162],
          [113.5637265,22.1677236],
          [113.5636783,22.1681806],
          [113.5636675,22.1717276],
          [113.5637212,22.1763277],
          [113.5637105,22.1804408],
          [113.5635388,22.1861533],
          [113.5636032,22.1895011],
          [113.5635066,22.1952828],
          [113.5633671,22.1979649],
          [113.5634637,22.1984317],
          [113.563571,22.1988589],
          [113.563571,22.1992761],
          [113.5633993,22.1996039],
          [113.5628843,22.1999317],
          [113.5622191,22.201978],
          [113.5612965,22.2045408],
          [113.5612482,22.2045706],
          [113.5610819,22.2045383],
          [113.5609692,22.2045011],
        ]],4500],
        '02': [[[
          [113.5438192,22.1866698],
          [113.5442483,22.1847723],
          [113.5446024,22.1831629],
          [113.544656,22.1831306],
          [113.5447097,22.1830189],
          [113.5447365,22.1828599],
          [113.5447955,22.1825569],
          [113.5451227,22.1808928],
          [113.545627,22.1786674],
          [113.5459757,22.1769635],
          [113.5466141,22.1741022],
          [113.5471398,22.1717972],
          [113.5475689,22.16982],
          [113.5485989,22.1652644],
          [113.548623,22.16517],
          [113.5486847,22.1651055],
          [113.5487464,22.1651129],
          [113.5488027,22.1651253],
          [113.5488135,22.1651849],
          [113.5487545,22.1653315],
          [113.5483977,22.1669386],
          [113.5473812,22.1715885],
          [113.5469842,22.1734564],
          [113.5467803,22.1743406],
          [113.5465765,22.1751851],
          [113.5464263,22.1758856],
          [113.5457933,22.1789605],
          [113.5453802,22.1807935],
          [113.5448867,22.1828103],
          [113.5448545,22.1828326],
          [113.5448331,22.1829046],
          [113.5447821,22.1830971],
          [113.5447365,22.183312],
          [113.5447204,22.1835901],
          [113.5445085,22.1844246],
          [113.5439748,22.1867195],
          [113.5439506,22.1867965],
          [113.5438943,22.1869604],
          [113.5438138,22.1869753],
          [113.5438165,22.1868959],
          [113.5438192,22.1866698]
        ]],2540],
        '03': [[[
          [113.5320497,22.1793082],
          [113.5393935,22.1653936],
          [113.5397905,22.1654482],
          [113.5394096,22.1666753],
          [113.5377413,22.1698697],
          [113.5334927,22.1785085],
          [113.5330045,22.1792635],
          [113.532849,22.1793877],
          [113.5320657,22.1793132],
          [113.5320497,22.1793082]
        ]],2000],
      },
      crossBridgeTime: undefined,
      routeCrossingBridge: {},
      busMap: undefined,
      busLayerGroup: [],
      routeLayerGroup: [],
      stationLayerGroup: [],
      mapEnabled: false,
      mapRefreshed: false,
      isStuck: false,
      scroll: true,
      noInternet: false,
      currentPage: 'home',
      messages: undefined,
      busList: undefined,
      busRoute: "",
      busColor: "",
      busDirection: 0,
      busAvailableDirection: "2",
      busRouteInfo: undefined,
      busRouteData: undefined,
      busRouteTraffic: undefined,
      busInfoLocations: undefined,
      busStationLocations: undefined,
      busRouteChange: false,
      busChangeValid: undefined,
      arrivingBuses: [],
      colorScheme: 'light',
      intervals: [],
      noSuchNumberError: false,
      routesGenerated: {},
      currentlyOpenedIndex: undefined,
      currentScrollToWarning: 0,
      corsProxy: "https://cors-anywhere.matthewngan.workers.dev/?",
      // corsProxy: "",
	  };
  },
  methods: {
    calculateDistance(lon1,lat1,lon2,lat2){
      const R = 6371e3; // metres
      const radlat1 = lat1 * Math.PI/180; // φ, λ in radians
      const radlat2 = lat2 * Math.PI/180;
      const latD = (lat2-lat1) * Math.PI/180;
      const lonD = (lon2-lon1) * Math.PI/180;

      const a = Math.sin(latD/2) * Math.sin(latD/2) +
                Math.cos(radlat1) * Math.cos(radlat2) *
                Math.sin(lonD/2) * Math.sin(lonD/2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

      const d = R * c; // in metres
      return d;
    },
    calculateTime(nextStop,targetStop,loc){
      let totaldistance = 0;
      let currentRoutes = [];
      for (let i = 0; i < this.busRouteTraffic[nextStop-1].routeCoordinates.split(";").length-1; i++) {
        currentRoutes.push({
          'x': parseFloat(this.busRouteTraffic[nextStop-1].routeCoordinates.split(";")[i].split(",")[0]),
          'y': parseFloat(this.busRouteTraffic[nextStop-1].routeCoordinates.split(";")[i].split(",")[1]),
        });
      }
      let index = currentRoutes.findIndex(point => point.x == parseFloat(loc[0]) && point.y == parseFloat(loc[1]));
      for (let i = index; i < this.busRouteTraffic[nextStop-1].routeCoordinates.split(";").length-2; i++) {
        totaldistance += this.calculateDistance(this.busRouteTraffic[nextStop-1].routeCoordinates.split(";")[i].split(",")[0],this.busRouteTraffic[nextStop-1].routeCoordinates.split(";")[i].split(",")[1],this.busRouteTraffic[nextStop-1].routeCoordinates.split(";")[i+1].split(",")[0],this.busRouteTraffic[nextStop-1].routeCoordinates.split(";")[i+1].split(",")[1])*parseFloat(this.busRouteTraffic[nextStop-1].routeTraffic);
      }
      for (let route of this.busRouteTraffic.slice(nextStop,targetStop)) {
        for (let i = 0; i < route.routeCoordinates.split(";").length-2; i++) {
          let lon1 = route.routeCoordinates.split(";")[i].split(",")[0]; let lat1 = route.routeCoordinates.split(";")[i].split(",")[1];
          let lon2 = route.routeCoordinates.split(";")[i+1].split(",")[0]; let lat2 = route.routeCoordinates.split(";")[i+1].split(",")[1];
          totaldistance += this.calculateDistance(lon1,lat1,lon2,lat2)*parseFloat(route.routeTraffic);
        }
      }
      return Math.ceil(totaldistance / 750);
    },
    changeDirection() {
      if (this.busDirection == 0) {
        this.busDirection = 1;
      } else {
        this.busDirection = 0;
      }
      
      const details = document.querySelectorAll("details");
      details.forEach(detail => {
        detail.removeAttribute("open");
      });
      
      const changeDirectionIcon = document.querySelector("#changedirection-icon");
      changeDirectionIcon.disabled = true;
      const changeDirectionText = document.querySelector("#changedirection-text");
      changeDirectionText.disabled = true;
      this.routeCrossingBridge = [];
      this.busRouteTraffic = undefined;
      this.fetchTraffic();
      this.fetchRouteData();
      this.fetchData();
      this.setupBusMarkersOnMap();
      this.setupStationMarkersOnMap();
      this.setupRoutesOnMap();
    },
    disableMap() {
      this.mapEnabled = false;
      localStorage.mapEnabled = false;
      if (this.busMap) {
        this.busMap.remove();
      }
      this.busMap = undefined;
      this.busLayerGroup = [];
      this.stationLayerGroup = [];
      this.routeLayerGroup = [];
    },
    enableMap() {
      this.mapEnabled = true;
      localStorage.mapEnabled = true;
    },
    fetchData() {
      if (this.busRoute != "") {
        this.busRouteInfo = undefined;
        fetch(
        `${this.corsProxy}https://bis.dsat.gov.mo:37812/macauweb/routestation/bus?routeName=${this.busRoute}&dir=${this.busDirection}`)
        .then(response => response.json())
        .then(data => {
          this.busRouteInfo = data.data.routeInfo;
        })
        .catch(() => {
          this.busRouteInfo = undefined;
          this.noInternet = true;
        });
        fetch(`${this.corsProxy}https://bis.dsat.gov.mo:37812/macauweb/routestation/location?routeName=${this.busRoute}&dir=${this.busDirection}&lang=zh-tw`)
        .then(response => response.json())
        .then(data => {
          this.busInfoLocations = data.data.busInfoList;
          this.busStationLocations = data.data.stationInfoList;
          this.currentPage = 'info';
          if (this.scroll) {
            this.scroll = !this.scroll;
          }
        })
        .catch(() => {
          this.noInternet = true;
        });
      } else {
        this.busRouteInfo = undefined;
      }
    },
    fetchDyMessage() {
      fetch(`${this.corsProxy}https://bis.dsat.gov.mo:37812/macauweb/getDyMessage.html?lang=zh_tw`)
      .then(response => response.json())
      .then(data => {
        this.messages = [];
        for (let item of data.data) {
          var startTime = Date.parse(item.startTime.replace(' ','T') + '+08:00');
          var expireTime = Date.parse(item.expireTime.replace(' ','T') + '+08:00');
          var now = Date.now();
          if (startTime < now && expireTime > now) {
            this.messages.push(item.message);
          }
        }
      })
      .catch(() => {
        this.noInternet = true;
      })
    },
    fetchRouteData() {
      if (this.busRoute != "") {
        fetch(
        `${this.corsProxy}https://bis.dsat.gov.mo:37812/macauweb/getRouteData.html?routeName=${this.busRoute}&dir=${this.busDirection}&lang=zh-tw`).
        then(response => response.json()).
        then(data => {
          this.busRouteData = data.data.routeInfo;
          this.busAvailableDirection = data.data.direction;
          if (data.data.direction == "0") {
            const changeDirectionIcon = document.querySelector("#changedirection-icon");
            if (changeDirectionIcon) changeDirectionIcon.disabled = false;
            const changeDirectionText = document.querySelector("#changedirection-text");
            if (changeDirectionText) changeDirectionText.disabled = false;
          }
          this.busRouteChange = (data.data.routeInfo.filter(sta => sta.suspendState == "1").length != 0);
          for (let i = 0; i < this.busRouteData.length-2; i++) {
            if (this.busRouteData.slice()[i].staCode[0] != this.busRouteData.slice()[i+1].staCode[0] && this.busRouteData.slice()[i].staCode[0] != 'C' && this.busRouteData.slice()[i+1].staCode[0] != 'C') {
              this.routeCrossingBridge[i] = [this.busRouteData.slice()[i].staCode[0],this.busRouteData.slice()[i+1].staCode[0]];
            }
          }
        })
        // .catch(() => {
        //   this.busRouteData = undefined;
        //   this.noSuchNumberError = true;
        //   this.noInternet = true;
        // });
      }
    },
    fetchRoutes() {
      fetch(`${this.corsProxy}https://bis.dsat.gov.mo:37812/macauweb/getRouteAndCompanyList.html?lang=zh_tw`)
      .then(response => response.json())
      .then(data => {
        this.busList = data.data;
      })
      .catch(() => {
        this.noInternet = true;
      });
    },
    fetchTraffic(){
      if (this.busRoute != "") {
        fetch(`${this.corsProxy}https://bis.dsat.gov.mo:37011/its/Bridge/getTime.html?lang=zh_tw`)
        .then(response => response.json())
        .then(data => {
          this.crossBridgeTime = data.data.timeArray;
        })
        let url = `${this.corsProxy}https://bis.dsat.gov.mo:37812/ddbus/common/supermap/route/traffic?routeCode=${"0".repeat(5-this.busRoute.length) + this.busRoute}&direction=${this.busDirection}&indexType=00&device=web`
        fetch(url).then(response => response.json()).then(data => {
          this.noSuchNumberError = false;
          let tempData = data.data.slice();
          this.waitUntil(() => {
            for (let bridgeRoute in this.routeCrossingBridge) {
              let direction = undefined;
              if (this.routeCrossingBridge[bridgeRoute][0] == "T") {
                direction = 0;
              } else {
                direction = 1;
              }
              let onbridge = undefined;
              for (let point of tempData.slice()[parseInt(bridgeRoute)].routeCoordinates.split(';')) {
                if (point != '') {
                  let loc = point.split(',')
                  for (let id in this.bridgeCoords) {
                    let poly = turf.polygon(this.bridgeCoords[id][0]);
                    let pt = turf.point([parseFloat(loc[0]),parseFloat(loc[1])]);
                    if (turf.booleanPointInPolygon(pt,poly)) {
                      onbridge = id;
                      break;
                    }
                  }
                  if (onbridge) {
                    break;
                  }
                }
              }
              let timeToCrossBridgeInSec = parseInt(this.crossBridgeTime.slice()[direction].times.filter(bridge => bridge.id == onbridge)[0].time);
              if (timeToCrossBridgeInSec > -1) {
                let speed = (this.bridgeCoords[onbridge].slice()[1] / timeToCrossBridgeInSec * 3.6) > 50 ? 50 : this.bridgeCoords[onbridge].slice()[1] / timeToCrossBridgeInSec * 3.6;
                let traffic = 1 / (speed / 3.6 * 60 / 750);
                tempData[parseInt(bridgeRoute)].routeTraffic = traffic.toString();
              }
            }
            this.busRouteTraffic = tempData.slice();
          },false)
        })
        .catch(() => {
          this.busRouteTraffic = undefined;
          this.noInternet = true;
        });
      } else {
        this.busRouteTraffic = undefined;
        this.noSuchNumberError = false;
      }
    },
    getArrivingBuses(index) {
      this.arrivingBuses = [];
      this.arrivingBuses[index] = [];
      if (this.busRouteInfo) {
        let stationBefore = this.busRouteInfo.slice(0, index).reverse();
        var count = 0;
        for (let i = 0; i < index; i++) {
          for (let comingBus of stationBefore[i].busInfo) {
            if (count < 3) {
              // if (comingBus.speed > 35) var routeTraffic = 1;
              // else if (comingBus.speed > 25) var routeTraffic = 2;
              // else if (comingBus.speed > 15) var routeTraffic = 3;
              // else if (comingBus.speed > 10) var routeTraffic = 4;
              // else var routeTraffic = 5;
              var routeTraffic = this.busRouteTraffic[index-i-1].routeTraffic;
              this.arrivingBuses[index].push({
                'plate': `${comingBus.busPlate.substring(0,2)}-${comingBus.busPlate.substring(2,4)}-${comingBus.busPlate.substring(4,6)}`,
                'speed': comingBus.speed,
                'distanceToThis': i + 1,
                'durationGet': true,
                'duration': this.calculateTime(index-i,index,[this.busInfoLocations.filter(bus => bus.busPlate == comingBus.busPlate)[0].longitude,this.busInfoLocations.filter(bus => bus.busPlate == comingBus.busPlate)[0].latitude])+i,
                'routeTraffic': routeTraffic,
              });
              count++;
            }
          }
        }
        this.arrivingBuses[index].sort((x,y) => (x.duration > y.duration) ? 1 : ((x.duration < y.duration) ? -1 : 0));
      }
    },
    getName(code) {
      if (
      this.busRouteData != undefined &&
      this.busRouteData.filter(station => code == station.staCode)[0] !=
      undefined)
      {
        return this.busRouteData.filter(station => code == station.staCode)[0].
        staName;
      }
    },
    initMap() {
      var mapboxAccessToken = 'pk.eyJ1IjoibWF0dGhld25nYW4iLCJhIjoiY2tqMmJ1bmp1M2E3ODJ5bjRtejhsbDBnMSJ9.8d5AH06RmzA6od3W8UNz9A';
      if (window.location.href.includes("127.0.0.1")) {
        mapboxAccessToken = 'pk.eyJ1IjoibWF0dGhld25nYW4iLCJhIjoiY2tqMTNzNzJuMWtjaDJ5bTBucjNrM3I3NiJ9.DOqgKmjCq8zL50KNIvZNlg';
      }
      var mapStyle = 'mapbox/light-v9';
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        mapStyle = 'mapbox/dark-v9';
      }
      mapboxgl.accessToken = mapboxAccessToken;
      this.busMap = new mapboxgl.Map({
        container: 'bus-map',
        style: 'mapbox://styles/' + mapStyle, // stylesheet location
        center: [113.565,22.165], // starting position [lng, lat]
        zoom: 10.5, // starting zoom
        minZoom: 10,
        maxZoom: 16.75,
        maxBounds: [[113.4,22],[113.75,22.3]]
      });
      this.busMap.addControl(new MapboxLanguage({
        defaultLanguage: 'mul'
      }));
      this.busMap.dragRotate.disable();
      this.busMap.touchZoomRotate.disableRotation();
      this.busMap.on('zoom', () => {
        if (this.busMap.getZoom() > 13.5) {
          for (let mapStation of document.querySelectorAll('.map-station')) {
            mapStation.classList.toggle('shown',true)
          }
        } else {
          for (let mapStation of document.querySelectorAll('.map-station')) {
            mapStation.classList.toggle('shown',false)
          }
        }
        if (this.busMap.getZoom() > 12) {
          for (let mapImportantStationText of document.querySelectorAll('.map-important-station span')) {
            mapImportantStationText.classList.toggle('shown',true);
          }
          for (let busMarker of document.querySelectorAll('.bus-marker')) {
            busMarker.classList.toggle('small',false);
          }
        } else {
          for (let mapImportantStationText of document.querySelectorAll('.map-important-station span')) {
            mapImportantStationText.classList.toggle('shown',false);
          }
          for (let busMarker of document.querySelectorAll('.bus-marker')) {
            busMarker.classList.toggle('small',true);
          }
        }
      })
      
    },
    openInfoBox() {
      this.currentPage = 'message';
      document.querySelector('#info-box').classList.add('shown');
    },
    requestRoute(route,color) {
      if (this.mapEnabled && !this.busMap) {
        this.initMap();
      }
      this.currentPage = 'info';
      this.busRoute = route;
      this.scroll = true;
      this.busColor = color;
      this.routeChanged();
      document.body.classList.add("no-scroll");
      document.documentElement.classList.add("no-scroll");
      for (let element of document.querySelectorAll("#app, #home, #home *")) {
        element.classList.add("no-scroll");
      }
      document.querySelector("#main-route-info").addEventListener("scroll", () => {
        if (document.querySelector(".bus-title")) {
          var thisTop = document.querySelector(".route-input").offsetTop;
          if (this.mapEnabled) var titleHeight = document.querySelector(".bus-title").offsetHeight + document.querySelector("#bus-map").offsetHeight;
          else var titleHeight = document.querySelector(".bus-title").offsetHeight
          document.querySelector(".route-input").classList.toggle("stuck", thisTop > titleHeight);
        } else {
          document.querySelector(".route-input").classList.toggle("stuck", false);
        }
      });
      this.setupStationMarkersOnMap();
      var dataInterval = setInterval(() => {
        this.fetchData();
        this.setupBusMarkersOnMap();
      }, 10000);
      var indexInterval = setInterval(() => {
        this.getArrivingBuses(this.currentlyOpenedIndex);
      },5000);
      var trafficInterval = setInterval(() => {
        this.fetchTraffic();
        this.setupRoutesOnMap();
      },60000);
      this.intervals = [dataInterval, indexInterval, trafficInterval];
    },
    resetMap() {
      this.busMap.setCenter([113.565,22.165]);
      this.busMap.setZoom(10.5);
      if (this.stationLayerGroup != []) {
        for (let marker of this.stationLayerGroup) {
          marker.remove();
        }
      }
      this.stationLayerGroup = [];
      if (this.busLayerGroup != []) {
        for (let marker of this.busLayerGroup) {
          marker.remove();
        }
      }
      this.busLayerGroup = [];
      if (this.routeLayerGroup != []) {
        for (let i of this.routeLayerGroup) {
          this.busMap.removeLayer(i);
          this.busMap.removeSource(i);
        }
      }
      this.routeLayerGroup = [];
    },
    returnHome() {
      document.documentElement.classList.remove("no-scroll");
      document.body.classList.remove("no-scroll");
      for (let element of document.querySelectorAll("#app, #home, #home *")) {
        element.classList.remove("no-scroll");
      }
      document.querySelector(".route-input").classList.remove('stuck');
      document.querySelector('#info-box').classList.remove('shown');
      this.currentPage = 'home';
      this.mapRefreshed = false;
      this.routeCrossingBridge = [];
      this.crossBridgeTime = undefined;
      if (this.mapEnabled) this.resetMap();
      for (let interval of this.intervals) {
        clearInterval(interval);
      }
      this.busRoute = "";
      this.busDirection = 0;
      this.busAvailableDirection = "2";
      this.busRouteInfo = undefined;
      this.busRouteData = undefined;
      this.busRouteTraffic = undefined;
      this.busInfoLocations = undefined;
      this.busStationLocations = undefined;
      this.arrivingBuses = [];
      this.noSuchNumberError = false;
      this.routesGenerated = {};
      this.currentScrollToWarning = 0;
      this.currentlyOpenedIndex = undefined;
    },
    routeChanged() {
      if (this.busRoute.toLowerCase() != "701x") this.busRoute = this.busRoute.toUpperCase();
      else this.busRoute = this.busRoute.toLowerCase();

      this.busAvailableDirection = "2";
      this.currentlyOpenedIndex = undefined;
      this.busDirection = 0;
      this.routesGenerated = {};
    
      const details = document.querySelectorAll("details");
      details.forEach(detail => {
        detail.removeAttribute("open");
      });

      this.fetchTraffic();
      this.fetchRouteData();
      this.fetchData();
      this.setupBusMarkersOnMap();
      this.setupStationMarkersOnMap();
      this.setupRoutesOnMap();
    },
    scrollToWarning() {
      var mainRouteInfo = document.querySelector('.main-route-info');
      var suspendedParent = document.querySelectorAll('.suspended')[this.currentScrollToWarning].parentNode;
      var title = document.querySelector('.bus-title');
      if (this.mapEnabled) {
        var busMap = document.querySelector('#bus-map');
        mainRouteInfo.scrollTop = suspendedParent.offsetTop + busMap.offsetHeight + title.offsetHeight;
      } else {
        mainRouteInfo.scrollTop = suspendedParent.offsetTop + title.offsetHeight;
      }
      var suspendedStations = this.busRouteData.filter(station => station.suspendState == "1");
      if (this.currentScrollToWarning == suspendedStations.length-1) this.currentScrollToWarning = 0;
      else this.currentScrollToWarning++;
    },
    setupBusMarkersOnMap() {
      if (this.mapEnabled) {
        if (this.busLayerGroup != []) {
          for (let marker of this.busLayerGroup) {
            marker.remove();
          }
        }
        this.busLayerGroup = [];
        this.waitUntil(() => {
          for (let bus of this.busInfoLocations) {
            var busElement = document.createElement('img');
            if (this.busColor.toLowerCase() == 'blue') busElement.src = '/images/icons/blue-bus-icon.png'
            else if (this.busColor.toLowerCase() == 'orange') busElement.src = '/images/icons/orange-bus-icon.png'
            busElement.classList.add('bus-marker');
            if (this.busMap.getZoom() <= 12 ) busElement.classList.add('small');
            var busPopup = new mapboxgl.Popup({closeButton: false, offset: 12}).setHTML(`<code class="${this.busColor.toLowerCase()}">` + bus.busPlate + "</code>" + (bus.speed == "-1" ? "" : ` ${bus.speed}km/h`));
            var busMarker = new mapboxgl.Marker(busElement).setLngLat([bus.longitude, bus.latitude]).setPopup(busPopup).addTo(this.busMap);
            this.busLayerGroup.push(busMarker);
          }
        })
      }
    },
    setupRoutesOnMap() {
      if (this.mapEnabled && this.busMap) {
        if (this.routeLayerGroup != []) {
          for (let i of this.routeLayerGroup) {
            this.busMap.removeLayer(i);
            this.busMap.removeSource(i);
          }
        }
        this.routeLayerGroup = [];
        this.waitUntil(() => {
          var allCoords = [];
          for (let i = 0; i < this.busRouteTraffic.length-1; i++) {
            if (typeof(this.busRouteTraffic[i].routeCoordinates) == 'string') {
              var routeCoordinates = [];
              for (let routeCoordinate of this.busRouteTraffic[i].routeCoordinates.slice().split(';')) {
                routeCoordinates.push([parseFloat(routeCoordinate.split(',')[0]),parseFloat(routeCoordinate.split(',')[1])]);
                allCoords.push([parseFloat(routeCoordinate.split(',')[0]),parseFloat(routeCoordinate.split(',')[1])]);
              }
              routeCoordinates.pop();
              this.busMap.addSource(i.toString(),{
                'type': 'geojson',
                'data': {
                  'type': 'Feature',
                  'properties': {},
                  'geometry': {
                    'type': 'LineString',
                    'coordinates': routeCoordinates,
                  },
                },
              });
              if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                if (Math.ceil(parseFloat(this.busRouteTraffic[i].routeTraffic)) == 1) var color = "#007400";
                else if (Math.ceil(parseFloat(this.busRouteTraffic[i].routeTraffic)) == 2) var color = "#5b7c00";
                else if (Math.ceil(parseFloat(this.busRouteTraffic[i].routeTraffic)) == 3) var color = "#817f00";
                else if (Math.ceil(parseFloat(this.busRouteTraffic[i].routeTraffic)) == 4) var color = "#7e4e00";
                else if (Math.ceil(parseFloat(this.busRouteTraffic[i].routeTraffic)) == 5) var color = "#7e0f00"
              } else {
                if (Math.ceil(parseFloat(this.busRouteTraffic[i].routeTraffic)) == 1) var color = "#3acc00";
                else if (Math.ceil(parseFloat(this.busRouteTraffic[i].routeTraffic)) == 2) var color = "#99c800";
                else if (Math.ceil(parseFloat(this.busRouteTraffic[i].routeTraffic)) == 3) var color = "#d1bc00";
                else if (Math.ceil(parseFloat(this.busRouteTraffic[i].routeTraffic)) == 4) var color = "#d68400";
                else if (Math.ceil(parseFloat(this.busRouteTraffic[i].routeTraffic)) == 5) var color = "#c70000"

              }
              this.busMap.addLayer({
                'id': i.toString(),
                'type': 'line',
                'source': i.toString(),
                'layout': {
                  'line-join': 'round',
                  'line-cap': 'round'
                },
                'paint': {
                  'line-color': color,
                  'line-width': 4,
                }
              });
              this.routeLayerGroup.push(i.toString());
            } else {
              for (let [index,route] of this.busRouteTraffic[i].routeCoordinates.entries()) {
                var routeCoordinates = [];
                let id = i.toString() + '-' + index.toString();
                for (let routeCoordinate of route.slice().split(';')) {
                  routeCoordinates.push([parseFloat(routeCoordinate.split(',')[0]),parseFloat(routeCoordinate.split(',')[1])]);
                  allCoords.push([parseFloat(routeCoordinate.split(',')[0]),parseFloat(routeCoordinate.split(',')[1])]);
                }
                routeCoordinates.pop();
                this.busMap.addSource(id,{
                  'type': 'geojson',
                  'data': {
                    'type': 'Feature',
                    'properties': {},
                    'geometry': {
                      'type': 'LineString',
                      'coordinates': routeCoordinates,
                    },
                  },
                });
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                  if (Math.ceil(parseFloat(this.busRouteTraffic[i].routeTraffic[index])) == 1) var color = "#007400";
                  else if (Math.ceil(parseFloat(this.busRouteTraffic[i].routeTraffic[index])) == 2) var color = "#5b7c00";
                  else if (Math.ceil(parseFloat(this.busRouteTraffic[i].routeTraffic[index])) == 3) var color = "#817f00";
                  else if (Math.ceil(parseFloat(this.busRouteTraffic[i].routeTraffic[index])) == 4) var color = "#7e4e00";
                  else if (Math.ceil(parseFloat(this.busRouteTraffic[i].routeTraffic[index])) >= 5) var color = "#7e0f00"
                } else {
                  if (Math.ceil(parseFloat(this.busRouteTraffic[i].routeTraffic[index])) == 1) var color = "#3acc00";
                  else if (Math.ceil(parseFloat(this.busRouteTraffic[i].routeTraffic[index])) == 2) var color = "#99c800";
                  else if (Math.ceil(parseFloat(this.busRouteTraffic[i].routeTraffic[index])) == 3) var color = "#d1bc00";
                  else if (Math.ceil(parseFloat(this.busRouteTraffic[i].routeTraffic[index])) == 4) var color = "#d68400";
                  else if (Math.ceil(parseFloat(this.busRouteTraffic[i].routeTraffic[index])) >= 5) var color = "#c70000"

                }
                this.busMap.addLayer({
                  'id': id,
                  'type': 'line',
                  'source': id,
                  'layout': {
                    'line-join': 'round',
                    'line-cap': 'round'
                  },
                  'paint': {
                    'line-color': color,
                    'line-width': 4,
                  }
                });
                this.routeLayerGroup.push(id.toString());
              }
            }
          }
          if (!this.mapRefreshed) {
            var routeLine = turf.lineString(allCoords);
            var bbox = turf.bbox(routeLine);
            this.busMap.fitBounds(bbox, {padding: 50});
            this.mapRefreshed = true;
          }
        })
      }
    },
    setupStationMarkersOnMap() {
      if (this.stationLayerGroup != []) {
        for (let marker of this.stationLayerGroup) {
          marker.remove();
        }
      }
      this.stationLayerGroup = [];
      this.waitUntil(() => {
        for (let [index,station] of this.busStationLocations.slice().reverse().entries()) {
          if (index === this.busStationLocations.length - 1) {
            var stationElement = document.createElement('div');
            var stationTextElement = document.createElement('span');
            stationTextElement.innerHTML = this.busRouteData.slice().reverse()[index].staName;
            stationElement.classList.add('map-important-station');
            stationElement.classList.add('origin');
            stationElement.appendChild(stationTextElement);
          } else if (index === 0) {
            var stationElement = document.createElement('div');
            var stationTextElement = document.createElement('span');
            stationTextElement.innerHTML = this.busRouteData.slice().reverse()[index].staName;
            stationElement.classList.add('map-important-station');
            stationElement.classList.add('destination');
            stationElement.appendChild(stationTextElement);
          } else {
            var stationElement = document.createElement('img');
            if (this.colorScheme == 'light') stationElement.src = '/images/icons/bus-stop-light.png';
            else stationElement.src = '/images/icons/bus-stop-dark.png'
            stationElement.classList.add('map-station');
          }
          stationElement.addEventListener('hover',() => {
            this.busMap.getCanvas().style.cursor = 'pointer';
          })
          var stationPopup = new mapboxgl.Popup({closeButton: false, offset: 8}).setText(`${this.busRouteData.slice().reverse()[index].staCode} ${this.busRouteData.slice().reverse()[index].staName}`);
          var stationMarker = new mapboxgl.Marker(stationElement).setLngLat([parseFloat(station.longitude), parseFloat(station.latitude)]).setPopup(stationPopup).addTo(this.busMap);
          this.stationLayerGroup.push(stationMarker);
        }
      })
    },
    toggleIndex(index) {
      let details = document.querySelectorAll('details');
      if (details[index].hasAttribute("open")) {
        this.getArrivingBuses(index);
        this.zoomToStation(index);
      }
    },
    waitUntil(callback,a=true) {
      setTimeout(() => {
        let condition = [this.busRouteInfo != null, this.busStationLocations != null, this.busInfoLocations != null, this.crossBridgeTime != null]
        if (a) condition.push(this.busRouteTraffic != null);
        var b = true;
        for (let item of condition) {
          if (!item) {
            b = false;
            break;
          }
        }
        if (b) {
          callback();
        } else {
          this.waitUntil(callback,a);
        }
      },500);
    },
    zoomToStation(index) {
      if (this.mapEnabled && this.busMap) {
        let stationLoc = [this.busStationLocations.slice()[index].longitude,this.busStationLocations.slice()[index].latitude];
        this.busMap.flyTo({
          center: stationLoc,
          zoom: 16,
        })
      }
    }
  },
  updated() {
    const details = document.querySelectorAll("details");
    // Add the onclick listeners.
    details.forEach((targetDetail) => {
      targetDetail.addEventListener("click", () => {
        // Close all the details that are not targetDetail.
        details.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute("open");
          }
        });
      });
    });
  },
  mounted() {
    if (window.location.href.includes("127.0.0.1")) {
      this.corsProxy = "";
    }
    if (localStorage.mapEnabled) {
      this.mapEnabled = localStorage.mapEnabled === "true";
    } else {
      localStorage.mapEnabled = "false";
    }

    this.colorScheme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? "dark" : "light";
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        this.colorScheme = e.matches ? "dark" : "light";
    });

    var headerHeight = document.querySelector('header').offsetHeight;
    var home = document.querySelector('#home');
    home.style.paddingTop = "calc(" + headerHeight + "px + 2vw)";

    window.addEventListener('resize',() => {
      var headerHeight = document.querySelector('header').offsetHeight;
      var home = document.querySelector('#home');
      home.style.paddingTop = "calc(" + headerHeight + "px + 2vw)";
    });
    this.fetchRoutes();
    this.fetchDyMessage();
  }
}).
mount("#app");

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .catch(() => {
      console.log('ServiceWorker not registered');
    })
}


