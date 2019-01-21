from typing import List

from rasa_core_sdk.forms import FormAction, REQUESTED_SLOT
from rasa_core_sdk.events import SlotSet
from requests import (
    ConnectionError,
    HTTPError,
    TooManyRedirects,
    Timeout
)

from api import get_hospital_by_dkw, get_city


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
        print(hospital_data)
        return [SlotSet("hospitals", "{}".format(hospital_data))]
        # return [SlotSet("hospitals", "test")]

def get_best_hospital_text(dkw):
    try:
        result = get_hospital_by_dkw(dkw)
    except (ConnectionError, HTTPError, TooManyRedirects, Timeout) as e:
        text_messages = "{}".format(e)
    else:
        text_messages = []
        for item in result:
            text_message_tpl = """
                {} 在美国治疗最好的医院为：{}；总分：{}；
            """
            text_messages.append(text_message_tpl.format(
                {dkw},
                item[0],
                item[1]
            ))

    return text_messages
