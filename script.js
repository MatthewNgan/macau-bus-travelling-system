Vue.createApp({
  data() {
    return {
      busRoute: "",
      busDirection: 0,
      busAvailableDirection: "2",
      busRouteInfo: undefined,
      busRouteData: undefined,
      busRouteTraffic: undefined,
      busInfoLocations: undefined,
      busStationLocations: undefined,
      arrivingBuses: [],
      error: false,
      routesGenerated: {},
      currentlyOpenedIndex: [],
      corsProxy: "https://cors-for-macau-bus.herokuapp.com/",
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
    toggleIndex(index) {
      let details = document.querySelectorAll('details');
      if (details[index].hasAttribute("open")) {
        this.getArrivingBuses(index);
      }
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
      
      const changeDirectionButton = document.querySelector("#changedirection");
      changeDirectionButton.disabled = true;
      this.fetchTraffic();
      this.fetchData();
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
              this.arrivingBuses[index].push({
                'plate': comingBus.busPlate,
                'speed': comingBus.speed,
                'distanceToThis': i + 1,
                'durationGet': true,
                'duration': this.calculateTime(index-i,index,[this.busInfoLocations.filter(bus => bus.busPlate == comingBus.busPlate)[0].longitude,this.busInfoLocations.filter(bus => bus.busPlate == comingBus.busPlate)[0].latitude])+i,
              });
              // let url = `https://router.project-osrm.org/route/v1/driving/${this.busInfoLocations.filter(bus => bus.busPlate == comingBus.busPlate)[0].longitude},${this.busInfoLocations.filter(bus => bus.busPlate == comingBus.busPlate)[0].latitude};${this.busStationLocations[index-i].longitude},${this.busStationLocations[index-i].latitude}`;
              // url += `?generate_hints=false&skip_waypoints=true`;
              // fetch(url).
              // then(response => response.json()).
              // then(data => {
              //   let time = Math.ceil(data.routes[0].distance / 600);
              //   let b = {
              //     'plate': comingBus.busPlate,
              //     'speed': comingBus.speed,
              //     'distanceToThis': i + 1,
              //     'durationGet': true,
              //     'duration': time * parseInt(this.busRouteTraffic[index-i-1].newRouteTraffic) + this.calculateTime(index-i,index,[this.busInfoLocations.filter(bus => bus.busPlate == comingBus.busPlate)[0].longitude,this.busInfoLocations.filter(bus => bus.busPlate == comingBus.busPlate)[0].latitude])+i,
              //   };
              //   this.arrivingBuses[index].shift();
              //   this.arrivingBuses[index].push(b);
              //   this.arrivingBuses[index] = [...new Set(this.arrivingBuses[index].slice())]
              //   if (this.arrivingBuses[index].slice().filter(bus => bus.durationGet).length == this.arrivingBuses[index].length) {
              //     this.arrivingBuses[index].sort((x,y) => (x.duration > y.duration) ? 1 : ((x.duration < y.duration) ? -1 : 0));
              //   }
              // });
              count++;
            }
          }
        }
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
    fetchTraffic(){
      if (this.busRoute != "") {
        let url = `${this.corsProxy}https://bis.dsat.gov.mo:37812/ddbus/common/supermap/route/traffic?routeCode=${"0".repeat(5-this.busRoute.length) + this.busRoute}&direction=${this.busDirection}&indexType=00&device=web`
        fetch(url).then(response => response.json()).then(data => {
          this.busRouteTraffic = data.data;
          this.error = false;
        }).catch(() => {
          this.error = true;
          this.busRouteTraffic = undefined;
        });
      }
    },
    fetchData() {
      if (this.busRoute != "") {
        fetch(
        `${this.corsProxy}https://bis.dsat.gov.mo:37812/macauweb/getRouteData.html?routeName=${this.busRoute}&dir=${this.busDirection}&lang=zh-tw`).

        then(response => response.json()).
        then(data => {
          this.busRouteData = data.data.routeInfo;
          this.busAvailableDirection = data.data.direction;
          if (data.data.direction == "0") {
            const changeDirectionButton = document.querySelector("#changedirection");
            changeDirectionButton.disabled = false;
          }
        }).
        catch(() => {
          this.busRouteData = undefined;
          this.error = true;
        });
        fetch(
        `${this.corsProxy}https://bis.dsat.gov.mo:37812/macauweb/routestation/bus?routeName=${this.busRoute}&dir=${this.busDirection}`).

        then(response => response.json()).
        then(data => {
          this.busRouteInfo = data.data.routeInfo;
          this.error = false;
        }).
        catch(() => {
          this.error = true;
          this.busRouteInfo = undefined;
        });
        fetch(
        `${this.corsProxy}https://bis.dsat.gov.mo:37812/macauweb/routestation/location?routeName=${this.busRoute}&dir=${this.busDirection}&lang=zh-tw`).

        then(response => response.json()).
        then(data => {
          this.busInfoLocations = data.data.busInfoList;
          this.busStationLocations = data.data.stationInfoList;
          this.error = false;
        }).
        catch(() => {
          this.error = true;
        });
      } else {
        this.busRouteInfo = undefined;
        this.error = false;
      }
    },
    routeChanged() {
      if (this.busRoute.toLowerCase() != "701x") this.busRoute = this.busRoute.toUpperCase();
      else this.busRoute = this.busRoute.toLowerCase();
      
      var tempRoute = this.busRoute.valueOf();
      setTimeout(() => {
        if (tempRoute == this.busRoute) {
          this.currentlyOpenedIndex = undefined;
          this.busDirection = 0;
          this.routesGenerated = {};
        
          const details = document.querySelectorAll("details");
          details.forEach(detail => {
            detail.removeAttribute("open");
          });
    
          this.fetchTraffic();
          this.fetchData();
        }
      },1000);
    } },
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
    if (window.location.href.includes("localhost")) {
      this.corsProxy = "";
    }
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
mount("#route-info");
