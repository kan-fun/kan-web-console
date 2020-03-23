import * as keyService from '@/services/key';

export default {
  namespace: 'key',
  state: {
    access_key: '',
    secret_key: '',
  },
  reducers: {
    save(state: any, payload: any) {
      const { data } = payload;
      return { ...data };
    },
  },
  effects: {
    *fetch({ payload: { } }, { call, put }: { call: any, put: any }) {
      const { access_key, secret_key } = yield call(keyService.fetch);

      yield put({
        type: 'save',
        data: {
          access_key,
          secret_key
        },
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }: { dispatch: any, history: any }) {
      return history.listen(({ pathname, query }: { pathname: any, query: any }) => {
        if (pathname === '/key') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};