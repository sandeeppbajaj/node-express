# node-express-building-blocks
Code for the [codeschool.com](http://codeschool.com) course building blocks of express.
Thanks to [codeschool.com](http://codeschool.com) for awesome course.

Adding code from local to remote for each level in the course. Each Level will be a separate commit and tagged.

### Dependency
Node

### Level 1 - First Steps
- Installing Express
- Calling node's HTTP functions
- Responding with JSON
- Responding with HTML
- Redirecting

##### Steps to start
```
npm install
node app.js
```
App starts at localhost:8080

##### Routes
```
curl -i http://localhost:8080/
curl -i http://localhost:8080/html
curl -i http://localhost:8080/json
curl -i http://localhost:8080/redirect
curl -i http://localhost:8080/redirectWithStatus
```
