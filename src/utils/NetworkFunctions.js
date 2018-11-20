import axios from "axios";
import { BASEURL } from "./Constants";

export function getData(route, additionalHeaders) {
  return axios
    .get(`${BASEURL}${route}`, {
      headers: Object.assign(
        { "Content-Type": "application/json" },
        additionalHeaders
      )
    })
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
}

export function postDataWithResponse(route, data, additionalHeaders) {
  return axios.post(`${BASEURL}${route}`, data, {
    headers: Object.assign(
      { "Content-Type": "application/json" },
      additionalHeaders
    )
  });
}

export function postDataWithoutResponse(route, data, additionalHeaders) {
  axios
    .post(`${BASEURL}${route}`, data, {
      headers: Object.assign(
        { "Content-Type": "application/json" },
        additionalHeaders
      )
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
}

export function putData(route, data, additionalHeaders) {
  axios
    .put(`${BASEURL}${route}`, data, {
      headers: Object.assign(
        { "Content-Type": "application/json" },
        additionalHeaders
      )
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
}

export function deleteDate(route, additionalHeaders) {
  axios
    .delete(`${BASEURL}${route}`, {
      headers: Object.assign(
        { "Content-Type": "application/json" },
        additionalHeaders
      )
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
}
