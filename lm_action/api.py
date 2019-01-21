#!/usr/bin/env python
"""
Weather data is provided by https://www.linkmedicine.com
"""
import os
import requests
import json
gHMAPI = 'https://www.linksciences.com/getHospitalsMap.do'  
gTHAPI = 'https://www.linksciences.com/getTopHospitals.do'
TIMESTAMP = 'DKW1547657078578'
SCALE='Top Hospitals'
METRIC='Overall Score'

def fetch_hospital_map(DKW, mapDataSelected=METRIC, mapDataScaleSelected=SCALE, timpstamp=TIMESTAMP):
    result = requests.get(gHMAPI, params={
        'dkw': DKW,
        'mapDataSelected': mapDataSelected,
        'mapDataScaleSelected': mapDataScaleSelected,
        'timpstamp': timpstamp,
    }, timeout=100)
    return result.json()

def fetch_top_hospitals(DKW):
    result = requests.get(gTHAPI, params={
        'dkw': DKW
    }, timeout=100)
    return result.json()


def get_hospital_by_dkw(DKW):
    result = fetch_hospital_map(DKW)
    hospital_list = []
    for item in result["cityCountList"]:
        if item["rankString"]:
            hospital_list.append((item["rankString"],item["rankCount"]))
    return hospital_list

def get_city(DKW):
    result = fetch_hospital_map(DKW)
    city_list = []
    for item in result["cityCountList"]:
        if item["geoCity"]:
            city_list.append(item["geoCity"])
    return city_list

def get_basicStats_by_dkw(DKW):
    results = fetch_top_hospitals(DKW)
    basicStats = []
    for item in [results["timestamp"], results["nctCount"], results["expertCount"], results["projectCount"], results["dkwDescription"], results["instCount"], results["fundingTotal"]]:
        if item:
            basicStats.append(item)
    return basicStats

if __name__ == '__main__':
    default_dkw = "Down syndrome"
    hospital_map_result = fetch_hospital_map(default_dkw)
    top_hospitals_result = fetch_top_hospitals(default_dkw)
    # for result in [hospital_map_result,top_hospitals_result]:
    #     print(json.dumps(result, ensure_ascii=False))
    print(get_basicStats_by_dkw(default_dkw))
    # print(get_hospital_by_dkw(default_dkw))
    # print(get_city(default_dkw))
    # print("{}".format(get_hospital_by_dkw(default_dkw)))
