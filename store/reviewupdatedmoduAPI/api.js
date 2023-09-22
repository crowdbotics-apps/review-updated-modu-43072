import axios from "axios";
const reviewupdatedmoduAPI = axios.create({
  baseURL: "https://review-updated-modu-43072.botics.co",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function api_docs_schema_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/api-docs/schema/`, {
    params: {
      lang: payload.lang
    }
  });
}

function api_v1_login_create(payload) {
  return reviewupdatedmoduAPI.post(`/api/v1/login/`, payload.data);
}

function api_v1_signup_create(payload) {
  return reviewupdatedmoduAPI.post(`/api/v1/signup/`, payload.data);
}

function modules_appointment_service_appointment_remove_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/appointment/service/${payload.id}/appointment/remove/`);
}

function modules_appointment_service_appointment_single_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/appointment/service/${payload.id}/appointment/single/`);
}

function modules_appointment_service_appointment_create_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/appointment/service/appointment/create/`, payload.data);
}

function modules_appointment_service_appointment_list_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/appointment/service/appointment/list/`);
}

function modules_appointment_service_appointment_sync_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/appointment/service/appointment/sync/`, payload.data);
}

function modules_appointment_service_appointment_synced_list_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/appointment/service/appointment/synced/list/`);
}

function modules_blackbaud_access_token_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/blackbaud/access/token/`);
}

function modules_blackbaud_consent_channels_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/consent/channels/`);
}

function modules_blackbaud_constituent_create_action_attachment_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/blackbaud/constituent/create_action_attachment/`, payload.data);
}

function modules_blackbaud_constituent_create_constituent_action_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/blackbaud/constituent/create_constituent_action/`, payload.data);
}

function modules_blackbaud_constituent_create_rating_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/blackbaud/constituent/create_rating/`, payload.data);
}

function modules_blackbaud_constituent_create_relationship_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/blackbaud/constituent/create_relationship/`, payload.data);
}

function modules_blackbaud_constituent_delete_constituent_action_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/blackbaud/constituent/delete_constituent_action/${payload.action_id}/`);
}

function modules_blackbaud_constituent_delete_constituent_action_attachment_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/blackbaud/constituent/delete_constituent_action_attachment/`);
}

function modules_blackbaud_constituent_delete_constituent_action_custom_field_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/blackbaud/constituent/delete_constituent_action_custom_field/${payload.custom_field_id}/`);
}

function modules_blackbaud_constituent_delete_rating_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/blackbaud/constituent/delete_rating/${payload.rating_id}/`);
}

function modules_blackbaud_constituent_delete_relationship_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/blackbaud/constituent/delete_relationship/${payload.relationship_id}/`);
}

function modules_blackbaud_constituent_edit_constituent_aliases_partial_update(payload) {
  return reviewupdatedmoduAPI.patch(`/modules/blackbaud/constituent/edit_constituent_aliases/${payload.alias_id}/`, payload.data);
}

function modules_blackbaud_constituent_edit_relationship_partial_update(payload) {
  return reviewupdatedmoduAPI.patch(`/modules/blackbaud/constituent/edit_relationship/${payload.relationship_id}/`, payload.data);
}

function modules_blackbaud_constituent_get_alias_list_in_single_constituent_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituent/get_alias_list_in_single_constituent/${payload.constituent_id}/`);
}

function modules_blackbaud_constituent_get_alias_types_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituent/get_alias_types/`);
}

function modules_blackbaud_constituent_get_attachment_tags_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituent/get_attachment_tags/`);
}

function modules_blackbaud_constituent_get_constituent_action_attachments_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituent/get_constituent_action/${payload.action_id}/attachments/`);
}

function modules_blackbaud_constituent_get_constituent_action_customfields_categories_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituent/get_constituent_action_customfields_categories/`);
}

function modules_blackbaud_constituent_get_constituent_action_customfields_categories_details_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituent/get_constituent_action_customfields_categories_details/`);
}

function modules_blackbaud_constituent_get_constituent_action_customfields_list_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituent/get_constituent_action_customfields_list/${payload.action_id}/`);
}

function modules_blackbaud_constituent_get_constituent_action_list_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituent/get_constituent_action_list/`);
}

function modules_blackbaud_constituent_get_constituent_action_location_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituent/get_constituent_action_location/`);
}

function modules_blackbaud_constituent_get_constituent_action_status_types_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituent/get_constituent_action_status_types/`);
}

function modules_blackbaud_constituent_get_constituent_action_types_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituent/get_constituent_action_types/`);
}

function modules_blackbaud_constituent_get_rating_categories_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituent/get_rating_categories/`);
}

function modules_blackbaud_constituent_get_rating_list_on_single_constituent_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituent/get_rating_list_on_single_constituent/${payload.constituent_id}/`);
}

function modules_blackbaud_constituent_get_rating_sources_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituent/get_rating_sources/`);
}

function modules_blackbaud_constituent_get_rating_values_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituent/get_rating_values/`);
}

function modules_blackbaud_constituent_get_relationship_details_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituent/get_relationship_details/${payload.relationship_id}/`);
}

function modules_blackbaud_constituent_get_relationship_list_in_all_constituents_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituent/get_relationship_list_in_all_constituents/`);
}

function modules_blackbaud_constituent_get_relationship_list_in_single_constituent_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituent/get_relationship_list_in_single_constituent/${payload.constituent_id}/`);
}

function modules_blackbaud_constituent_get_relationship_types_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituent/get_relationship_types/`);
}

function modules_blackbaud_constituent_get_suffixes_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituent/get_suffixes/`);
}

function modules_blackbaud_constituent_get_titles_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituent/get_titles/`);
}

function modules_blackbaud_constituent_search_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituent/search/`);
}

function modules_blackbaud_constituent_update_constituent_action_partial_update(payload) {
  return reviewupdatedmoduAPI.patch(`/modules/blackbaud/constituent/update_constituent_action/${payload.action_id}/`, payload.data);
}

function modules_blackbaud_constituent_update_constituent_action_attachment_partial_update(payload) {
  return reviewupdatedmoduAPI.patch(`/modules/blackbaud/constituent/update_constituent_action_attachment/`, payload.data);
}

function modules_blackbaud_constituent_update_constituent_action_custom_field_partial_update(payload) {
  return reviewupdatedmoduAPI.patch(`/modules/blackbaud/constituent/update_constituent_action_custom_field/${payload.custom_field_id}/`, payload.data);
}

function modules_blackbaud_constituent_update_rating_partial_update(payload) {
  return reviewupdatedmoduAPI.patch(`/modules/blackbaud/constituent/update_rating/${payload.rating_id}/`, payload.data);
}

function modules_blackbaud_constituents_constituent_appeal_list_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituents/constituent_appeal_list/${payload.constituent_id}/`);
}

function modules_blackbaud_constituents_constituent_attachment_list_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituents/constituent_attachment_list/${payload.constituent_id}/`);
}

