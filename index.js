console.log('Server running!')

const express = require('express');
const axios = require('axios');

const app = express();
const server = app.listen(1111, () => console.log('listening @ 1111 --> http://localhost:1111'));

app.use(express.static('public'));
app.use(express.json({
    limit: '2mb'
}));

app.post('/api', async(request, response) => {

    //REQUEST
    console.log("message incoming...");
    const data = request.body;

    //PROCESS
    const data_response = await getData(data);
    console.log("data_response:", data_response);

    // //RESPONSE
    response.json(JSON.stringify(data_response));
});

async function getData(data) {
    const options = {
        method: 'GET',
        withCredentials: true,
        headers: {
            "X-API-Key": data.x_api_key,
            "Content-Type": "application/json",
        }
    };

    const url = `https://deep-index.moralis.io/api/v2/nft/${data.contract_address}/${data.token_id}?chain=eth&format=decimal`;

    const response = await axios.get(url, options);
    const metadata = await JSON.parse(response.data.metadata);

    return (metadata);
};