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
## link-medicine-me-male-data
* greet
    - utter_greet
    - utter_whois_patient_question
    - utter_whois_patient_answer
* confirm_patient{"patient_value": "oneself"}
    - slot{"patient_value": "oneself"}
    - utter_great
    - utter_ask_gender_question_me
    - utter_ask_gender_answer
* confirm_gender{"gender_value": "male"}
    - slot{"gender_value": "male"}
    - utter_great
    - utter_ask_age_question_me
    - utter_ask_age_answer
* confirm_age
    - utter_ask_service_type_question
    - utter_ask_service_type_answer
* confirm_service_type{"service_type": "data"}
    - slot{"service_type": "data"}
    - utter_need_expertise
    - utter_data
    - utter_ask_dkw_question_me
    - utter_ask_dkw_answer
* confirm_dkw
    - action_report_stats
    - utter_report_stats
    - utter_ask_symptoms_question_me
    - utter_ask_symptoms_question_instruction
    - utter_ask_symptoms_answer
* confirm_symptoms
    - utter_ask_current_medication_question_me
    - utter_ask_current_medication_question_instruction
    - utter_ask_current_medication_answer
* confirm_current_medication
    - utter_ask_medical_appointment_question_me
    - utter_ask_medical_appointment_question_instruction
    - utter_ask_medical_appointment_answer
* confirm_medical_appointment
    - utter_medical_record_created
    - utter_ask_email_answer
* confirm_email
    - utter_report_created
    - utter_show_datareport  
    - utter_ask_lm_appointment
    - utter_lm_app
* confirm_lm_appointment
    - utter_sent_app_confirmation
    - utter_ask_feedback_question
    - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else
## link-medicine-me-male-mso
* greet
    - utter_greet
    - utter_whois_patient_question
    - utter_whois_patient_answer
* confirm_patient{"patient_value": "oneself"}
    - slot{"patient_value": "oneself"}
    - utter_great
    - utter_ask_gender_question_me
    - utter_ask_gender_answer
* confirm_gender{"gender_value": "male"}
    - slot{"gender_value": "male"}
    - utter_great
    - utter_ask_age_question_me
    - utter_ask_age_answer
* confirm_age
    - utter_ask_service_type_question
    - utter_ask_service_type_answer
* confirm_service_type{"service_type": "mso"}
    - slot{"service_type": "mso"}
    - utter_need_expertise
    - utter_mso
    - utter_ask_dkw_question_me
    - utter_ask_dkw_answer
* confirm_dkw
    - action_report_stats
    - utter_report_stats
    - utter_ask_symptoms_question_me
    - utter_ask_symptoms_question_instruction
    - utter_ask_symptoms_answer
* confirm_symptoms
    - utter_ask_current_medication_question_me
    - utter_ask_current_medication_question_instruction
    - utter_ask_current_medication_answer
* confirm_current_medication
    - utter_ask_medical_appointment_question_me
    - utter_ask_medical_appointment_question_instruction
    - utter_ask_medical_appointment_answer
* confirm_medical_appointment
    - utter_medical_record_created
    - utter_ask_email_answer
* confirm_email
    - utter_report_created
    - utter_show_datareport  
    - utter_ask_lm_appointment
    - utter_lm_app
* confirm_lm_appointment
    - utter_sent_app_confirmation
    - utter_ask_feedback_question
    - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else
## link-medicine-me-male-xbm
* greet
    - utter_greet
    - utter_whois_patient_question
    - utter_whois_patient_answer
* confirm_patient{"patient_value": "oneself"}
    - slot{"patient_value": "oneself"}
    - utter_great
    - utter_ask_gender_question_me
    - utter_ask_gender_answer
* confirm_gender{"gender_value": "male"}
    - slot{"gender_value": "male"}
    - utter_great
    - utter_ask_age_question_me
    - utter_ask_age_answer
* confirm_age
    - utter_ask_service_type_question
    - utter_ask_service_type_answer
* confirm_service_type{"service_type": "xbm"}
    - slot{"service_type": "xbm"}
    - utter_need_expertise
    - utter_xbm
    - utter_ask_dkw_question_me
    - utter_ask_dkw_answer
* confirm_dkw
    - action_report_stats
    - utter_report_stats
    - utter_ask_symptoms_question_me
    - utter_ask_symptoms_question_instruction
    - utter_ask_symptoms_answer
