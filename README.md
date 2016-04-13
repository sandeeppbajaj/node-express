# node-express-building-blocks
Code for the [codeschool.com](http://codeschool.com) course building blocks of express.
Thanks to [codeschool.com](http://codeschool.com) for awesome course.

Adding code from local to remote for each level in the course. Each Level will be a separate commit and tagged.

Levels are mentioned in the read-me with appropriate notes and steps to start.

### Dependency
Node

### Level 3 - User Params / Reading from url
- Reading query string parameters
- Creating dynamic route with path parameter
- Responding with not found for invalid routes
- Normalizing route parameter
- Setting properties on the request object


##### Steps to start
```
npm install
node app.js
```
App starts at localhost:8080

##### Routes to try
```
curl -i http://localhost:8080/blocks
curl -i http://localhost:8080/blocks/Fixed
curl -i http://localhost:8080/blocks/fixed
curl -i http://localhost:8080/blocks/Movable
curl -i http://localhost:8080/locations/fixed
```
