const { default: axios } = require('axios');
const addOAuthInterceptor =  require('axios-oauth-1.0a');
 
exports.Api = class ApiClient {
    constructor(consumer, secret) {
        this.consumer = consumer;
        this.secret = secret;

        const client = axios.create();
        
        const options = {
            algorithm: 'HMAC-SHA1',
            key: this.consumer,
            secret: this.secret,
        };

        addOAuthInterceptor.default(client, options);

        this.client = client;
    }

    async get(request){
        const response = {};
        try {
            response = await axios.get(request.url);
        }catch(err){
            console.log(err);
        }

        return response;
    }
}