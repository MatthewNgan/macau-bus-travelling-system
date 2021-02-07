import requests,json
from multiprocessing import Process, Manager

def fetchData(stationList, routeName,b=True):
    direction = 0 if b else 1
    print(f"{routeName} - {direction}")
    routeR = requests.get('https://bis.dsat.gov.mo:37812/macauweb/getRouteData.html?routeName=' + routeName + '&dir=' + str(direction) + '&lang=zh-tw')
    formattedR = routeR.json()['data']
    for sta in formattedR['routeInfo']:
        if sta['staCode'] in stationList:
            l = stationList[sta['staCode']]
            l['routes'].append({'routeName': routeName,'direction': direction})
            stationList[sta['staCode']] = l
        else:
            stationList[sta['staCode']] = {'name': sta['staName'],'routes': [{'routeName': routeName,'direction': direction}]}
    aDirection = formattedR['direction']
    if aDirection == '0' and b:
        fetchData(stationList,routeName,False)

if __name__ == '__main__':
    with Manager() as manager:
        r = requests.get('https://bis.dsat.gov.mo:37812/macauweb/getRouteAndCompanyList.html?lang=zh_tw')
        routeList = r.json()['data']['routeList']
        stationList = manager.dict()
        pl = [Process(target=fetchData, args=(stationList,route['routeName'], True,)) for route in routeList]
        for p in pl:
            p.start()
        for p in pl:
            p.join()
        for key,station in stationList.items():
            sortedStation = []
            for orgroute in routeList:
                for route in station['routes']:
                    if route['routeName'] == orgroute['routeName']:
                        sortedStation.append(route)
            stationList[key] = {'name': station['name'], 'routes': sortedStation}
        txt = open(r"stations.json","w",encoding="utf-8")
        txt.write(json.dumps(dict(sorted(stationList.items())), indent=2))
        print('Done')