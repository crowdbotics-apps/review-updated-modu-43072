import axios from "axios"
const reviewupdatedmoduAPI = axios.create({
  baseURL: "https://review-updated-modu-43072.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return reviewupdatedmoduAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return reviewupdatedmoduAPI.post(`/api/v1/signup/`, payload.data)
}
function modules_appointment_service_appointment_remove_destroy(payload) {
  return reviewupdatedmoduAPI.delete(
    `/modules/appointment/service/${payload.id}/appointment/remove/`
  )
}
function modules_appointment_service_appointment_single_retrieve(payload) {
  return reviewupdatedmoduAPI.get(
    `/modules/appointment/service/${payload.id}/appointment/single/`
  )
}
function modules_appointment_service_appointment_create_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/appointment/service/appointment/create/`,
    payload.data
  )
}
function modules_appointment_service_appointment_list_retrieve(payload) {
  return reviewupdatedmoduAPI.get(
    `/modules/appointment/service/appointment/list/`
  )
}
function modules_appointment_service_appointment_sync_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/appointment/service/appointment/sync/`,
    payload.data
  )
}
function modules_appointment_service_appointment_synced_list_retrieve(payload) {
  return reviewupdatedmoduAPI.get(
    `/modules/appointment/service/appointment/synced/list/`
  )
}
function modules_booking_booking_list(payload) {
  return reviewupdatedmoduAPI.get(`/modules/booking/booking/`, {
    params: { page: payload.page, page_size: payload.page_size }
  })
}
function modules_booking_booking_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/booking/booking/`, payload.data)
}
function modules_booking_booking_details_list(payload) {
  return reviewupdatedmoduAPI.get(`/modules/booking/booking-details/`, {
    params: { page: payload.page, page_size: payload.page_size }
  })
}
function modules_booking_booking_details_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/booking/booking-details/`,
    payload.data
  )
}
function modules_booking_booking_details_retrieve(payload) {
  return reviewupdatedmoduAPI.get(
    `/modules/booking/booking-details/${payload.id}/`
  )
}
function modules_booking_booking_details_update(payload) {
  return reviewupdatedmoduAPI.put(
    `/modules/booking/booking-details/${payload.id}/`,
    payload.data
  )
}
function modules_booking_booking_details_partial_update(payload) {
  return reviewupdatedmoduAPI.patch(
    `/modules/booking/booking-details/${payload.id}/`,
    payload.data
  )
}
function modules_booking_booking_details_destroy(payload) {
  return reviewupdatedmoduAPI.delete(
    `/modules/booking/booking-details/${payload.id}/`
  )
}
function modules_booking_booking_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/booking/booking/${payload.id}/`)
}
function modules_booking_booking_update(payload) {
  return reviewupdatedmoduAPI.put(
    `/modules/booking/booking/${payload.id}/`,
    payload.data
  )
}
function modules_booking_booking_partial_update(payload) {
  return reviewupdatedmoduAPI.patch(
    `/modules/booking/booking/${payload.id}/`,
    payload.data
  )
}
function modules_booking_booking_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/booking/booking/${payload.id}/`)
}
function modules_booking_create_booking_list(payload) {
  return reviewupdatedmoduAPI.get(`/modules/booking/create-booking/`, {
    params: { page: payload.page, page_size: payload.page_size }
  })
}
function modules_booking_create_booking_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/booking/create-booking/`,
    payload.data
  )
}
function modules_booking_create_booking_retrieve(payload) {
  return reviewupdatedmoduAPI.get(
    `/modules/booking/create-booking/${payload.id}/`
  )
}
function modules_booking_create_booking_update(payload) {
  return reviewupdatedmoduAPI.put(
    `/modules/booking/create-booking/${payload.id}/`,
    payload.data
  )
}
function modules_booking_create_booking_partial_update(payload) {
  return reviewupdatedmoduAPI.patch(
    `/modules/booking/create-booking/${payload.id}/`,
    payload.data
  )
}
function modules_booking_create_booking_destroy(payload) {
  return reviewupdatedmoduAPI.delete(
    `/modules/booking/create-booking/${payload.id}/`
  )
}
function modules_booking_penalties_list(payload) {
  return reviewupdatedmoduAPI.get(`/modules/booking/penalties/`, {
    params: { page: payload.page, page_size: payload.page_size }
  })
}
function modules_booking_penalties_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/booking/penalties/`, payload.data)
}
function modules_booking_penalties_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/booking/penalties/${payload.id}/`)
}
function modules_booking_penalties_update(payload) {
  return reviewupdatedmoduAPI.put(
    `/modules/booking/penalties/${payload.id}/`,
    payload.data
  )
}
function modules_booking_penalties_partial_update(payload) {
  return reviewupdatedmoduAPI.patch(
    `/modules/booking/penalties/${payload.id}/`,
    payload.data
  )
}
function modules_booking_penalties_destroy(payload) {
  return reviewupdatedmoduAPI.delete(
    `/modules/booking/penalties/${payload.id}/`
  )
}
function modules_booking_plans_list(payload) {
  return reviewupdatedmoduAPI.get(`/modules/booking/plans/`, {
    params: { page: payload.page, page_size: payload.page_size }
  })
}
function modules_booking_plans_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/booking/plans/`, payload.data)
}
function modules_booking_plans_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/booking/plans/${payload.id}/`)
}
function modules_booking_plans_update(payload) {
  return reviewupdatedmoduAPI.put(
    `/modules/booking/plans/${payload.id}/`,
    payload.data
  )
}
function modules_booking_plans_partial_update(payload) {
  return reviewupdatedmoduAPI.patch(
    `/modules/booking/plans/${payload.id}/`,
    payload.data
  )
}
function modules_booking_plans_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/booking/plans/${payload.id}/`)
}
function modules_booking_shopify_booking_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/booking/shopify/booking/`)
}
function modules_booking_shopify_booking_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/booking/shopify/booking/`)
}
function modules_disqus_comment_list(payload) {
  return reviewupdatedmoduAPI.get(`/modules/disqus/comment/`, {
    params: { page: payload.page, page_size: payload.page_size }
  })
}
function modules_disqus_comment_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/disqus/comment/`, payload.data)
}
function modules_disqus_comment_like_list(payload) {
  return reviewupdatedmoduAPI.get(`/modules/disqus/comment-like/`, {
    params: { page: payload.page, page_size: payload.page_size }
  })
}
function modules_disqus_comment_like_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/disqus/comment-like/`,
    payload.data
  )
}
function modules_disqus_comment_like_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/disqus/comment-like/${payload.id}/`)
}
function modules_disqus_comment_like_update(payload) {
  return reviewupdatedmoduAPI.put(
    `/modules/disqus/comment-like/${payload.id}/`,
    payload.data
  )
}
function modules_disqus_comment_like_partial_update(payload) {
  return reviewupdatedmoduAPI.patch(
    `/modules/disqus/comment-like/${payload.id}/`,
    payload.data
  )
}
function modules_disqus_comment_like_destroy(payload) {
  return reviewupdatedmoduAPI.delete(
    `/modules/disqus/comment-like/${payload.id}/`
  )
}
function modules_disqus_comment_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/disqus/comment/${payload.id}/`)
}
function modules_disqus_comment_update(payload) {
  return reviewupdatedmoduAPI.put(
    `/modules/disqus/comment/${payload.id}/`,
    payload.data
  )
}
function modules_disqus_comment_partial_update(payload) {
  return reviewupdatedmoduAPI.patch(
    `/modules/disqus/comment/${payload.id}/`,
    payload.data
  )
}
function modules_disqus_comment_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/disqus/comment/${payload.id}/`)
}
function modules_docusign_auth_token_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/docusign/auth/token/`)
}
function modules_docusign_envelope_create_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/docusign/envelope/create/`)
}
function modules_docusign_envelope_download_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/docusign/envelope/download/`)
}
function modules_docusign_envelope_retrieve_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/docusign/envelope/retrieve/`)
}
function modules_docusign_envelope_retrieve_all_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/docusign/envelope/retrieve-all/`)
}
function modules_files_uploads_list(payload) {
  return reviewupdatedmoduAPI.get(`/modules/files/uploads/`)
}
function modules_files_uploads_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/files/uploads/`, payload.data)
}
function modules_files_uploads_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/files/uploads/${payload.id}/`)
}
function modules_files_uploads_update(payload) {
  return reviewupdatedmoduAPI.put(
    `/modules/files/uploads/${payload.id}/`,
    payload.data
  )
}
function modules_files_uploads_partial_update(payload) {
  return reviewupdatedmoduAPI.patch(
    `/modules/files/uploads/${payload.id}/`,
    payload.data
  )
}
function modules_files_uploads_destroy(payload) {
  return reviewupdatedmoduAPI.delete(`/modules/files/uploads/${payload.id}/`)
}
function modules_hubspot_service_contact_deals_list_retrieve(payload) {
  return reviewupdatedmoduAPI.get(
    `/modules/hubspot/service/${payload.id}/contact/deals/list/`
  )
}
function modules_hubspot_service_deals_remove_destroy(payload) {
  return reviewupdatedmoduAPI.delete(
    `/modules/hubspot/service/${payload.id}/deals/remove/`
  )
}
function modules_hubspot_service_deals_single_retrieve(payload) {
  return reviewupdatedmoduAPI.get(
    `/modules/hubspot/service/${payload.id}/deals/single/`
  )
}
function modules_hubspot_service_meeting_contacts_list_retrieve(payload) {
  return reviewupdatedmoduAPI.get(
    `/modules/hubspot/service/${payload.id}/meeting/contacts/list/`
  )
}
function modules_hubspot_service_ticket_associations_create_update(payload) {
  return reviewupdatedmoduAPI.put(
    `/modules/hubspot/service/${payload.id}/ticket/associations/${payload.toObjectType}/${payload.toObjectId}/create/`,
    payload.data
  )
}
function modules_hubspot_service_ticket_associations_list_retrieve(payload) {
  return reviewupdatedmoduAPI.get(
    `/modules/hubspot/service/${payload.id}/ticket/associations/${payload.toObjectType}/list/`
  )
}
function modules_hubspot_service_tickets_remove_destroy(payload) {
  return reviewupdatedmoduAPI.delete(
    `/modules/hubspot/service/${payload.id}/tickets/remove/`
  )
}
function modules_hubspot_service_tickets_single_retrieve(payload) {
  return reviewupdatedmoduAPI.get(
    `/modules/hubspot/service/${payload.id}/tickets/single/`
  )
}
function modules_hubspot_service_access_token_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/hubspot/service/access/token/`,
    payload.data
  )
}
function modules_hubspot_service_deals_associations_create_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/hubspot/service/deals/associations/create/`,
    payload.data
  )
}
function modules_hubspot_service_deals_create_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/hubspot/service/deals/create/`,
    payload.data
  )
}
function modules_hubspot_service_deals_list_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/hubspot/service/deals/list/`)
}
function modules_hubspot_service_events_create_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/hubspot/service/events/create/`,
    payload.data
  )
}
function modules_hubspot_service_tickets_create_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/hubspot/service/tickets/create/`,
    payload.data
  )
}
function modules_hubspot_service_tickets_list_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/hubspot/service/tickets/list/`)
}
function modules_hubspot_service_webhook_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/hubspot/service/webhook/`)
}
function modules_mailchimp_audience_add_list_member_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/mailchimp/audience/${payload.id}/add-list-member/`,
    payload.data
  )
}
function modules_mailchimp_audience_add_or_remove_member_tag_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/mailchimp/audience/${payload.id}/add-or-remove-member-tag/${payload.subscriber_hash}/`,
    payload.data
  )
}
function modules_mailchimp_audience_add_segment_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/mailchimp/audience/${payload.id}/add-segment/`,
    payload.data
  )
}
function modules_mailchimp_audience_batch_subscribe_unsubscribe_audience_create(
  payload
) {
  return reviewupdatedmoduAPI.post(
    `/modules/mailchimp/audience/${payload.id}/batch-subscribe-unsubscribe-audience/`,
    payload.data
  )
}
function modules_mailchimp_audience_delete_audience_list_destroy(payload) {
  return reviewupdatedmoduAPI.delete(
    `/modules/mailchimp/audience/${payload.id}/delete-audience-list/`
  )
}
function modules_mailchimp_audience_delete_list_member_destroy(payload) {
  return reviewupdatedmoduAPI.delete(
    `/modules/mailchimp/audience/${payload.id}/delete-list-member/${payload.subscriber_hash}/`
  )
}
function modules_mailchimp_audience_delete_segment_destroy(payload) {
  return reviewupdatedmoduAPI.delete(
    `/modules/mailchimp/audience/${payload.id}/delete-segment/${payload.segment_id}/`
  )
}
function modules_mailchimp_audience_get_audience_list_retrieve(payload) {
  return reviewupdatedmoduAPI.get(
    `/modules/mailchimp/audience/${payload.id}/get-audience-list/`
  )
}
function modules_mailchimp_audience_get_member_info_retrieve(payload) {
  return reviewupdatedmoduAPI.get(
    `/modules/mailchimp/audience/${payload.id}/get-member-info/${payload.subscriber_hash}/`
  )
}
function modules_mailchimp_audience_get_segment_info_retrieve(payload) {
  return reviewupdatedmoduAPI.get(
    `/modules/mailchimp/audience/${payload.id}/get-segment-info/${payload.segment_id}/`
  )
}
function modules_mailchimp_audience_list_member_info_retrieve(payload) {
  return reviewupdatedmoduAPI.get(
    `/modules/mailchimp/audience/${payload.id}/list-member-info/`
  )
}
function modules_mailchimp_audience_list_member_tags_retrieve(payload) {
  return reviewupdatedmoduAPI.get(
    `/modules/mailchimp/audience/${payload.id}/list-member-tags/${payload.subscriber_hash}/`
  )
}
function modules_mailchimp_audience_list_segment_retrieve(payload) {
  return reviewupdatedmoduAPI.get(
    `/modules/mailchimp/audience/${payload.id}/list-segment/`
  )
}
function modules_mailchimp_audience_update_audience_list_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/mailchimp/audience/${payload.id}/update-audience-list/`,
    payload.data
  )
}
function modules_mailchimp_audience_update_list_member_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/mailchimp/audience/${payload.id}/update-list-member/${payload.subscriber_hash}/`,
    payload.data
  )
}
function modules_mailchimp_audience_update_segment_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/mailchimp/audience/${payload.id}/update-segment/${payload.segment_id}/`,
    payload.data
  )
}
function modules_mailchimp_audience_add_audience_list_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/mailchimp/audience/add-audience-list/`,
    payload.data
  )
}
function modules_mailchimp_audience_get_audience_lists_retrieve(payload) {
  return reviewupdatedmoduAPI.get(
    `/modules/mailchimp/audience/get-audience-lists/`
  )
}
function modules_mailchimp_campaign_reports_get_campaign_abuse_report_retrieve(
  payload
) {
  return reviewupdatedmoduAPI.get(
    `/modules/mailchimp/campaign-reports/${payload.id}/get-campaign-abuse-report/${payload.report_id}/`
  )
}
function modules_mailchimp_campaign_reports_get_campaign_abuse_reports_retrieve(
  payload
) {
  return reviewupdatedmoduAPI.get(
    `/modules/mailchimp/campaign-reports/${payload.id}/get-campaign-abuse-reports/`
  )
}
function modules_mailchimp_campaign_reports_get_campaign_click_details_retrieve(
  payload
) {
  return reviewupdatedmoduAPI.get(
    `/modules/mailchimp/campaign-reports/${payload.id}/get-campaign-click-details/`
  )
}
function modules_mailchimp_campaign_reports_get_campaign_open_details_retrieve(
  payload
) {
  return reviewupdatedmoduAPI.get(
    `/modules/mailchimp/campaign-reports/${payload.id}/get-campaign-open-details/`
  )
}
function modules_mailchimp_campaign_reports_get_campaign_report_retrieve(
  payload
) {
  return reviewupdatedmoduAPI.get(
    `/modules/mailchimp/campaign-reports/${payload.id}/get-campaign-report/`
  )
}
function modules_mailchimp_campaign_reports_list_campaign_report_retrieve(
  payload
) {
  return reviewupdatedmoduAPI.get(
    `/modules/mailchimp/campaign-reports/list-campaign-report/`
  )
}
function modules_mailchimp_campaigns_cancel_campaign_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/mailchimp/campaigns/${payload.id}/cancel-campaign/`
  )
}
function modules_mailchimp_campaigns_delete_campaign_destroy(payload) {
  return reviewupdatedmoduAPI.delete(
    `/modules/mailchimp/campaigns/${payload.id}/delete-campaign/`
  )
}
function modules_mailchimp_campaigns_delete_campaign_folder_destroy(payload) {
  return reviewupdatedmoduAPI.delete(
    `/modules/mailchimp/campaigns/${payload.id}/delete_campaign_folder/`
  )
}
function modules_mailchimp_campaigns_get_campaign_folder_retrieve(payload) {
  return reviewupdatedmoduAPI.get(
    `/modules/mailchimp/campaigns/${payload.id}/get-campaign-folder/`
  )
}
function modules_mailchimp_campaigns_get_campaign_info_retrieve(payload) {
  return reviewupdatedmoduAPI.get(
    `/modules/mailchimp/campaigns/${payload.id}/get-campaign-info/`
  )
}
function modules_mailchimp_campaigns_schedule_campaign_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/mailchimp/campaigns/${payload.id}/schedule-campaign/`,
    payload.data
  )
}
function modules_mailchimp_campaigns_send_campaign_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/mailchimp/campaigns/${payload.id}/send-campaign/`
  )
}
function modules_mailchimp_campaigns_unschedule_campaign_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/mailchimp/campaigns/${payload.id}/unschedule-campaign/`
  )
}
function modules_mailchimp_campaigns_update_campaign_folder_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/mailchimp/campaigns/${payload.id}/update-campaign-folder/`,
    payload.data
  )
}
function modules_mailchimp_campaigns_update_campaign_settings_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/mailchimp/campaigns/${payload.id}/update-campaign-settings/`,
    payload.data
  )
}
function modules_mailchimp_campaigns_add_campaign_folder_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/mailchimp/campaigns/add-campaign-folder/`,
    payload.data
  )
}
function modules_mailchimp_campaigns_add_campaigns_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/mailchimp/campaigns/add-campaigns/`,
    payload.data
  )
}
function modules_mailchimp_campaigns_list_campaign_folder_retrieve(payload) {
  return reviewupdatedmoduAPI.get(
    `/modules/mailchimp/campaigns/list-campaign-folder/`
  )
}
function modules_mailchimp_campaigns_list_campaigns_retrieve(payload) {
  return reviewupdatedmoduAPI.get(
    `/modules/mailchimp/campaigns/list-campaigns/`
  )
}
function modules_mailchimp_templates_delete_template_destroy(payload) {
  return reviewupdatedmoduAPI.delete(
    `/modules/mailchimp/templates/${payload.id}/delete-template/`
  )
}
function modules_mailchimp_templates_delete_template_folder_destroy(payload) {
  return reviewupdatedmoduAPI.delete(
    `/modules/mailchimp/templates/${payload.id}/delete-template-folder/`
  )
}
function modules_mailchimp_templates_get_template_folder_retrieve(payload) {
  return reviewupdatedmoduAPI.get(
    `/modules/mailchimp/templates/${payload.id}/get-template-folder/`
  )
}
function modules_mailchimp_templates_get_template_info_retrieve(payload) {
  return reviewupdatedmoduAPI.get(
    `/modules/mailchimp/templates/${payload.id}/get-template-info/`
  )
}
function modules_mailchimp_templates_update_template_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/mailchimp/templates/${payload.id}/update-template/`,
    payload.data
  )
}
function modules_mailchimp_templates_update_template_folder_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/mailchimp/templates/${payload.id}/update-template-folder/`,
    payload.data
  )
}
function modules_mailchimp_templates_add_template_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/mailchimp/templates/add-template/`,
    payload.data
  )
}
function modules_mailchimp_templates_add_template_folder_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/mailchimp/templates/add-template-folder/`,
    payload.data
  )
}
function modules_mailchimp_templates_list_template_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/mailchimp/templates/list-template/`)
}
function modules_mailchimp_templates_list_template_folder_retrieve(payload) {
  return reviewupdatedmoduAPI.get(
    `/modules/mailchimp/templates/list-template-folder/`
  )
}
function modules_okta_callback_url_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/okta/callback_url/`, payload.data)
}
function modules_okta_create_user_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/okta/create_user/`, payload.data)
}
function modules_okta_login_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/okta/login/`, payload.data)
}
function modules_okta_logout_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/okta/logout/`, payload.data)
}
function modules_openai_audio_transcription_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/openai/audio/transcription/`,
    payload.data
  )
}
function modules_openai_audio_translation_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/openai/audio/translation/`,
    payload.data
  )
}
function modules_openai_chat_completions_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/openai/chat/completions/`,
    payload.data
  )
}
function modules_openai_completion_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/openai/completion/`, payload.data)
}
function modules_openai_edits_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/openai/edits/`, payload.data)
}
function modules_openai_engines_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/openai/engines/`)
}
function modules_openai_engines_retrieve_2(payload) {
  return reviewupdatedmoduAPI.get(
    `/modules/openai/engines/${payload.engine_id}/`
  )
}
function modules_openai_images_generations_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/openai/images/generations/`,
    payload.data
  )
}
function modules_openai_models_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/openai/models/`)
}
function modules_openai_models_retrieve_2(payload) {
  return reviewupdatedmoduAPI.get(`/modules/openai/models/${payload.model_id}/`)
}
function modules_slack_service_archive_channel_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/slack/service/${payload.id}/archive_channel/`,
    payload.data
  )
}
function modules_slack_service_channel_history_retrieve(payload) {
  return reviewupdatedmoduAPI.get(
    `/modules/slack/service/${payload.id}/channel_history/`
  )
}
function modules_slack_service_get_channel_id_retrieve(payload) {
  return reviewupdatedmoduAPI.get(
    `/modules/slack/service/${payload.id}/get-channel-id/`
  )
}
function modules_slack_service_create_channel_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/slack/service/create-channel/`,
    payload.data
  )
}
function modules_slack_service_get_users_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/modules/slack/service/get_users/`)
}
function modules_slack_service_invite_user_to_channel_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/slack/service/invite-user-to-channel/`,
    payload.data
  )
}
function modules_slack_service_send_message_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/slack/service/send-message/`,
    payload.data
  )
}
function modules_slack_service_upload_file_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/modules/slack/service/upload-file/`,
    payload.data
  )
}
function modules_zoominfo_auth_token_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/zoominfo/auth/token/`)
}
function modules_zoominfo_data_bulk_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/zoominfo/data/bulk/`)
}
function modules_zoominfo_data_enrich_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/zoominfo/data/enrich/`)
}
function modules_zoominfo_data_search_create(payload) {
  return reviewupdatedmoduAPI.post(`/modules/zoominfo/data/search/`)
}
function rest_auth_login_create(payload) {
  return reviewupdatedmoduAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return reviewupdatedmoduAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return reviewupdatedmoduAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return reviewupdatedmoduAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload.data
  )
}
function rest_auth_registration_create(payload) {
  return reviewupdatedmoduAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return reviewupdatedmoduAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
function rest_auth_user_retrieve(payload) {
  return reviewupdatedmoduAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return reviewupdatedmoduAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return reviewupdatedmoduAPI.patch(`/rest-auth/user/`, payload.data)
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
}
