import requests,json
r = requests.get('https://bis.dsat.gov.mo:37812/macauweb/getRouteAndCompanyList.html?lang=zh_tw')
routeList = r.json()['data']['routeList']
stationList = {}
for route in routeList:
    routeName = route['routeName']
    print(f"a{routeName}")
    routeR = requests.get('https://bis.dsat.gov.mo:37812/macauweb/getRouteData.html?routeName=' + routeName + '&dir=0&lang=zh-tw')
    formattedR = routeR.json()['data']
    for sta in formattedR['routeInfo']:
        if sta['staCode'] in stationList:
            stationList[sta['staCode']]['routes'].append({'routeName': routeName,'direction': 0})
        else:
            stationList[sta['staCode']] = {'name': sta['staName'],'routes': [{'routeName': routeName,'direction': 0}]}
    aDirection = formattedR['direction']
    if aDirection == '0':
        print(f"b{routeName}")
        secondRouteR = requests.get('https://bis.dsat.gov.mo:37812/macauweb/getRouteData.html?routeName=' + routeName + '&dir=1&lang=zh-tw')
        formattedSecondRoute = secondRouteR.json()['data']
        for sta in formattedSecondRoute['routeInfo']:
            if sta['staCode'] in stationList:
                stationList[sta['staCode']]['routes'].append({'routeName': routeName,'direction': 1})
            else:
                stationList[sta['staCode']] = {'name': sta['staName'],'routes': [{'routeName': routeName,'direction': 1}]}
txt = open(r"stations.json","a+",encoding="utf-8")
txt.write(json.dumps(dict(sorted(stationList.items()))))
print(json.dumps(dict(sorted(stationList.items()))))