import axios from "axios";
import { BASEURL } from "./Constants";

export async function getData(route, additionalHeaders = {}) {
  let response = await axios.get(`${BASEURL}${route}`, {
    headers: Object.assign({ "Content-Type": "application/json" }, additionalHeaders)
  });
  return response.data;
}

export async function postDataWithResponse(route, data, additionalHeaders = {}) {
  let response = await axios.post(`${BASEURL}${route}`, data, {
    headers: Object.assign({ "Content-Type": "application/json" }, additionalHeaders)
  });
  return response.data;
}

export function postDataWithoutResponse(route, data, additionalHeaders = {}) {
  axios.post(`${BASEURL}${route}`, data, {
    headers: Object.assign({ "Content-Type": "application/json" }, additionalHeaders)
  });
}

export function putData(route, data, additionalHeaders = {}) {
  axios.put(`${BASEURL}${route}`, data, {
    headers: Object.assign({ "Content-Type": "application/json" }, additionalHeaders)
  });
}

export function deleteDate(route, additionalHeaders = {}) {
  axios.delete(`${BASEURL}${route}`, {
    headers: Object.assign({ "Content-Type": "application/json" }, additionalHeaders)
  });
}