function modules_blackbaud_constituents_constituent_details_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituents/constituent_details/${payload.constituent_id}/`);
}

function modules_blackbaud_constituents_convert_non_constituent_to_constituent_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/blackbaud/constituents/convert_non_constituent_to_constituent/${payload.non_constituent_id}/`);
}

function modules_blackbaud_constituents_create_address_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/blackbaud/constituents/create_address/`, payload.data);
}

function modules_blackbaud_constituents_create_alias_collection_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/blackbaud/constituents/create_alias_collection/${payload.constituent_id}/`, payload.data);
}

function modules_blackbaud_constituents_create_aliases_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/blackbaud/constituents/create_aliases/`, payload.data);
}

function modules_blackbaud_constituents_create_attachment_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/blackbaud/constituents/create_attachment/`, payload.data);
}

function modules_blackbaud_constituents_create_constituent_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/blackbaud/constituents/create_constituent/`, payload.data);
}

function modules_blackbaud_constituents_create_constituent_action_custom_field_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/blackbaud/constituents/create_constituent_action_custom_field/`, payload.data);
}

function modules_blackbaud_constituents_create_constituent_code_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/blackbaud/constituents/create_constituent_code/`, payload.data);
}

function modules_blackbaud_constituents_create_constituent_custom_field_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/blackbaud/constituents/create_constituent_custom_field/`, payload.data);
}

function modules_blackbaud_constituents_create_constituent_custom_field_collection_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/blackbaud/constituents/create_constituent_custom_field_collection/${payload.constituent_id}/`, payload.data);
}

function modules_blackbaud_constituents_create_document_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/blackbaud/constituents/create_document/`, payload.data);
}

function modules_blackbaud_constituents_create_education_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/blackbaud/constituents/create_education/`, payload.data);
}

function modules_blackbaud_constituents_create_education_custom_field_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/blackbaud/constituents/create_education_custom_field/`, payload.data);
}

function modules_blackbaud_constituents_delete_address_details_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/blackbaud/constituents/delete_address_details/${payload.address_id}/`);
}

function modules_blackbaud_constituents_delete_aliases_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/blackbaud/constituents/delete_aliases/${payload.alias_id}/`);
}

function modules_blackbaud_constituents_delete_attachment_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/blackbaud/constituents/delete_attachment/`);
}

function modules_blackbaud_constituents_delete_constituent_code_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/blackbaud/constituents/delete_constituent_code/${payload.constituent_code_id}/`);
}

function modules_blackbaud_constituents_delete_education_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/blackbaud/constituents/delete_education/${payload.education_id}/`);
}

function modules_blackbaud_constituents_delete_education_custom_field_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/blackbaud/constituents/delete_education_custom_field/${payload.custom_field_id}/`);
}

function modules_blackbaud_constituents_get_address_details_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituents/get_address_details/${payload.address_id}/`);
}

function modules_blackbaud_constituents_get_address_list_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituents/get_address_list/`);
}

function modules_blackbaud_constituents_get_address_list_in_constituents_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituents/get_address_list_in_constituents/${payload.constituent_id}/`);
}

function modules_blackbaud_constituents_get_address_types_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituents/get_address_types/`);
}

function modules_blackbaud_constituents_get_constituent_code_details_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituents/get_constituent_code_details/${payload.constituent_code_id}/`);
}

function modules_blackbaud_constituents_get_constituent_code_list_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituents/get_constituent_code_list/`);
}

function modules_blackbaud_constituents_get_constituent_code_list_in_constituent_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituents/get_constituent_code_list_in_constituent/${payload.constituent_id}/`);
}

function modules_blackbaud_constituents_get_constituent_custom_field_categories_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituents/get_constituent_custom_field_categories/`);
}

function modules_blackbaud_constituents_get_constituent_custom_field_categories_details_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituents/get_constituent_custom_field_categories_details/`);
}

function modules_blackbaud_constituents_get_constituent_custom_field_categories_values_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituents/get_constituent_custom_field_categories_values/`);
}

function modules_blackbaud_constituents_get_constituent_custom_field_list_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituents/get_constituent_custom_field_list/`);
}

function modules_blackbaud_constituents_get_constituent_custom_field_list_in_single_constituent_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituents/get_constituent_custom_field_list_in_single_constituent/${payload.constituent_id}/`);
}

function modules_blackbaud_constituents_get_countries_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituents/get_countries/`);
}

function modules_blackbaud_constituents_get_currencyconfiguration_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituents/get_currencyconfiguration/`);
}

function modules_blackbaud_constituents_get_custom_field_list_in_education_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituents/get_custom_field_list_in_education/${payload.education_id}/`);
}

function modules_blackbaud_constituents_get_education_custom_field_categories_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituents/get_education_custom_field_categories/`);
}

function modules_blackbaud_constituents_get_education_degrees_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituents/get_education_degrees/`);
}

function modules_blackbaud_constituents_get_education_list_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituents/get_education_list/`);
}

function modules_blackbaud_constituents_get_education_list_in_constituent_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituents/get_education_list_in_constituent/${payload.constituent_id}/`);
}

function modules_blackbaud_constituents_get_education_record_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituents/get_education_record/${payload.education_id}/`);
}

function modules_blackbaud_constituents_get_education_schools_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituents/get_education_schools/`);
}

function modules_blackbaud_constituents_get_education_statuses_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituents/get_education_statuses/`);
}

function modules_blackbaud_constituents_get_education_subjects_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituents/get_education_subjects/`);
}

function modules_blackbaud_constituents_get_education_types_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituents/get_education_types/`);
}

function modules_blackbaud_constituents_list_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/constituents/list/`);
}

function modules_blackbaud_constituents_update_constituent_address_partial_update(payload) {
  return reviewupdatedmoduAPI.patch(`/modules/blackbaud/constituents/update_constituent_address/${payload.address_id}/`, payload.data);
}

function modules_blackbaud_event_get_event_attachment_list_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/event/${payload.event_id}/get_event_attachment_list/`);
}

function modules_blackbaud_event_get_event_fees_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/event/${payload.event_id}/get_event_fees/`);
}

function modules_blackbaud_event_get_event_participant_options_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/event/${payload.event_id}/get_event_participant_options/`);
}

function modules_blackbaud_event_get_event_participant_donation_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/event/${payload.participant_id}/get_event_participant_donation/`);
}

function modules_blackbaud_event_get_event_participant_fee_payments_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/event/${payload.participant_id}/get_event_participant_fee_payments/`);
}

function modules_blackbaud_event_get_event_participant_fees_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/event/${payload.participant_id}/get_event_participant_fees/`);
}

function modules_blackbaud_event_get_participant_options_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/event/${payload.participant_id}/get_participant_options/`);
}

