import Debug from '~/helpers/Debug';

// let refreshPromise = null;
export default function({ $axios, redirect, store, app }) {


  $axios.defaults.baseURL = process.env.apiBaseUrl + 'api/';

  $axios.onRequest(config => {
    Debug.log('>>> axios > onRequest:', config);
    config.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    const lang = app.i18n.getLocaleCookie() ? app.i18n.getLocaleCookie() : 'ua';

    config.params = {
      ...config.params,
      lang,
    };

    if (process.server) return;

    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

  });

  $axios.onResponse((response) => {
    Debug.log('>>> axios > onResponse:', response);
  });

  $axios.onError(error => {
    Debug.log('>>> axios > onError:', error);

    if ([400, 404, 409].includes(error.response.status)) {
      return Promise.reject(error.response);
    }

    // if (error.config.url === `refresh`) {
    //   store.dispatch('auth/logout').then();
    //   redirect('/');
    //   return Promise.reject(error);
    // }
    //
    // if (!refreshPromise) {
    //
    //   refreshPromise = $axios.post('refresh', {}, {
    //     withCredentials: true,
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //   })
    //     .then((res) => {
    //       if (res?.data?.token) {
    //         const newToken = res.data.token;
    //         localStorage.setItem('token', newToken);
    //         return newToken;
    //       } else {
    //         store.dispatch('auth/logout').then();
    //         // eslint-disable-next-line prefer-promise-reject-errors
    //         return Promise.reject();
    //       }
    //     })
    //     .catch((error) => Promise.reject(error));
    // }
    //
    // return refreshPromise.then((newToken) => {
    //   refreshPromise = null;
    //   error.config.headers.Authorization = `Bearer ${newToken}`;
    //   return $axios(error.config); // origin config
    // });
  });

  $axios.onResponseError(error => {
    // console.warn('>>> $axios > onResponseError:', error);
    return Promise.resolve(error);
  });

  $axios.onRequestError(error => {
    // console.warn('>>> $axios > onRequestError:', error);
    return Promise.resolve(error);
  });
}
