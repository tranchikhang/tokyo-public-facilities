import { CONFIG } from '../../config/config.js'

export default class API {
    /**
     * error message handling
     * @return {none}
     */
    static timeout() {}

    static statusCode(xhr) {
        // show xhr.status code
    }

    /**
     * request related methods
     */

    /**
     * helper function to handle timeout
     * @param  {ms} timeout in milisecond
     * @param  {promise}
     * @return {promise}
     */
    static timeoutPromise(ms, promise) {
        return new Promise((resolve, reject) => {
            const timeoutId = setTimeout(() => {
                reject(new Error("timeout"))
            }, ms);
            promise.then(
                (res) => {
                    clearTimeout(timeoutId);
                    resolve(res);
                },
                (err) => {
                    clearTimeout(timeoutId);
                    reject(err);
                }
            );
        });
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
        return this.timeoutPromise(CONFIG.REQUEST_TIME_OUT, fetch(CONFIG.API_BASE_URL + url, requestOptions)
            .then(this.handleResponse)
            .catch((error) => {
                statusCode(error);
                stopLoad();
            })
        ).catch((error) => {
            this.timeout();
        });
    }



    /**
     * make a post request
     * @param  {url}
     * @param  {body} body in json format
     * @return {promise}
     */
    static postRequest(url, body) {
        return this.timeoutPromise(CONFIG.REQUEST_TIME_OUT, fetch(CONFIG.API_BASE_URL + url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            .then(this.handleResponse)
            .catch((error) => {
                statusCode(error);
                stopLoad();
            })
        ).catch((error) => {
            this.timeout();
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