function modules_blackbaud_event_create_event_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/blackbaud/event/create_event/`, payload.data);
}

function modules_blackbaud_event_create_event_attachment_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/blackbaud/event/create_event_attachment/${payload.event_id}/`, payload.data);
}

function modules_blackbaud_event_create_event_attachment_upload_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/blackbaud/event/create_event_attachment_upload/`, payload.data);
}

function modules_blackbaud_event_create_event_category_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/blackbaud/event/create_event_category/`, payload.data);
}

function modules_blackbaud_event_create_event_fee_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/blackbaud/event/create_event_fee/${payload.event_id}/`, payload.data);
}

function modules_blackbaud_event_create_event_participant_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/blackbaud/event/create_event_participant/${payload.event_id}/`, payload.data);
}

function modules_blackbaud_event_create_event_participant_for_attending_event_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/blackbaud/event/create_event_participant_for_attending_event/${payload.event_id}/`);
}

function modules_blackbaud_event_create_event_participant_option_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/blackbaud/event/create_event_participant_option/${payload.event_id}/`, payload.data);
}

function modules_blackbaud_event_create_gift_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/blackbaud/event/create_gift/`, payload.data);
}

function modules_blackbaud_event_create_participant_donation_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/blackbaud/event/create_participant_donation/${payload.participant_id}/`);
}

function modules_blackbaud_event_create_participant_fee_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/blackbaud/event/create_participant_fee/${payload.participant_id}/`, payload.data);
}

function modules_blackbaud_event_create_participant_fee_payment_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/blackbaud/event/create_participant_fee_payment/${payload.participant_id}/`, payload.data);
}

function modules_blackbaud_event_create_participant_level_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/blackbaud/event/create_participant_level/`, payload.data);
}

function modules_blackbaud_event_create_participant_option_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/blackbaud/event/create_participant_option/${payload.participant_id}/`, payload.data);
}

function modules_blackbaud_event_delete_event_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/blackbaud/event/delete_event/${payload.event_id}/`);
}

function modules_blackbaud_event_delete_event_category_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/blackbaud/event/delete_event_category/${payload.event_category_id}/`);
}

function modules_blackbaud_event_delete_event_fee_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/blackbaud/event/delete_event_fee/${payload.fee_id}/`);
}

function modules_blackbaud_event_delete_event_participant_option_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/blackbaud/event/delete_event_participant_option/`);
}

function modules_blackbaud_event_delete_gift_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/blackbaud/event/delete_gift/${payload.gift_id}/`);
}

function modules_blackbaud_event_delete_participant_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/blackbaud/event/delete_participant/${payload.participant_id}/`);
}

function modules_blackbaud_event_delete_participant_donation_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/blackbaud/event/delete_participant_donation/${payload.participant_donation_id}/`);
}

function modules_blackbaud_event_delete_participant_fee_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/blackbaud/event/delete_participant_fee/${payload.participant_fee_id}/`);
}

function modules_blackbaud_event_delete_participant_fee_payment_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/blackbaud/event/delete_participant_fee_payment/${payload.participant_fee_payment_id}/`);
}

function modules_blackbaud_event_delete_participant_level_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/blackbaud/event/delete_participant_level/${payload.participation_level_id}/`);
}

function modules_blackbaud_event_delete_participant_option_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/blackbaud/event/delete_participant_option/`);
}

function modules_blackbaud_event_details_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/event/details/${payload.event_id}/`);
}

function modules_blackbaud_event_edit_event_partial_update(payload) {
  return reviewupdatedmoduAPI.patch(`/modules/blackbaud/event/edit_event/${payload.event_id}/`, payload.data);
}

function modules_blackbaud_event_edit_event_category_partial_update(payload) {
  return reviewupdatedmoduAPI.patch(`/modules/blackbaud/event/edit_event_category/${payload.event_category_id}/`, payload.data);
}

function modules_blackbaud_event_edit_event_fee_partial_update(payload) {
  return reviewupdatedmoduAPI.patch(`/modules/blackbaud/event/edit_event_fee/${payload.fee_id}/`, payload.data);
}

function modules_blackbaud_event_edit_event_participant_option_partial_update(payload) {
  return reviewupdatedmoduAPI.patch(`/modules/blackbaud/event/edit_event_participant_option/`, payload.data);
}

function modules_blackbaud_event_edit_participant_details_partial_update(payload) {
  return reviewupdatedmoduAPI.patch(`/modules/blackbaud/event/edit_participant_details/${payload.participant_id}/`, payload.data);
}

function modules_blackbaud_event_edit_participant_level_partial_update(payload) {
  return reviewupdatedmoduAPI.patch(`/modules/blackbaud/event/edit_participant_level/${payload.participation_level_id}/`, payload.data);
}

function modules_blackbaud_event_edit_participant_option_partial_update(payload) {
  return reviewupdatedmoduAPI.patch(`/modules/blackbaud/event/edit_participant_option/`, payload.data);
}

function modules_blackbaud_event_get_event_attachment_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/event/get_event_attachment/`);
}

function modules_blackbaud_event_get_event_attachment_tags_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/event/get_event_attachment_tags/`);
}

function modules_blackbaud_event_get_event_categories_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/event/get_event_categories/`);
}

function modules_blackbaud_event_get_gift_details_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/event/get_gift_details/${payload.gift_id}/`);
}

function modules_blackbaud_event_get_participant_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/event/get_participant/${payload.participant_id}/`);
}

function modules_blackbaud_event_get_participant_levels_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/event/get_participant_levels/`);
}

function modules_blackbaud_event_participants_list_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/event/participants_list/${payload.event_id}/`);
}

function modules_blackbaud_events_list_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/blackbaud/events/list/`);
}

function modules_booking_booking_list(payload) {
  return reviewupdatedmoduAPI.get(`/modules/booking/booking/`, {
    params: {
      page: payload.page,
      page_size: payload.page_size
    }
  });
}

function modules_booking_booking_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/booking/booking/`, payload.data);
}

function modules_booking_booking_details_list(payload) {
  return reviewupdatedmoduAPI.get(`/modules/booking/booking-details/`, {
    params: {
      page: payload.page,
      page_size: payload.page_size
    }
  });
}

function modules_booking_booking_details_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/booking/booking-details/`, payload.data);
}

function modules_booking_booking_details_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/booking/booking-details/${payload.id}/`);
}

function modules_booking_booking_details_update(payload) {
  return reviewupdatedmoduAPI.put(`/modules/booking/booking-details/${payload.id}/`, payload.data);
}

function modules_booking_booking_details_partial_update(payload) {
  return reviewupdatedmoduAPI.patch(`/modules/booking/booking-details/${payload.id}/`, payload.data);
}

function modules_booking_booking_details_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/booking/booking-details/${payload.id}/`);
}

