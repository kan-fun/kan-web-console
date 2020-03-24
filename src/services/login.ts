import request from '@/utils/request';
import { stringify } from 'querystring';

export interface LoginParamsType {
  email: string;
  password: string;
}

const ENDPOINT = "http://api.mlflow.org.cn";
const login_url = `${ENDPOINT}/login`;

// const login_url = `/api/login`;

export async function fakeAccountLogin(params: LoginParamsType) {

  return request(login_url, {
    method: 'POST',
    data: stringify(params as any),
    credentials: 'omit',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    getResponse: true
  });
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
