## Preparing

Start docker service with `mongo` database. Ports parameters are specified in `ports` section: `27013:27017`. `27013` would be outer port and `27017` would be inner port. Database name specified in `MONGODB_DATABASE` property.
```bash
sudo docker-compose up
sudo docker-compose down

# Remove container
sudo docker exec -it acacpq56h7t_mongodb_1 bash
kill 1
```

File `.example.env` contain example of `PORT` and `MONGO_URL` parameters for application.

```bash
PORT=5001
MONGO_URL=mongodb://localhost:27013/news
```

For manage mongo database may be used `MongoDB Compass`. Connection string to connect docker container would be `mongodb://localhost:27013/news`. Database name would be `news` and collection be `acticles`.

## Running

```bash
npm run start:dev
```

Application starts on port `5001` and serves by `http://127.0.0.1:5001/articles`.

## API

All records data

```javascript
[
    {
    "_id": "642ab20001afdbb13abadf4b",
    "id": "f080e5be-7625-41e5-801e-4bba59046c8d",
    "title": "Sandwich trading bots lose bread and butter in $25M exploit",
    "body": "The CertiK team told Cointelegraph that this is one of the biggest exploits that they’ve seen on MEV bots since September 2022.",
    "author": "EZRA REGUERRA",
    "created": 1680519922745
    },
    {
    "_id": "642ab34701afdbb13abadf4c",
    "id": "8ba6a65f-24f3-4491-9457-64f23b3d9daf",
    "title": "Italian regulator draws criticism for blocking AI chatbot ChatGPT",
    "body": "ChatGPT’s temporary ban in Italy over privacy concerns draws criticism from figures in the tech industry and the country, including expert Ron Moscona and Deputy PM Matteo Salvini.",
    "author": "AMAKA NWAOKOCHA",
    "created": 1680520067129
    },
    {
    "_id": "642ab3ba01afdbb13abadf4d",
    "id": "7136613b-383a-49c2-98d0-624146f521aa",
    "title": "An ambitious project opens the doors to the metaverse in the heart of Dubai",
    "body": "The metaverse has the potential to boost business success when engaging with customers.",
    "author": "HRISTINA YORDANOVA",
    "created": 1680520178721
    }
]
```

Get all articles: `GET` /articles

Create a single article: `POST` /articles

Delete article by id: `DELETE` /articles/642ab34701afdbb13abadf4c

Update an article: `PATCH` /articles