function modules_booking_booking_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/booking/booking/${payload.id}/`);
}

function modules_booking_booking_update(payload) {
  return reviewupdatedmoduAPI.put(`/modules/booking/booking/${payload.id}/`, payload.data);
}

function modules_booking_booking_partial_update(payload) {
  return reviewupdatedmoduAPI.patch(`/modules/booking/booking/${payload.id}/`, payload.data);
}

function modules_booking_booking_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/booking/booking/${payload.id}/`);
}

function modules_booking_create_booking_list(payload) {
  return reviewupdatedmoduAPI.get(`/modules/booking/create-booking/`, {
    params: {
      page: payload.page,
      page_size: payload.page_size
    }
  });
}

function modules_booking_create_booking_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/booking/create-booking/`, payload.data);
}

function modules_booking_create_booking_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/booking/create-booking/${payload.id}/`);
}

function modules_booking_create_booking_update(payload) {
  return reviewupdatedmoduAPI.put(`/modules/booking/create-booking/${payload.id}/`, payload.data);
}

function modules_booking_create_booking_partial_update(payload) {
  return reviewupdatedmoduAPI.patch(`/modules/booking/create-booking/${payload.id}/`, payload.data);
}

function modules_booking_create_booking_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/booking/create-booking/${payload.id}/`);
}

function modules_booking_penalties_list(payload) {
  return reviewupdatedmoduAPI.get(`/modules/booking/penalties/`, {
    params: {
      page: payload.page,
      page_size: payload.page_size
    }
  });
}

function modules_booking_penalties_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/booking/penalties/`, payload.data);
}

function modules_booking_penalties_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/booking/penalties/${payload.id}/`);
}

function modules_booking_penalties_update(payload) {
  return reviewupdatedmoduAPI.put(`/modules/booking/penalties/${payload.id}/`, payload.data);
}

function modules_booking_penalties_partial_update(payload) {
  return reviewupdatedmoduAPI.patch(`/modules/booking/penalties/${payload.id}/`, payload.data);
}

function modules_booking_penalties_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/booking/penalties/${payload.id}/`);
}

function modules_booking_plans_list(payload) {
  return reviewupdatedmoduAPI.get(`/modules/booking/plans/`, {
    params: {
      page: payload.page,
      page_size: payload.page_size
    }
  });
}

function modules_booking_plans_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/booking/plans/`, payload.data);
}

function modules_booking_plans_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/booking/plans/${payload.id}/`);
}

function modules_booking_plans_update(payload) {
  return reviewupdatedmoduAPI.put(`/modules/booking/plans/${payload.id}/`, payload.data);
}

function modules_booking_plans_partial_update(payload) {
  return reviewupdatedmoduAPI.patch(`/modules/booking/plans/${payload.id}/`, payload.data);
}

function modules_booking_plans_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/booking/plans/${payload.id}/`);
}

function modules_booking_shopify_booking_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/booking/shopify/booking/`);
}

function modules_booking_shopify_booking_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/booking/shopify/booking/`);
}

function modules_disqus_comment_list(payload) {
  return reviewupdatedmoduAPI.get(`/modules/disqus/comment/`, {
    params: {
      page: payload.page,
      page_size: payload.page_size
    }
  });
}

function modules_disqus_comment_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/disqus/comment/`, payload.data);
}

function modules_disqus_comment_like_list(payload) {
  return reviewupdatedmoduAPI.get(`/modules/disqus/comment-like/`, {
    params: {
      page: payload.page,
      page_size: payload.page_size
    }
  });
}

function modules_disqus_comment_like_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/disqus/comment-like/`, payload.data);
}

function modules_disqus_comment_like_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/disqus/comment-like/${payload.id}/`);
}

function modules_disqus_comment_like_update(payload) {
  return reviewupdatedmoduAPI.put(`/modules/disqus/comment-like/${payload.id}/`, payload.data);
}

function modules_disqus_comment_like_partial_update(payload) {
  return reviewupdatedmoduAPI.patch(`/modules/disqus/comment-like/${payload.id}/`, payload.data);
}

function modules_disqus_comment_like_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/disqus/comment-like/${payload.id}/`);
}

function modules_disqus_comment_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/disqus/comment/${payload.id}/`);
}

function modules_disqus_comment_update(payload) {
  return reviewupdatedmoduAPI.put(`/modules/disqus/comment/${payload.id}/`, payload.data);
}

function modules_disqus_comment_partial_update(payload) {
  return reviewupdatedmoduAPI.patch(`/modules/disqus/comment/${payload.id}/`, payload.data);
}

function modules_disqus_comment_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/disqus/comment/${payload.id}/`);
}

function modules_docusign_auth_token_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/docusign/auth/token/`);
}

function modules_docusign_envelope_create_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/docusign/envelope/create/`);
}

function modules_docusign_envelope_download_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/docusign/envelope/download/`);
}

function modules_docusign_envelope_retrieve_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/docusign/envelope/retrieve/`);
}

function modules_docusign_envelope_retrieve_all_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/docusign/envelope/retrieve-all/`);
}

function modules_files_uploads_list(payload) {
  return reviewupdatedmoduAPI.get(`/modules/files/uploads/`);
}

function modules_files_uploads_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/files/uploads/`, payload.data);
}

function modules_files_uploads_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/files/uploads/${payload.id}/`);
}

function modules_files_uploads_update(payload) {
  return reviewupdatedmoduAPI.put(`/modules/files/uploads/${payload.id}/`, payload.data);
}

function modules_files_uploads_partial_update(payload) {
  return reviewupdatedmoduAPI.patch(`/modules/files/uploads/${payload.id}/`, payload.data);
}

function modules_files_uploads_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/files/uploads/${payload.id}/`);
}

function modules_hubspot_service_contact_deals_list_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/hubspot/service/${payload.id}/contact/deals/list/`);
}

function modules_hubspot_service_deals_remove_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/hubspot/service/${payload.id}/deals/remove/`);
}

function modules_hubspot_service_deals_single_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/hubspot/service/${payload.id}/deals/single/`);
}

function modules_hubspot_service_meeting_contacts_list_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/hubspot/service/${payload.id}/meeting/contacts/list/`);
}

function modules_hubspot_service_ticket_associations_create_update(payload) {
  return reviewupdatedmoduAPI.put(`/modules/hubspot/service/${payload.id}/ticket/associations/${payload.toObjectType}/${payload.toObjectId}/create/`, payload.data);
}

function modules_hubspot_service_ticket_associations_list_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/hubspot/service/${payload.id}/ticket/associations/${payload.toObjectType}/list/`);
}

function modules_hubspot_service_tickets_remove_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/hubspot/service/${payload.id}/tickets/remove/`);
}

function modules_hubspot_service_tickets_single_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/hubspot/service/${payload.id}/tickets/single/`);
}

function modules_hubspot_service_access_token_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/hubspot/service/access/token/`, payload.data);
}

function modules_hubspot_service_deals_associations_create_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/hubspot/service/deals/associations/create/`, payload.data);
}

function modules_hubspot_service_deals_create_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/hubspot/service/deals/create/`, payload.data);
}

function modules_hubspot_service_deals_list_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/hubspot/service/deals/list/`);
}

