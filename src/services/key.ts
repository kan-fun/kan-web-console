import request from '@/utils/request';

const ENDPOINT = "http://api.mlflow.org.cn";
const view_key_url = `${ENDPOINT}/view-key`;

export async function fetch() {
  const token = localStorage.getItem('token') as string;

  const headers = {
    'X-Token': token
  }

  return request(view_key_url, {
    method: 'POST',
    headers,
    credentials: 'omit',
  });
}
