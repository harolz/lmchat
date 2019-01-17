## thanks
* thank
    - utter_noworries
    - utter_anything_else

## bye
* bye
    - utter_bye

## suggestion
* get_started_step4
    - utter_greet
    - suggestion_form
    - form{"name": "suggestion_form"}
    - form{"name": null}

## link-medicine-MSO-male-oneself
* greet
    - utter_greet
    - utter_whois_patient_question
    - utter_whois_patient_answer
* confirm_patient{"patient_value": "oneself"}
    - slot{"patient_value": "oneself"}
    - utter_great
    - utter_ask_gender_question_2nd
    - utter_ask_gender_answer
* confirm_gender{"gender_value": "male"}
    - slot{"gender_value": "male"}
    - utter_great
    - utter_ask_age_question_2nd
    - utter_ask_age_answer
* confirm_age
    - utter_ask_service_type_question
    - utter_ask_service_type_answer
* confirm_service_type{"service_type": "mso"}
    - slot{"service_type": "mso"}
    - utter_mso
    - utter_ask_dkw_question
    - utter_ask_dkw_answer
* confirm_dkw
  - utter_ask_symptoms_question
  - utter_ask_symptoms_answer
* confirm_symptoms
  - utter_ask_current_medication_question
  - utter_ask_current_medication_answer
* confirm_current_medication
  - utter_ask_past_surgery_question
  - utter_ask_past_surgery_answer
* confirm_past_surgery
  - utter_ask_medical_appointment
  - utter_datepicker
* confirm_medical_appointment
  - utter_ask_email_question
  - utter_ask_email_answer
* confirm_email
  - utter_working_on_it
  - utter_ask_lm_consultant
  - utter_lm_consultant
* confirm_lm_consultant  
  - utter_ask_lm_appointment
  - utter_lm_appointment
* confirm_lm_appointment
  - utter_ask_feedback_question
  - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else
## link-medicine-MSO-male-others
* greet
    - utter_greet
    - utter_whois_patient_question
    - utter_whois_patient_answer
* confirm_patient{"patient_value": "others"}
    - slot{"patient_value": "others"}
    - utter_great
    - utter_ask_gender_question_3rd
    - utter_ask_gender_answer
* confirm_gender{"gender_value": "male"}
    - slot{"gender_value": "male"}
    - utter_awesome
    - utter_ask_age_question_3rd
    - utter_ask_age_answer
* confirm_age
    - utter_ask_service_type_question
    - utter_ask_service_type_answer
* confirm_service_type{"service_type": "mso"}
    - slot{"service_type": "mso"}
    - utter_mso
    - utter_ask_basic_knowledge_question
    - utter_ask_basic_knowledge_answer
* confirm_basic_knowledge{"basic_knowledge": "basic_knowledge_yes"}
    - utter_ask_dkw_question
    - utter_ask_dkw_answer
* confirm_dkw
  - utter_ask_symptoms_question
  - utter_ask_symptoms_answer
* confirm_symptoms
  - utter_ask_current_medication_question
  - utter_ask_current_medication_answer
* confirm_current_medication
  - utter_ask_past_surgery_question
  - utter_ask_past_surgery_answer
* confirm_past_surgery
  - utter_ask_medical_appointment
  - utter_datepicker
* confirm_medical_appointment
  - utter_ask_email_question
  - utter_ask_email_answer
* confirm_email
  - utter_working_on_it
  - utter_case_created
  - utter_ask_lm_consultant
  - utter_lm_consultant
* confirm_lm_consultant  
  - utter_ask_lm_appointment
  - utter_lm_appointment
* confirm_lm_appointment
  - utter_ask_feedback_question
  - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else
## link-medicine-MSO-female-oneself
* greet
    - utter_greet
    - utter_whois_patient_question
    - utter_whois_patient_answer
* confirm_patient{"patient_value": "oneself"}
    - slot{"patient_value": "oneself"}
    - utter_great
    - utter_ask_gender_question_2nd
    - utter_ask_gender_answer
* confirm_gender{"gender_value": "female"}
    - slot{"gender_value": "female"}
    - utter_awesome
    - utter_ask_age_question_2nd
    - utter_ask_age_answer
* confirm_age
    - utter_ask_service_type_question
    - utter_ask_service_type_answer
* confirm_service_type{"service_type": "mso"}
    - slot{"service_type": "mso"}
    - utter_mso
    - utter_ask_cooperation
    - utter_ask_dkw_question
    - utter_ask_dkw_answer
* confirm_dkw
  - utter_ask_symptoms_question
  - utter_ask_symptoms_answer
* confirm_symptoms
  - utter_ask_current_medication_question
  - utter_ask_current_medication_answer
* confirm_current_medication
  - utter_ask_past_surgery_question
  - utter_ask_past_surgery_answer
* confirm_past_surgery
  - utter_ask_medical_appointment
  - utter_datepicker
* confirm_medical_appointment
  - utter_ask_email_question
  - utter_ask_email_answer
* confirm_email
  - utter_working_on_it
  - utter_case_created
  - utter_ask_lm_consultant
  - utter_lm_consultant
* confirm_lm_consultant  
  - utter_ask_lm_appointment
  - utter_lm_appointment
* confirm_lm_appointment
  - utter_ask_feedback_question
  - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else
## link-medicine-MSO-female-others
* greet
    - utter_greet
    - utter_whois_patient_question
    - utter_whois_patient_answer
* confirm_patient{"patient_value": "others"}
    - slot{"patient_value": "others"}
    - utter_great
    - utter_ask_gender_question_3rd
    - utter_ask_gender_answer
* confirm_gender{"gender_value": "female"}
    - slot{"gender_value": "female"}
    - utter_awesome
    - utter_ask_age_question_3rd
    - utter_ask_age_answer
