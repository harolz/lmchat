from sys import path
path.append(r'../lm_core')
from typing import List, Text, Optional, Dict, Any


from rasa_core_sdk.forms import FormAction, REQUESTED_SLOT
from rasa_core_sdk.events import SlotSet
from rasa_core_sdk import Action, Tracker
from requests import (
    ConnectionError,
    HTTPError,
    TooManyRedirects,
    Timeout
)
from rasa_core.actions.action import ActionDefaultFallback 
from api import get_hospital_by_dkw, get_city_by_dkw, get_basicStats_by_dkw, send_email

class ActionStoreDKW(Action):
    """Stores DKW in a slot"""

    def name(self):
        return "action_store_dkw"

    def run(self, dispatcher, tracker, domain):
        DKW = next(tracker.get_latest_entity_values('dkw'), None)

        # if no company entity was extracted, use the whole user utterance
        # in future this will be stored in a `company_unconfirmed` slot and
        # the user will be asked to confirm their company name
        if not DKW:
            DKW = tracker.latest_message.get('text')

        return [SlotSet('dkw', DKW)]

class ActionReplyHospitals(FormAction):
    RANDOMIZE = True

    @staticmethod
    def required_slots(tracker):
        return [
            "dkw"
        ]

    def name(self):
        # type: () -> Text
        return "action_report_hospitals"

    def submit(self, dispatcher, tracker, domain):
        # type: (Dispatcher, DialogueStateTracker, Domain) -> List[Event]
        dkw = tracker.get_slot('dkw')
        hospital_data = get_best_hospital_text(dkw)
        return [SlotSet("hospitals", "{}".format(hospital_data))]
        # return [SlotSet("hospitals", "test")]

class ActionFallback(Action):

    def name(self):
        return "fallback"

    def run(self, dispatcher, tracker, domain):
        from rasa_core.events import UserUtteranceReverted

        dispatcher.utter_template("utter_default", tracker,
                                  silent_fail=True)

        return [UserUtteranceReverted()]
        
class ActionReplyStats(FormAction, Action):
    RANDOMIZE = True

    @staticmethod
    def required_slots(tracker):
        return [
            "dkw"
        ]

    def name(self):
        # type: () -> Text
        return "action_report_stats"

    def submit(self, dispatcher, tracker, domain):
        # type: (Dispatcher, DialogueStateTracker, Domain) -> List[Event]
        dkw = tracker.get_slot('dkw')
        stats_data = get_basic_Stats_text(dkw)

        return [SlotSet("basic_stats", "{}".format(stats_data))]



class ActionReplyEmail(FormAction):
    RANDOMIZE = True

    @staticmethod
    def required_slots(tracker):
        return [
            "email"
        ]

    def name(self):
        # type: () -> Text
        return "action_reply_email"

    def submit(self, dispatcher, tracker, domain):
        # type: (Dispatcher, DialogueStateTracker, Domain) -> List[Event]
        email = tracker.get_slot('email')
        stats_data = send_email('email')
        return True
     

class ActionReplyCity(FormAction):
    RANDOMIZE = True

    @staticmethod
    def required_slots(tracker):
        return [
            "dkw"
        ]

    def name(self):
        # type: () -> Text
        return "action_report_city"

    def submit(self, dispatcher, tracker, domain):
        # type: (Dispatcher, DialogueStateTracker, Domain) -> List[Event]
        dkw = tracker.get_slot('dkw')
        stats_data = get_city_by_dkw(dkw)
        print(stats_data)
        return [SlotSet("city_data", "{}".format(dkw))]

def get_best_hospital_text(dkw):
    try:
        result = get_hospital_by_dkw(dkw)
    except (ConnectionError, HTTPError, TooManyRedirects, Timeout) as e:
        text_messages = "{}".format(e)
    else:
        text_messages = ''
        for item in result:
            text_message_tpl = """
                {} 在美国治疗最好的医院为{} 总分为{}
            """
            text_messages+=text_message_tpl.format(
                dkw,
                item[0],
                item[1]
            ).strip()

    return text_messages

def get_basic_Stats_text(dkw):
    try:
        result = get_basicStats_by_dkw(dkw)
    except (ConnectionError, HTTPError, TooManyRedirects, Timeout) as e:
        text_message = "{}".format(e)
    else:
        #Down syndrome hit 23 institutions, 247 experts, 16 clinical trials, 915 research projects, $336,507,365 funding. 
        #About 1 in 700 babies are born with the birth defect known as Down Syndrome. Learn about the different Down Syndrome types and related health issues.
        if result:
            stats_message_tpl = """
            {} According to our data records, {} hits {} medical institutions, {} experts, {} clinical trials, {} research projects, and a total of ${} research funding.         """
            text_message = stats_message_tpl.format(    
                result[-3],    
                dkw,
                "{:,}".format(result[-2]),
                "{:,}".format(result[2]),
                "{:,}".format(result[1]),
                "{:,}".format(result[3]),
                "{:,}".format(result[-1])
            ).strip()
        else:
            text_message=None

    return text_message

if __name__ == '__main__':
    default_dkw = "zxx"
    print(get_basic_Stats_text(default_dkw))
