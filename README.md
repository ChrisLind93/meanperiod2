### Why would you consider a Scripting Language as JavaScript as your backend platform?

For a long time, JavaScript was a front-end only language. Then Google came around with the V8 engine,
which allowed JavaScript to run much faster, due to the fact that V8 compiles JavaScript into native
machine code. This spawned the creation of things like Node JS, which allows the server side JavaScript.
Node.js is an open-source, cross-platform runtime invironment fore developing ser-side Web applications.
Although Node.js is not a Javascript framework, many of its basic modules are written in JavaScript,
and developers van write new modules in JavaScript.
Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect
for data-intensive real-time applications that run across distributed devices.

--------------------------------------------------------------------------------------------------------------------

### Explain Pros & Cons in using Node.js + Express to implement your Backend compared to a strategy using for example Java/JAX-RS/Tomcat.

Node.JS is a single threaded non blocking server, which makes it super easy to perfom asynchronus calls. 
The genius thing about this is that Node.JS uses an event loop to make asynchronus calls, compared to a 
regular high level language like Java, or C#, which spawns new threads to do this. This makes Node.JS 
very memory efficient, and is also notoriously difficult to program. The data sent between Node.JS and 
and your frontend is already JSON so there is no need to convert it from either JSON to an object in an
high level language, or the other way around.

--------------------------------------------------------------------------------------------------------------------

### Explain, using relevant examples, about testing JavaScript code, relevant packages(Mocha etc.) and how to test asynchronous code.

Mocha is a feature-rich JavaScript test framework running on Node.js and the browser, making asynchronous testing
simple. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions
to the correct test case.
Mocha can use any assertion library Assertions, but here I have used Chai.
Mocha is used for unit and integration testing, and it's a great candidate for BDD (Behavior Driven Development).

```javascript
function addAsync(n1,n2,callback){
    setTimeout(function(){
        var result = n1+n2;
        callback(result);
    },1000);
}

// The way we test the method in testModules.js:
var expect = require("chai").expect;
var adder = require("../module");

describe("Test calculator", function() {

    it("should return 10 asynchronouesly", function (done) {
        adder.addAsync(5, 5, function (res) {
            expect(res).to.be.equal(10);
            done();
        })
    })
})
```

--------------------------------------------------------------------------------------------------------------------

### Explain, using relevant examples, different ways to mock out databases, HTTPrequest etc

Mock objects are simulated objects that mimic the behavior of real objects in controlled ways. They have the same
interface as the real objects they mimic, allowing a client object to remain unaware of whether it is using a real
object or a mock object.
Nock is an HTTP mocking and expectations library for Node.js
Nock can be used to test modules that perform HTTP requests in isolation (that is without performing a real network
operation).

--------------------------------------------------------------------------------------------------------------------

### Explain, using relevant examples, the Express concept; middleware.

Express middlewares and Node modules are pluggable JavaScript components, which make Express apps very modular, flexible and extensible.
The middleware system allows small re-usable programs to handle HTTP-specific functionalities.
An Express application is essentially a stack of middleware which are executed in a pipeline (serially).
A middleware is a function with access to the request object (req), the response object (res), 
and the next middleware in line in the request-response cycle of an Express application:

Execute any code.

Make changes to the request and the response objects.

End the request-response cycle.

Call the next middleware function in the stack.

If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. 
Otherwise, the request will be left hanging.