* confirm_symptoms
    - utter_ask_current_medication_question_me
    - utter_ask_current_medication_question_instruction
    - utter_ask_current_medication_answer
* confirm_current_medication
    - utter_ask_medical_appointment_question_me
    - utter_ask_medical_appointment_question_instruction
    - utter_ask_medical_appointment_answer
* confirm_medical_appointment
    - utter_medical_record_created
    - utter_ask_email_answer
* confirm_email
    - utter_report_created
    - utter_show_datareport  
    - utter_ask_lm_appointment
    - utter_lm_app
* confirm_lm_appointment
    - utter_sent_app_confirmation
    - utter_ask_feedback_question
    - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else
## link-medicine-me-male-undecided
* greet
    - utter_greet
    - utter_whois_patient_question
    - utter_whois_patient_answer
* confirm_patient{"patient_value": "oneself"}
    - slot{"patient_value": "oneself"}
    - utter_great
    - utter_ask_gender_question_me
    - utter_ask_gender_answer
* confirm_gender{"gender_value": "male"}
    - slot{"gender_value": "male"}
    - utter_great
    - utter_ask_age_question_me
    - utter_ask_age_answer
* confirm_age
    - utter_ask_service_type_question
    - utter_ask_service_type_answer
* confirm_service_type{"service_type": "undecided"}
    - slot{"service_type": "undecided"}
    - utter_need_expertise
    - utter_ask_dkw_question_me
    - utter_ask_dkw_answer
* confirm_dkw
    - utter_medical_record_created
    - utter_ask_email_answer
* confirm_email  
    - utter_ask_lm_appointment
    - utter_lm_app
* confirm_lm_appointment
    - utter_sent_app_confirmation
    - utter_ask_feedback_question
    - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else
## link-medicine-me-female-data
* greet
    - utter_greet
    - utter_whois_patient_question
    - utter_whois_patient_answer
* confirm_patient{"patient_value": "oneself"}
    - slot{"patient_value": "oneself"}
    - utter_great
    - utter_ask_gender_question_me
    - utter_ask_gender_answer
* confirm_gender{"gender_value": "female"}
    - slot{"gender_value": "female"}
    - utter_great
    - utter_ask_age_question_me
    - utter_ask_age_answer
* confirm_age
    - utter_ask_service_type_question
    - utter_ask_service_type_answer
* confirm_service_type{"service_type": "data"}
    - slot{"service_type": "data"}
    - utter_need_expertise
    - utter_data
    - utter_ask_dkw_question_me
    - utter_ask_dkw_answer
* confirm_dkw
    - action_report_stats
    - utter_report_stats
    - utter_ask_symptoms_question_me
    - utter_ask_symptoms_question_instruction
    - utter_ask_symptoms_answer
* confirm_symptoms
    - utter_ask_current_medication_question_me
    - utter_ask_current_medication_question_instruction
    - utter_ask_current_medication_answer
* confirm_current_medication
    - utter_ask_medical_appointment_question_me
    - utter_ask_medical_appointment_question_instruction
    - utter_ask_medical_appointment_answer
* confirm_medical_appointment
    - utter_medical_record_created
    - utter_ask_email_answer
* confirm_email
    - utter_report_created
    - utter_show_datareport  
    - utter_ask_lm_appointment
    - utter_lm_app
* confirm_lm_appointment
    - utter_sent_app_confirmation
    - utter_ask_feedback_question
    - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else
## link-medicine-me-female-mso
* greet
    - utter_greet
    - utter_whois_patient_question
    - utter_whois_patient_answer
* confirm_patient{"patient_value": "oneself"}
    - slot{"patient_value": "oneself"}
    - utter_great
    - utter_ask_gender_question_me
    - utter_ask_gender_answer
* confirm_gender{"gender_value": "female"}
    - slot{"gender_value": "female"}
    - utter_great
    - utter_ask_age_question_me
    - utter_ask_age_answer
* confirm_age
    - utter_ask_service_type_question
    - utter_ask_service_type_answer
* confirm_service_type{"service_type": "mso"}
    - slot{"service_type": "mso"}
    - utter_need_expertise
    - utter_mso
    - utter_ask_dkw_question_me
    - utter_ask_dkw_answer
