# Client Side JS - IAK

This is JavaScript client side library to help you integrate your system to Indobest Artha Kreasi / IAK and consist of two section, <b>prepaid</b> and <b>postpaid</b>

For further details please check the documentation in this link https://developer.mobilepulsa.net/documentation

#### Note: Please registered your DNS first in this link https://developer.mobilepulsa.net before using this library

## Installation

Using npm

```bash
npm install @iak-id/client_side_js_iak
```
## Prepaid Library
Prepaid library is used for top up transaction e.g: pulsa / phone credit, emoney credit, voucher, voucher game, etc.

### Check Balance

API for checking your deposit nominal 

Call check balance function with this format `checkBalance(environment, username, key)`
- environment -->  [required] "sandbox" or "prod"
- username --> [required] your registered phone number in https://developer.mobilepulsa.net 
- key --> [required] your development or production secret key for Library Client JS


```js
(async () => {
  const checkBalanceResponse = await checkBalance(
    "sandbox",
    "0818xxxxxx",
    "123xxxxxxxxxxxxxxxxx"
  );
})();
```

### Pricelist

Call pricelist function with this format `pricelist(environment, username, key, status, type, operator)`
- environment -->  [required] "sandbox" or "prod"
- username --> [required] your registered phone number in https://developer.mobilepulsa.net 
- key --> [required] your development or production secret key for Library Client JS
- status --> [required] "all" or "active" or "non-active"
- type --> [optional] see the list of type in this link https://developer.mobilepulsa.net/documentation --> Menu Prepaid --> Submenu Pricelist
- operator --> [optional] see the list of operator in this link https://developer.mobilepulsa.net/documentation --> Menu Prepaid --> Submenu Pricelist

Code Example without type and operator
```js
(async () => {
  const pricelistResponse = await pricelist(
    "sandbox",
    "0818xxxxxx",
    "123xxxxxxxxxxxxxxxxx",
    "all"
  );
})();
```

Code Example with type only
```js
(async () => {
  const pricelistResponse = await pricelist(
    "sandbox",
    "0818xxxxxx",
    "123xxxxxxxxxxxxxxxxx",
    "all",
    "pulsa"
  );
})();
```

Code Example with type and operator
```js
(async () => {
  const pricelistResponse = await pricelist(
    "sandbox",
    "0818xxxxxx",
    "123xxxxxxxxxxxxxxxxx",
    "all",
    "pulsa",
    "xxxxxxxx"
  );
})();
```

### Top Up

Call top up function with this format `topUp(environment, username, key, refId, customerId, productCode)`
- environment -->  [required] "sandbox" or "prod"
- username --> [required] your registered phone number in https://developer.mobilepulsa.net 
- key --> [required] your development or production secret key for Library Client JS
- refId --> [required] your order number / reference ID (Must Unique)
- customerId --> [required]
- productCode --> [required] see the full list in Pricelist API

#### Note: If you use the same refId, we will treat it as check status API

```js
(async () => {
  const topUpResponse = await topUp(
    "sandbox",
    "0818xxxxxx",
    "123xxxxxxxxxxxxxxxxx",
    "client-js-test-1",
    "0818xxxxxx",
    "pulsa5000"
  );
})();
```

### Check Status

Call check status function with this format `checkStatus(environment, username, key, refId)`
- environment -->  [required] "sandbox" or "prod"
- username --> [required] your registered phone number in https://developer.mobilepulsa.net 
- key --> [required] your development or production secret key for Library Client JS
- refId --> [required] your order number / reference ID (Must Unique)

```js
(async () => {
  const checkStatusResponse = await checkStatus(
    "sandbox",
    "0818xxxxxx",
    "123xxxxxxxxxxxxxxxxx",
    "client-js-test-1"
  );
})();
```

### Inquiry PLN / Electricity

Call inquiry PLN function with this format `inquiryPln(environment, username, key, customerId)`
- environment -->  [required] "sandbox" or "prod"
- username --> [required] your registered phone number in https://developer.mobilepulsa.net 
- key --> [required] your development or production secret key for Library Client JS
- customerId --> [required] your subscriber id


```js
(async () => {
  const inquiryPlnResponse = await inquiryPln(
    "sandbox",
    "0818xxxxxx",
    "123xxxxxxxxxxxxxxxxx",
    "12345678901"
  );
})();
```

### Inquiry Game

Call inquiry game function with this format `inquiryGame(environment, username, key, customerId, gameCode)`
- environment -->  [required] "sandbox" or "prod"
- username --> [required] your registered phone number in https://developer.mobilepulsa.net 
- key --> [required] your development or production secret key for Library Client JS
- customerId --> [required] see the format customer ID for each product in this link https://developer.mobilepulsa.net/documentation --> Menu Prepaid --> Submenu Check Game ID
- gameCode --> [required] see the list of operator in this link https://developer.mobilepulsa.net/documentation --> Menu Prepaid --> Submenu Game Server List

