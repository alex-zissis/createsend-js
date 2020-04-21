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

const cs = new CreateSend(<apiKey>);
```

### Account

```javascript
cs.account.getClients().then((clients) => console.log(clients)); // [ {Name: "Example", ClientID: 'a1a1a1a1a1a1a1' } ]
```

### Clients

```javascript
cs.clients.getSubscriberLists(<clientId>).then(); // [ {Name: "Example List", ListId: 'a1a1a1a1a1a1a1' } ]
```

### Transactional

```javascript
cs.transactional.getSmartEmailListing({clientId: <clientId>}).then(emails => console.log(emails)) // [{ ID: 'a1a1a1a1a1a1a1', Name: 'txemail', CreatedAt: '2020-02-05T02:02:02', Status: 'Active' }]

cs.transactional.sendSmartEmail(<smartEmailId>, {
    To: ['alex@alexzissis.tech'],
    CC: ['alex+cc@alexzissis.tech'],
    BCC: ['alex+bcc@alexzissis.tech'],
    ConsentToTrack: 'Yes',
    Data: {
        firstName: 'Alex',
    }
}).then(response => console.log(response)); //{ Status: 'Accepted', MessageId: 'a1a1a1', Recipient: 'alex@alexzissis.tech'}
```
