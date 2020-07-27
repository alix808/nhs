import { FETCH_DATA } from './search.types';
import axios from 'axios';

export const fetchData = () => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'subscription-key': 'fbf2d4fd63654c1ca555896dacfd2bbd',
    },
  };

  let data = {
    orderby: 'OrganisationName',
    top: 100,
    skip: 0,
    count: true,
  };

  try {
    const res = await axios.post(
      `https://api.nhs.uk/service-search/search?api-version=1`,
      data,
      config
    );

    dispatch({
      type: FETCH_DATA,
      payload: res.data.value,
    });
    console.log(res.data.value);
  } catch (err) {
    console.log(err);
  }
};
