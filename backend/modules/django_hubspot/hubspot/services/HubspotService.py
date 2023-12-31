import requests


class HubspotBase:
    def __init__(
        self, base_url, grant_type, redirect_url, client_id, client_secret, access_token
    ):
        self.HUBSPOT_BASE_URL = base_url
        self.HUBSPOT_GRANT_TYPE = grant_type
        self.HUBSPOT_REDIRECT_URL = redirect_url
        self.HUBSPOT_CLIENT_ID = client_id
        self.HUBSPOT_CLIENT_SECRET = client_secret
        self.ACCESS_TOKEN = access_token

    def get_header(self):
        headers = {
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {self.ACCESS_TOKEN}',
        }
        return headers

    def _api_call(self, request_type, url, headers=None, payload=None, params=None, data=None):

        try:
            response = requests.request(request_type, url, headers=headers, json=payload, params=params, data=data)
            response.raise_for_status()
            if response.status_code == 204:
                return {"data": {"message": "Item deleted successfully."}, "status_code": response.status_code}
            return {"data": response.json(), "status_code": response.status_code}
        except requests.exceptions.RequestException as e:
            if e.response.status_code == 404:
                return {"data": {"message": "Resource not found"}, "status_code": e.response.status_code}
            return {"data": e.response.json(), "status_code": e.response.status_code}
        except Exception as e:
            return {"data": [], "message": str(e), "status_code": 400}