* confirm_age
    - utter_ask_service_type_question
    - utter_ask_service_type_answer
* confirm_service_type{"service_type": "mso"}
    - slot{"service_type": "mso"}
    - utter_mso
    - utter_ask_basic_knowledge_question
    - utter_ask_basic_knowledge_answer
* confirm_basic_knowledge{"basic_knowledge": "basic_knowledge_yes"}
    - utter_ask_dkw_question
    - utter_ask_dkw_answer
* confirm_dkw
  - utter_ask_symptoms_question
  - utter_ask_symptoms_answer
* confirm_symptoms
  - utter_ask_current_medication_question
  - utter_ask_current_medication_answer
* confirm_current_medication
  - utter_ask_past_surgery_question
  - utter_ask_past_surgery_answer
* confirm_past_surgery
  - utter_ask_medical_appointment
  - utter_datepicker
* confirm_medical_appointment
  - utter_ask_email_question
  - utter_ask_email_answer
* confirm_email
  - utter_working_on_it
  - utter_case_created
  - utter_ask_lm_consultant
  - utter_lm_consultant
* confirm_lm_consultant  
  - utter_ask_lm_appointment
  - utter_lm_appointment
* confirm_lm_appointment
  - utter_ask_feedback_question
  - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else
## link-medicine-DATA-male-oneself
* greet
    - utter_greet
    - utter_whois_patient_question
    - utter_whois_patient_answer
* confirm_patient{"patient_value": "oneself"}
    - slot{"patient_value": "oneself"}
    - utter_great
    - utter_ask_gender_question_2nd
    - utter_ask_gender_answer
* confirm_gender{"gender_value": "male"}
    - slot{"gender_value": "male"}
    - utter_great
    - utter_ask_age_question_2nd
    - utter_ask_age_answer
* confirm_age
    - utter_ask_service_type_question
    - utter_ask_service_type_answer
* confirm_service_type{"service_type": "data"}
    - slot{"service_type": "data"}
    - utter_data
    - utter_ask_dkw_question
    - utter_ask_dkw_answer
* confirm_dkw
  - utter_ask_symptoms_question
  - utter_ask_symptoms_answer
* confirm_symptoms
  - utter_ask_current_medication_question
  - utter_ask_current_medication_answer
* confirm_current_medication
  - utter_ask_past_surgery_question
  - utter_ask_past_surgery_answer
* confirm_past_surgery
  - utter_ask_medical_appointment
  - utter_datepicker
* confirm_medical_appointment
  - utter_ask_email_question
  - utter_ask_email_answer
* confirm_email
  - utter_working_on_it
  - utter_ask_lm_consultant
  - utter_lm_consultant
* confirm_lm_consultant  
  - utter_ask_lm_appointment
  - utter_lm_appointment
* confirm_lm_appointment
  - utter_ask_feedback_question
  - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else
## link-medicine-DATA-male-others
* greet
    - utter_greet
    - utter_whois_patient_question
    - utter_whois_patient_answer
* confirm_patient{"patient_value": "others"}
    - slot{"patient_value": "others"}
    - utter_great
    - utter_ask_gender_question_3rd
    - utter_ask_gender_answer
* confirm_gender{"gender_value": "male"}
    - slot{"gender_value": "male"}
    - utter_awesome
    - utter_ask_age_question_3rd
    - utter_ask_age_answer
* confirm_age
    - utter_ask_service_type_question
    - utter_ask_service_type_answer
* confirm_service_type{"service_type": "data"}
    - slot{"service_type": "data"}
    - utter_data
    - utter_ask_basic_knowledge_question
    - utter_ask_basic_knowledge_answer
* confirm_basic_knowledge{"basic_knowledge": "basic_knowledge_yes"}
    - utter_ask_dkw_question
    - utter_ask_dkw_answer
* confirm_dkw
  - utter_ask_symptoms_question
  - utter_ask_symptoms_answer
* confirm_symptoms
  - utter_ask_current_medication_question
  - utter_ask_current_medication_answer
* confirm_current_medication
  - utter_ask_past_surgery_question
  - utter_ask_past_surgery_answer
* confirm_past_surgery
  - utter_ask_medical_appointment
  - utter_datepicker
* confirm_medical_appointment
  - utter_ask_email_question
  - utter_ask_email_answer
* confirm_email
  - utter_working_on_it
  - utter_case_created
  - utter_ask_lm_consultant
  - utter_lm_consultant
* confirm_lm_consultant  
  - utter_ask_lm_appointment
  - utter_lm_appointment
* confirm_lm_appointment
  - utter_ask_feedback_question
  - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else
## link-medicine-DATA-female-oneself
* greet
    - utter_greet
    - utter_whois_patient_question
    - utter_whois_patient_answer
* confirm_patient{"patient_value": "oneself"}
    - slot{"patient_value": "oneself"}
    - utter_great
    - utter_ask_gender_question_2nd
    - utter_ask_gender_answer
* confirm_gender{"gender_value": "female"}
    - slot{"gender_value": "female"}
    - utter_awesome
    - utter_ask_age_question_2nd
    - utter_ask_age_answer
* confirm_age
    - utter_ask_service_type_question
    - utter_ask_service_type_answer
* confirm_service_type{"service_type": "data"}
    - slot{"service_type": "data"}
    - utter_data
    - utter_ask_cooperation
    - utter_ask_dkw_question
    - utter_ask_dkw_answer
* confirm_dkw
  - utter_ask_symptoms_question
  - utter_ask_symptoms_answer
* confirm_symptoms
  - utter_ask_current_medication_question
  - utter_ask_current_medication_answer