function modules_hubspot_service_events_create_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/hubspot/service/events/create/`, payload.data);
}

function modules_hubspot_service_tickets_create_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/hubspot/service/tickets/create/`, payload.data);
}

function modules_hubspot_service_tickets_list_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/hubspot/service/tickets/list/`);
}

function modules_hubspot_service_webhook_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/hubspot/service/webhook/`);
}

function modules_mailchimp_audience_add_list_member_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/mailchimp/audience/${payload.id}/add-list-member/`, payload.data);
}

function modules_mailchimp_audience_add_or_remove_member_tag_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/mailchimp/audience/${payload.id}/add-or-remove-member-tag/${payload.subscriber_hash}/`, payload.data);
}

function modules_mailchimp_audience_add_segment_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/mailchimp/audience/${payload.id}/add-segment/`, payload.data);
}

function modules_mailchimp_audience_batch_subscribe_unsubscribe_audience_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/mailchimp/audience/${payload.id}/batch-subscribe-unsubscribe-audience/`, payload.data);
}

function modules_mailchimp_audience_delete_audience_list_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/mailchimp/audience/${payload.id}/delete-audience-list/`);
}

function modules_mailchimp_audience_delete_list_member_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/mailchimp/audience/${payload.id}/delete-list-member/${payload.subscriber_hash}/`);
}

function modules_mailchimp_audience_delete_segment_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/mailchimp/audience/${payload.id}/delete-segment/${payload.segment_id}/`);
}

function modules_mailchimp_audience_get_audience_list_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/mailchimp/audience/${payload.id}/get-audience-list/`);
}

function modules_mailchimp_audience_get_member_info_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/mailchimp/audience/${payload.id}/get-member-info/${payload.subscriber_hash}/`);
}

function modules_mailchimp_audience_get_segment_info_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/mailchimp/audience/${payload.id}/get-segment-info/${payload.segment_id}/`);
}

function modules_mailchimp_audience_list_member_info_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/mailchimp/audience/${payload.id}/list-member-info/`);
}

function modules_mailchimp_audience_list_member_tags_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/mailchimp/audience/${payload.id}/list-member-tags/${payload.subscriber_hash}/`);
}

function modules_mailchimp_audience_list_segment_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/mailchimp/audience/${payload.id}/list-segment/`);
}

function modules_mailchimp_audience_update_audience_list_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/mailchimp/audience/${payload.id}/update-audience-list/`, payload.data);
}

function modules_mailchimp_audience_update_list_member_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/mailchimp/audience/${payload.id}/update-list-member/${payload.subscriber_hash}/`, payload.data);
}

function modules_mailchimp_audience_update_segment_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/mailchimp/audience/${payload.id}/update-segment/${payload.segment_id}/`, payload.data);
}

function modules_mailchimp_audience_add_audience_list_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/mailchimp/audience/add-audience-list/`, payload.data);
}

function modules_mailchimp_audience_get_audience_lists_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/mailchimp/audience/get-audience-lists/`);
}

function modules_mailchimp_campaign_reports_get_campaign_abuse_report_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/mailchimp/campaign-reports/${payload.id}/get-campaign-abuse-report/${payload.report_id}/`);
}

function modules_mailchimp_campaign_reports_get_campaign_abuse_reports_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/mailchimp/campaign-reports/${payload.id}/get-campaign-abuse-reports/`);
}

function modules_mailchimp_campaign_reports_get_campaign_click_details_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/mailchimp/campaign-reports/${payload.id}/get-campaign-click-details/`);
}

function modules_mailchimp_campaign_reports_get_campaign_open_details_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/mailchimp/campaign-reports/${payload.id}/get-campaign-open-details/`);
}

function modules_mailchimp_campaign_reports_get_campaign_report_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/mailchimp/campaign-reports/${payload.id}/get-campaign-report/`);
}

function modules_mailchimp_campaign_reports_list_campaign_report_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/mailchimp/campaign-reports/list-campaign-report/`);
}

function modules_mailchimp_campaigns_cancel_campaign_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/mailchimp/campaigns/${payload.id}/cancel-campaign/`);
}

function modules_mailchimp_campaigns_delete_campaign_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/mailchimp/campaigns/${payload.id}/delete-campaign/`);
}

function modules_mailchimp_campaigns_delete_campaign_folder_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/mailchimp/campaigns/${payload.id}/delete_campaign_folder/`);
}

function modules_mailchimp_campaigns_get_campaign_folder_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/mailchimp/campaigns/${payload.id}/get-campaign-folder/`);
}

function modules_mailchimp_campaigns_get_campaign_info_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/mailchimp/campaigns/${payload.id}/get-campaign-info/`);
}

function modules_mailchimp_campaigns_schedule_campaign_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/mailchimp/campaigns/${payload.id}/schedule-campaign/`, payload.data);
}

function modules_mailchimp_campaigns_send_campaign_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/mailchimp/campaigns/${payload.id}/send-campaign/`);
}

function modules_mailchimp_campaigns_unschedule_campaign_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/mailchimp/campaigns/${payload.id}/unschedule-campaign/`);
}

function modules_mailchimp_campaigns_update_campaign_folder_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/mailchimp/campaigns/${payload.id}/update-campaign-folder/`, payload.data);
}

function modules_mailchimp_campaigns_update_campaign_settings_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/mailchimp/campaigns/${payload.id}/update-campaign-settings/`, payload.data);
}

function modules_mailchimp_campaigns_add_campaign_folder_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/mailchimp/campaigns/add-campaign-folder/`, payload.data);
}

function modules_mailchimp_campaigns_add_campaigns_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/mailchimp/campaigns/add-campaigns/`, payload.data);
}

function modules_mailchimp_campaigns_list_campaign_folder_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/mailchimp/campaigns/list-campaign-folder/`);
}

function modules_mailchimp_campaigns_list_campaigns_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/mailchimp/campaigns/list-campaigns/`);
}

function modules_mailchimp_templates_delete_template_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/mailchimp/templates/${payload.id}/delete-template/`);
}

function modules_mailchimp_templates_delete_template_folder_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/mailchimp/templates/${payload.id}/delete-template-folder/`);
}

function modules_mailchimp_templates_get_template_folder_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/mailchimp/templates/${payload.id}/get-template-folder/`);
}

function modules_mailchimp_templates_get_template_info_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/mailchimp/templates/${payload.id}/get-template-info/`);
}

function modules_mailchimp_templates_update_template_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/mailchimp/templates/${payload.id}/update-template/`, payload.data);
}

function modules_mailchimp_templates_update_template_folder_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/mailchimp/templates/${payload.id}/update-template-folder/`, payload.data);
}

function modules_mailchimp_templates_add_template_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/mailchimp/templates/add-template/`, payload.data);
}

function modules_mailchimp_templates_add_template_folder_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/mailchimp/templates/add-template-folder/`, payload.data);
}

