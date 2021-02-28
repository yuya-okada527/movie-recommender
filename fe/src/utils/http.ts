type QueriesType = {
  [key: string]: string | boolean | number | string[] | boolean[] | number[];
};

async function callGetApi<T>(url: string, queries: QueriesType): Promise<T> {
  // クエリ文字列を作成
  const queryStr = makeQuery(queries);

  // URLを組み立て
  const requestUrl = url + "?" + queryStr;

  // リクエスト
  return await fetch(requestUrl, {
    method: "GET",
  })
    .then(async (response) => {
      return await response.json();
    })
    .catch((err) => {
      // TODO ログ
      console.log(err);
      return;
    });
}

const makeQuery = (queries: QueriesType): string => {
  const result = [];
  for (const entry of Object.entries(queries)) {
    const key = entry[0];
    if (Array.isArray(entry[1])) {
      for (const value of entry[1]) {
        result.push(key + "=" + value);
      }
    } else {
      result.push(key + "=" + entry[1]);
    }
  }

  return result.join("&");
};

export { callGetApi };
