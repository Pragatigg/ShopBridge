import axios from 'axios';
import { API_BASE_URL } from "../../constants";

export const callApi = (path, method, data) =>
  axios({
    url: `${API_BASE_URL}${path}`,
    method,
    data,
  });