function modules_mailchimp_templates_list_template_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/mailchimp/templates/list-template/`);
}

function modules_mailchimp_templates_list_template_folder_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/mailchimp/templates/list-template-folder/`);
}

function modules_okta_callback_url_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/okta/callback_url/`, payload.data);
}

function modules_okta_create_user_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/okta/create_user/`, payload.data);
}

function modules_okta_login_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/okta/login/`, payload.data);
}

function modules_okta_logout_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/okta/logout/`, payload.data);
}

function modules_openai_audio_transcription_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/openai/audio/transcription/`, payload.data);
}

function modules_openai_audio_translation_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/openai/audio/translation/`, payload.data);
}

function modules_openai_chat_completions_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/openai/chat/completions/`, payload.data);
}

function modules_openai_completion_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/openai/completion/`, payload.data);
}

function modules_openai_edits_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/openai/edits/`, payload.data);
}

function modules_openai_engines_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/openai/engines/`);
}

function modules_openai_engines_retrieve_2(payload) {
  return reviewupdatedmoduAPI.get(`/modules/openai/engines/${payload.engine_id}/`);
}

function modules_openai_images_generations_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/openai/images/generations/`, payload.data);
}

function modules_openai_models_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/openai/models/`);
}

function modules_openai_models_retrieve_2(payload) {
  return reviewupdatedmoduAPI.get(`/modules/openai/models/${payload.model_id}/`);
}

function modules_slack_service_archive_channel_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/slack/service/${payload.id}/archive_channel/`, payload.data);
}

function modules_slack_service_channel_history_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/slack/service/${payload.id}/channel_history/`);
}

function modules_slack_service_get_channel_id_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/slack/service/${payload.id}/get-channel-id/`);
}

function modules_slack_service_create_channel_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/slack/service/create-channel/`, payload.data);
}

function modules_slack_service_get_users_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/slack/service/get_users/`);
}

function modules_slack_service_invite_user_to_channel_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/slack/service/invite-user-to-channel/`, payload.data);
}

function modules_slack_service_send_message_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/slack/service/send-message/`, payload.data);
}

function modules_slack_service_upload_file_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/slack/service/upload-file/`, payload.data);
}

function modules_zoominfo_auth_token_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/zoominfo/auth/token/`);
}

function modules_zoominfo_data_bulk_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/zoominfo/data/bulk/`);
}

function modules_zoominfo_data_enrich_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/zoominfo/data/enrich/`);
}

function modules_zoominfo_data_search_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/zoominfo/data/search/`);
}

function rest_auth_login_create(payload) {
  return reviewupdatedmoduAPI.post(`/rest-auth/login/`, payload.data);
}

function rest_auth_logout_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/rest-auth/logout/`);
}

function rest_auth_logout_create(payload) {
  return reviewupdatedmoduAPI.post(`/rest-auth/logout/`);
}

function rest_auth_password_change_create(payload) {
  return reviewupdatedmoduAPI.post(`/rest-auth/password/change/`, payload.data);
}

function rest_auth_password_reset_create(payload) {
  return reviewupdatedmoduAPI.post(`/rest-auth/password/reset/`, payload.data);
}

function rest_auth_password_reset_confirm_create(payload) {
  return reviewupdatedmoduAPI.post(`/rest-auth/password/reset/confirm/`, payload.data);
}

function rest_auth_registration_create(payload) {
  return reviewupdatedmoduAPI.post(`/rest-auth/registration/`, payload.data);
}

function rest_auth_registration_verify_email_create(payload) {
  return reviewupdatedmoduAPI.post(`/rest-auth/registration/verify-email/`, payload.data);
}

function rest_auth_user_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/rest-auth/user/`);
}

function rest_auth_user_update(payload) {
  return reviewupdatedmoduAPI.put(`/rest-auth/user/`, payload.data);
}

function rest_auth_user_partial_update(payload) {
  return reviewupdatedmoduAPI.patch(`/rest-auth/user/`, payload.data);
}

