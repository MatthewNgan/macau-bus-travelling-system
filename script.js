var app = Vue.createApp({
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
      dataReady: {
        busInfoLocations: false,
        busRouteInfo: false,
        busRouteTraffic: false,
        busStationLocations: false,
        crosBridgeTime: false,
      },
      busInfoLocations: undefined,
      busStationLocations: undefined,
      busRouteChange: false,
      busChangeValid: undefined,
      currentPopup: undefined,
      arrivingBuses: [],
      colorScheme: 'light',
      intervals: [],
      noSuchNumberError: false,
      isScrolling: undefined,
      routesGenerated: {},
      currentlyOpenedIndex: undefined,
      currentScrollToWarning: 0,
      corsProxy: "https://cors-anywhere.matthewngan.workers.dev/?",
	  };
  },
  methods: {
    calculateDistance(lon1,lat1,lon2,lat2){
      const R = 6371e3;
      const radlat1 = lat1 * Math.PI/180;
      const radlat2 = lat2 * Math.PI/180;
      const latD = (lat2-lat1) * Math.PI/180;
      const lonD = (lon2-lon1) * Math.PI/180;
      const a = Math.sin(latD/2) * Math.sin(latD/2) +
                Math.cos(radlat1) * Math.cos(radlat2) *
                Math.sin(lonD/2) * Math.sin(lonD/2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      const d = R * c;
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
        let lon1 = this.busRouteTraffic[nextStop-1].routeCoordinates.split(";")[i].split(",")[0];
        let lat1 = this.busRouteTraffic[nextStop-1].routeCoordinates.split(";")[i].split(",")[1]
        let lon2 = this.busRouteTraffic[nextStop-1].routeCoordinates.split(";")[i+1].split(",")[0];
        let lat2 = this.busRouteTraffic[nextStop-1].routeCoordinates.split(";")[i+1].split(",")[1];
        totaldistance += this.calculateDistance(lon1,lat1,lon2,lat2)*parseFloat(this.busRouteTraffic[nextStop-1].routeTraffic);
      }
      for (let route of this.busRouteTraffic.slice(nextStop,targetStop)) {
        for (let i = 0; i < route.routeCoordinates.split(";").length-2; i++) {
          let lon1 = route.routeCoordinates.split(";")[i].split(",")[0]; let lat1 = route.routeCoordinates.split(";")[i].split(",")[1];
          let lon2 = route.routeCoordinates.split(";")[i+1].split(",")[0]; let lat2 = route.routeCoordinates.split(";")[i+1].split(",")[1];
          totaldistance += this.calculateDistance(lon1,lat1,lon2,lat2)*parseFloat(route.routeTraffic);
        }
      }
      return Math.ceil(totaldistance / 12.5);
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
      const changeDirectionText = document.querySelector("#changedirection-text");
      changeDirectionText.disabled = true;
      this.routeCrossingBridge = [];
      this.busRouteTraffic = undefined;
      this.busRouteInfo = undefined;
      if (this.busLayerGroup != []) {
        for (let marker of this.busLayerGroup) {
          marker.remove();
        }
      }
      this.busLayerGroup = []
      if (this.stationLayerGroup != []) {
        for (let marker of this.stationLayerGroup) {
          marker.remove();
        }
      }
      this.stationLayerGroup = []
      if (this.routeLayerGroup != []) {
        for (let i of this.routeLayerGroup) {
          this.busMap.removeLayer(i);
          this.busMap.removeSource(i);
        }
      }
      this.routeLayerGroup = [];
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
      document.querySelector(".bus-info-container").style.height = `unset`;
    },
    enableMap() {
      this.mapEnabled = true;
      localStorage.mapEnabled = true;
      setTimeout(() => {
        this.mapRefreshed = false;
        this.initMap();
        this.setupBusMarkersOnMap();
        this.setupStationMarkersOnMap();
        this.setupRoutesOnMap();
      }, 150);
    },
    fetchData() {
      if (this.busRoute != "") {
        this.dataReady.busInfoLocations = false;
        this.dataReady.busRouteInfo = false;
        this.dataReady.busStationLocations = false;
        fetch(
        `${this.corsProxy}https://bis.dsat.gov.mo:37812/macauweb/routestation/bus?routeName=${this.busRoute}&dir=${this.busDirection}`)
        .then(response => response.json())
        .then(data => {
          this.busRouteInfo = data.data.routeInfo;
          this.dataReady.busRouteInfo = true;
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
          this.dataReady.busInfoLocations = true;
          this.dataReady.busStationLocations = true;
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
        .catch(() => {
          this.busRouteData = undefined;
          this.noInternet = true;
        });
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
        this.dataReady.busRouteTraffic = false;
        this.dataReady.crossBridgeTime = false;
        fetch(`${this.corsProxy}https://bis.dsat.gov.mo:37011/its/Bridge/getTime.html?lang=zh_tw`)
        .then(response => response.json())
        .then(data => {
          this.crossBridgeTime = data.data.timeArray;
          this.dataReady.crossBridgeTime = true;
        })
        let url = `${this.corsProxy}https://bis.dsat.gov.mo:37812/ddbus/common/supermap/route/traffic?routeCode=${"0".repeat(5-this.busRoute.length) + this.busRoute}&direction=${this.busDirection}&indexType=00&device=web`
        fetch(url).then(response => response.json()).then(data => {
          this.noSuchNumberError = false;
          let tempData = data.data.slice();
          this.waitUntil(() => {
            let jamRouteIndex = this.busRouteInfo.findIndex((sta) => sta.staCode.includes("M84"));
            if (jamRouteIndex > -1) {
              jamRouteIndex -= 1;
              tempData[jamRouteIndex].routeTraffic = parseInt(tempData[jamRouteIndex].routeTraffic)+2;
            }
            if (this.busRoute == "32") {
              let cloneRouteIndex = this.busRouteInfo.findIndex((sta) => sta.staCode.includes("M254/1"));
              if (cloneRouteIndex > -1) {
                cloneRouteIndex -= 1;
                tempData[cloneRouteIndex].routeTraffic = parseInt(tempData[cloneRouteIndex].routeTraffic) / 5
              }
            }
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
                let speed = (this.bridgeCoords[onbridge].slice()[1] / timeToCrossBridgeInSec * 3.6) > 52 ? 52 : this.bridgeCoords[onbridge].slice()[1] / timeToCrossBridgeInSec * 3.6;
                let traffic = 1 / (speed / 3.6 * 60 / 750);
                tempData[parseInt(bridgeRoute)].routeTraffic = traffic.toString();
              }
            }
            this.busRouteTraffic = tempData.slice();
            this.dataReady.busRouteTraffic = true;
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
              var routeTraffic = this.busRouteTraffic[index-i-1].routeTraffic;
              this.arrivingBuses[index].push({
                'plate': `${comingBus.busPlate.substring(0,2)}-${comingBus.busPlate.substring(2,4)}-${comingBus.busPlate.substring(4,6)}`,
                'speed': comingBus.speed,
                'distanceToThis': i + 1,
                'durationGet': true,
                'duration': this.calculateTime(index-i,index,[this.busInfoLocations.filter(bus => bus.busPlate == comingBus.busPlate)[0].longitude,this.busInfoLocations.filter(bus => bus.busPlate == comingBus.busPlate)[0].latitude]) + i*48,
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
      if (this.busRouteData != undefined && this.busRouteData.slice().filter(station => code == station.staCode)[0] != undefined) {
        return this.busRouteData.slice().filter(station => code == station.staCode)[0].staName;
      }
    },
    initMap() {
      var mapboxAccessToken = 'pk.eyJ1IjoibWF0dGhld25nYW4iLCJhIjoiY2tqMmJ1bmp1M2E3ODJ5bjRtejhsbDBnMSJ9.8d5AH06RmzA6od3W8UNz9A';
      if (window.location.href.includes("127.0.0.1")) {
        mapboxAccessToken = 'pk.eyJ1IjoibWF0dGhld25nYW4iLCJhIjoiY2tqMTNzNzJuMWtjaDJ5bTBucjNrM3I3NiJ9.DOqgKmjCq8zL50KNIvZNlg';
      }
      var mapStyle = 'matthewngan/ckjzsnvju0uqx17o6891qzch5';
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        mapStyle = 'matthewngan/ckjzsftuo0uik17o62fm4oahc';
      }
      mapboxgl.accessToken = mapboxAccessToken;
      this.busMap = new mapboxgl.Map({
        container: 'bus-map',
        style: 'mapbox://styles/' + mapStyle, // stylesheet location
        center: [113.5622406,22.166422], // starting position [lng, lat]
        zoom: 11, // starting zoom
        minZoom: 10,
        maxZoom: 18.5,
        maxBounds: [[113.3157349,21.9111969],[113.7963867,22.4199152]]
      });
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
        if (this.busMap.getZoom() > 14) {
          for (let mapImportantStationText of document.querySelectorAll('.map-important-station span')) {
            mapImportantStationText.classList.toggle('shown',true);
          }
          for (let busMarker of document.querySelectorAll('.bus-marker')) {
            busMarker.classList.toggle('small',false);
          }
          for (let routeLayer of this.routeLayerGroup) {
            this.busMap.setPaintProperty(routeLayer,'line-width',4)
          }
        } else {
          for (let mapImportantStationText of document.querySelectorAll('.map-important-station span')) {
            mapImportantStationText.classList.toggle('shown',false);
          }
          for (let busMarker of document.querySelectorAll('.bus-marker')) {
            busMarker.classList.toggle('small',true);
          }
          for (let routeLayer of this.routeLayerGroup) {
            this.busMap.setPaintProperty(routeLayer,'line-width',2)
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
      if (this.busMap && this.mapEnabled) {
        document.querySelector("#bus-map").setAttribute("style","");
        document.querySelector(".mapboxgl-canvas").setAttribute("style","");
        this.busMap.resize();
      }
      document.querySelector("#main-route-info").scrollTop = 0;
      for (let element of document.querySelectorAll("#app, #home, #home *")) {
        element.classList.add("no-scroll");
      }
      document.querySelector("#main-route-info").addEventListener("scroll", () => {
        if (!this.busMap && !this.mapEnabled && document.querySelector(".bus-title")) {
          var thisTop = document.querySelector(".route-input").offsetTop;
          if (this.mapEnabled) var titleHeight = document.querySelector(".bus-title").offsetHeight + document.querySelector("#bus-map").offsetHeight;
          else var titleHeight = document.querySelector(".bus-title").offsetHeight
          document.querySelector(".route-input").classList.toggle("stuck", thisTop > titleHeight);
        } else {
          document.querySelector(".route-input").classList.toggle("stuck", false);
        }
        if (this.busMap && this.mapEnabled && document.querySelector(".bus-info-container")) {
          document.querySelector(".bus-info-container").style.height = `calc(25vh - ${document.querySelector(".bus-title").offsetHeight}px + ${document.querySelector(".bus-title").offsetTop}px - ${document.querySelector(".route-input").offsetHeight}px)`;
          document.querySelector("#bus-map").style.height = `calc(60vh - ${document.querySelector(".bus-title").offsetTop}px)`;
        }
        if (this.isScrolling) clearTimeout(this.isScrolling);
        this.isScrolling = setTimeout(() => {
          if (this.busMap && this.mapEnabled && document.querySelector(".bus-info-container")) {
            document.querySelector(".mapboxgl-canvas").style.height = `calc(50vh - ${document.querySelector(".bus-title").offsetTop}px)`;
            this.busMap.resize();
          }
        }, 100);
      });
      var dataInterval = setInterval(() => {
        this.fetchData();
        this.setupBusMarkersOnMap();
      }, 15000);
      var indexInterval = setInterval(() => {
        this.getArrivingBuses(this.currentlyOpenedIndex);
      },1000);
      var trafficInterval = setInterval(() => {
        this.fetchTraffic();
        this.setupRoutesOnMap();
      },60000);
      this.intervals = [dataInterval, indexInterval, trafficInterval];
    },
    resetMap() {
      this.busMap.setCenter([113.5622406,22.166422]);
      this.busMap.setZoom(11);
      document.querySelector("#bus-map").style.height = `60vh`;
      document.querySelector(".mapboxgl-canvas").style.height = `60vh`;
      this.busMap.resize();
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
      var mainRouteInfo = document.querySelector('.bus-info-container');
      var suspendedParent = document.querySelectorAll('.suspended')[this.currentScrollToWarning].parentNode;
      if (this.mapEnabled) {
        mainRouteInfo.scrollTop = suspendedParent.offsetTop;
      } else {
        mainRouteInfo.scrollTop = suspendedParent.offsetTop;
      }
      var suspendedStations = this.busRouteData.filter(station => station.suspendState == "1");
      if (this.currentScrollToWarning == suspendedStations.length-1) this.currentScrollToWarning = 0;
      else this.currentScrollToWarning++;
    },
    setupBusMarkersOnMap() {
      if (this.mapEnabled) {
        this.waitUntil(() => {
          if (this.busLayerGroup != []) {
            for (let marker of this.busLayerGroup) {
              marker.remove();
            }
          }
          this.busLayerGroup = [];
          for (let bus of this.busInfoLocations) {
            var busElement = document.createElement('img');
            if (this.busColor.toLowerCase() == 'blue') busElement.src = '/images/icons/blue-bus-icon.png'
            else if (this.busColor.toLowerCase() == 'orange') busElement.src = '/images/icons/orange-bus-icon.png'
            busElement.classList.add('bus-marker');
            if (this.busMap.getZoom() <= 14) busElement.classList.add('small');
            var busPopup = new mapboxgl.Popup({closeButton: false, offset: 12}).setHTML(`<code class="${this.busColor.toLowerCase()}">` + bus.busPlate + "</code>" + (bus.speed == "-1" ? "" : ` ${bus.speed}km/h`));
            var busMarker = new mapboxgl.Marker(busElement).setLngLat([bus.longitude, bus.latitude]).setPopup(busPopup).addTo(this.busMap);
            this.busLayerGroup.push(busMarker);
          }
        })
      }
    },
    setupRoutesOnMap() {
      if (this.mapEnabled && this.busMap) {
        this.waitUntil(() => {
          if (this.routeLayerGroup != []) {
            for (let i of this.routeLayerGroup) {
              this.busMap.removeLayer(i);
              this.busMap.removeSource(i);
            }
          }
          this.routeLayerGroup = [];
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
                else if (Math.ceil(parseFloat(this.busRouteTraffic[i].routeTraffic)) >= 5) var color = "#7e0f00"
              } else {
                if (Math.ceil(parseFloat(this.busRouteTraffic[i].routeTraffic)) == 1) var color = "#3acc00";
                else if (Math.ceil(parseFloat(this.busRouteTraffic[i].routeTraffic)) == 2) var color = "#99c800";
                else if (Math.ceil(parseFloat(this.busRouteTraffic[i].routeTraffic)) == 3) var color = "#d1bc00";
                else if (Math.ceil(parseFloat(this.busRouteTraffic[i].routeTraffic)) == 4) var color = "#d68400";
                else if (Math.ceil(parseFloat(this.busRouteTraffic[i].routeTraffic)) >= 5) var color = "#c70000"
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
                  'line-width': this.busMap.getZoom() > 14 ? 4 : 2,
                }
              });
              this.routeLayerGroup.push(i.toString());
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
      if (this.mapEnabled && this.busMap) {
        this.waitUntil(() => {
          if (this.stationLayerGroup != []) {
            for (let marker of this.stationLayerGroup) {
              marker.remove();
            }
          }
          this.stationLayerGroup = [];
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
              if (this.busMap.getZoom() <= 13.5) stationElement.classList.toggle('shown',false);
              else stationElement.classList.toggle('shown',true);
            }
            stationElement.addEventListener('hover',() => {
              this.busMap.getCanvas().style.cursor = 'pointer';
            });
            stationElement.addEventListener('click',(e) => {
              const details = document.querySelectorAll('details')
              details.forEach((detail) => {
                if (detail != e) detail.removeAttribute("open");
              });
              this.currentPopup = this.busStationLocations.slice().length - index - 1;
              document.querySelectorAll('.bus-info details')[this.busStationLocations.slice().length - index - 1].open = true;
              document.querySelector('.bus-info-container').scrollTop = (1.5 * parseFloat(getComputedStyle(document.documentElement).fontSize) + 20)*(this.busStationLocations.slice().length - index - 1);
            });
            var stationPopup = new mapboxgl.Popup({closeButton: false, offset: 8}).setText(`${this.busRouteData.slice().reverse()[index].staCode} ${this.busRouteData.slice().reverse()[index].staName}`);
            var stationMarker = new mapboxgl.Marker(stationElement).setLngLat([parseFloat(station.longitude), parseFloat(station.latitude)]).setPopup(stationPopup).addTo(this.busMap);
            this.stationLayerGroup.push(stationMarker);
          }
        })
      }
    },
    toggleIndex(index) {
      let details = document.querySelectorAll('details');
      if (details[index] && details[index].hasAttribute("open")) {
        this.getArrivingBuses(index);
        this.zoomToStation(index);
        if (this.currentPopup != index) {
          if (document.querySelectorAll('.map-station')[this.busStationLocations.slice().length - index - 2])
          document.querySelectorAll('.map-station')[this.busStationLocations.slice().length - index - 2].click();
        }
      }
    },
    waitUntil(callback,a=true) {
      setTimeout(() => {
        let condition = [this.dataReady.busRouteInfo, this.dataReady.busStationLocations, this.dataReady.busInfoLocations, this.dataReady.crossBridgeTime]
        if (a) condition.push(this.dataReady.busRouteTraffic);
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
    details.forEach((targetDetail) => {
      targetDetail.addEventListener("click", () => {
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
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change',
      () => {
        this.disableMap();
        this.enableMap();
      }
    );
    
    this.fetchRoutes();
    this.fetchDyMessage();
  }
})
app.component('route-station-on-list', {
  props: ['busRouteData','busRouteInfo','busColor','busRouteTraffic','arrivingBuses','index','station'],
  computed: {
    busImgUrl() {
      return `/images/icons/${this.busColor.toLowerCase()}-bus-icon.png`;
    }
  },
  template: `
    <summary class="traffic" :class="{last: index == busRouteData.length-1, green: busRouteTraffic && busRouteTraffic[index] && Math.ceil(parseFloat(busRouteTraffic[index].routeTraffic)) == '1',yellow: busRouteTraffic && busRouteTraffic[index] && Math.ceil(parseFloat(busRouteTraffic[index].routeTraffic)) == '2',orange: busRouteTraffic && busRouteTraffic[index] && Math.ceil(parseFloat(busRouteTraffic[index].routeTraffic)) == '3',red: busRouteTraffic && busRouteTraffic[index] && Math.ceil(parseFloat(busRouteTraffic[index].routeTraffic)) == '4',brown: busRouteTraffic && busRouteTraffic[index] && Math.ceil(parseFloat(busRouteTraffic[index].routeTraffic)) >= '5'}">
      <img src="/images/icons/bus-stop-inList.png" class="station-dot">
      <span class="station-line"></span>
      <span class="station-name">{{station.staCode}} {{station.staName}}</span>
      <span v-if="busRouteData[index] && busRouteData[index].suspendState == '1'" class="suspended">暫不停靠此站</span>
    </summary>
    <ul class="arriving-list">
      <li v-for="arrivingBus in arrivingBuses[index].slice().reverse()" v-if="arrivingBuses[index]">
        <span><code :class="busColor.toLowerCase()">{{arrivingBus.plate}}</code> 距離本站 {{arrivingBus.distanceToThis}} 站</span> 
        <span v-if="arrivingBus.durationGet" class="time-remaining live" :class="{green: Math.ceil(parseFloat(arrivingBus.routeTraffic)) == 1,yellow: Math.ceil(parseFloat(arrivingBus.routeTraffic)) == 2,orange: Math.ceil(parseFloat(arrivingBus.routeTraffic)) == 3,red: Math.ceil(parseFloat(arrivingBus.routeTraffic)) == 4,brown: Math.ceil(parseFloat(arrivingBus.routeTraffic)) >= 5}">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-broadcast" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 0 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707z"/>
            <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
          </svg> <span v-if="arrivingBus.duration > 20">{{Math.ceil((arrivingBus.duration) / 60)}} 分鐘</span><span v-else>即將進站</span>
        </span>
        <span v-else>ETA 加載中</span>
      </li>
      <template v-if="busRouteInfo[index]" v-for="bus in busRouteInfo[index].busInfo.filter((bus) => bus.status == '1')" :key="bus.busPlate">
        <li>
          <span><code :class="{blue: busColor.toLowerCase() == 'blue', orange: busColor.toLowerCase() == 'orange'}">{{bus.busPlate.substring(0,2)}}-{{bus.busPlate.substring(2,4)}}-{{bus.busPlate.substring(4,6)}}</code></span>
          <span v-if="index > 0" class="time-remaining">己進站</span><span v-else>即將發車</span>
        </li>
      </template>
      <template v-if="busRouteInfo[index]" v-for="bus in busRouteInfo[index].busInfo.filter((bus) => bus.status == '0')" :key="bus.busPlate">
        <li class="left">
          <img :src="busImgUrl">
          <span><code :class="{blue: busColor.toLowerCase() == 'blue', orange: busColor.toLowerCase() == 'orange'}">{{bus.busPlate.substring(0,2)}}-{{bus.busPlate.substring(2,4)}}-{{bus.busPlate.substring(4,6)}}</code></span>
          <span class="time-remaining">前往下一站中</span>
        </li>
      </template>
      <li v-if="busRouteInfo[index] && busRouteInfo[index].busInfo.filter((bus) => bus.status == '1').length==0 && (!arrivingBuses[index] || arrivingBuses[index].length == 0)">
        尚未發車
      </li>
    </ul>
  `
})
app.mount("#app");
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .catch(() => {
      console.log('ServiceWorker not registered');
    })
}