* confirm_current_medication
  - utter_ask_past_surgery_question
  - utter_ask_past_surgery_answer
* confirm_past_surgery
  - utter_ask_medical_appointment
  - utter_datepicker
* confirm_medical_appointment
  - utter_ask_email_question
  - utter_ask_email_answer
* confirm_email
  - utter_working_on_it
  - utter_case_created
  - utter_ask_lm_consultant
  - utter_lm_consultant
* confirm_lm_consultant  
  - utter_ask_lm_appointment
  - utter_lm_appointment
* confirm_lm_appointment
  - utter_ask_feedback_question
  - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else
## link-medicine-DATA-female-others
* greet
    - utter_greet
    - utter_whois_patient_question
    - utter_whois_patient_answer
* confirm_patient{"patient_value": "others"}
    - slot{"patient_value": "others"}
    - utter_great
    - utter_ask_gender_question_3rd
    - utter_ask_gender_answer
* confirm_gender{"gender_value": "female"}
    - slot{"gender_value": "female"}
    - utter_awesome
    - utter_ask_age_question_3rd
    - utter_ask_age_answer
* confirm_age
    - utter_ask_service_type_question
    - utter_ask_service_type_answer
* confirm_service_type{"service_type": "data"}
    - slot{"service_type": "data"}
    - utter_data
    - utter_ask_basic_knowledge_question
    - utter_ask_basic_knowledge_answer
* confirm_basic_knowledge{"basic_knowledge": "basic_knowledge_yes"}
    - utter_ask_dkw_question
    - utter_ask_dkw_answer
* confirm_dkw
  - utter_ask_symptoms_question
  - utter_ask_symptoms_answer
* confirm_symptoms
  - utter_ask_current_medication_question
  - utter_ask_current_medication_answer
* confirm_current_medication
  - utter_ask_past_surgery_question
  - utter_ask_past_surgery_answer
* confirm_past_surgery
  - utter_ask_medical_appointment
  - utter_datepicker
* confirm_medical_appointment
  - utter_ask_email_question
  - utter_ask_email_answer
* confirm_email
  - utter_working_on_it
  - utter_case_created
  - utter_ask_lm_consultant
  - utter_lm_consultant
* confirm_lm_consultant  
  - utter_ask_lm_appointment
  - utter_lm_appointment
* confirm_lm_appointment
  - utter_ask_feedback_question
  - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else
## link-medicine-XBM-male-oneself
* greet
    - utter_greet
    - utter_whois_patient_question
    - utter_whois_patient_answer
* confirm_patient{"patient_value": "oneself"}
    - slot{"patient_value": "oneself"}
    - utter_great
    - utter_ask_gender_question_2nd
    - utter_ask_gender_answer
* confirm_gender{"gender_value": "male"}
    - slot{"gender_value": "male"}
    - utter_great
    - utter_ask_age_question_2nd
    - utter_ask_age_answer
* confirm_age
    - utter_ask_service_type_question
    - utter_ask_service_type_answer
* confirm_service_type{"service_type": "xbm"}
    - slot{"service_type": "xbm"}
    - utter_xbm
    - utter_ask_dkw_question
    - utter_ask_dkw_answer
* confirm_dkw
  - utter_ask_symptoms_question
  - utter_ask_symptoms_answer
* confirm_symptoms
  - utter_ask_current_medication_question
  - utter_ask_current_medication_answer
* confirm_current_medication
  - utter_ask_past_surgery_question
  - utter_ask_past_surgery_answer
* confirm_past_surgery
  - utter_ask_medical_appointment
  - utter_datepicker
* confirm_medical_appointment
  - utter_ask_email_question
  - utter_ask_email_answer
* confirm_email
  - utter_working_on_it
  - utter_ask_lm_consultant
  - utter_lm_consultant
* confirm_lm_consultant  
  - utter_ask_lm_appointment
  - utter_lm_appointment
* confirm_lm_appointment
  - utter_ask_feedback_question
  - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else
## link-medicine-XBM-male-others
* greet
    - utter_greet
    - utter_whois_patient_question
    - utter_whois_patient_answer
* confirm_patient{"patient_value": "others"}
    - slot{"patient_value": "others"}
    - utter_great
    - utter_ask_gender_question_3rd
    - utter_ask_gender_answer
* confirm_gender{"gender_value": "male"}
    - slot{"gender_value": "male"}
    - utter_awesome
    - utter_ask_age_question_3rd
    - utter_ask_age_answer
* confirm_age
    - utter_ask_service_type_question
    - utter_ask_service_type_answer
* confirm_service_type{"service_type": "xbm"}
    - slot{"service_type": "xbm"}
    - utter_xbm
    - utter_ask_basic_knowledge_question
    - utter_ask_basic_knowledge_answer
* confirm_basic_knowledge{"basic_knowledge": "basic_knowledge_yes"}
    - utter_ask_dkw_question
    - utter_ask_dkw_answer
* confirm_dkw
  - utter_ask_symptoms_question
  - utter_ask_symptoms_answer
* confirm_symptoms
  - utter_ask_current_medication_question
  - utter_ask_current_medication_answer
* confirm_current_medication
  - utter_ask_past_surgery_question
  - utter_ask_past_surgery_answer
* confirm_past_surgery
  - utter_ask_medical_appointment
  - utter_datepicker
* confirm_medical_appointment
  - utter_ask_email_question
  - utter_ask_email_answer
* confirm_email
  - utter_working_on_it
  - utter_case_created
  - utter_ask_lm_consultant
  - utter_lm_consultant
* confirm_lm_consultant  
  - utter_ask_lm_appointment
  - utter_lm_appointment
* confirm_lm_appointment
  - utter_ask_feedback_question
  - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else
