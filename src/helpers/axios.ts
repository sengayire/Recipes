import {useState} from 'react';
import axios from 'axios';
interface RequestOptions {
  url: string;
  params: {[key: string]: string};
}
export default function ({url, params}: RequestOptions) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const options = {
    method: 'GET',
    url: url,
    params: params,
    headers: {
      'x-rapidapi-host': 'tasty.p.rapidapi.com',
      'x-rapidapi-key': '4d3780ba10msh1efaa74c3980e41p16c1b0jsn3c1c89cf0892',
    },
  } as {};
  if (!data) {
    axios
      .request(options)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (err) {
        setError(err);
      });
  }
  return {data, error};
}