export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  modules_appointment_service_appointment_remove_destroy,
  modules_appointment_service_appointment_single_retrieve,
  modules_appointment_service_appointment_create_create,
  modules_appointment_service_appointment_list_retrieve,
  modules_appointment_service_appointment_sync_create,
  modules_appointment_service_appointment_synced_list_retrieve,
  modules_blackbaud_access_token_create,
  modules_blackbaud_consent_channels_retrieve,
  modules_blackbaud_constituent_create_action_attachment_create,
  modules_blackbaud_constituent_create_constituent_action_create,
  modules_blackbaud_constituent_create_rating_create,
  modules_blackbaud_constituent_create_relationship_create,
  modules_blackbaud_constituent_delete_constituent_action_destroy,
  modules_blackbaud_constituent_delete_constituent_action_attachment_destroy,
  modules_blackbaud_constituent_delete_constituent_action_custom_field_destroy,
  modules_blackbaud_constituent_delete_rating_destroy,
  modules_blackbaud_constituent_delete_relationship_destroy,
  modules_blackbaud_constituent_edit_constituent_aliases_partial_update,
  modules_blackbaud_constituent_edit_relationship_partial_update,
  modules_blackbaud_constituent_get_alias_list_in_single_constituent_retrieve,
  modules_blackbaud_constituent_get_alias_types_retrieve,
  modules_blackbaud_constituent_get_attachment_tags_retrieve,
  modules_blackbaud_constituent_get_constituent_action_attachments_retrieve,
  modules_blackbaud_constituent_get_constituent_action_customfields_categories_retrieve,
  modules_blackbaud_constituent_get_constituent_action_customfields_categories_details_retrieve,
  modules_blackbaud_constituent_get_constituent_action_customfields_list_retrieve,
  modules_blackbaud_constituent_get_constituent_action_list_retrieve,
  modules_blackbaud_constituent_get_constituent_action_location_retrieve,
  modules_blackbaud_constituent_get_constituent_action_status_types_retrieve,
  modules_blackbaud_constituent_get_constituent_action_types_retrieve,
  modules_blackbaud_constituent_get_rating_categories_retrieve,
  modules_blackbaud_constituent_get_rating_list_on_single_constituent_retrieve,
  modules_blackbaud_constituent_get_rating_sources_retrieve,
  modules_blackbaud_constituent_get_rating_values_retrieve,
  modules_blackbaud_constituent_get_relationship_details_retrieve,
  modules_blackbaud_constituent_get_relationship_list_in_all_constituents_retrieve,
  modules_blackbaud_constituent_get_relationship_list_in_single_constituent_retrieve,
  modules_blackbaud_constituent_get_relationship_types_retrieve,
  modules_blackbaud_constituent_get_suffixes_retrieve,
  modules_blackbaud_constituent_get_titles_retrieve,
  modules_blackbaud_constituent_search_retrieve,
  modules_blackbaud_constituent_update_constituent_action_partial_update,
  modules_blackbaud_constituent_update_constituent_action_attachment_partial_update,
  modules_blackbaud_constituent_update_constituent_action_custom_field_partial_update,
  modules_blackbaud_constituent_update_rating_partial_update,
  modules_blackbaud_constituents_constituent_appeal_list_retrieve,
  modules_blackbaud_constituents_constituent_attachment_list_retrieve,
  modules_blackbaud_constituents_constituent_details_retrieve,
  modules_blackbaud_constituents_convert_non_constituent_to_constituent_create,
  modules_blackbaud_constituents_create_address_create,
  modules_blackbaud_constituents_create_alias_collection_create,
  modules_blackbaud_constituents_create_aliases_create,
  modules_blackbaud_constituents_create_attachment_create,
  modules_blackbaud_constituents_create_constituent_create,
  modules_blackbaud_constituents_create_constituent_action_custom_field_create,
  modules_blackbaud_constituents_create_constituent_code_create,
  modules_blackbaud_constituents_create_constituent_custom_field_create,
  modules_blackbaud_constituents_create_constituent_custom_field_collection_create,
  modules_blackbaud_constituents_create_document_create,
  modules_blackbaud_constituents_create_education_create,
  modules_blackbaud_constituents_create_education_custom_field_create,
  modules_blackbaud_constituents_delete_address_details_destroy,
  modules_blackbaud_constituents_delete_aliases_destroy,
  modules_blackbaud_constituents_delete_attachment_destroy,
  modules_blackbaud_constituents_delete_constituent_code_destroy,
  modules_blackbaud_constituents_delete_education_destroy,
  modules_blackbaud_constituents_delete_education_custom_field_destroy,
  modules_blackbaud_constituents_get_address_details_retrieve,
  modules_blackbaud_constituents_get_address_list_retrieve,
  modules_blackbaud_constituents_get_address_list_in_constituents_retrieve,
  modules_blackbaud_constituents_get_address_types_retrieve,
  modules_blackbaud_constituents_get_constituent_code_details_retrieve,
  modules_blackbaud_constituents_get_constituent_code_list_retrieve,
  modules_blackbaud_constituents_get_constituent_code_list_in_constituent_retrieve,
  modules_blackbaud_constituents_get_constituent_custom_field_categories_retrieve,
  modules_blackbaud_constituents_get_constituent_custom_field_categories_details_retrieve,
  modules_blackbaud_constituents_get_constituent_custom_field_categories_values_retrieve,
  modules_blackbaud_constituents_get_constituent_custom_field_list_retrieve,
  modules_blackbaud_constituents_get_constituent_custom_field_list_in_single_constituent_retrieve,
  modules_blackbaud_constituents_get_countries_retrieve,
  modules_blackbaud_constituents_get_currencyconfiguration_retrieve,
  modules_blackbaud_constituents_get_custom_field_list_in_education_retrieve,
  modules_blackbaud_constituents_get_education_custom_field_categories_retrieve,
  modules_blackbaud_constituents_get_education_degrees_retrieve,
  modules_blackbaud_constituents_get_education_list_retrieve,
  modules_blackbaud_constituents_get_education_list_in_constituent_retrieve,
  modules_blackbaud_constituents_get_education_record_retrieve,
  modules_blackbaud_constituents_get_education_schools_retrieve,
  modules_blackbaud_constituents_get_education_statuses_retrieve,
  modules_blackbaud_constituents_get_education_subjects_retrieve,
  modules_blackbaud_constituents_get_education_types_retrieve,
  modules_blackbaud_constituents_list_retrieve,
  modules_blackbaud_constituents_update_constituent_address_partial_update,
  modules_blackbaud_event_get_event_attachment_list_retrieve,
  modules_blackbaud_event_get_event_fees_retrieve,
  modules_blackbaud_event_get_event_participant_options_retrieve,
  modules_blackbaud_event_get_event_participant_donation_retrieve,
  modules_blackbaud_event_get_event_participant_fee_payments_retrieve,
  modules_blackbaud_event_get_event_participant_fees_retrieve,
  modules_blackbaud_event_get_participant_options_retrieve,
  modules_blackbaud_event_create_event_create,
  modules_blackbaud_event_create_event_attachment_create,
  modules_blackbaud_event_create_event_attachment_upload_create,
  modules_blackbaud_event_create_event_category_create,
  modules_blackbaud_event_create_event_fee_create,
  modules_blackbaud_event_create_event_participant_create,
  modules_blackbaud_event_create_event_participant_for_attending_event_create,
  modules_blackbaud_event_create_event_participant_option_create,
  modules_blackbaud_event_create_gift_create,
  modules_blackbaud_event_create_participant_donation_create,
  modules_blackbaud_event_create_participant_fee_create,
  modules_blackbaud_event_create_participant_fee_payment_create,
  modules_blackbaud_event_create_participant_level_create,
  modules_blackbaud_event_create_participant_option_create,
  modules_blackbaud_event_delete_event_destroy,
  modules_blackbaud_event_delete_event_category_destroy,
  modules_blackbaud_event_delete_event_fee_destroy,
  modules_blackbaud_event_delete_event_participant_option_destroy,
  modules_blackbaud_event_delete_gift_destroy,
  modules_blackbaud_event_delete_participant_destroy,
  modules_blackbaud_event_delete_participant_donation_destroy,
  modules_blackbaud_event_delete_participant_fee_destroy,
  modules_blackbaud_event_delete_participant_fee_payment_destroy,
  modules_blackbaud_event_delete_participant_level_destroy,
  modules_blackbaud_event_delete_participant_option_destroy,
  modules_blackbaud_event_details_retrieve,
  modules_blackbaud_event_edit_event_partial_update,
  modules_blackbaud_event_edit_event_category_partial_update,
  modules_blackbaud_event_edit_event_fee_partial_update,
  modules_blackbaud_event_edit_event_participant_option_partial_update,
  modules_blackbaud_event_edit_participant_details_partial_update,
  modules_blackbaud_event_edit_participant_level_partial_update,
  modules_blackbaud_event_edit_participant_option_partial_update,
  modules_blackbaud_event_get_event_attachment_retrieve,
  modules_blackbaud_event_get_event_attachment_tags_retrieve,
  modules_blackbaud_event_get_event_categories_retrieve,
  modules_blackbaud_event_get_gift_details_retrieve,
  modules_blackbaud_event_get_participant_retrieve,
  modules_blackbaud_event_get_participant_levels_retrieve,
  modules_blackbaud_event_participants_list_retrieve,
  modules_blackbaud_events_list_retrieve,
  modules_booking_booking_list,
  modules_booking_booking_create,
  modules_booking_booking_details_list,
  modules_booking_booking_details_create,
  modules_booking_booking_details_retrieve,
  modules_booking_booking_details_update,
  modules_booking_booking_details_partial_update,
  modules_booking_booking_details_destroy,
  modules_booking_booking_retrieve,
  modules_booking_booking_update,
  modules_booking_booking_partial_update,
  modules_booking_booking_destroy,
  modules_booking_create_booking_list,
  modules_booking_create_booking_create,
  modules_booking_create_booking_retrieve,
  modules_booking_create_booking_update,
  modules_booking_create_booking_partial_update,
  modules_booking_create_booking_destroy,
  modules_booking_penalties_list,
  modules_booking_penalties_create,
  modules_booking_penalties_retrieve,
  modules_booking_penalties_update,
  modules_booking_penalties_partial_update,
  modules_booking_penalties_destroy,
  modules_booking_plans_list,
  modules_booking_plans_create,
  modules_booking_plans_retrieve,
  modules_booking_plans_update,
  modules_booking_plans_partial_update,
  modules_booking_plans_destroy,
  modules_booking_shopify_booking_retrieve,
  modules_booking_shopify_booking_create,
  modules_disqus_comment_list,
  modules_disqus_comment_create,
  modules_disqus_comment_like_list,
  modules_disqus_comment_like_create,
  modules_disqus_comment_like_retrieve,
  modules_disqus_comment_like_update,
  modules_disqus_comment_like_partial_update,
  modules_disqus_comment_like_destroy,
  modules_disqus_comment_retrieve,
  modules_disqus_comment_update,
  modules_disqus_comment_partial_update,
  modules_disqus_comment_destroy,
  modules_docusign_auth_token_retrieve,
  modules_docusign_envelope_create_create,
  modules_docusign_envelope_download_retrieve,
  modules_docusign_envelope_retrieve_retrieve,
  modules_docusign_envelope_retrieve_all_retrieve,
  modules_files_uploads_list,
  modules_files_uploads_create,
  modules_files_uploads_retrieve,
  modules_files_uploads_update,
  modules_files_uploads_partial_update,
  modules_files_uploads_destroy,
  modules_hubspot_service_contact_deals_list_retrieve,
  modules_hubspot_service_deals_remove_destroy,
  modules_hubspot_service_deals_single_retrieve,
  modules_hubspot_service_meeting_contacts_list_retrieve,
  modules_hubspot_service_ticket_associations_create_update,
  modules_hubspot_service_ticket_associations_list_retrieve,
  modules_hubspot_service_tickets_remove_destroy,
  modules_hubspot_service_tickets_single_retrieve,
  modules_hubspot_service_access_token_create,
  modules_hubspot_service_deals_associations_create_create,
  modules_hubspot_service_deals_create_create,
  modules_hubspot_service_deals_list_retrieve,
  modules_hubspot_service_events_create_create,
  modules_hubspot_service_tickets_create_create,
  modules_hubspot_service_tickets_list_retrieve,
  modules_hubspot_service_webhook_create,
  modules_mailchimp_audience_add_list_member_create,
  modules_mailchimp_audience_add_or_remove_member_tag_create,
  modules_mailchimp_audience_add_segment_create,
  modules_mailchimp_audience_batch_subscribe_unsubscribe_audience_create,
  modules_mailchimp_audience_delete_audience_list_destroy,
  modules_mailchimp_audience_delete_list_member_destroy,
  modules_mailchimp_audience_delete_segment_destroy,
  modules_mailchimp_audience_get_audience_list_retrieve,
  modules_mailchimp_audience_get_member_info_retrieve,
  modules_mailchimp_audience_get_segment_info_retrieve,
  modules_mailchimp_audience_list_member_info_retrieve,
  modules_mailchimp_audience_list_member_tags_retrieve,
  modules_mailchimp_audience_list_segment_retrieve,
  modules_mailchimp_audience_update_audience_list_create,
  modules_mailchimp_audience_update_list_member_create,
  modules_mailchimp_audience_update_segment_create,
  modules_mailchimp_audience_add_audience_list_create,
  modules_mailchimp_audience_get_audience_lists_retrieve,
  modules_mailchimp_campaign_reports_get_campaign_abuse_report_retrieve,
  modules_mailchimp_campaign_reports_get_campaign_abuse_reports_retrieve,
  modules_mailchimp_campaign_reports_get_campaign_click_details_retrieve,
  modules_mailchimp_campaign_reports_get_campaign_open_details_retrieve,
  modules_mailchimp_campaign_reports_get_campaign_report_retrieve,
  modules_mailchimp_campaign_reports_list_campaign_report_retrieve,
  modules_mailchimp_campaigns_cancel_campaign_create,
  modules_mailchimp_campaigns_delete_campaign_destroy,
  modules_mailchimp_campaigns_delete_campaign_folder_destroy,
  modules_mailchimp_campaigns_get_campaign_folder_retrieve,
  modules_mailchimp_campaigns_get_campaign_info_retrieve,
  modules_mailchimp_campaigns_schedule_campaign_create,
  modules_mailchimp_campaigns_send_campaign_create,
  modules_mailchimp_campaigns_unschedule_campaign_create,
  modules_mailchimp_campaigns_update_campaign_folder_create,
  modules_mailchimp_campaigns_update_campaign_settings_create,
  modules_mailchimp_campaigns_add_campaign_folder_create,
  modules_mailchimp_campaigns_add_campaigns_create,
  modules_mailchimp_campaigns_list_campaign_folder_retrieve,
  modules_mailchimp_campaigns_list_campaigns_retrieve,
  modules_mailchimp_templates_delete_template_destroy,
  modules_mailchimp_templates_delete_template_folder_destroy,
  modules_mailchimp_templates_get_template_folder_retrieve,
  modules_mailchimp_templates_get_template_info_retrieve,
  modules_mailchimp_templates_update_template_create,
  modules_mailchimp_templates_update_template_folder_create,
  modules_mailchimp_templates_add_template_create,
  modules_mailchimp_templates_add_template_folder_create,
  modules_mailchimp_templates_list_template_retrieve,
  modules_mailchimp_templates_list_template_folder_retrieve,
  modules_okta_callback_url_create,
  modules_okta_create_user_create,
  modules_okta_login_create,
  modules_okta_logout_create,
  modules_openai_audio_transcription_create,
  modules_openai_audio_translation_create,
  modules_openai_chat_completions_create,
  modules_openai_completion_create,
  modules_openai_edits_create,
  modules_openai_engines_retrieve,
  modules_openai_engines_retrieve_2,
  modules_openai_images_generations_create,
  modules_openai_models_retrieve,
  modules_openai_models_retrieve_2,
  modules_slack_service_archive_channel_create,
  modules_slack_service_channel_history_retrieve,
  modules_slack_service_get_channel_id_retrieve,
  modules_slack_service_create_channel_create,
  modules_slack_service_get_users_retrieve,
  modules_slack_service_invite_user_to_channel_create,
  modules_slack_service_send_message_create,
  modules_slack_service_upload_file_create,
  modules_zoominfo_auth_token_create,
  modules_zoominfo_data_bulk_create,
  modules_zoominfo_data_enrich_create,
  modules_zoominfo_data_search_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
};