## link-medicine-XBM-female-oneself
* greet
    - utter_greet
    - utter_whois_patient_question
    - utter_whois_patient_answer
* confirm_patient{"patient_value": "oneself"}
    - slot{"patient_value": "oneself"}
    - utter_great
    - utter_ask_gender_question_2nd
    - utter_ask_gender_answer
* confirm_gender{"gender_value": "female"}
    - slot{"gender_value": "female"}
    - utter_awesome
    - utter_ask_age_question_2nd
    - utter_ask_age_answer
* confirm_age
    - utter_ask_service_type_question
    - utter_ask_service_type_answer
* confirm_service_type{"service_type": "xbm"}
    - slot{"service_type": "xbm"}
    - utter_xbm
    - utter_ask_cooperation
    - utter_ask_dkw_question
    - utter_ask_dkw_answer
* confirm_dkw
  - utter_ask_symptoms_question
  - utter_ask_symptoms_answer
* confirm_symptoms
  - utter_ask_current_medication_question
  - utter_ask_current_medication_answer
* confirm_current_medication
  - utter_ask_past_surgery_question
  - utter_ask_past_surgery_answer
* confirm_past_surgery
  - utter_ask_medical_appointment
  - utter_datepicker
* confirm_medical_appointment
  - utter_ask_email_question
  - utter_ask_email_answer
* confirm_email
  - utter_working_on_it
  - utter_case_created
  - utter_ask_lm_consultant
  - utter_lm_consultant
* confirm_lm_consultant  
  - utter_ask_lm_appointment
  - utter_lm_appointment
* confirm_lm_appointment
  - utter_ask_feedback_question
  - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else
## link-medicine-XBM-female-others
* greet
    - utter_greet
    - utter_whois_patient_question
    - utter_whois_patient_answer
* confirm_patient{"patient_value": "others"}
    - slot{"patient_value": "others"}
    - utter_great
    - utter_ask_gender_question_3rd
    - utter_ask_gender_answer
* confirm_gender{"gender_value": "female"}
    - slot{"gender_value": "female"}
    - utter_awesome
    - utter_ask_age_question_3rd
    - utter_ask_age_answer
* confirm_age
    - utter_ask_service_type_question
    - utter_ask_service_type_answer
* confirm_service_type{"service_type": "xbm"}
    - slot{"service_type": "xbm"}
    - utter_xbm
    - utter_ask_basic_knowledge_question
    - utter_ask_basic_knowledge_answer
* confirm_basic_knowledge{"basic_knowledge": "basic_knowledge_yes"}
    - utter_ask_dkw_question
    - utter_ask_dkw_answer
* confirm_dkw
  - utter_ask_symptoms_question
  - utter_ask_symptoms_answer
* confirm_symptoms
  - utter_ask_current_medication_question
  - utter_ask_current_medication_answer
* confirm_current_medication
  - utter_ask_past_surgery_question
  - utter_ask_past_surgery_answer
* confirm_past_surgery
  - utter_ask_medical_appointment
  - utter_datepicker
* confirm_medical_appointment
  - utter_ask_email_question
  - utter_ask_email_answer
* confirm_email
  - utter_working_on_it
  - utter_case_created
  - utter_ask_lm_consultant
  - utter_lm_consultant
* confirm_lm_consultant  
  - utter_ask_lm_appointment
  - utter_lm_appointment
* confirm_lm_appointment
  - utter_ask_feedback_question
  - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else

## sales
* contact_sales
    - utter_moreinformation
    - utter_ask_jobfunction
* enter_data{"jobfunction": "Product Manager"}
    - action_store_job
    - slot{"job_function": "Product Manager"}
    - utter_ask_usecase
* enter_data    
    - action_store_usecase
    - slot{"use_case": "bots"}
    - utter_thank_usecase
    - utter_ask_budget
* enter_data{"number": "100"} OR enter_data{"amount-of-money": "100k"} OR enter_data{"number": "100", "amount-of-money": "100"}
    - action_store_budget
    - slot{"budget": "100k"}
    - utter_sales_contact
    - utter_ask_name
* enter_data{"name": "Max Meier"}
    - action_store_name
    - slot{"person_name": "Max Meier"}
    - utter_ask_company
* enter_data{"company": "Allianz"}
    - action_store_company
    - slot{"company_name": "Allianz"}
    - utter_ask_businessmail
