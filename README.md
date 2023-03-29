## Running

```bash
# Development
npm run start:dev
```

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