class HubspotService(HubspotBase):

    def auth_token(self, payload):
        try:
            url = f'{self.HUBSPOT_BASE_URL}/oauth/v1/token'
            data = {
                "grant_type": self.HUBSPOT_GRANT_TYPE,
                "redirect_uri": self.HUBSPOT_REDIRECT_URL,
                "client_id": self.HUBSPOT_CLIENT_ID,
                "client_secret": self.HUBSPOT_CLIENT_SECRET,
                "code": payload['code']
            }
            response = self._api_call(request_type="POST", url=url, data=data)
            return response
        except Exception as e:
            return e

    def deals_list(self, query_params):
        try:
            url = f'{self.HUBSPOT_BASE_URL}/crm/v4/objects/deals/'
            response = self._api_call(request_type="GET", url=url, headers=self.get_header(), params=query_params)
            return response
        except Exception as e:
            return e

    def create_deal(self, payload):
        try:
            url = f'{self.HUBSPOT_BASE_URL}/crm/v4/objects/deals/'
            response = self._api_call(request_type="POST", url=url, headers=self.get_header(),
                                      payload={
                                          "properties": payload
                                      })
            return response
        except Exception as e:
            return e

    def remove_deal(self, dealId):
        try:
            url = f'{self.HUBSPOT_BASE_URL}/crm/v4/objects/deals/{dealId}'
            response = self._api_call(request_type="DELETE", url=url, headers=self.get_header())
            return response
        except Exception as e:
            return e

    def single_deal(self, dealId, query_params):
        try:
            url = f'{self.HUBSPOT_BASE_URL}/crm/v4/objects/deals/{dealId}'
            response = self._api_call(request_type="GET", url=url, headers=self.get_header(), params=query_params)
            return response
        except Exception as e:
            return e

    def ticket_list(self, query_params):
        try:
            url = f'{self.HUBSPOT_BASE_URL}/crm/v4/objects/tickets/'
            response = self._api_call(request_type="GET", url=url, headers=self.get_header(), params=query_params)
            return response
        except Exception as e:
            return e

    def create_ticket(self, payload):
        try:
            url = f'{self.HUBSPOT_BASE_URL}/crm/v4/objects/tickets/'
            response = self._api_call(request_type="POST", url=url, headers=self.get_header(),
                                      payload={
                                          "properties": payload
                                      })
            return response
        except Exception as e:
            return e

    def remove_ticket(self, ticketId):
        try:
            url = f'{self.HUBSPOT_BASE_URL}/crm/v4/objects/tickets/{ticketId}'
            response = self._api_call(request_type="DELETE", url=url, headers=self.get_header())
            return response
        except Exception as e:
            return e

    def single_ticket(self, ticketId, query_params):
        try:
            url = f'{self.HUBSPOT_BASE_URL}/crm/v4/objects/tickets/{ticketId}'
            response = self._api_call(request_type="GET", url=url, headers=self.get_header(), params=query_params)
            return response
        except Exception as e:
            return e

    def create_ticket_association(self, ticketId, toObjectType, toObjectId, payload):
        try:
            url = f"{self.HUBSPOT_BASE_URL}/crm/v4/objects/tickets/{ticketId}/associations/" \
                  f"{toObjectType}/{toObjectId}/"
            response = self._api_call(request_type="PUT", url=url, headers=self.get_header(), payload=payload)
            return response
        except Exception as e:
            return e

    def ticket_association_list(self, ticketId, toObjectType, query_params):
        try:
            url = f"{self.HUBSPOT_BASE_URL}/crm/v4/objects/tickets/{ticketId}/associations/" \
                  f"{toObjectType}/"
            response = self._api_call(request_type="GET", url=url, headers=self.get_header(), params=query_params)
            return response
        except Exception as e:
            return e

    def contact_deals_association_list(self, contactId, query_params):
        try:
            url = f"{self.HUBSPOT_BASE_URL}/crm/v4/objects/contacts/{contactId}/associations/deals"
            response = self._api_call(request_type="GET", url=url, headers=self.get_header(), params=query_params)
            return response
        except Exception as e:
            return e

    def meeting_contact_association_list(self, meetingId, query_params):
        try:
            url = f"{self.HUBSPOT_BASE_URL}/crm/v4/objects/meetings/{meetingId}/associations/contacts/"
            response = self._api_call(request_type="GET", url=url, headers=self.get_header(), params=query_params)
            return response
        except Exception as e:
            return e

    def create_event(self, payload):
        try:
            url = f'{self.HUBSPOT_BASE_URL}/marketing/v3/marketing-events/events/'
            response = self._api_call(request_type="POST", url=url, headers=self.get_header(), payload=payload)
            return response
        except Exception as e:
            return e

    def webhook(self, data):
        try:
            return data
        except Exception as e:
            return e

    def get_contact_by_email(self, email):
        try:
            url = f"{self.HUBSPOT_BASE_URL}/crm/v3/objects/contacts/search/"
            data = {
                "filterGroups": [
                    {
                        "filters": [
                            {
                                "value": email,
                                "propertyName": "email",
                                "operator": "EQ"
                            }
                        ]
                    }
                ]
            }
            response = self._api_call(request_type="POST", url=url, headers=self.get_header(), payload=data)
            return response
        except Exception as e:
            return e

    def create_contact(self, email):
        try:
            url = f"{self.HUBSPOT_BASE_URL}/crm/v3/objects/contacts/"
            payload = {
                "properties": {
                    "email": email,
                }
            }
            response = self._api_call(request_type="POST", url=url, headers=self.get_header(),
                                      payload=payload)
            return response
        except Exception as e:
            return e

    def get_or_create_contact_by_email(self, email):
        try:
            contact = self.get_contact_by_email(email)
            status = contact.get('status_code')
            if not status or status == 404:
                contact = self.create_contact(email)
                return contact.get('data')
            else:
                return contact.get('data').get('results')[0]
        except Exception as e:
            return e

    def create_deal_contact_association(self, payload):
        try:
            for email in payload['emails']:
                contact = self.get_or_create_contact_by_email(email)
                if contact:
                    params = {
                        "dealId": payload['dealId'],
                        "toObjectType": "contacts",
                        "toObjectId": contact.get('id')
                    }
                    self.create_deal_association(params)
            return True
        except Exception as e:
            return False

    def create_deal_association(self, params):
        try:
            url = f"{self.HUBSPOT_BASE_URL}/crm/v4/objects/deals/{params['dealId']}/associations/" \
                  f"{params['toObjectType']}/{params['toObjectId']}/"
            response = self._api_call(
                request_type="PUT", url=url, headers=self.get_header(), payload=[
                    {
                        "associationCategory": "USER_DEFINED",
                        "associationTypeId": 1
                    }
                ])
            return response
        except Exception as e:
            return e