* enter_data{"email": "maxmeier@firma.de"} OR enter_data{"number":"1"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
    - action_store_sales_info
    - slot{"data_stored": true}
    - utter_confirm_salesrequest
    - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else

## newsletter + feedback

* signup_newsletter
    - utter_great
    - utter_ask_email_question
* enter_data{"email": "maxmeier@firma.de"} OR enter_data{"number":"1"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
- action_subscribe_newsletter
    - slot{"subscribed": true}
    - utter_awesome
    - utter_confirmationemail
    - utter_docu
    - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else

## newsletter + mood_confirm feedback
* signup_newsletter
    - utter_great
    - utter_ask_email_question
* enter_data{"email": "maxmeier@firma.de"} OR enter_data{"number":"1"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
- action_subscribe_newsletter
    - slot{"subscribed": true}
    - utter_awesome
    - utter_confirmationemail
    - utter_docu
    - utter_ask_feedback
* mood_confirm
    - utter_thumbsup
    - utter_anything_else


## newsletter + deny feedback
* signup_newsletter
    - utter_great
    - utter_ask_email_question
* enter_data{"email": "maxmeier@firma.de"} OR enter_data{"number":"1"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
- action_subscribe_newsletter
    - slot{"subscribed": true}
    - utter_awesome
    - utter_confirmationemail
    - utter_docu
    - utter_ask_feedback
* deny
    - utter_thumbsup
    - utter_anything_else

## newsletter, don't give email once
* signup_newsletter
    - utter_great
    - utter_ask_email_question
* deny
    - utter_cantsignup
* enter_data{"email": "maxmeier@firma.de"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
    - action_subscribe_newsletter
    - slot{"subscribed": true}
    - utter_awesome
    - utter_confirmationemail
    - utter_docu
    - utter_ask_feedback

## newsletter, don't give email then contact sales
* signup_newsletter
    - utter_great
    - utter_ask_email_question
* deny
    - utter_cantsignup
* contact_sales
    - utter_moreinformation
    - utter_ask_jobfunction
* enter_data{"jobfunction": "Product Manager"}
    - action_store_job
    - slot{"job_function": "Product Manager"}
    - utter_ask_usecase
* enter_data
    - action_store_usecase
    - slot{"use_case": "bots"}
    - utter_thank_usecase
    - utter_ask_budget
* enter_data{"number": "100"} OR enter_data{"amount-of-money": "100k"} OR enter_data{"number": "100", "amount-of-money": "100"}
    - action_store_budget
    - slot{"budget": "100k"}
    - utter_sales_contact
    - utter_ask_name
* enter_data{"name": "Max Meier"}
    - action_store_name
    - slot{"person_name": "Max Meier"}
    - utter_ask_company
* enter_data{"company": "Allianz"}
    - action_store_company
    - slot{"company_name": "Allianz"}
    - utter_ask_businessmail
* enter_data{"email": "maxmeier@firma.de"} OR enter_data{"number":"1"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
    - action_store_sales_info
    - slot{"data_stored": true}
    - utter_confirm_salesrequest
    - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else

## newsletter, don't give email twice then contact sales
* signup_newsletter
    - utter_great
    - utter_ask_email_question
* deny
    - utter_cantsignup
* deny
    - utter_cantsignup
* contact_sales
    - utter_moreinformation
    - utter_ask_jobfunction
* enter_data{"jobfunction": "Product Manager"}
    - action_store_job
    - slot{"job_function": "Product Manager"}
    - utter_ask_usecase
* enter_data
    - action_store_usecase
    - slot{"use_case": "bots"}
    - utter_thank_usecase
    - utter_ask_budget
* enter_data{"number": "100"} OR enter_data{"amount-of-money": "100k"} OR enter_data{"number": "100", "amount-of-money": "100"}
    - action_store_budget
    - slot{"budget": "100k"}
    - utter_sales_contact
    - utter_ask_name
* enter_data{"name": "Max Meier"}
    - action_store_name
    - slot{"person_name": "Max Meier"}
    - utter_ask_company
* enter_data{"company": "Allianz"}
    - action_store_company
    - slot{"company_name": "Allianz"}
    - utter_ask_businessmail
* enter_data{"email": "maxmeier@firma.de"} OR enter_data{"number":"1"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
    - action_store_sales_info
    - slot{"data_stored": true}
    - utter_confirm_salesrequest
    - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else

## newsletter, don't give email twice
* signup_newsletter
    - utter_great
    - utter_ask_email_question
* deny
    - utter_cantsignup
* deny
    - utter_cantsignup
* enter_data{"email": "maxmeier@firma.de"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
    - action_subscribe_newsletter
    - slot{"subscribed": true}
    - utter_awesome
    - utter_confirmationemail
    - utter_docu
    - utter_ask_feedback

## just newsletter (with email already) + confirm
* signup_newsletter{"email": "maxmeier@firma.de"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
    - action_subscribe_newsletter
    - slot{"subscribed": true}
    - utter_awesome
    - utter_confirmationemail
    - utter_docu
    - utter_ask_feedback
* feedback{"feedback_value": "negative"}
    - slot{"feedback_value": "negative"}
    - utter_thumbsup
    - utter_anything_else


## just newsletter (with email already)
* signup_newsletter{"email": "maxmeier@firma.de"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
    - action_subscribe_newsletter
    - slot{"subscribed": true}
    - utter_awesome
    - utter_confirmationemail
    - utter_docu
    - utter_ask_feedback

## just newsletter (with email already) + confirm - already subscribed
* signup_newsletter{"email": "maxmeier@firma.de"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
    - action_subscribe_newsletter
    - slot{"subscribed": false}
    - utter_already_subscribed
    - utter_docu
    - utter_ask_feedback
* feedback{"feedback_value": "negative"}
    - slot{"feedback_value": "negative"}
    - utter_thumbsup
    - utter_anything_else


## just newsletter (with email already) - already subscribed
* signup_newsletter{"email": "maxmeier@firma.de"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
    - action_subscribe_newsletter
    - slot{"subscribed": false}
    - utter_already_subscribed
    - utter_docu
    - utter_ask_feedback

## just newsletter +confirm - already subscribed
* signup_newsletter
    - utter_great
    - utter_ask_email_question
* enter_data{"email": "maxmeier@firma.de"} OR enter_data{"number":"1"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
    - action_subscribe_newsletter
    - slot{"subscribed": false}
    - utter_already_subscribed
    - utter_docu
    - utter_ask_feedback
* feedback{"feedback_value": "negative"}
    - slot{"feedback_value": "negative"}
    - utter_thumbsup
    - utter_anything_else


## just newsletter
* signup_newsletter
    - utter_great
    - utter_ask_email_question
* enter_data{"email": "maxmeier@firma.de"} OR enter_data{"number":"1"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
    - action_subscribe_newsletter
    - slot{"subscribed": true}
    - utter_awesome
    - utter_confirmationemail
    - utter_docu
    - utter_ask_feedback

## just newsletter - already subscribed
* signup_newsletter
    - utter_great
    - utter_ask_email_question
* enter_data{"email": "maxmeier@firma.de"} OR enter_data{"number":"1"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
    - action_subscribe_newsletter
    - slot{"subscribed": false}
    - utter_already_subscribed
    - utter_docu
    - utter_ask_feedback

## newsletter then sales
* signup_newsletter
    - utter_great
    - utter_ask_email_question
* enter_data{"email": "maxmeier@firma.de"} OR enter_data{"number":"1"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
    - action_subscribe_newsletter
    - slot{"subscribed": true}
    - utter_awesome
    - utter_confirmationemail
    - utter_docu
    - utter_ask_feedback
* contact_sales
    - utter_moreinformation
    - utter_ask_jobfunction
* enter_data{"jobfunction": "Product Manager"}
    - action_store_job
    - slot{"job_function": "Product Manager"}
    - utter_ask_usecase
* enter_data
    - action_store_usecase
    - slot{"use_case": "bots"}
    - utter_thank_usecase
    - utter_ask_budget
* enter_data{"number": "100"} OR enter_data{"amount-of-money": "100k"} OR enter_data{"number": "100", "amount-of-money": "100"}
    - action_store_budget
    - slot{"budget": "100k"}
    - utter_sales_contact
    - utter_ask_name
* enter_data{"name": "Max Meier"}
    - action_store_name
    - slot{"person_name": "Max Meier"}
    - utter_ask_company
* enter_data{"company": "Allianz"}
    - action_store_company
    - slot{"company_name": "Allianz"}
    - utter_ask_businessmail
* enter_data{"email": "maxmeier@firma.de"} OR enter_data{"number":"1"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
    - action_store_sales_info
    - slot{"data_stored": true}
    - utter_confirm_salesrequest
    - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else

## newsletter (already subscribed) then sales
* signup_newsletter
    - utter_great
    - utter_ask_email_question
* enter_data{"email": "maxmeier@firma.de"} OR enter_data{"number":"1"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
    - action_subscribe_newsletter
    - slot{"subscribed": false}
    - utter_already_subscribed
    - utter_docu
    - utter_ask_feedback
* contact_sales
    - utter_moreinformation
    - utter_ask_jobfunction
* enter_data{"jobfunction": "Product Manager"}
    - action_store_job
    - slot{"job_function": "Product Manager"}
    - utter_ask_usecase
* enter_data    
    - action_store_usecase
    - slot{"use_case": "bots"}
    - utter_thank_usecase
    - utter_ask_budget
* enter_data{"number": "100"} OR enter_data{"amount-of-money": "100k"} OR enter_data{"number": "100", "amount-of-money": "100"}
    - action_store_budget
    - slot{"budget": "100k"}
    - utter_sales_contact
    - utter_ask_name
* enter_data{"name": "Max Meier"}
    - action_store_name
    - slot{"person_name": "Max Meier"}
    - utter_ask_company
* enter_data{"company": "Allianz"}
    - action_store_company
    - slot{"company_name": "Allianz"}
    - utter_ask_businessmail
* enter_data{"email": "maxmeier@firma.de"} OR enter_data{"number":"1"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
    - action_store_sales_info
    - slot{"data_stored": true}
    - utter_confirm_salesrequest
    - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else

## just sales
* contact_sales
    - utter_moreinformation
    - utter_ask_jobfunction
* enter_data{"jobfunction": "Product Manager"}
    - action_store_job
    - slot{"job_function": "Product Manager"}
    - utter_ask_usecase
* enter_data    
    - action_store_usecase
    - slot{"use_case": "bots"}
    - utter_thank_usecase
    - utter_ask_budget
* enter_data{"number": "100"} OR enter_data{"amount-of-money": "100k"} OR enter_data{"number": "100", "amount-of-money": "100"}
    - action_store_budget
    - slot{"budget": "100k"}
    - utter_sales_contact
    - utter_ask_name
* enter_data{"name": "Max Meier"}
    - action_store_name
    - slot{"person_name": "Max Meier"}
    - utter_ask_company
* enter_data{"company": "Allianz"}
    - action_store_company
    - slot{"company_name": "Allianz"}
    - utter_ask_businessmail
* enter_data{"email": "maxmeier@firma.de"} OR enter_data{"number":"1"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
    - action_store_sales_info
    - slot{"data_stored": true}
    - utter_confirm_salesrequest
    - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else

## just sales + confirm
* contact_sales
    - utter_moreinformation
    - utter_ask_jobfunction
* enter_data{"jobfunction": "Product Manager"}
    - action_store_job
    - slot{"job_function": "Product Manager"}
    - utter_ask_usecase
* enter_data    
    - action_store_usecase
    - slot{"use_case": "bots"}
    - utter_thank_usecase
    - utter_ask_budget
* enter_data{"number": "100"} OR enter_data{"amount-of-money": "100k"} OR enter_data{"number": "100", "amount-of-money": "100"}
    - action_store_budget
    - slot{"budget": "100k"}
    - utter_sales_contact
    - utter_ask_name
* enter_data{"name": "Max Meier"}
    - action_store_name
    - slot{"person_name": "Max Meier"}
    - utter_ask_company
* enter_data{"company": "Allianz"}
    - action_store_company
    - slot{"company_name": "Allianz"}
    - utter_ask_businessmail
* enter_data{"email": "maxmeier@firma.de"} OR enter_data{"number":"1"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
    - action_store_sales_info
    - slot{"data_stored": true}
    - utter_confirm_salesrequest
    - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else

## sales then newsletter
* contact_sales
    - utter_moreinformation
    - utter_ask_jobfunction
* enter_data{"jobfunction": "Product Manager"}
    - action_store_job
    - slot{"job_function": "Product Manager"}
    - utter_ask_usecase
* enter_data
    - action_store_usecase
    - slot{"use_case": "bots"}
    - utter_thank_usecase
    - utter_ask_budget
* enter_data{"number": "100"} OR enter_data{"amount-of-money": "100k"} OR enter_data{"number": "100", "amount-of-money": "100"}
    - action_store_budget
    - slot{"budget": "100k"}
    - utter_sales_contact
    - utter_ask_name
* enter_data{"name": "Max Meier"}
    - action_store_name
    - slot{"person_name": "Max Meier"}
    - utter_ask_company
* enter_data{"company": "Allianz"}
    - action_store_company
    - slot{"company_name": "Allianz"}
    - utter_ask_businessmail
* enter_data{"email": "maxmeier@firma.de"} OR enter_data{"number":"1"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
    - action_store_sales_info
    - slot{"data_stored": true}
    - utter_confirm_salesrequest
    - utter_ask_feedback
* signup_newsletter
    - utter_great
    - utter_ask_email_question
* enter_data{"email": "maxmeier@firma.de"} OR enter_data{"number":"1"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
    - action_subscribe_newsletter
    - slot{"subscribed": true}
    - utter_awesome
    - utter_confirmationemail
    - utter_docu
    - utter_ask_feedback

## sales then newsletter - already subscribed
* contact_sales
    - utter_moreinformation
    - utter_ask_jobfunction
* enter_data{"jobfunction": "Product Manager"}
    - action_store_job
    - slot{"job_function": "Product Manager"}
    - utter_ask_usecase
* enter_data    
    - action_store_usecase
    - slot{"use_case": "bots"}
    - utter_thank_usecase
    - utter_ask_budget
* enter_data{"number": "100"} OR enter_data{"amount-of-money": "100k"} OR enter_data{"number": "100", "amount-of-money": "100"}
    - action_store_budget
    - slot{"budget": "100k"}
    - utter_sales_contact
    - utter_ask_name
* enter_data{"name": "Max Meier"}
    - action_store_name
    - slot{"person_name": "Max Meier"}
    - utter_ask_company
* enter_data{"company": "Allianz"}
    - action_store_company
    - slot{"company_name": "Allianz"}
    - utter_ask_businessmail
* enter_data{"email": "maxmeier@firma.de"} OR enter_data{"number":"1"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
    - action_store_sales_info
    - slot{"data_stored": true}
    - utter_confirm_salesrequest
    - utter_ask_feedback
* signup_newsletter
    - utter_great
    - utter_ask_email_question
* enter_data{"email": "maxmeier@firma.de"} OR enter_data{"number":"1"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
    - action_subscribe_newsletter
    - slot{"subscribed": false}
    - utter_already_subscribed
    - utter_docu
    - utter_ask_feedback

## newsletters, confirm, then sales
* signup_newsletter
    - utter_great
    - utter_ask_email_question
* enter_data{"email": "maxmeier@firma.de"} OR enter_data{"number":"1"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
    - action_subscribe_newsletter
    - slot{"subscribed": true}
    - utter_awesome
    - utter_confirmationemail
    - utter_docu
    - utter_ask_feedback
* contact_sales
    - utter_moreinformation
    - utter_ask_jobfunction
* enter_data{"jobfunction": "Product Manager"}
    - action_store_job
    - slot{"job_function": "Product Manager"}
    - utter_ask_usecase
* enter_data    
    - action_store_usecase
    - slot{"use_case": "bots"}
    - utter_thank_usecase
    - utter_ask_budget
* enter_data{"number": "100"} OR enter_data{"amount-of-money": "100k"} OR enter_data{"number": "100", "amount-of-money": "100"}
    - action_store_budget
    - slot{"budget": "100k"}
    - utter_sales_contact
    - utter_ask_name
* enter_data{"name": "Max Meier"}
    - action_store_name
    - slot{"person_name": "Max Meier"}
    - utter_ask_company
* enter_data{"company": "Allianz"}
    - action_store_company
    - slot{"company_name": "Allianz"}
    - utter_ask_businessmail
* enter_data{"email": "maxmeier@firma.de"} OR enter_data{"number":"1"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
    - action_store_sales_info
    - slot{"data_stored": true}
    - utter_confirm_salesrequest
    - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else

## newsletters (already subscribed), confirm, then sales
* signup_newsletter
    - utter_great
    - utter_ask_email_question
* enter_data{"email": "maxmeier@firma.de"} OR enter_data{"number":"1"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
    - action_subscribe_newsletter
    - slot{"subscribed": false}
    - utter_already_subscribed
    - utter_docu
    - utter_ask_feedback
* feedback{"feedback_value": "negative"}
    - slot{"feedback_value": "negative"}
    - utter_thumbsup
    - utter_anything_else
* contact_sales
    - utter_moreinformation
    - utter_ask_jobfunction
* enter_data{"jobfunction": "Product Manager"}
    - action_store_job
    - slot{"job_function": "Product Manager"}
    - utter_ask_usecase
* enter_data    
    - action_store_usecase
    - slot{"use_case": "bots"}
    - utter_thank_usecase
    - utter_ask_budget
* enter_data{"number": "100"} OR enter_data{"amount-of-money": "100k"} OR enter_data{"number": "100", "amount-of-money": "100"}
    - action_store_budget
    - slot{"budget": "100k"}
    - utter_sales_contact
    - utter_ask_name
* enter_data{"name": "Max Meier"}
    - action_store_name
    - slot{"person_name": "Max Meier"}
    - utter_ask_company
* enter_data{"company": "Allianz"}
    - action_store_company
    - slot{"company_name": "Allianz"}
    - utter_ask_businessmail
* enter_data{"email": "maxmeier@firma.de"} OR enter_data{"number":"1"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
    - action_store_sales_info
    - slot{"data_stored": true}
    - utter_confirm_salesrequest
    - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else

## sales, then newsletter, then confirm
* contact_sales
    - utter_moreinformation
    - utter_ask_jobfunction
* enter_data{"jobfunction": "Product Manager"}
    - action_store_job
    - slot{"job_function": "Product Manager"}
    - utter_ask_usecase
* enter_data    
    - action_store_usecase
    - slot{"use_case": "bots"}
    - utter_thank_usecase
    - utter_ask_budget
* enter_data{"number": "100"} OR enter_data{"amount-of-money": "100k"} OR enter_data{"number": "100", "amount-of-money": "100"}
    - action_store_budget
    - slot{"budget": "100k"}
    - utter_sales_contact
    - utter_ask_name
* enter_data{"name": "Max Meier"}
    - action_store_name
    - slot{"person_name": "Max Meier"}
    - utter_ask_company
* enter_data{"company": "Allianz"}
    - action_store_company
    - slot{"company_name": "Allianz"}
    - utter_ask_businessmail
* enter_data{"email": "maxmeier@firma.de"} OR enter_data{"number":"1"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
    - action_store_sales_info
    - slot{"data_stored": true}
    - utter_confirm_salesrequest
    - utter_ask_feedback
* signup_newsletter
    - utter_great
    - utter_ask_email_question
* enter_data{"email": "maxmeier@firma.de"} OR enter_data{"number":"1"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
    - action_subscribe_newsletter
    - slot{"subscribed": true}
    - utter_awesome
    - utter_confirmationemail
    - utter_docu
    - utter_ask_feedback
* feedback{"feedback_value": "negative"}
    - slot{"feedback_value": "negative"}
    - utter_thumbsup
    - utter_anything_else

## sales, then newsletter (already subscribed), then confirm
* contact_sales
    - utter_moreinformation
    - utter_ask_jobfunction
* enter_data{"jobfunction": "Product Manager"}
    - action_store_job
    - slot{"job_function": "Product Manager"}
    - utter_ask_usecase
* enter_data    
    - action_store_usecase
    - slot{"use_case": "bots"}
    - utter_thank_usecase
    - utter_ask_budget
* enter_data{"number": "100"} OR enter_data{"amount-of-money": "100k"} OR enter_data{"number": "100", "amount-of-money": "100"}
    - action_store_budget
    - slot{"budget": "100k"}
    - utter_sales_contact
    - utter_ask_name
* enter_data{"name": "Max Meier"}
    - action_store_name
    - slot{"person_name": "Max Meier"}
    - utter_ask_company
* enter_data{"company": "Allianz"}
    - action_store_company
    - slot{"company_name": "Allianz"}
    - utter_ask_businessmail
* enter_data{"email": "maxmeier@firma.de"} OR enter_data{"number":"1"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
    - action_store_sales_info
    - slot{"data_stored": true}
    - utter_confirm_salesrequest
    - utter_ask_feedback
* signup_newsletter
    - utter_great
    - utter_ask_email_question
* enter_data{"email": "maxmeier@firma.de"} OR enter_data{"number":"1"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
    - action_subscribe_newsletter
    - slot{"subscribed": false}
    - utter_already_subscribed
    - utter_docu
    - utter_ask_feedback
* feedback{"feedback_value": "negative"}
    - slot{"feedback_value": "negative"}
    - utter_thumbsup
    - utter_anything_else

## neither options
* deny
    - utter_nohelp

## deny, then accept privacy policy - neither options
* deny
    - utter_nohelp

## neither --> newsletter
* deny
    - utter_nohelp
* signup_newsletter
    - utter_great
    - utter_ask_email_question
* enter_data{"email": "maxmeier@firma.de"} OR enter_data{"number":"1"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
    - action_subscribe_newsletter
    - slot{"subscribed": true}
    - utter_awesome
    - utter_confirmationemail
    - utter_docu
    - utter_ask_feedback

## neither --> sales
* deny
    - utter_nohelp
* contact_sales
    - utter_moreinformation
    - utter_ask_jobfunction
* enter_data{"jobfunction": "Product Manager"}
    - action_store_job
    - slot{"job_function": "Product Manager"}
    - utter_ask_usecase
* enter_data    
    - action_store_usecase
    - slot{"use_case": "bots"}
    - utter_thank_usecase
    - utter_ask_budget
* enter_data{"number": "100"} OR enter_data{"amount-of-money": "100k"} OR enter_data{"number": "100", "amount-of-money": "100"}
    - action_store_budget
    - slot{"budget": "100k"}
    - utter_sales_contact
    - utter_ask_name
* enter_data{"name": "Max Meier"}
    - action_store_name
    - slot{"person_name": "Max Meier"}
    - utter_ask_company
* enter_data{"company": "Allianz"}
    - action_store_company
    - slot{"company_name": "Allianz"}
    - utter_ask_businessmail
* enter_data{"email": "maxmeier@firma.de"} OR enter_data{"number":"1"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
    - action_store_sales_info
    - slot{"data_stored": true}
    - utter_confirm_salesrequest
    - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else

## chitchat --> email --> no email
* ask_whatspossible
    - action_chitchat
* ask_weather
    - action_chitchat
* ask_weather
    - action_chitchat
* ask_weather
    - action_chitchat
* signup_newsletter
    - utter_great
    - utter_ask_email_question
* deny
    - utter_cantsignup
* mood_confirm
    - utter_thumbsup
    - utter_ask_feedback
* feedback{"feedback_value": "negative"}
    - slot{"feedback_value": "negative"}
    - utter_thumbsup
    - utter_anything_else

## anything else?
    - utter_anything_else
* mood_confirm
    - utter_what_help
