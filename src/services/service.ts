import axios from 'axios';

export const request = (url: string, httpMethod: string) => {
  console.log('request--->>>', url, httpMethod);
  return new Promise(async (resolve, reject) => {
    try {
      switch (httpMethod) {
        case 'GET':
          await axios
            .get(url)
            .then(response => {
              console.log('response--->>>', response);
              if (response) {
                resolve({response: response});
              } else {
                reject(response);
              }
            })
            .catch(error => {
              console.log('error--->>>', error);
              reject(error);
            });
          break;
      }
    } catch (error) {
      console.log('error--->>>', error);
      reject(error);
    }
  });
};
