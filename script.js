var app = Vue.createApp({
  data() {
    return {
      corsProxy: 'https://cors-anywhere.matthewngan.workers.dev/?', appVersion: 'v1.5.1',
      // corsProxy: 'http://192.168.0.100:8010/', appVersion: 'v1.5.1',
      colorScheme: 'light',
      currentModal: undefined,
      currentView: 'route',
      isModalVisible: false,
      noInternet: false,
      refreshing: false,
      routeMainPoints: {
        '1': ['關閘','媽閣'],
        '1A': ['筷子基街','新口岸/科英布拉街'],
        '2': ['永寧廣場','媽閣'],
        '2A': ['東方明珠','亞馬喇前地'],
        '3': ['關閘','外港碼頭'],
        '3A': ['司打口','關閘'],
        '3AX': ['關閘','亞馬喇前地'],
        '3X': ['關閘','亞馬喇前地'],
        '4': ['筷子基','新馬路'],
        '5': ['旅遊塔','華大新村'],
        '5AX': ['旅遊塔','華大新村'],
        '5X': ['筷子基北灣','皇朝'],
        '6A': ['永寧廣場','山頂醫院'],
        '6B': ['凱泉灣','山頂醫院'],
        '7': ['東方明珠','城市日前地'],
        '8': ['工業園街','回力'],
        '8A': ['工業園街','亞馬喇前地'],
        '9': ['牧場街','媽閣'],
        '9A': ['牧場街','旅遊塔'],
        '10': ['關閘','媽閣'],
        '10A': ['外港碼頭','媽閣'],
        '10B': ['馬場大馬路','殷皇子馬路'],
        '10X': ['牧場街','亞馬喇前地'],
        '11': ['媽閣','氹仔官也街'],
        '12': ['永寧廣場','外港碼頭'],
        '15': ['海洋花園','九澳村'],
        '16': ['牧場街','下環街市'],
        '16S': ['牧場街','媽閣'],
        '17': ['白鴿巢','文化中心'],
        '17S': ['新口岸/科英布拉街','關閘'],
        '18': ['牧場街','媽閣'],
        '18A': ['東方明珠','新馬路'],
        '18B': ['永定街','媽閣'],
        '19': ['永寧廣場','新馬路'],
        '21A': ['媽閣','九澳油庫'],
        '22': ['祐漢','柯維納馬路'],
        '23': ['青洲','旅遊塔'],
        '25': ['關閘','路環市區'],
        '25AX': ['關閘','蝴蝶谷大馬路'],
        '25B': ['關閘','橫琴澳方口岸'],
        '26': ['筷子基北灣','路環街市'],
        '26A': ['筷子基北灣','黑沙海灘'],
        '27': ['青洲','勞動節大馬路'],
        '28A': ['外港碼頭','柯維納馬路'],
        '28B': ['青洲','媽閣廟'],
        '28C': ['回力','看台街/騎士馬路'],
        '29': ['青洲','東方拱門'],
        '30': ['青洲坊','氹仔中央公園'],
        '30X': ['關閘','望德聖母灣'],
        '32': ['筷子基','旅遊塔'],
        '33': ['筷子基','柯維納馬路'],
        '34': ['青洲坊','海洋花園'],
        '35': ['蘇利安圓形地','駕考中心'],
        '36': ['蘇利安圓形地','澳門機場'],
        '37': ['松樹尾','信安馬路'],
        '39': ['新口岸科英布拉街','湖畔大廈'],
        '50': ['城市日前地','路環市區'],
        '50B': ['城市日前地','駕考中心'],
        '51': ['蝴蝶谷大馬路','關閘'],
        '51A': ['海擎天','蝴蝶谷大馬路'],
        '51X': ['關閘','路氹連貫公路'],
        '52': ['蝴蝶谷大馬路','亞馬喇前地'],
        '55': ['蝴蝶谷大馬路','司打口'],
        '56': ['蝴蝶谷大馬路','高士德'],
        '59': ['關閘','聯生工業邨'],
        '71': ['澳門大學','亞馬喇前地'],
        '72': ['澳門大學','湖畔大廈'],
        '73': ['澳門大學','黑沙環衛生中心'],
        '73S': ['澳門大學','黑沙環衛生中心'],
        '101X': ['港珠澳大橋邊檢大樓','亞馬喇前地'],
        '102X': ['港珠澳大橋邊檢大樓','橫琴澳方口岸'],
        '701X': ['橫琴澳方口岸','路氹連貫公路'],
        'AP1': ['關閘','澳門機場'],
        'AP1X': ['關閘','澳門機場'],
        'H1': ['山頂醫院','水坑尾'],
        'H2': ['筷子基社屋','山頂醫院'],
        'H3': ['蝴蝶谷大馬路','山頂醫院'],
        'MT1': ['城市日前地','澳門機場'],
        'MT2': ['城市日前地','氹仔中央公園'],
        'MT3': ['高利亞海軍上將馬路','望德聖母灣'],
        'MT4': ['關閘','氹仔客運碼頭'],
        'MT5': ['湖畔大廈','皇朝'],
        'N1A': ['筷子基北灣','亞馬喇前地'],
        'N1B': ['筷子基北灣','亞馬喇前地'],
        'N2': ['筷子基北灣','氹仔客運碼頭'],
        'N3': ['亞馬喇前地','路環市區'],
        'N4': ['工業園街','筷子基北灣'],
        'N5': ['亞馬喇前地','蝴蝶谷大馬路'],
        'N6': ['澳門大學','科技大學'],
      }
	  };
  },
  methods: {
    changeView(view) {
      this.currentView = view;
      setTimeout(() => {
        let e = new Event('resize')
        window.dispatchEvent(e);
      },5)
    }
  },
  mounted() {
    // Service Worker setup
    let newWorker;
    document.querySelector('#reload-modal').addEventListener('click', () => {
      newWorker.postMessage({action: 'skipWaiting'})
    })
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(reg => {
          reg.addEventListener('updatefound', () => {
            newWorker = reg.installing;
            newWorker.addEventListener('statechange', () => {
              switch (newWorker.state) {
                case 'installed':
                  if (navigator.serviceWorker.controller) {
                    setTimeout(() => {document.querySelector('#reload-modal').classList.add('shown');this.isModalVisible = true}, 1000);
                  }
                  break;
              }
            })
          })
        })
        .catch((e) => {
          console.log('ServiceWorker not registered');
          console.log(e);
        })
    }
    // Main app setup
    this.colorScheme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        this.colorScheme = e.matches ? 'dark' : 'light';
    });
    for (let reloadElement of document.querySelectorAll('.reload')) {
      reloadElement.addEventListener('click', () => {
        if (!this.refreshing) {
          window.location.reload();
          this.refreshing = true;
        } else return;
      })
    }
  }
});
app.component('route-view', {
  data() {
    return {
      busList: undefined,
      intervals: [],
      messages: undefined,
    }
  },
  computed: {
    corsProxy() { return this.$root.corsProxy},
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
    calculateTime(traffic,nextStop,targetStop,loc,bus){
      let totaldistance = 0;
      let currentRoutes = [];
      for (let i = 0; i < traffic[nextStop-1].routeCoordinates.split(';').length-1; i++) {
        currentRoutes.push({
          'x': parseFloat(traffic[nextStop-1].routeCoordinates.split(';')[i].split(',')[0]),
          'y': parseFloat(traffic[nextStop-1].routeCoordinates.split(';')[i].split(',')[1]),
        });
      }
      let index = currentRoutes.findIndex(point => point.x == parseFloat(loc[0]) && point.y == parseFloat(loc[1]));
      for (let i = index; i < traffic[nextStop-1].routeCoordinates.split(';').length-2; i++) {
        if (traffic[nextStop-1].routeCoordinates.split(';')[i] && traffic[nextStop-1].routeCoordinates.split(';')[i+1]) {
          let lon1 = traffic[nextStop-1].routeCoordinates.split(';')[i].split(',')[0];
          let lat1 = traffic[nextStop-1].routeCoordinates.split(';')[i].split(',')[1]
          let lon2 = traffic[nextStop-1].routeCoordinates.split(';')[i+1].split(',')[0];
          let lat2 = traffic[nextStop-1].routeCoordinates.split(';')[i+1].split(',')[1];
          totaldistance += this.calculateDistance(lon1,lat1,lon2,lat2)*parseFloat(traffic[nextStop-1].routeTraffic);
        }
      }
      totaldistance += + (bus.status == '1' ? 250 : 0)*parseFloat(traffic[nextStop-1].routeTraffic);
      for (let route of traffic.slice(nextStop,targetStop)) {
        for (let i = 0; i < route.routeCoordinates.split(';').length-2; i++) {
          let lon1 = route.routeCoordinates.split(';')[i].split(',')[0]; let lat1 = route.routeCoordinates.split(';')[i].split(',')[1];
          let lon2 = route.routeCoordinates.split(';')[i+1].split(',')[0]; let lat2 = route.routeCoordinates.split(';')[i+1].split(',')[1];
          totaldistance += this.calculateDistance(lon1,lat1,lon2,lat2)*parseFloat(route.routeTraffic);
        }
        totaldistance += 250 * parseFloat(route.routeTraffic);
      }
      return Math.ceil(totaldistance / 12.5);
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
    fetchRoutes() {
      this.busList = [];
      fetch(`${this.corsProxy}https://bis.dsat.gov.mo:37812/macauweb/getRouteAndCompanyList.html?lang=zh_tw`)
      .then(response => response.json())
      .then(data => {
        this.busList = data.data;
      })
      .catch(() => {
        this.noInternet = true;
      });
    },
    returnHome(modal) {
      if (!this.noInternet) {
        bodyScrollLock.clearAllBodyScrollLocks();
        for (let interval of this.intervals) {
          clearInterval(interval);
        }
        this.$root.currentModal = undefined;
        if (modal && this.$refs[modal] && this.$refs[modal].returnHome()) this.$refs[modal].returnHome();
      }
    },
    requestRoute(route,color) {
      this.$refs['route-info-modal'].requestRoute(route,color);
    }
  },
  mounted() {
    this.fetchRoutes();
    this.fetchDyMessage();
    // PullToRefresh.init({
    //   mainElement: '#route-main-route-view > .container',
    //   triggerElement: '#route-main-route-view > .container',
    //   distThreshold: 80,
    //   distReload: 60,
    //   distMax: 100,
    //   instructionsPullToRefresh: '向下拉以重新載入',
    //   instructionsReleaseToRefresh: '鬆開以重新載入',
    //   instructionsRefreshing: '重新載入中',
    //   onRefresh() {
    //     const event = new Event('reload-routes');
    //     window.dispatchEvent(event);
    //   }
    // });
    window.addEventListener('reload-routes', () => {
      this.fetchRoutes();
      this.fetchDyMessage();
    });
  },
  template: '#route-view-template'
})
app.component('route-modal', {
  data() {
    return {
      bridgeCoords: {
        '01': [[[
          [113.5608566,22.2047643],
          [113.5626161,22.1991966],
          [113.5631847,22.1668194],
          [113.5639894,22.1667598],
          [113.5635924,22.1992066],
          [113.5614681,22.2048289],
          [113.5608566,22.2047643]
        ]],4500],
        '02': [[[
          [113.5437709,22.18665],
          [113.548556,22.1652893],
          [113.5487866,22.165329],
          [113.5441303,22.1866698],
          [113.5437709,22.18665]
        ]],2540],
        '03': [[[
          [113.5322535,22.1784935],
          [113.5388947,22.165945],
          [113.5396671,22.1664617],
          [113.5337448,22.1786227],
          [113.5322535,22.1784935]
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
      mapLoaded: false,
      isStuck: false,
      scroll: true,
      mainStations: ['C690','M1','M132','M134','M144','M161','M167','M170','M172','M184','M219','M222','M224','M239','M272','M50','M9','T308','T365','M16','T326','T349','C689','T343','M135','M7','T339','M10','M137','M111','M88','M800','T551','T419'],
      busRoute: '',
      busColor: '',
      busDirection: 0,
      busAvailableDirection: '2',
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
      eventListenersFunc: [],
      arrivingBuses: [],
      noSuchNumberError: false,
      isScrolling: undefined,
      routesGenerated: {},
      focusingStation: false,
      currentlyOpenedIndex: undefined,
      currentScrollToWarning: 0,
      fetchController: new AbortController(),
    }
  },
  methods: {
    changeDirection() {
      if (this.busDirection == 0) {
        this.busDirection = 1;
      } else {
        this.busDirection = 0;
      }
      
      const details = document.querySelectorAll('details');
      details.forEach(detail => {
        detail.removeAttribute('open');
      });
      const changeDirectionText = document.querySelector('#route-changedirection-text');
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
      if (this.busMap.getLayer('route')) {
        this.busMap.removeLayer('route');
        this.busMap.removeSource('route');
      }
      this.fetchTraffic();
      this.fetchRouteData();
      this.fetchData();
      this.setupStationMarkersOnMap();
      this.setupBusMarkersOnMap();
      this.setupRoutesOnMap();
      if (this.busMap && this.mapEnabled && document.querySelector('.route-bus-info-container')) {
        document.querySelector('.route-bus-info-container').setAttribute('style','');
      }
    },
    disableMap() {
      this.mapEnabled = false;
      localStorage.routeMapEnabled = false;
      if (this.busMap) {
        this.busMap.remove();
      }
      this.busMap = undefined;
      this.mapLoaded = false;
      this.busLayerGroup = [];
      this.stationLayerGroup = [];
      document.querySelector('.route-bus-info-container').setAttribute('style','');
    },
    enableMap() {
      this.mapEnabled = true;
      localStorage.routeMapEnabled = true;
      setTimeout(() => {
        this.mapRefreshed = false;
        this.initMap();
        this.setupBusMarkersOnMap();
        this.setupStationMarkersOnMap();
        this.setupRoutesOnMap();
        document.querySelector('.route-bus-info-container').setAttribute('style','');
      }, 150);
    },
    fetchData() {
      if (this.busRoute != '') {
        this.dataReady.busInfoLocations = false;
        this.dataReady.busRouteInfo = false;
        this.dataReady.busStationLocations = false;
        fetch(`${this.$root.corsProxy}https://bis.dsat.gov.mo:37812/macauweb/routestation/bus?routeName=${this.busRoute}&dir=${this.busDirection}`,{signal: this.fetchController.signal})
        .then(response => response.json())
        .then(data => {
          this.busRouteInfo = data.data.routeInfo;
          this.dataReady.busRouteInfo = true;
        })
        .catch((err) => {
          if (err.name === 'TypeError') {
            this.busRouteInfo = undefined;
            this.$root.noInternet = true;
          }
        });
        fetch(`${this.$root.corsProxy}https://bis.dsat.gov.mo:37812/macauweb/routestation/location?routeName=${this.busRoute}&dir=${this.busDirection}&lang=zh-tw`,{signal: this.fetchController.signal})
        .then(response => response.json())
        .then(data => {
          this.busInfoLocations = data.data.busInfoList;
          this.busStationLocations = data.data.stationInfoList;
          this.$root.currentModal = 'route-info-modal';
          if (this.scroll) {
            this.scroll = !this.scroll;
          }
          this.dataReady.busInfoLocations = true;
          this.dataReady.busStationLocations = true;
        })
        .catch((err) => {
          if (err.name === 'TypeError') this.$root.noInternet = true;
        });
      } else {
        this.busRouteInfo = undefined;
      }
    },
    fetchRouteData() {
      if (this.busRoute != '') {
        fetch(
        `${this.$root.corsProxy}https://bis.dsat.gov.mo:37812/macauweb/getRouteData.html?routeName=${this.busRoute}&dir=${this.busDirection}&lang=zh-tw`,{signal: this.fetchController.signal}).
        then(response => response.json()).
        then(data => {
          this.busRouteData = data.data.routeInfo;
          this.busAvailableDirection = data.data.direction;
          if (data.data.direction == '0') {
            const changeDirectionIcon = document.querySelector('#route-changedirection-icon');
            if (changeDirectionIcon) changeDirectionIcon.disabled = false;
            const changeDirectionText = document.querySelector('#route-changedirection-text');
            if (changeDirectionText) changeDirectionText.disabled = false;
          }
          this.busRouteChange = (data.data.routeInfo.filter(sta => sta.suspendState == '1').length != 0);
          for (let i = 0; i < this.busRouteData.length-2; i++) {
            if (this.busRouteData.slice()[i].staCode[0] != this.busRouteData.slice()[i+1].staCode[0] && this.busRouteData.slice()[i].staCode[0] != 'C' && this.busRouteData.slice()[i+1].staCode[0] != 'C') {
              this.routeCrossingBridge[i] = [this.busRouteData.slice()[i].staCode[0],this.busRouteData.slice()[i+1].staCode[0]];
            }
          }
        })
        .catch((err) => {
          if (err.name === 'TypeError') {
            this.busRouteData = undefined;
            this.$root.noInternet = true;
          }
        });
      }
    },
    fetchTraffic(){
      if (this.busRoute != '') {
        this.dataReady.busRouteTraffic = false;
        this.dataReady.crossBridgeTime = false;
        fetch(`${this.$root.corsProxy}https://bis.dsat.gov.mo:37011/its/Bridge/getTime.html?lang=zh_tw`,{signal: this.fetchController.signal})
        .then(response => response.json())
        .then(data => {
          this.crossBridgeTime = data.data.timeArray;
          this.dataReady.crossBridgeTime = true;
        })
        let url = `${this.$root.corsProxy}https://bis.dsat.gov.mo:37812/ddbus/common/supermap/route/traffic?routeCode=${'0'.repeat(5-this.busRoute.length) + this.busRoute}&direction=${this.busDirection}&indexType=00&device=web`
        fetch(url,{signal: this.fetchController.signal}).then(response => response.json()).then(data => {
          this.noSuchNumberError = false;
          let tempData = data.data.slice();
          this.waitUntil(() => {
            let jamRouteIndex = this.busRouteInfo.findIndex((sta) => sta.staCode.includes('M84'));
            if (jamRouteIndex > -1) {
              jamRouteIndex -= 1;
              tempData[jamRouteIndex].routeTraffic = parseInt(tempData[jamRouteIndex].routeTraffic)+2;
            }
            if (this.busRoute == '32') {
              let cloneRouteIndex = this.busRouteInfo.findIndex((sta) => sta.staCode.includes('M254/1'));
              if (cloneRouteIndex > -1) {
                cloneRouteIndex -= 1;
                tempData[cloneRouteIndex].routeTraffic = parseInt(tempData[cloneRouteIndex].routeTraffic) / 5
              }
            }
            for (let bridgeRoute in this.routeCrossingBridge) {
              let direction = undefined;
              if (this.routeCrossingBridge[bridgeRoute][0] == 'T') {
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
        .catch((err) => {
          if (err.name === 'TypeError') {
            this.busRouteTraffic = undefined;
            this.$root.noInternet = true;
          }
        });
      } else {
        this.busRouteTraffic = undefined;
        this.noSuchNumberError = false;
      }
    },
    focusStation(index=this.currentlyOpenedIndex) {
      if (this.mapEnabled && this.busMap && this.focusingStation) {
        setTimeout(() => {
          let stationLoc = [this.busStationLocations.slice()[index].longitude,this.busStationLocations.slice()[index].latitude];
          if (this.arrivingBuses[index] && this.arrivingBuses[index][0] && this.arrivingBuses[index][0].currentStation >= 0) {
            let closestBusLoc = this.arrivingBuses[index][0].location;
            let closestStationIndex = this.arrivingBuses[index][0].currentStation - 1;
            let routeCoords = [closestBusLoc];
            for (let p of this.busRouteTraffic.slice(closestStationIndex, index)) {
              for (let line of p.routeCoordinates.split(';')) {
                if (line.includes(',')) {
                  routeCoords.push([parseFloat(line.split(',')[0]),parseFloat(line.split(',')[1])]);
                }
              }
            }
            routeCoords.push(stationLoc);
            let bbox = turf.bbox(turf.lineString(routeCoords));
            this.busMap.fitBounds(bbox, {padding: 25, maxZoom: 15.5});
            var routeSource = this.busMap.getSource('route');
            if (routeSource) {
              routeSource = this.busMap.getSource('route')._data;
              for (let [i,features] of routeSource.features.slice().entries()) {
                if (i >= index || i < closestStationIndex) {
                  features.properties.opacity = 0.25;
                } else {
                  features.properties.opacity = 1;
                }
              }
              this.busMap.getSource('route').setData(routeSource)
            }
            for (let i = 0; i < this.stationLayerGroup.length; i++) {
              if (i > index || i < closestStationIndex) {
                this.stationLayerGroup.slice().reverse()[i].getElement().style.opacity = 0;
              } else if (i == index || i == closestStationIndex) {
                this.stationLayerGroup.slice().reverse()[i].getElement().style.opacity = 1;
              }
              else {
                this.stationLayerGroup.slice().reverse()[i].getElement().style.removeProperty('opacity');
              }
            }
            for (let busElement of document.querySelectorAll('.route-bus-marker')) {
              if (!busElement.id.includes(this.arrivingBuses[index][0].plate)) {
                busElement.style.setProperty('display', 'none', 'important');
              } else {
                busElement.style.removeProperty('display');
              }
            }
          } else {
            this.busMap.flyTo({
              center: stationLoc,
              zoom: 15.5,
            });
            var routeSource = this.busMap.getSource('route');
            if (routeSource) {
              routeSource = this.busMap.getSource('route')._data;
              for (let features of routeSource.features.slice()) {
                features.properties.opacity = 1;
              }
              this.busMap.getSource('route').setData(routeSource);
            }
            for (let i = 0; i < this.stationLayerGroup.length; i++) {
              this.stationLayerGroup.slice().reverse()[i].getElement().style.removeProperty('opacity');
            }
            for (let busElement of document.querySelectorAll('.route-bus-marker')) {
              busElement.style.removeProperty('display');
            }
          }
        },150)
      }
    },
    getArrivingBuses(index) {
      if (this.busInfoLocations && this.busRouteTraffic) {
        this.arrivingBuses[index] = [];
        let stationBefore = this.busRouteInfo.slice(0, index).reverse();
        var count = 0;
        for (let i = 0; i < index; i++) {
          for (let comingBus of stationBefore[i].busInfo) {
            if (count < 3) {
              var routeTraffic = this.busRouteTraffic[index-i-1].routeTraffic;
              this.arrivingBuses[index].push({
                'plate': `${comingBus.busPlate.substring(0,2)}-${comingBus.busPlate.substring(2,4)}-${comingBus.busPlate.substring(4,6)}`,
                // 'plate': comingBus.busPlate,
                'speed': comingBus.speed,
                'distanceToThis': i + 1,
                'durationGet': true,
                'duration': this.$parent.calculateTime(this.busRouteTraffic,index-i,index,[this.busInfoLocations.filter(bus => bus.busPlate == comingBus.busPlate)[0].longitude,this.busInfoLocations.filter(bus => bus.busPlate == comingBus.busPlate)[0].latitude],comingBus),
                'routeTraffic': routeTraffic,
                'location': [this.busInfoLocations.filter(bus => bus.busPlate == comingBus.busPlate)[0].longitude,this.busInfoLocations.filter(bus => bus.busPlate == comingBus.busPlate)[0].latitude],
                'currentStation': index - i,
              });
              count++;
            }
          }
        }
        this.arrivingBuses[index].sort((x,y) => (x.duration > y.duration) ? 1 : ((x.duration < y.duration) ? -1 : 0));
      }
    },
    initMap() {
      // release vvvv
      // var mapboxAccessToken = 'pk.eyJ1IjoibWF0dGhld25nYW4iLCJhIjoiY2tqMmJ1bmp1M2E3ODJ5bjRtejhsbDBnMSJ9.8d5AH06RmzA6od3W8UNz9A';
      // debug vvvv
      var mapboxAccessToken = 'pk.eyJ1IjoibWF0dGhld25nYW4iLCJhIjoiY2tqMTNzNzJuMWtjaDJ5bTBucjNrM3I3NiJ9.DOqgKmjCq8zL50KNIvZNlg';
      
      var mapStyle = 'matthewngan/ckjzsnvju0uqx17o6891qzch5';
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        mapStyle = 'matthewngan/ckjzsftuo0uik17o62fm4oahc';
      }
      mapboxgl.accessToken = mapboxAccessToken;
      this.busMap = new mapboxgl.Map({
        container: 'route-bus-map',
        style: 'mapbox://styles/' + mapStyle, // stylesheet location
        center: [113.5622406,22.166422], // starting position [lng, lat]
        zoom: 11, // starting zoom
        minZoom: 10,
        maxZoom: 18.5,
        maxBounds: [[113.3157349,21.9111969],[113.7963867,22.4199152]],
        dragRotate: false,
        touchPitch: false,
      });
      this.busMap.touchZoomRotate.disableRotation();
      this.busMap.on('zoom', () => {
        if (this.busMap.getZoom() > 13.5) {
          for (let mapStation of document.querySelectorAll('.route-map-station')) {
            mapStation.classList.toggle('shown',true)
          }
        } else {
          for (let mapStation of document.querySelectorAll('.route-map-station')) {
            mapStation.classList.toggle('shown',false)
          }
        }
        if (this.busMap.getZoom() > 14) {
          for (let mapImportantStationText of document.querySelectorAll('.destination span, .origin span')) {
            mapImportantStationText.classList.toggle('shown',true);
          }
          for (let busMarker of document.querySelectorAll('.route-bus-marker')) {
            busMarker.style.width = (this.busMap.getZoom() + 3).toString() + 'px';
          }
          if (this.busMap.getLayer('route')) this.busMap.setPaintProperty('route','line-width',4)
        } else {
          for (let mapImportantStationText of document.querySelectorAll('.destination span, .origin span')) {
            mapImportantStationText.classList.toggle('shown',false);
          }
          for (let busMarker of document.querySelectorAll('.route-bus-marker')) {
            busMarker.style.width = '14px';
          }
          if (this.busMap.getLayer('route')) this.busMap.setPaintProperty('route','line-width',2)
        }
      })
      this.busMap.on('load', () => this.mapLoaded = true);
    },
    openInfoBox() {
      this.$root.currentModal = 'message';
      document.querySelector('#route-info-box').classList.add('shown');
    },
    requestRoute(route,color) {
      if (this.mapEnabled && !this.busMap) {
        this.initMap();
      }
      this.$root.currentModal = 'route-info-modal';
      this.busRoute = route;
      this.scroll = true;
      this.busColor = color;
      this.routeChanged();
      bodyScrollLock.disableBodyScroll(document.querySelector('#route-modal'))
      if (this.busMap && this.mapEnabled) {
        document.querySelector('#route-bus-map').setAttribute('style','');
        document.querySelector('.mapboxgl-canvas').setAttribute('style','');
        this.busMap.resize();
      }
      document.querySelector('#route-modal').scrollTop = 0;
      let scrollEventFunc = () => {
        if (!this.busMap && !this.mapEnabled && document.querySelector('.route-bus-title')) {
          var thisTop = document.querySelector('.route-navbar').offsetTop;
          if (this.mapEnabled) var titleHeight = document.querySelector('.route-bus-title').offsetHeight + document.querySelector('#route-bus-map').offsetHeight;
          else var titleHeight = document.querySelector('.route-bus-title').offsetHeight
          document.querySelector('.route-navbar').classList.toggle('stuck', thisTop > titleHeight);
        } else {
          document.querySelector('.route-navbar').classList.toggle('stuck', false);
        }
        if (this.busMap && this.mapEnabled && document.querySelector('.route-bus-title')) {
          document.querySelector('.route-modal').style.setProperty('--title-offset-top',`${document.querySelector('.route-bus-title').offsetTop}px`)
          this.busMap.resize();
        }
        if (this.isScrolling) clearTimeout(this.isScrolling);
        this.isScrolling = setTimeout(() => {
          if (this.busMap && this.mapEnabled) {
            this.focusStation();
          }
        }, 66);
      }
      this.eventListenersFunc.push(['scroll','#route-modal',scrollEventFunc])
      document.querySelector('#route-modal').addEventListener('scroll',scrollEventFunc);
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
      this.$parent.intervals = [dataInterval, indexInterval, trafficInterval];
    },
    resetMap() {
      this.busMap.setCenter([113.5622406,22.166422]);
      this.busMap.setZoom(11);
      document.querySelector('#route-bus-map').setAttribute('style','');
      document.querySelector('.mapboxgl-canvas').setAttribute('style','');
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
      if (this.busMap.getLayer('route')) {
        this.busMap.removeLayer('route');
        this.busMap.removeSource('route');
      }
    },
    returnHome() {
      document.querySelector('.route-navbar').classList.remove('stuck');
      document.querySelector('#route-info-box').classList.remove('shown');
      this.mapRefreshed = false;
      this.routeCrossingBridge = [];
      this.crossBridgeTime = undefined;
      this.busRoute = '';
      this.busDirection = 0;
      this.busAvailableDirection = '2';
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
      this.fetchController.abort();
      this.fetchController = new AbortController();
      for (let func of this.eventListenersFunc) {
        document.querySelector(func[1]).removeEventListener(func[0], func[2])
      }
      this.eventListenersFunc = [];
      if(this.mapEnabled && this.busMap) this.resetMap();
    },
    routeChanged() {
      this.busRoute = this.busRoute.toUpperCase();
      this.busAvailableDirection = '2';
      this.currentlyOpenedIndex = undefined;
      this.busDirection = 0;
      this.routesGenerated = {};
    
      const details = document.querySelectorAll('details');
      details.forEach(detail => {
        detail.removeAttribute('open');
      });
      this.fetchTraffic();
      this.fetchRouteData();
      this.fetchData();
      this.setupStationMarkersOnMap();
      this.setupBusMarkersOnMap();
      this.setupRoutesOnMap();
    },
    scrollToWarning() {
      var mainRouteInfo = (this.busMap && this.mapEnabled) ? document.querySelector('.route-bus-info-container') : document.querySelector('.route-modal');
      var suspendedParent = document.querySelectorAll('.route-suspended')[this.currentScrollToWarning].parentNode;
      mainRouteInfo.scroll({top: (this.busMap && this.mapEnabled) ? suspendedParent.offsetTop : suspendedParent.offsetTop + document.querySelector('.route-bus-title').offsetHeight, behavior: 'smooth'});
      var suspendedStations = this.busRouteData.filter(station => station.suspendState == '1');
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
          for (let bus of this.busInfoLocations.slice()) {
            var busElement = document.createElement('img');
            if (this.busColor.toLowerCase() == 'blue') busElement.src = '/images/icons/blue-bus-icon.png'
            else if (this.busColor.toLowerCase() == 'orange') busElement.src = '/images/icons/orange-bus-icon.png'
            busElement.classList.add('route-bus-marker');
            busElement.id = `bus-${bus.busPlate.substring(0,2)}-${bus.busPlate.substring(2,4)}-${bus.busPlate.substring(4,6)}`;
            for (let sta of this.busRouteInfo) {
              for (let lbus of sta.busInfo) {
                if (lbus.busPlate == bus.busPlate && lbus.status == '0') {
                  busElement.classList.add('moving',true);
                  break;
                };
              }
              if (busElement.classList.contains('moving')) break;
            }
            if (this.busMap.getZoom() <= 14) busElement.style.width = '14px';
            else busElement.style.width = (this.busMap.getZoom() + 1.5).toString() + 'px';
            var busPopup = new mapboxgl.Popup({closeButton: false, offset: 12}).setHTML(`<code class='${this.busColor.toLowerCase()}'>` + bus.busPlate + '</code>' + (bus.speed == '-1' ? '' : ` ${bus.speed}km/h`));
            var busMarker = new mapboxgl.Marker(busElement).setLngLat([bus.longitude, bus.latitude]).setPopup(busPopup).addTo(this.busMap);
            this.busLayerGroup.push(busMarker);
            this.getArrivingBuses(this.currentlyOpenedIndex);
            this.focusStation();
          }
        })
      }
    },
    setupRoutesOnMap() {
      if (this.mapEnabled && this.busMap) {
        this.waitUntil(() => {
          if (this.busMap.getLayer('route')) {
            this.busMap.removeLayer('route');
            this.busMap.removeSource('route');
          }
          var allCoords = [];
          var source = {
            'type': 'geojson',
            'data': {
              'type': 'FeatureCollection',
              'features': []
            },
          }
          for (let i = 0; i < this.busRouteTraffic.length-1; i++) {
            if (typeof(this.busRouteTraffic[i].routeCoordinates) == 'string') {
              var routeCoordinates = [];
              for (let routeCoordinate of this.busRouteTraffic[i].routeCoordinates.slice().split(';')) {
                routeCoordinates.push([parseFloat(routeCoordinate.split(',')[0]),parseFloat(routeCoordinate.split(',')[1])]);
                allCoords.push([parseFloat(routeCoordinate.split(',')[0]),parseFloat(routeCoordinate.split(',')[1])]);
              }
              if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                if (Math.ceil(parseFloat(this.busRouteTraffic[i].routeTraffic)) == 1) var color = '#007400';
                else if (Math.ceil(parseFloat(this.busRouteTraffic[i].routeTraffic)) == 2) var color = '#5b7c00';
                else if (Math.ceil(parseFloat(this.busRouteTraffic[i].routeTraffic)) == 3) var color = '#817f00';
                else if (Math.ceil(parseFloat(this.busRouteTraffic[i].routeTraffic)) == 4) var color = '#7e4e00';
                else if (Math.ceil(parseFloat(this.busRouteTraffic[i].routeTraffic)) >= 5) var color = '#7e0f00'
              } else {
                if (Math.ceil(parseFloat(this.busRouteTraffic[i].routeTraffic)) == 1) var color = '#3acc00';
                else if (Math.ceil(parseFloat(this.busRouteTraffic[i].routeTraffic)) == 2) var color = '#99c800';
                else if (Math.ceil(parseFloat(this.busRouteTraffic[i].routeTraffic)) == 3) var color = '#d1bc00';
                else if (Math.ceil(parseFloat(this.busRouteTraffic[i].routeTraffic)) == 4) var color = '#d68400';
                else if (Math.ceil(parseFloat(this.busRouteTraffic[i].routeTraffic)) >= 5) var color = '#c70000'
              }
              routeCoordinates.pop();
              source.data.features.push({
                'type': 'Feature',
                'properties': {
                  'color': color
                },
                'geometry': {
                  'type': 'LineString',
                  'coordinates': routeCoordinates,
                },
              })
            }
          }
          this.busMap.addSource('route',source)
          this.busMap.addLayer({
            'id': 'route',
            'type': 'line',
            'source': 'route',
            'layout': {
              'line-join': 'round',
              'line-cap': 'round',
            },
            'paint': {
              'line-color': ['get','color'],
              'line-width': this.busMap.getZoom() > 14 ? 4 : 2,
              'line-opacity': ['get','opacity'],
            }
          });
          if (!this.mapRefreshed) {
            var routeLine = turf.lineString(allCoords);
            var bbox = turf.bbox(routeLine);
            this.busMap.fitBounds(bbox, {padding: 50});
            this.mapRefreshed = true;
          }
          this.focusStation();
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
              stationElement.classList.add('route-map-important-station');
              stationElement.classList.add('origin');
              stationElement.appendChild(stationTextElement);
            } else if (index === 0) {
              var stationElement = document.createElement('div');
              var stationTextElement = document.createElement('span');
              stationTextElement.innerHTML = this.busRouteData.slice().reverse()[index].staName;
              stationElement.classList.add('route-map-important-station');
              stationElement.classList.add('destination');
              stationElement.appendChild(stationTextElement);
            } else if (this.mainStations.includes(this.busRouteData.slice().reverse()[index].staCode.split('/')[0])) {
              var stationElement = document.createElement('div');
              stationElement.classList.add('route-map-important-station');
            } else {
              var stationElement = document.createElement('img');
              if (this.colorScheme == 'light') stationElement.src = '/images/icons/bus-stop-light.png';
              else stationElement.src = '/images/icons/bus-stop-dark.png'
              stationElement.classList.add('route-map-station');
              if (this.busMap.getZoom() <= 13.5) stationElement.classList.toggle('shown',false);
              else stationElement.classList.toggle('shown',true);
            }
            stationElement.addEventListener('hover',() => {
              this.busMap.getCanvas().style.cursor = 'pointer';
            });
            stationElement.addEventListener('click',(e) => {
              const details = document.querySelectorAll('details')
              details.forEach((detail) => {
                if (detail != e) detail.removeAttribute('open');
              });
              this.currentPopup = this.busStationLocations.slice().length - index - 1;
              document.querySelectorAll('.route-bus-info details')[this.busStationLocations.slice().length - index - 1].open = true;
              document.querySelector('.route-bus-info-container').scroll({top: (1.5 * parseFloat(getComputedStyle(document.documentElement).fontSize) + 20)*(this.busStationLocations.slice().length - index - 1), behavior: 'smooth'});
            });
            var stationPopup = new mapboxgl.Popup({closeButton: false, offset: 8}).setText(`${this.busRouteData.slice().reverse()[index].staCode} ${this.busRouteData.slice().reverse()[index].staName}`);
            stationPopup.on('close', () => {
              this.unfocusStation();
            })
            var stationMarker = new mapboxgl.Marker(stationElement).setLngLat([parseFloat(station.longitude), parseFloat(station.latitude)]).setPopup(stationPopup).addTo(this.busMap);
            this.stationLayerGroup.push(stationMarker);
          }
        })
      }
    },
    toggleIndex(index) {
      this.currentlyOpenedIndex = index;
      let details = document.querySelectorAll('details');
      if (this.currentPopup != undefined && this.stationLayerGroup) this.stationLayerGroup.slice().reverse()[this.currentPopup].getPopup().remove();
      if (details[index] && details[index].hasAttribute('open')) {
        this.getArrivingBuses(index);
        this.focusingStation = true;
        this.focusStation();
        if (this.mapEnabled && this.busMap && this.stationLayerGroup) {
          this.stationLayerGroup.slice().reverse()[index].getPopup().addTo(this.busMap);
          this.currentPopup = index;
        }
      }
    },
    waitUntil(callback,a=true) {
      setTimeout(() => {
        let condition = [this.dataReady.busRouteInfo, this.dataReady.busStationLocations, this.dataReady.busInfoLocations, this.dataReady.crossBridgeTime]
        if (a) condition.push(this.dataReady.busRouteTraffic);
        if (this.mapEnabled) condition.push(this.mapLoaded);
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
    unfocusStation() {
      this.currentPopup = undefined;
      this.focusingStation = false;
      setTimeout(() => {
        if (!this.focusingStation) {
          for (let i = 0; i < this.stationLayerGroup.length; i++) {
            this.stationLayerGroup[i].getElement().style.removeProperty('opacity');
          }
          var routeSource = this.busMap.getSource('route');
          if (routeSource) {
            routeSource = this.busMap.getSource('route')._data;
            for (let [i,features] of routeSource.features.slice().entries()) {
              features.properties.opacity = 1;
            }
            this.busMap.getSource('route').setData(routeSource);
          }
          for (let busElement of document.querySelectorAll('.route-bus-marker')) {
            busElement.style.removeProperty('display');
          }
        }
      }, 50)
    }
  },
  mounted() {
    if (localStorage.routeMapEnabled) {
      this.mapEnabled = localStorage.routeMapEnabled === 'true';
    } else {
      localStorage.routeMapEnabled = 'false';
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',
      () => {
        if (this.mapEnabled) {
          this.disableMap();
          this.enableMap();
        }
      }
    );
  },
  updated() {
    const details = document.querySelectorAll('details');
    details.forEach((targetDetail) => {
      targetDetail.addEventListener('click', () => {
        details.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute('open');
          }
        });
      });
    });
  },
  template: '#route-modal-template',
});
app.component('route-station-block', {
  props: ['busRouteData','busRouteInfo','busColor','busRouteTraffic','arrivingBuses','index','station'],
  computed: {
    busImgUrl() {
      return `/images/icons/${this.busColor.toLowerCase()}-bus-icon.png`;
    }
  },
  template: '#route-station-block-template',
});
app.component('route-modal-header', {
  props: ['busRouteData','busAvailableDirection','busRoute','busColor'],
  template: '#route-modal-header-template',
});
app.component('about-view', {
  template: '#about-view-template'
})
app.mount('#app');
