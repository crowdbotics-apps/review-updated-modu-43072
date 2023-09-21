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