* confirm_dkw
    - action_report_stats
    - utter_report_stats
    - utter_ask_symptoms_question_me
    - utter_ask_symptoms_question_instruction
    - utter_ask_symptoms_answer
* confirm_symptoms
    - utter_ask_current_medication_question_me
    - utter_ask_current_medication_question_instruction
    - utter_ask_current_medication_answer
* confirm_current_medication
    - utter_ask_medical_appointment_question_me
    - utter_ask_medical_appointment_question_instruction
    - utter_ask_medical_appointment_answer
* confirm_medical_appointment
    - utter_medical_record_created
    - utter_ask_email_answer
* confirm_email
    - utter_report_created
    - utter_show_datareport  
    - utter_ask_lm_appointment
    - utter_lm_app
* confirm_lm_appointment
    - utter_sent_app_confirmation
    - utter_ask_feedback_question
    - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else
## link-medicine-me-female-xbm
* greet
    - utter_greet
    - utter_whois_patient_question
    - utter_whois_patient_answer
* confirm_patient{"patient_value": "oneself"}
    - slot{"patient_value": "oneself"}
    - utter_great
    - utter_ask_gender_question_me
    - utter_ask_gender_answer
* confirm_gender{"gender_value": "female"}
    - slot{"gender_value": "female"}
    - utter_great
    - utter_ask_age_question_me
    - utter_ask_age_answer
* confirm_age
    - utter_ask_service_type_question
    - utter_ask_service_type_answer
* confirm_service_type{"service_type": "xbm"}
    - slot{"service_type": "xbm"}
    - utter_need_expertise
    - utter_xbm
    - utter_ask_dkw_question_me
    - utter_ask_dkw_answer
* confirm_dkw
    - action_report_stats
    - utter_report_stats
    - utter_ask_symptoms_question_me
    - utter_ask_symptoms_question_instruction
    - utter_ask_symptoms_answer
* confirm_symptoms
    - utter_ask_current_medication_question_me
    - utter_ask_current_medication_question_instruction
    - utter_ask_current_medication_answer
* confirm_current_medication
    - utter_ask_medical_appointment_question_me
    - utter_ask_medical_appointment_question_instruction
    - utter_ask_medical_appointment_answer
* confirm_medical_appointment
    - utter_medical_record_created
    - utter_ask_email_answer
* confirm_email
    - utter_report_created
    - utter_show_datareport  
    - utter_ask_lm_appointment
    - utter_lm_app
* confirm_lm_appointment
    - utter_sent_app_confirmation
    - utter_ask_feedback_question
    - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else
## link-medicine-me-female-undecided
* greet
    - utter_greet
    - utter_whois_patient_question
    - utter_whois_patient_answer
* confirm_patient{"patient_value": "oneself"}
    - slot{"patient_value": "oneself"}
    - utter_great
    - utter_ask_gender_question_me
    - utter_ask_gender_answer
* confirm_gender{"gender_value": "female"}
    - slot{"gender_value": "female"}
    - utter_great
    - utter_ask_age_question_me
    - utter_ask_age_answer
* confirm_age
    - utter_ask_service_type_question
    - utter_ask_service_type_answer
* confirm_service_type{"service_type": "undecided"}
    - slot{"service_type": "undecided"}
    - utter_need_expertise
    - utter_ask_dkw_question_me
    - utter_ask_dkw_answer
* confirm_dkw
    - utter_medical_record_created
    - utter_ask_email_answer
* confirm_email  
    - utter_ask_lm_appointment
    - utter_lm_app
* confirm_lm_appointment
    - utter_sent_app_confirmation
    - utter_ask_feedback_question
    - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else
## link-medicine-someone-male-data
* greet
    - utter_greet
    - utter_whois_patient_question
    - utter_whois_patient_answer
* confirm_patient{"patient_value": "others"}
    - slot{"patient_value": "others"}
    - utter_great
    - utter_ask_gender_question_someone_else
    - utter_ask_gender_answer
* confirm_gender{"gender_value": "male"}
    - slot{"gender_value": "male"}
    - utter_great
    - utter_ask_age_question_male
    - utter_ask_age_answer
* confirm_age
    - utter_ask_service_type_question
    - utter_ask_service_type_answer
