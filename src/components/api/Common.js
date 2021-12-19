const API_URL = "https://api.data.metro.tokyo.lg.jp/v1/";
const STATUS_SUCCESS = 200;

class API {

    /**
     * error message handling
     * @return {none}
     */
    static timeout() {}

    static statusCode(xhr) {
        // show xhr.status code
    }

    /**
     * make a get request
     * @param  {url}
     * @return {promise}
     */
    static getRequest(url) {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return fetch(API_URL + url, requestOptions)
            .then(this.handleResponse)
            .catch((error) => {
                statusCode(error);
            });
    }

    /**
     * make a post request
     * @param  {url}
     * @param  {body} body in json format
     * @return {promise}
     */
    postRequest(url, body) {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        };
        return fetch(url, requestOptions)
            .then(this.handleResponse)
            .catch((error) => {
                this.statusCode(error);
            });
    }

    // helper functions
    static handleResponse(response) {
        return response.text().then(text => {
            const data = text && JSON.parse(text);
            if (!response.ok) {
                return Promise.reject(response);
            }

            return data;
        });
    }
}
module.exports.API = API