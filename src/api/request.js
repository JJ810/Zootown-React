import axios from "axios";
import { _store } from "../index";
import { API_URL } from "../config";

const debugData = data => {
    // _store.dispatch(fetchingServer(false));
    return Promise.resolve(data);
}

const debugError = er => {
    // _store.dispatch(fetchingServer(false));
    if (er.response && er.response.statusText === 'Unauthorized') window.location.replace("/login");
    return Promise.reject(er);
}

const request = () => {
    const token = _store.getState().session.userAuth.token;


    const axiosApi = axios.create({
        baseURL: API_URL,
        headers: {
            Authorization: `Token=${token}`
        }
    });

    // _store.dispatch(fetchingServer(true));

    return {
        get(url, options = {}) {
            return axiosApi.get(url).then(debugData).catch(debugError)
        },
        post(url, data, options = {}) {
            return axiosApi.post(url, data).then(debugData).catch(debugError)
        },
        put(url, data, options = {}) {
            return axiosApi.put(url, data).then(debugData).catch(debugError)
        },
        delete(url, options = {}) {
            return axiosApi.delete(url).then(debugData).catch(debugError)
        },
    }
}


export default request;