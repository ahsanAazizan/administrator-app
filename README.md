# REQUESTS

### Get all users
GET http://localhost:PORT/api/users/

### Get user by id
GET http://localhost:PORT/api/users/?id=

### Add new user
POST http://localhost:PORT/api/users/

### Edit user
PUT http://localhost:PORT/api/users/:id

### Delete user
DELETE http://localhost:PORT/api/users/:id

# Setup
create .env file, and declare two variable called URI(your mongodb uri) and PORT(your port). Also set the port variable at /resources/js/client.js to whatever port you use at .env file. After that, you're good to go

# Run command :
```console
npm i
npm start
```
