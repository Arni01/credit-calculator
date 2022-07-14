export class REST {
  private _baseUrl: string | undefined;
  constructor(baseUrl: string | undefined) {
    this._baseUrl = baseUrl;
  }

  get(url: string, headers = {}) {
    return fetch(
      this._baseUrl + url,

      {
        method: 'GET',
        headers: {
          ...headers,
        },
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .catch((e) => {
        console.error(e);
        throw e.status ? e : { status: 500 };
      });
  }
}
