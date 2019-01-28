#!/usr/bin/env python
"""
Weather data is provided by https://www.linkmedicine.com
"""
import os
import requests
import json
import sendgrid
from sendgrid.helpers.mail import *
gHMAPI = 'https://www.linksciences.com/getHospitalsMap.do'  
gTHAPI = 'https://www.linksciences.com/getTopHospitals.do'
SCALE='Top Hospitals'
METRIC='Overall Score'

def send_email(email):
    sg = sendgrid.SendGridAPIClient(apikey=os.environ.get('SENDGRID_API_KEY'))
    from_email = Email("test@example.com")
    to_email = Email("email")
    subject = "Sending with SendGrid is Fun"
    content = Content("text/plain", "and easy to do anywhere, even with Python")
    mail = Mail(from_email, subject, to_email, content)
    response = sg.client.mail.send.post(request_body=mail.get())
    print(response.status_code)
    print(response.body)
    print(response.headers)

def fetch_top_hospitals(DKW):
    response= requests.get(gTHAPI, params={
        'dkw': DKW
    }, timeout=100)
    result = json.loads(response.text)
    return result

def fetch_hospital_map(DKW, mapDataSelected=METRIC, mapDataScaleSelected=SCALE):
    timpstamp=fetch_top_hospitals(DKW)['timestamp']
    response = requests.get(gHMAPI, params={
        'dkw': DKW,
        'mapDataSelected': mapDataSelected,
        'mapDataScaleSelected': mapDataScaleSelected,
        'timpstamp': timpstamp,
    }, timeout=100)
    result = json.loads(response.text)
    return result

def get_hospital_by_dkw(DKW):
    result = fetch_hospital_map(DKW)
    hospital_list = []
    for item in result["cityCountList"]:
        if item["rankString"]:
            hospital_list.append((item["rankString"],item["rankCount"]))
    return hospital_list

def get_city_by_dkw(DKW):
    result = fetch_hospital_map(DKW)
    city_list = []
    city_list.append(['City', 'Count'])
    for item in result["cityCountList"]:
        if item["rankString"]:
            city_list.append([item["geoCity"],item["rankCount"]])
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
    print(top_hospitals_result)
    print(hospital_map_result)
    # for result in [hospital_map_result,top_hospitals_result]:
    #     print(json.dumps(result, ensure_ascii=False))
    # print(get_basicStats_by_dkw(default_dkw))
    # print(gets_hospital_by_dkw(default_dkw))
    # print(get_city_by_dkw(default_dkw))
    # print(hospital_map_result)
    # print("{}".format(get_hospital_by_dkw(default_dkw)))
