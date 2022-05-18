require('dotenv').config();

const apiHandler = require('./modules/api');


const testUrl = "https://rest.immobilienscout24.de/restapi/api/search/v1.0/search/radius?realestatetype=ApartmentRent&geocoordinates=52.512303;13.431191;1";

main();

async function main(){
    const api = new apiHandler.Api(process.env.IMMOKEY, process.env.IMMOSECRET);

    const getResp = await api.get({url: testUrl});
    console.log(getResp.data)
}