* confirm_service_type{"service_type": "data"}
    - slot{"service_type": "data"}
    - utter_need_expertise
    - utter_data
    - utter_ask_basic_knowledge_question
    - utter_ask_basic_knowledge_answer
* confirm_basic_knowledge
    - utter_ask_dkw_question_male
    - utter_ask_dkw_answer
* confirm_dkw
    - action_report_stats
    - utter_report_stats
    - utter_ask_symptoms_question_male
    - utter_ask_symptoms_question_instruction
    - utter_ask_symptoms_answer
* confirm_symptoms
    - utter_ask_current_medication_question_male
    - utter_ask_current_medication_question_instruction
    - utter_ask_current_medication_answer
* confirm_current_medication
    - utter_ask_medical_appointment_question_male
    - utter_ask_medical_appointment_question_instruction
    - utter_ask_medical_appointment_answer
* confirm_medical_appointment
    - utter_medical_record_created
    - utter_ask_email_answer
* confirm_email
    - utter_report_created
    - utter_show_datareport  
    - utter_ask_lm_appointment
    - utter_lm_app
* confirm_lm_appointment
    - utter_sent_app_confirmation
    - utter_ask_feedback_question
    - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else
* greet
    - utter_greet
    - utter_whois_patient_question
    - utter_whois_patient_answer
* confirm_patient{"patient_value": "oneself"}
    - slot{"patient_value": "oneself"}
    - utter_great
    - utter_ask_gender_question_me
    - utter_ask_gender_answer
* confirm_gender{"gender_value": "female"}
    - slot{"gender_value": "female"}
    - utter_great
    - utter_ask_age_question_me
    - utter_ask_age_answer
* confirm_age
    - utter_ask_service_type_question
    - utter_ask_service_type_answer
* confirm_service_type{"service_type": "undecided"}
    - slot{"service_type": "undecided"}
    - utter_need_expertise
    - utter_ask_lm_appointment
    - utter_lm_app
* confirm_lm_appointment
    - utter_sent_app_confirmation
    - utter_ask_feedback_question
    - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else
## link-medicine-someone-male-mso
* greet
    - utter_greet
    - utter_whois_patient_question
    - utter_whois_patient_answer
* confirm_patient{"patient_value": "others"}
    - slot{"patient_value": "others"}
    - utter_great
    - utter_ask_gender_question_someone_else
    - utter_ask_gender_answer
* confirm_gender{"gender_value": "male"}
    - slot{"gender_value": "male"}
    - utter_great
    - utter_ask_age_question_male
    - utter_ask_age_answer
* confirm_age
    - utter_ask_service_type_question
    - utter_ask_service_type_answer
* confirm_service_type{"service_type": "mso"}
    - slot{"service_type": "mso"}
    - utter_need_expertise
    - utter_data
    - utter_ask_basic_knowledge_question
    - utter_ask_basic_knowledge_answer
* confirm_basic_knowledge
    - utter_ask_dkw_question_male
    - utter_ask_dkw_answer
* confirm_dkw
    - action_report_stats
    - utter_report_stats
    - utter_ask_symptoms_question_male
    - utter_ask_symptoms_question_instruction
    - utter_ask_symptoms_answer
* confirm_symptoms
    - utter_ask_current_medication_question_male
    - utter_ask_current_medication_question_instruction
    - utter_ask_current_medication_answer
* confirm_current_medication
    - utter_ask_medical_appointment_question_male
    - utter_ask_medical_appointment_question_instruction
    - utter_ask_medical_appointment_answer
* confirm_medical_appointment
    - utter_medical_record_created
    - utter_ask_email_answer
* confirm_email
    - utter_report_created
    - utter_show_datareport  
    - utter_ask_lm_appointment
    - utter_lm_app
* confirm_lm_appointment
    - utter_sent_app_confirmation
    - utter_ask_feedback_question
    - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else
* greet
    - utter_greet
    - utter_whois_patient_question
    - utter_whois_patient_answer
* confirm_patient{"patient_value": "oneself"}
    - slot{"patient_value": "oneself"}
    - utter_great
    - utter_ask_gender_question_me
    - utter_ask_gender_answer
* confirm_gender{"gender_value": "female"}
    - slot{"gender_value": "female"}
    - utter_great
    - utter_ask_age_question_me
    - utter_ask_age_answer
