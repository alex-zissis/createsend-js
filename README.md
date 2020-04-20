# CreateSend JS

A modern wrapper for the CreateSend API in Node.JS.

NB: This is still in early alpha and not recommended for use

## Installation

```bash
yarn add createsend-js
```

OR

```bash
npm i createsend-js
```

## Usage

### Initialisation

```javascript
import {CreateSend} from 'createsend-js'; // or const {CreateSend} = require('createsend-js')

const cs = new CreateSend({apiKey: 'x'});
```

### Account

```javascript
cs.account.getClients((clients) => console.log(clients)); // [ {Name: "Example", ClientID: 'a1a1a1a1a1a1a1' } ]
```

### Clients

```javascript
cs.clients.getSubscriberLists('a1a1a1a1a1a1a1'); // [ {Name: "Example List", ClientID: 'a1a1a1a1a1a1a1' } ]
```
