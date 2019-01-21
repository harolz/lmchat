#!/usr/bin/env python
"""
Weather data is provided by https://www.linkmedicine.com
"""
import os
import requests
import json

DKW = 'Pancreatic Ducts' 
API = 'https://www.linksciences.com/getHospitalsMap.do'  
TIMESTAMP = 'DKW1547657078578'
SCALE='Top Hospitals'
METRIC='Overall Score'

def fetch_hospital_map(DKW, mapDataSelected=METRIC, mapDataScaleSelected=SCALE, timpstamp=TIMESTAMP):
    result = requests.get(API, params={
        'dkw': DKW,
        'mapDataSelected': mapDataSelected,
        'mapDataScaleSelected': mapDataScaleSelected,
        'timpstamp': timpstamp,
    }, timeout=5)
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

if __name__ == '__main__':
    default_dkw = "Pancreatic Ducts"
    result = fetch_hospital_map(default_dkw)
    print(json.dumps(result, ensure_ascii=False))
    print(get_hospital_by_dkw(default_dkw))
    print(get_city(default_dkw))
    print("{}".format(get_hospital_by_dkw(default_dkw)))
