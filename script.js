Vue.createApp({
  data() {
    return {
      busMap: undefined,
      busLayerGroup: [],
      routeLayerGroup: [],
      stationLayerGroup: [],
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
      colorScheme: false,
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
        totaldistance += this.calculateDistance(this.busRouteTraffic[nextStop-1].routeCoordinates.split(";")[i].split(",")[0],this.busRouteTraffic[nextStop-1].routeCoordinates.split(";")[i].split(",")[1],this.busRouteTraffic[nextStop-1].routeCoordinates.split(";")[i+1].split(",")[0],this.busRouteTraffic[nextStop-1].routeCoordinates.split(";")[i+1].split(",")[1])*parseInt(this.busRouteTraffic[nextStop-1].routeTraffic);
      }
      for (let route of this.busRouteTraffic.slice(nextStop,targetStop)) {
        for (let i = 0; i < route.routeCoordinates.split(";").length-2; i++) {
          let lon1 = route.routeCoordinates.split(";")[i].split(",")[0]; let lat1 = route.routeCoordinates.split(";")[i].split(",")[1];
          let lon2 = route.routeCoordinates.split(";")[i+1].split(",")[0]; let lat2 = route.routeCoordinates.split(";")[i+1].split(",")[1];
          totaldistance += this.calculateDistance(lon1,lat1,lon2,lat2)*parseInt(route.routeTraffic);
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
      this.fetchTraffic();
      this.fetchRouteData();
      this.fetchData();
    },
    fetchData() {
      if (this.busRoute != "") {
        fetch(
        `${this.corsProxy}https://bis.dsat.gov.mo:37812/macauweb/routestation/bus?routeName=${this.busRoute}&dir=${this.busDirection}`).

        then(response => response.json()).
        then(data => {
          this.busRouteInfo = data.data.routeInfo;
          this.noSuchNumberError = false;
        }).
        catch(() => {
          this.noSuchNumberError = true;
          this.busRouteInfo = undefined;
          this.noInternet = true;
        });
        fetch(
        `${this.corsProxy}https://bis.dsat.gov.mo:37812/macauweb/routestation/location?routeName=${this.busRoute}&dir=${this.busDirection}&lang=zh-tw`).

        then(response => response.json()).
        then(data => {
          this.busInfoLocations = data.data.busInfoList;
          this.busStationLocations = data.data.stationInfoList;
          this.noSuchNumberError = false;
          this.currentPage = 'info';
          if (this.scroll) {
            this.scroll = !this.scroll;
          }
          if (this.stationLayerGroup) {
            for (let marker of this.stationLayerGroup) {
              marker.remove();
            }
          }
          this.stationLayerGroup = [];
          for (let station of this.busStationLocations) {
            var stationElement = document.createElement('img');
            stationElement.src = '/images/icons/bus-stop.png';
            stationElement.style.width = '16px';
            var stationMarker = new mapboxgl.Marker(stationElement).setLngLat([parseFloat(station.longitude), parseFloat(station.latitude)]).addTo(this.busMap);
            this.stationLayerGroup.push(stationMarker);
          }
          if (this.busLayerGroup) {
            for (let marker of this.busLayerGroup) {
              marker.remove();
            }
          }
          this.busLayerGroup = [];
          for (let bus of this.busInfoLocations) {
            var busElement = document.createElement('img');
            if (this.busColor.toLowerCase() == 'blue') busElement.src = '/images/icons/blue-bus-icon.png'
            else if (this.busColor.toLowerCase() == 'orange') busElement.src = '/images/icons/orange-bus-icon.png'
            var busMarker = new mapboxgl.Marker(busElement).setLngLat([bus.longitude, bus.latitude]).addTo(this.busMap);
            this.busLayerGroup.push(busMarker);
          }
        })
        // .catch(() => {
        //   this.noSuchNumberError = true;
        //   this.noInternet = true;
        // });
      } else {
        this.busRouteInfo = undefined;
        this.noSuchNumberError = false;
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
          this.busRouteChange = (data.data.routeChange == '1');
          this.fetchValid();
        }).
        catch(() => {
          this.busRouteData = undefined;
          this.noSuchNumberError = true;
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
        let url = `${this.corsProxy}https://bis.dsat.gov.mo:37812/ddbus/common/supermap/route/traffic?routeCode=${"0".repeat(5-this.busRoute.length) + this.busRoute}&direction=${this.busDirection}&indexType=00&device=web`
        fetch(url).then(response => response.json()).then(data => {
          this.busRouteTraffic = data.data;
          this.noSuchNumberError = false;
          if (this.routeLayerGroup) {
            for (let i of this.routeLayerGroup) {
              this.busMap.removeLayer(i);
              this.busMap.removeSource(i);
            }
          }
          this.routeLayerGroup = [];
          var allCoords = [];
          for (let i = 0; i < this.busRouteTraffic.length-1; i++) {
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
            if (this.busRouteTraffic[i].routeTraffic == 1) var color = "#007400";
            else if (this.busRouteTraffic[i].routeTraffic == 2) var color = "#7c7400";
            else if (this.busRouteTraffic[i].routeTraffic == 3) var color = "#814700";
            else if (this.busRouteTraffic[i].routeTraffic == 4) var color = "#7e0000";
            else if (this.busRouteTraffic[i].routeTraffic == 5) var color = "#460000"
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
          }
          if (this.busInfoLocations && !this.mapRefreshed) {
            var routeLine = turf.lineString(allCoords);
            var bbox = turf.bbox(routeLine);
            this.busMap.fitBounds(bbox, {padding: 50});
            this.mapRefreshed = true;
          }
        })
        // .catch((error) => {
        //   this.noSuchNumberError = true;
        //   this.busRouteTraffic = undefined;
        //   this.noInternet = true;
        // });
      } else {
        this.busRouteTraffic = undefined;
        this.noSuchNumberError = false;
      }
    },
    fetchValid() {
      // console.log(this.busRouteChange);
      if (this.busRoute != "" && this.busRouteChange) {
        let url = `${this.corsProxy}https://bis.dsat.gov.mo:37011/its/RouteChangeMsg/getValid.html?lang=zh_tw&routeName=${this.busRoute}`
        fetch(url)
        .then(response => response.json())
        .then(data => {
          this.busChangeValid = data.data;
          // console.log(this.busChangeValid);
        })
        .catch(() => {
          this.noInternet = true;
        })
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
    scrollToWarning() {
      var mainRouteInfo = document.querySelector('.main-route-info');
      var suspendedParent = document.querySelectorAll('.suspended')[this.currentScrollToWarning].parentNode;
      var input = document.querySelector('.route-input');
      var busMap = document.querySelector('#bus-map');
      var title = document.querySelector('.bus-title');
      mainRouteInfo.scrollTop = suspendedParent.offsetTop + busMap.offsetHeight + title.offsetHeight;
      var suspendedStations = this.busRouteData.filter(station => station.suspendState == "1");
      if (this.currentScrollToWarning == suspendedStations.length-1) this.currentScrollToWarning = 0;
      else this.currentScrollToWarning++;
    },
    requestRoute(route,color) {
      this.currentPage = 'info';
      const input = document.querySelector('#route-input');
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
          var titleHeight = document.querySelector(".bus-title").offsetHeight + document.querySelector("#bus-map").offsetHeight;
          document.querySelector(".route-input").classList.toggle("stuck", thisTop > titleHeight);
        } else {
          document.querySelector(".route-input").classList.toggle("stuck", false);
        }
      })
    },
    resetMap() {
      this.busMap.setCenter([113.565,22.165]);
      this.busMap.setZoom(11.25);
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
      this.resetMap();
      setTimeout(()=>{
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
      },250);
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
    },
    openInfoBox() {
      this.currentPage = 'message';
      document.querySelector('#info-box').classList.add('shown');
    },
    toggleIndex(index) {
      let details = document.querySelectorAll('details');
      if (details[index].hasAttribute("open")) {
        this.getArrivingBuses(index);
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
    var mapboxAccessToken = 'pk.eyJ1IjoibWF0dGhld25nYW4iLCJhIjoiY2tqMmJ1bmp1M2E3ODJ5bjRtejhsbDBnMSJ9.8d5AH06RmzA6od3W8UNz9A';
    if (window.location.href.includes("127.0.0.1")) {
      this.corsProxy = "";
    }

    var headerHeight = document.querySelector('header').offsetHeight;
    var home = document.querySelector('#home');
    home.style.paddingTop = "calc(" + headerHeight + "px + 2vw)";

    window.addEventListener('resize',() => {
      var headerHeight = document.querySelector('header').offsetHeight;
      var home = document.querySelector('#home');
      home.style.paddingTop = "calc(" + headerHeight + "px + 2vw)";
    });
    
    var mapStyle = 'mapbox/light-v9';
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      mapStyle = 'mapbox/dark-v9';
    }

    mapboxgl.accessToken = mapboxAccessToken;
    this.busMap = new mapboxgl.Map({
      container: 'bus-map',
      style: 'mapbox://styles/' + mapStyle, // stylesheet location
      center: [113.565,22.165], // starting position [lng, lat]
      zoom: 11.25, // starting zoom
      minZoom: 11,
    });

    this.busMap.addControl(new MapboxLanguage({
      defaultLanguage: 'mul'
    }));

    this.fetchRoutes();
    this.fetchDyMessage();
    setInterval(() => {
      this.fetchData();
    }, 15000);
    setInterval(() => {
      this.getArrivingBuses(this.currentlyOpenedIndex);
    },5000);
    setInterval(() => {
      this.fetchTraffic();
    },60000)

  }
}).
mount("#app");

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .catch(() => {
      console.log('ServiceWorker not registered');
    })
}


