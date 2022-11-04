## TD Moralis-getNFT ⚗️

`ES`
Componente custom de [TouchDesigner](https://derivative.ca/) potenciado por [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) y [Moralis](https://moralis.io/) para obtener toda la metadata de un NFT en la blockchain de [Ethereum](https://ethereum.org/es/).
Hay que proveer un `contract_address` y un `token_id` y el componente devuelve toda la metadata en formato [JSON](https://www.json.org/json-es.html).
El fin de este componente es poder tener esa información en TouchDesigner para visualizarla como uno quiera. Este componente usa [Moralis](https://moralis.io/) como node-provider ya que es muy engorroso hacer todo el proceso de conectarse a un nodo custom. De esta manera, en pocos pasos uno ya puede estar escuchando eventos de la red de Ethereum.
El componente funciona enviando a una aplicación web toda la información necesaria (api keys de Moralis, dirección del contrato y token ID) la cual se encarga de hacer el request. 

### Generación de las API Keys de Moralis 🗝
Es necesario generar las llaves propias para conectarse a la API de Moralis.

1. Log-in en [Moralis](https://moralis.io/).

2. Ir a [Web3 APIs](https://admin.moralis.io/web3apis) donde podemos gestionar nuestra API key.

### Rápida instalación con Node.js y npm 🚩 

Para usar este respositorio es necesario descargar [Node.js](https://nodejs.org/es/).

1. Descargar o clonar el repositorio en tu computadora.

2. Instalar las dependencias en la carpeta de destino ejecutando en la consola `npm i` o manualmente `npm i express axios`.

3. `npm start` para inicilizar la app.

### Comentarios y comandos 🚏 

Una vez abierto el servidor, arrastrar el componente `TDMoralisGetNFT.tox` al proyecto de TouchDesigner que tengas abierto trabajando.
Es necesario completar los siguientes parámetros:

- `X-API-Key`: completar con la API Key de [Moralis](https://admin.moralis.io/web3apis).

- `contract_address`: completar con la dirección del contrato al cual pertenece el NFT que querés la data.

- `token_id`: completar con el token id NFT que querés la data.

> 💡 Nota: el `contract_address` y el `token_id` se suelen encontrar en [Etherscan](https://etherscan.io/) pero tambien se pueden encontrar en las plataformas de NFTs o en sus URL, en algunos casos.

Para inicializar en modo *test* (la app se reiniciará cada vez que se haga un cambio en ella) ejecutar en la consola:

```
npm test
````
> 💡 Nota: para ello es necesario instalar previamente `npm nodemon -g`.


👋 *Si lo usas, si tenés algún tipo de feedback o problema, hacemelo llegar por favor :)*

---

`EN`
Custom component for [TouchDesigner](https://derivative.ca/) powered by [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) and [Moralis](https://moralis.io/) to get NFT's metadata on the [Ethereum](https://ethereum.org/es/) blockchain.
A `contract_address` and a `token_id` must be provided to the component to return all the metadata in [JSON](https://www.json.org/json-es.html) format.
The purpose of this component is to be able to have the data into TouchDesigner to visualize it as you want. This component uses [Moralis](https://moralis.io/) as node-provider because it's very cumbersome to do the whole process of connecting to a custom node. This way, in a few steps you can already be listening for events from the Ethereum network.
The component works by sending to a web application all the necessary information (Moralis api keys, contract address and token ID) which is responsible for making the request. 

### Generation of Moralis API Keys 🗝
You need to generate your own keys to connect to the Moralis API.

1. Log-in to [Moralis](https://moralis.io/).

2. Go to [Web3 APIs](https://admin.moralis.io/web3apis) where you can manage your API key.

### Quick installation with Node.js and npm 🚩 

To use this repository you need to download [Node.js](https://nodejs.org/es/).

1. Download or clone the repository on your computer.

2. Install the dependencies in the target folder by running `npm i` or manually `npm i express axios` in the console.

3. `npm start` to start the app.

### Comments and commands 🚏 

Once the server is open, drag the `TDMoralisGetNFT.tox` component to the TouchDesigner project you have open working.
You need to fill in the following parameters:

- `X-API-Key`: fill in with the API Key of [Moralis](https://admin.moralis.io/web3apis).

- `contract_address`: fill in with the address of the contract to which the NFT you want the data to belong.

- `token_id`: fill in with the token id of the NFT you want the data for.

> Note: the `contract_address` and `token_id` are usually found in [Etherscan](https://etherscan.io/) but can also be found in the NFT platforms or in their URLs, in some cases.

To initialize in *test* mode (the app will restart every time a change is made to it) run in the console:

```
npm test
````
> 💡 Note: it is necessary to install `npm nodemon -g` first.

👋 *If you use it or if you have any feedback or problem, please let me know :)*

🧬🧬🧬🧬🧬🧬🧬🧬🧬🧬🧬🧬🧬🧬🧬🧬🧬🧬🧬🧬🧬🧬🧬🧬🧬🧬🧬🧬🧬🧬🧬🧬🧬🧬🧬🧬🧬