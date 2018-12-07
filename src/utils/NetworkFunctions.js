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

export async function postDataWithoutResponse(route, data, additionalHeaders = {}) {
  await axios.post(`${BASEURL}${route}`, data, {
    headers: Object.assign({ "Content-Type": "application/json" }, additionalHeaders)
  });
}

export async function putData(route, data, additionalHeaders = {}) {
  await axios.put(`${BASEURL}${route}`, data, {
    headers: Object.assign({ "Content-Type": "application/json" }, additionalHeaders)
  });
}

export async function deleteDate(route, additionalHeaders = {}) {
  await axios.delete(`${BASEURL}${route}`, {
    headers: Object.assign({ "Content-Type": "application/json" }, additionalHeaders)
  });
}
