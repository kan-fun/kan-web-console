import request from '@/utils/request';
import Cookies from 'js-cookie'

const ENDPOINT = "https://api.kan-fun.com";
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
