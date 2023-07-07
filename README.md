# Project setup 

The app server can be started either locally or in a container. In both cases, the server will be running on port 3000. For testing, you can use the HTTP requests present in `test.sh`.

Before proceeding with the steps make sure you are in the project directory.

## Running in a docker container:

### Build the image

```bash
$ docker build -t reports .
```

### Run the docker container

```bash
$ docker run -d -p 3000:3000 reports
```

### Test the endpoints

```bash
$ id=$(curl --silent --location 'localhost:3000/receipts/process' \
--header 'Content-Type: application/json' \
--data '{
  "retailer": "Target",
  "purchaseDate": "2022-01-01",
  "purchaseTime": "13:01",
  "items": [
    {
      "shortDescription": "Mountain Dew 12PK",
      "price": "6.49"
    },{
      "shortDescription": "Emils Cheese Pizza",
      "price": "12.25"
    },{
      "shortDescription": "Knorr Creamy Chicken",
      "price": "1.26"
    },{
      "shortDescription": "Doritos Nacho Cheese",
      "price": "3.35"
    },{
      "shortDescription": "   Klarbrunn 12-PK 12 FL OZ  ",
      "price": "12.00"
    }
  ],
  "total": "35.35"
}' | sed 's/.*://; s/"\|\}//g')


$ curl --silent --location "localhost:3000/receipts/$id/points"
```

Alternatively, you can utilize `test.sh` to run these.

```bash
$ bash test.sh
{"points":28}
```

## Running without a docker container:

Prerequisites: Make sure that node.js (version >= 18.15.0) is installed.

### Install dependencies

```bash
$ npm install
```

### Run the unit tests to ensure we have everything to start the server

```bash
$ npm test
```

### Start the app server

```bash
$ node app.js
```
