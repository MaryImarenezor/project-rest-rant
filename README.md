# "REST-Rant" Solo Project (Full-Stack Project)

*PROMPT:* Create a fullstack application that rates different restaurants

### SKILLS USED:
- MongoDB
- Postman
- Express
- SCSS
- React

### PROCESS:
- set up the API & express server and wrote the routes
-  built and managed a MongoDB database
-  wrote and tested the different routes with Postman
-  crafted the web application and API with Express.js and React (respectively in that order).
### OUTPUT:
- a working fullstack application that can add, edit, and delete places.

### ROUTES

| Route | REST | Description |
| ----- | ---- | ----------- |
| / |  GET | Home Index Page |
| /places | GET | READS the Places Index Page |
| /places/new | GET | READS the "Add a Place" form |
| /places/:id | GET | READS the "Place in detail" page |
| /places/:id | DELETE | DELETES a place |
| /places/:id/edit | GET | ACCESS the "Edit a Place" form |
| /places | POST | CREATES a new Place |
| /places/:id | PUT | UPDATES a Place |
| /places/:id/comment | GET | ACCESSES the "New Comment" form |
| /places/:id/comment | POST | CREATES a new Comment |




#### BUGS:
- when trying to make a new comment, the new comments would not show up, instead pulling up a 404 page
