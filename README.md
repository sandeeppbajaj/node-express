# node-express-building-blocks
Code for the [codeschool.com](http://codeschool.com) course building blocks of express.
Thanks to [codeschool.com](http://codeschool.com) for awesome course.

Adding code from local to remote for each level in the course. Each Level will be a separate commit and tagged.

Levels are mentioned in the read-me with appropriate notes and steps to start.

### Dependency
Node

### Level 2 - Middleware
- Serving Files
- Understanding Middleware
- Serving static assets
- Adding client side JavaScript
- Write your own Middleware

##### Steps to start
```
npm install
node app.js
```
App starts at localhost:8080

##### Open in browser
[http://localhost:8080](http://localhost:8080)

##### Console output for custom logging Middleware

```
GET to /
 took 13ms

GET to /style.css
 took 3ms

GET to /blocks.jpeg
 took 3ms

GET to /jquery.js
 took 2ms

GET to /client.js
 took 1ms

GET to /blocks
 took 3ms
```