* confirm_age
    - utter_ask_service_type_question
    - utter_ask_service_type_answer
* confirm_service_type{"service_type": "undecided"}
    - slot{"service_type": "undecided"}
    - utter_need_expertise
    - utter_ask_lm_appointment
    - utter_lm_app
* confirm_lm_appointment
    - utter_sent_app_confirmation
    - utter_ask_feedback_question
    - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else
## link-medicine-someone-male-xbm
* greet
    - utter_greet
    - utter_whois_patient_question
    - utter_whois_patient_answer
* confirm_patient{"patient_value": "others"}
    - slot{"patient_value": "others"}
    - utter_great
    - utter_ask_gender_question_someone_else
    - utter_ask_gender_answer
* confirm_gender{"gender_value": "male"}
    - slot{"gender_value": "male"}
    - utter_great
    - utter_ask_age_question_male
    - utter_ask_age_answer
* confirm_age
    - utter_ask_service_type_question
    - utter_ask_service_type_answer
* confirm_service_type{"service_type": "xbm"}
    - slot{"service_type": "xbm"}
    - utter_need_expertise
    - utter_data
    - utter_ask_basic_knowledge_question
    - utter_ask_basic_knowledge_answer
* confirm_basic_knowledge
    - utter_ask_dkw_question_male
    - utter_ask_dkw_answer
* confirm_dkw
    - action_report_stats
    - utter_report_stats
    - utter_ask_symptoms_question_male
    - utter_ask_symptoms_question_instruction
    - utter_ask_symptoms_answer
* confirm_symptoms
    - utter_ask_current_medication_question_male
    - utter_ask_current_medication_question_instruction
    - utter_ask_current_medication_answer
* confirm_current_medication
    - utter_ask_medical_appointment_question_male
    - utter_ask_medical_appointment_question_instruction
    - utter_ask_medical_appointment_answer
* confirm_medical_appointment
    - utter_medical_record_created
    - utter_ask_email_answer
* confirm_email
    - utter_report_created
    - utter_show_datareport  
    - utter_ask_lm_appointment
    - utter_lm_app
* confirm_lm_appointment
    - utter_sent_app_confirmation
    - utter_ask_feedback_question
    - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else
* greet
    - utter_greet
    - utter_whois_patient_question
    - utter_whois_patient_answer
* confirm_patient{"patient_value": "oneself"}
    - slot{"patient_value": "oneself"}
    - utter_great
    - utter_ask_gender_question_me
    - utter_ask_gender_answer
* confirm_gender{"gender_value": "female"}
    - slot{"gender_value": "female"}
    - utter_great
    - utter_ask_age_question_me
    - utter_ask_age_answer
* confirm_age
    - utter_ask_service_type_question
    - utter_ask_service_type_answer
* confirm_service_type{"service_type": "undecided"}
    - slot{"service_type": "undecided"}
    - utter_need_expertise
    - utter_ask_lm_appointment
    - utter_lm_app
* confirm_lm_appointment
    - utter_sent_app_confirmation
    - utter_ask_feedback_question
    - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else
## link-medicine-someone-male-undecided
* greet
    - utter_greet
    - utter_whois_patient_question
    - utter_whois_patient_answer
* confirm_patient{"patient_value": "others"}
    - slot{"patient_value": "others"}
    - utter_great
    - utter_ask_gender_question_someone_else
    - utter_ask_gender_answer
* confirm_gender{"gender_value": "male"}
    - slot{"gender_value": "male"}
    - utter_great
    - utter_ask_age_question_male
    - utter_ask_age_answer
* confirm_age
    - utter_ask_service_type_question
    - utter_ask_service_type_answer
* confirm_service_type{"service_type": "undecided"}
    - slot{"service_type": "undecided"}
    - utter_need_expertise
    - utter_ask_dkw_question_male
    - utter_ask_dkw_answer
* confirm_dkw
    - utter_medical_record_created
    - utter_ask_email_answer
* confirm_email  
    - utter_ask_lm_appointment
    - utter_lm_app
* confirm_lm_appointment
    - utter_sent_app_confirmation
    - utter_ask_feedback_question
    - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else
## link-medicine-someone-female-data
* greet
    - utter_greet
    - utter_whois_patient_question
    - utter_whois_patient_answer
