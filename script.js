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
      // corsProxy: "https://cors-for-macau-bus.herokuapp.com/",
      corsProxy: "",
	  };
  },
  methods: {
    calculateTime(nextStop,targetStop){
      let totaldistance = 0;
      for (let route of this.busRouteTraffic.slice(nextStop,targetStop)) {
        for (let i = 0; i < route.routeCoordinates.split(";").length-2; i++) {
          let lon1 = route.routeCoordinates.split(";")[i].split(",")[0]; let lat1 = route.routeCoordinates.split(";")[i].split(",")[1];
          let lon2 = route.routeCoordinates.split(";")[i+1].split(",")[0]; let lat2 = route.routeCoordinates.split(";")[i+1].split(",")[1];
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
          totaldistance += d*parseInt(route.newRouteTraffic);
        }
      }
      return Math.ceil(totaldistance / 750);
    },
    toggleIndex(index) {
      if (this.currentlyOpenedIndex != index) {
        this.currentlyOpenedIndex = index;
        this.getArrivingBuses(index);
      } else {
        this.currentlyOpenedIndex = undefined;
      }
    },
    changeDirection() {
      if (this.busDirection == 0) {
        this.busDirection = 1;
      } else {
        this.busDirection = 0;
      }
      this.fetchData();
    },
    getArrivingBuses(index) {
      let arrivingBus = [];
      let noTimeArrivingBus = [];
      if (this.busRouteInfo) {
        let stationBefore = this.busRouteInfo.slice(0, index).reverse();
            for (let i = 0; i < index; i++) {
              if (Object.keys(arrivingBus).length < 3) {
                for (let comingBus of stationBefore[i].busInfo) {
                  if (Object.keys(arrivingBus).length < 3) {
                    noTimeArrivingBus.push({
                      'plate': comingBus.busPlate,
                      'speed': comingBus.speed,
                      'distanceToThis': i + 1,
                      'durationGet': false
                    });
                    this.arrivingBuses[index] = noTimeArrivingBus.slice(0,3);
                    let url = `https://router.project-osrm.org/route/v1/driving/${this.busInfoLocations.filter(bus => bus.busPlate == comingBus.busPlate)[0].longitude},${this.busInfoLocations.filter(bus => bus.busPlate == comingBus.busPlate)[0].latitude};${this.busStationLocations[index].longitude},${this.busStationLocations[index].latitude}`;
                    url += `?generate_hints=false&skip_waypoints=true`;
                    fetch(url).
                    then(response => response.json()).
                    then(data => {
                    let time = Math.round(data.routes[0].distance / 600);
                      arrivingBus.push({
                        'plate': comingBus.busPlate,
                        'speed': comingBus.speed,
                        'distanceToThis': i + 1,
                        'durationGet': true,
                        'duration': time + this.calculateTime(index-i,index)+i,
                      });
                      this.arrivingBuses[index] = arrivingBus.slice(0,3);
                    });
              } else {
                break;
              }
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
      this.currentlyOpenedIndex = undefined;
      this.busRoute = this.busRoute.toUpperCase();
      this.busDirection = 0;
      this.routesGenerated = {};
	  
      const details = document.querySelectorAll("details");
      details.forEach(detail => {
        detail.removeAttribute("open");
      });

      this.fetchData();
      this.fetchTraffic();
    } },
  updated() {
	this.currentlyOpenedIndex = undefined;
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
    setInterval(() => {
      this.fetchData();
    }, 15000);
    setInterval(() => {
      this.getArrivingBuses(this.currentlyOpenedIndex);
    },30000);
    setInterval(() => {
      this.fetchTraffic();
    },60000)
  }
}).
mount("#app");