```js
(async () => {
  const inquiryGameServerResponse = await inquiryGameServer(
    "sandbox",
    "0818xxxxxx",
    "123xxxxxxxxxxxxxxxxx",
    "127"
  );
})();
```

### Inquiry Game Server List

Call inquiry game server function with this format `inquiryGameServer(environment, username, key, gameCode)`
- environment -->  [required] "sandbox" or "prod"
- username --> [required] your registered phone number in https://developer.mobilepulsa.net 
- key --> [required] your development or production secret key for Library Client JS
- gameCode --> [required] see the list of operator in this link https://developer.mobilepulsa.net/documentation --> Menu Prepaid --> Game Server List

```js
(async () => {
  const inquiryGameServerResponse = await inquiryGameServer(
    "sandbox",
    "0818xxxxxx",
    "123xxxxxxxxxxxxxxxxx",
    "127"
  );
})();
```

## Postpaid Library
Postpaid library is used for transaction with inquiry and payment system e.g: water bill, electricity bill, finance bill, insurance bill, etc.

### Pricelist

Call pricelist postpaid function with this format `pricelistPasca(environment, username, key, status, type, province)`
- environment -->  [required] "sandbox" or "prod"
- username --> [required] your registered phone number in https://developer.mobilepulsa.net 
- key --> [required] your development or production secret key for Library Client JS
- status --> [required] "all" or "active" or "non-active"
- type --> [optional] see the list of type in this link https://developer.mobilepulsa.net/documentation --> Menu Postpaid --> Submenu Pricelist
- province --> [optional] send this parameter only if the `type` field value is <b>pdam</b>

Code Example without type and province
```js
(async () => {
  const checkStatusResponse = await pricelistPasca(
    "sandbox",
    "0818xxxxxx",
    "123xxxxxxxxxxxxxxxxx"
  );
})();
```
Code Example with type only
```js
(async () => {
  const checkStatusResponse = await pricelistPasca(
    "sandbox",
    "0818xxxxxx",
    "123xxxxxxxxxxxxxxxxx",
    "non-active",
    "internet"
  );
})();
```

Code Example with type and province
```js
(async () => {
  const checkStatusResponse = await pricelistPasca(
    "sandbox",
    "0818xxxxxx",
    "123xxxxxxxxxxxxxxxxx",
    "all",
    "pdam",
    "jawa barat"
  );
})();
```

### Inquiry

Call inquiry function with this format `inquiry(environment, username, key, productCode, customerId, refId, month, nomor_identitas)`
- environment -->  [required] "sandbox" or "prod"
- username --> [required] your registered phone number in https://developer.mobilepulsa.net 
- key --> [required] your development or production secret key for Library Client JS
- productCode --> [required] see the full list in Pricelist Pasca API
- customerId --> [required]
- refId --> [required] your order number / reference ID (Must Unique)
- month --> [optional] you have to fill it only for `BPJS` product code
- nomor_identitas --> [optional] you have to fill it only for `ESAMSAT` product type

Code Example
```js
(async () => {
  const inquiryResponse = await inquiry(
    "sandbox",
    "0818xxxxxx",
    "123xxxxxxxxxxxxxxxxx",
    "PLNPOSTPAIDB",
    "530000000001",
    "client-js-postpaid-1"
  );
})();
```

Code Example for BPJS Product
```js
(async () => {
  const inquiryResponse = await inquiry(
    "sandbox",
    "0818xxxxxx",
    "123xxxxxxxxxxxxxxxxx",
    "BPJS",
    "8801234560001",
    "client-js-postpaid-2",
    "2"
  );
})();
```

Code Example for Esamsat Product Type
```js
(async () => {
  const inquiryResponse = await inquiry(
    "sandbox",
    "0818xxxxxx",
    "123xxxxxxxxxxxxxxxxx",
    "ESAMSAT.JAWABARAT",
    "9658548523568701",
    "client-js-postpaid-3"
    null,
    "0212502110170100"
  );
})();
```

### Payment

Call payment function with this format `payment(environment, username, key, productCode, trId)`
- environment -->  [required] "sandbox" or "prod"
- username --> [required] your registered phone number in https://developer.mobilepulsa.net 
- key --> [required] your development or production secret key for Library Client JS
- trId --> [required] inquiry ID, you will get this in the response from `Inquiry API`

```js
(async () => {
  const paymentResponse = await payment(
    "sandbox",
    "0818xxxxxx",
    "123xxxxxxxxxxxxxxxxx",
    "9898845"
  );
})();
```

### Check Status

Call payment function with this format `payment(environment, username, key, refId)`
- environment -->  [required] "sandbox" or "prod"
- username --> [required] your registered phone number in https://developer.mobilepulsa.net 
- key --> [required] your development or production secret key for Library Client JS
- refId --> [required] your order number / reference ID (Must Unique)


```js
(async () => {
  const checkStatusPascaResponse = await checkStatusPasca(
    "sandbox",
    "0818xxxxxx",
    "123xxxxxxxxxxxxxxxxx",
    "client-js-postpaid-4"
  );
})();
```


