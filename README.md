## Preparing

Start docker service with `mongo` database. Ports parameters are specified in `ports` section: `27013:27017`. `27013` would be outer port and `27017` would be inner port. Database name specified in `MONGODB_DATABASE` property.
```bash
sudo docker-compose up
sudo docker-compose down
```

File `.example.env` contain example of `PORT` and `MONGO_URL` parameters for application.

```bash
PORT=5001
MONGO_URL=mongodb://localhost:27013/test
```

For manage mongo database may be used `MongoDB Compass`. Connection string to connect docker container would be `mongodb://localhost:27013/test`. Database name would be `test` and collection be `news`.

## Running

```bash
npm run start:dev
```

Application starts on port `5001` and serves by `http://127.0.0.1:5001/news`.

## API

Create a single news

```javascript
fetch("http://localhost:3007/news", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9,ru;q=0.8",
    "content-type": "application/json",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
  },
  "referrer": "http://localhost:3007/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"title\":\"Title message\",\"text\":\"Text news\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
```

Delete news by id

```javascript
fetch("http://localhost:3007/news/1", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9,ru;q=0.8",
    "content-type": "application/json",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
  },
  "referrer": "http://localhost:3007/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"title\":\"Title message\",\"text\":\"Text news\"}",
  "method": "DELETE",
  "mode": "cors",
  "credentials": "include"
});
```
