Vue.createApp({
  data() {
    return {
      busRoute: "",
      busDirection: 0,
      busAvailableDirection: "2",
      busRouteInfo: undefined,
      busRouteData: undefined,
      busInfoLocations: undefined,
      busStationLocations: undefined,
      arrivingBuses: [],
      error: false,
      routesGenerated: {},
      currentlyOpenedIndex: [],
      corsProxy: "",
	};

  },
  methods: {
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
      let stations = [];
      let arrivingBus = [];
      let noTimeArrivingBus = [];
      if (this.busRouteInfo) {
        let stationBefore = this.busRouteInfo.slice(0, index).reverse();
		let count = -1;
        for (let i = 0; i < index; i++) {
          if (Object.keys(arrivingBus).length < 3) {
            for (let comingBus of stationBefore[i].busInfo) {
              if (Object.keys(arrivingBus).length < 3) {
				count++;
                noTimeArrivingBus.push({
					'plate': comingBus.busPlate,
					'speed': comingBus.speed,
					'distanceToThis': i + 1,
					'durationGet': false
				});
				console.log(arrivingBus);
                this.arrivingBuses[index] = noTimeArrivingBus.slice(0,3);
                let url = `https://router.project-osrm.org/route/v1/driving/${
                this.busInfoLocations.filter(
                bus => bus.busPlate == comingBus.busPlate)[
                0].longitude
                },${
                this.busInfoLocations.filter(
                bus => bus.busPlate == comingBus.busPlate)[
                0].latitude
                };`;
                for (let station of this.busStationLocations.slice(
                index - i,
                parseInt(index) + 1))
                {
                  stations.push(`${station.longitude},${station.latitude}`);
                }
                url += stations.join(";");
                url += `?generate_hints=false&skip_waypoints=true`;
                fetch(url).
                then(response => response.json()).
                then(data => {
                  let time = data.routes[0].duration / 60 + i * 0.75;-
				  arrivingBus
                  arrivingBus.push({
					  'plate': comingBus.busPlate,
				      'speed': comingBus.speed,
					  'distanceToThis': i + 1,
					  'durationGet': true,
					  'duration': Math.round(time)
				  });
                  this.arrivingBuses[index] = arrivingBus.slice(0,3);
				  console.log(arrivingBus);
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
    fetchData() {
      if (this.busRoute != "") {
        fetch(
        `${this.corsProxy}https://bis.dsat.gov.mo:37812/macauweb/getRouteData.html?routeName=${this.busRoute}&dir=${this.busDirection}&lang=zh-tw`).

        then(response => response.json()).
        then(data => {
          this.busRouteData = data.data.routeInfo;
          this.busAvailableDirection = data.data.direction;
        }).
        catch(error => {
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
        catch(error => {
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
        catch(error => {
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
	},30000)
  } }).
mount("#app");