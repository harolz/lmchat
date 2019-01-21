from typing import List

from rasa_core_sdk.forms import FormAction, REQUESTED_SLOT
from rasa_core_sdk.events import SlotSet
from requests import (
    ConnectionError,
    HTTPError,
    TooManyRedirects,
    Timeout
)

from api import get_hospital_by_dkw, get_city, get_basicStats_by_dkw


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

class ActionReplyStats(FormAction):
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
     

def get_best_hospital_text(dkw):
    try:
        result = get_hospital_by_dkw(dkw)
    except (ConnectionError, HTTPError, TooManyRedirects, Timeout) as e:
        text_messages = "{}".format(e)
    else:
        text_messages = []
        for item in result:
            text_message_tpl = """
                {} 在美国治疗最好的医院为：{}, 总分：{}；
            """
            text_messages.append(text_message_tpl.format(
                dkw,
                item[0],
                item[1]
            ))

    return text_messages

def get_basic_Stats_text(dkw):
    try:
        result = get_basicStats_by_dkw(dkw)
    except (ConnectionError, HTTPError, TooManyRedirects, Timeout) as e:
        text_message = "{}".format(e)
    else:
        #Down syndrome hit 23 institutions, 247 experts, 16 clinical trials, 915 research projects, $336,507,365 funding. 
        #About 1 in 700 babies are born with the birth defect known as Down Syndrome. Learn about the different Down Syndrome types and related health issues.
        stats_message_tpl = """
            {} 命中{}所医疗机构，{}名专家，{}个医疗实验，{}个研究项目，总计${}科研经费。 {}
        """
        text_message = stats_message_tpl.format(
            dkw,
            result[-2],
            result[2],
            result[1],
            result[3],
            result[-1],
            result[-3]
        )

    return text_message

if __name__ == '__main__':
    default_dkw = "Down syndrome"
    print(get_basic_Stats_text(default_dkw))