* confirm_patient{"patient_value": "others"}
    - slot{"patient_value": "others"}
    - utter_great
    - utter_ask_gender_question_someone_else
    - utter_ask_gender_answer
* confirm_gender{"gender_value": "female"}
    - slot{"gender_value": "female"}
    - utter_great
    - utter_ask_age_question_female
    - utter_ask_age_answer
* confirm_age
    - utter_ask_service_type_question
    - utter_ask_service_type_answer
* confirm_service_type{"service_type": "data"}
    - slot{"service_type": "data"}
    - utter_need_expertise
    - utter_data
    - utter_ask_basic_knowledge_question
    - utter_ask_basic_knowledge_answer
* confirm_basic_knowledge
    - utter_ask_dkw_question_female
    - utter_ask_dkw_answer
* confirm_dkw
    - action_report_stats
    - utter_report_stats
    - utter_ask_symptoms_question_female
    - utter_ask_symptoms_question_instruction
    - utter_ask_symptoms_answer
* confirm_symptoms
    - utter_ask_current_medication_question_female
    - utter_ask_current_medication_question_instruction
    - utter_ask_current_medication_answer
* confirm_current_medication
    - utter_ask_medical_appointment_question_female
    - utter_ask_medical_appointment_question_instruction
    - utter_ask_medical_appointment_answer
* confirm_medical_appointment
    - utter_medical_record_created
    - utter_ask_email_answer
* confirm_email
    - utter_report_created
    - utter_show_datareport  
    - utter_ask_lm_appointment
    - utter_lm_app
* confirm_lm_appointment
    - utter_sent_app_confirmation
    - utter_ask_feedback_question
    - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else
## link-medicine-someone-female-mso
* greet
    - utter_greet
    - utter_whois_patient_question
    - utter_whois_patient_answer
* confirm_patient{"patient_value": "others"}
    - slot{"patient_value": "others"}
    - utter_great
    - utter_ask_gender_question_someone_else
    - utter_ask_gender_answer
* confirm_gender{"gender_value": "female"}
    - slot{"gender_value": "female"}
    - utter_great
    - utter_ask_age_question_female
    - utter_ask_age_answer
* confirm_age
    - utter_ask_service_type_question
    - utter_ask_service_type_answer
* confirm_service_type{"service_type": "mso"}
    - slot{"service_type": "mso"}
    - utter_need_expertise
    - utter_data
    - utter_ask_basic_knowledge_question
    - utter_ask_basic_knowledge_answer
* confirm_basic_knowledge
    - utter_ask_dkw_question_female
    - utter_ask_dkw_answer
* confirm_dkw
    - action_report_stats
    - utter_report_stats
    - utter_ask_symptoms_question_female
    - utter_ask_symptoms_question_instruction
    - utter_ask_symptoms_answer
* confirm_symptoms
    - utter_ask_current_medication_question_female
    - utter_ask_current_medication_question_instruction
    - utter_ask_current_medication_answer
* confirm_current_medication
    - utter_ask_medical_appointment_question_female
    - utter_ask_medical_appointment_question_instruction
    - utter_ask_medical_appointment_answer
* confirm_medical_appointment
    - utter_medical_record_created
    - utter_ask_email_answer
* confirm_email
    - utter_report_created
    - utter_show_datareport  
    - utter_ask_lm_appointment
    - utter_lm_app
* confirm_lm_appointment
    - utter_sent_app_confirmation
    - utter_ask_feedback_question
    - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else
## link-medicine-someone-female-xbm
* greet
    - utter_greet
    - utter_whois_patient_question
    - utter_whois_patient_answer
* confirm_patient{"patient_value": "others"}
    - slot{"patient_value": "others"}
    - utter_great
    - utter_ask_gender_question_someone_else
    - utter_ask_gender_answer
* confirm_gender{"gender_value": "female"}
    - slot{"gender_value": "female"}
    - utter_great
    - utter_ask_age_question_female
    - utter_ask_age_answer
* confirm_age
    - utter_ask_service_type_question
    - utter_ask_service_type_answer
* confirm_service_type{"service_type": "xbm"}
    - slot{"service_type": "xbm"}
    - utter_need_expertise
    - utter_data
    - utter_ask_basic_knowledge_question
    - utter_ask_basic_knowledge_answer
