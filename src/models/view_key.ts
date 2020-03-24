import * as keyService from '@/services/key';

export default {
  namespace: 'key',
  state: {
    AccessKey: '',
    SecretKey: '',
  },
  reducers: {
    save(state: any, payload: any) {
      const { data } = payload;
      return { ...data };
    },
  },
  effects: {
    *fetch({ payload: { } }, { call, put }: { call: any, put: any }) {
      const { AccessKey, SecretKey } = yield call(keyService.fetch);

      yield put({
        type: 'save',
        data: {
          AccessKey,
          SecretKey
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