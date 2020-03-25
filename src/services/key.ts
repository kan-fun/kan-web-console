import request from '@/utils/request';
import Cookies from 'js-cookie'

const ENDPOINT = "http://58b5dd3da8514f30a8dfbf42bb0a740c-cn-beijing.alicloudapi.com";
const view_key_url = `${ENDPOINT}/view-key`;

export async function fetch() {
  const token = Cookies.get('token') as string;

  const headers = {
    'X-Token': token
  }

  return request(view_key_url, {
    method: 'POST',
    headers,
    credentials: 'omit',
  });
}