* confirm_basic_knowledge
    - utter_ask_dkw_question_female
    - utter_ask_dkw_answer
* confirm_dkw
    - action_report_hospitals
    - action_report_stats
    - utter_report_stats
    - utter_ask_symptoms_question_female
    - utter_ask_symptoms_question_instruction
    - utter_ask_symptoms_answer
* confirm_symptoms
    - utter_ask_current_medication_question_female
    - utter_ask_current_medication_question_instruction
    - utter_ask_current_medication_answer
* confirm_current_medication
    - utter_ask_medical_appointment_question_female
    - utter_ask_medical_appointment_question_instruction
    - utter_ask_medical_appointment_answer
* confirm_medical_appointment
    - utter_medical_record_created
    - utter_ask_email_answer
* confirm_email
    - utter_report_created
    - utter_show_datareport  
    - utter_ask_lm_appointment
    - utter_lm_app
* confirm_lm_appointment
    - utter_sent_app_confirmation
    - utter_ask_feedback_question
    - utter_ask_feedback
* feedback{"feedback_value": "positive"}
    - slot{"feedback_value": "positive"}
    - utter_great
    - utter_anything_else
## link-medicine-someone-female-undecided
* greet
    - utter_greet
    - utter_whois_patient_question
    - utter_whois_patient_answer
* confirm_patient{"patient_value": "others"}
    - slot{"patient_value": "others"}
    - utter_great
    - utter_ask_gender_question_someone_else
    - utter_ask_gender_answer
* confirm_gender{"gender_value": "female"}
    - slot{"gender_value": "female"}
    - utter_great
    - utter_ask_age_question_female
    - utter_ask_age_answer
* confirm_age
    - utter_ask_service_type_question
    - utter_ask_service_type_answer
* confirm_service_type{"service_type": "undecided"}
    - slot{"service_type": "undecided"}
    - utter_need_expertise
    - utter_ask_dkw_question_female
    - utter_ask_dkw_answer
* confirm_dkw
    - utter_medical_record_created
    - utter_ask_email_answer
* confirm_email  
    - utter_ask_lm_appointment
    - utter_lm_app
* confirm_lm_appointment
    - utter_sent_app_confirmation
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
    - utter_ask_feedback_question
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
    - utter_confirmation_email
    - utter_docu
    - utter_ask_feedback_question
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
    - utter_confirmation_email
    - utter_docu
    - utter_ask_feedback_question
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
    - utter_confirmation_email
    - utter_docu
    - utter_ask_feedback_question
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
    - utter_confirmation_email
    - utter_docu
    - utter_ask_feedback_question
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
    - utter_ask_feedback_question
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
    - utter_ask_feedback_question
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
    - utter_confirmation_email
    - utter_docu
    - utter_ask_feedback_question
    - utter_ask_feedback

## just newsletter (with email already) + confirm
* signup_newsletter{"email": "maxmeier@firma.de"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
    - action_subscribe_newsletter
    - slot{"subscribed": true}
    - utter_awesome
    - utter_confirmation_email
    - utter_docu
    - utter_ask_feedback_question
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
    - utter_confirmation_email
    - utter_docu
    - utter_ask_feedback_question
    - utter_ask_feedback

## just newsletter (with email already) + confirm - already subscribed
* signup_newsletter{"email": "maxmeier@firma.de"}
    - action_store_email
    - slot{"email": "maxmeier@firma.de"}
    - action_subscribe_newsletter
    - slot{"subscribed": false}
    - utter_already_subscribed
    - utter_docu
    - utter_ask_feedback_question
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
    - utter_ask_feedback_question
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
    - utter_ask_feedback_question
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
    - utter_confirmation_email
    - utter_docu
    - utter_ask_feedback_question
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
    - utter_ask_feedback_question
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
    - utter_confirmation_email
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
    - utter_ask_feedback_question
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
    - utter_ask_feedback_question
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
    - utter_ask_feedback_question
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
    - utter_ask_feedback_question
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
    - utter_confirmation_email
    - utter_docu
    - utter_ask_feedback_question
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
    - utter_ask_feedback_question
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
    - utter_ask_feedback_question
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
    - utter_confirmation_email
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
    - utter_confirmation_email
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
    - utter_confirmation_email
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
