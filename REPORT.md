# OAuth Comparative Analysis

## OAuth Provider: Yahoo 

### Research Conducted By: Julie Erlemeier, David Zheng, Jonathan Kimball and Adrian Huebner

### Overall Score and Comments
#### Score (Out of 10): 6/10
#### General Comments
Describe the stack (front-end only? full stack?), database, efficiency, etc. Describe the general usability and learnability.
	This is a full-stack application. The front-end contains a link to our chosen OAuth service (Yahoo). The back-end handles routes, sending keys/tokens, and receiving keys/tokens. It connects to a Mongo database. It contains asynchronous code so there are several promises. We have middleware for our authorization process as well as handling errors that arise.

#### Pros
* Team worked well troubleshooting difficult technical problems together.
* Increased comfort with Oauth documentation.
* Enhanced knowledge of the process of passing codes through URLs.
* Compassion for developers who work in cyber security.
* Greater appreciation for excellent documentation.
* Significant increase in understanding the relationship between the resource server and the auth server. 


#### Cons
* Not as much time to go through the documentation as we would like for the lab
* Lack of information to compare and contrast popular Oauth services.
* Difficulty deciphering each route and which server is communicating on each route at what step of the authentication process.
* Challenging to grasp redirection from Yahoo back to our server.

### Ratings and Reviews
#### Documentation
Although, with a bit more time, it may be easier to judge the quality of the documentation, for someone just learning OAuth, I did find it somewhat obtuse.  The documentation may be complete enough, but it could have been made easier to locate each of the pieces we needed.  It could also have used a better diagram with the various systems and roles and the communications between them.  If, however, you are a developer more familiar with the OAuth protocol already, this may not be a problem.

#### Systems Requirements
Above and beyond 'node' and 'linux', what dependencies or core requirements exist for this framework?  Can it play at AWS/Heroku?  Does it require a certain database?
Dependencies: ‘dotenv’, ‘express’, ‘superagent’, ‘cors’
Heroku: compatible
Database: not required.

#### Ramp-Up Projections
How long would/should it take a team of mid-junior developers to become productive
* We estimate that there would need to be at least a day dedicated to researching and looking through all of the documentation that Yahoo provides for the OAuth
* We estimate a day or two to the mapping out of how many repositories are required, the file structures for each of the repositories, and how all the files communicate with each other
* After that it is a little difficult to predict, it depends on the team and how many senior devs or others that there are for guidance

#### Community Support and Adoption levels
Oauth is a very popular framework; some big companies that are running it include Amazon, Facebook, Google, Instagram, etc. Oauth was first implemented in 2006 at Twitter, by August 2010, all third party Twitter applications have been required to use OAuth. The OAuth 2.0 was introduced in October 2012. Oauth is supported in many different programming languages such as Java, .NET, Python, PHP, Swift, etc. 

### Links and Resources
* [framework](https://developer.yahoo.com/oauth/)
*[docs](https://developer.yahoo.com/oauth2/guide/flows_authcode/?guccounter=1&guce_referrer=aHR0cHM6Ly9kZXZlbG9wZXIueWFob28uY29tL29hdXRoMi9ndWlkZS8&guce_referrer_sig=AQAAAFZdoUXYxsR7dEvvBD7Ggyb0I_rgBdAqs1ZLKotPkR6_nzXIt9uJ3a-Ne3zXDOY4fwEAoNqaRWtloNuRhu7MdfDFIvtTTYH-j3dK0pkUNJKHqUWkTcdYwWNhvKhaYxn_5txmwB0blx-2JwYr0m_fzVIr7rBAGoQpGG0lfm_ie9WV)
* examples/tutorials
	* Stack-Overflow provided some help with the link provided below:
*[PythonOAuth](https://stackoverflow.com/questions/48255130/yahoo-fantasy-sports-example-using-oauth2)

### Code Demos
* live/running application
	* [front-end](https://www-server.herokuapp.com/)
	* [back-end](https://js-auth-server.herokuapp.com/)
* code repository
	* [web server](https://github.com/adrianhuebner/web-server)
	* [auth server](https://github.com/adrianhuebner/auth-server)

### Operating Instructions
If someone were to download your repo (above), what steps do they need to take to run the application
* `npm init -y`
* `npm install`
* Get credentials with Yahoo Developers
	* Client ID
	* Secret Key
* .env
	* port
	* MONGODB_URI
	* Yahoo client ID
	* Yahoo secret key
* `mongod --dbpath data/db`
* Endpoint: `/signup`
  * Returns a URL string with code in it.
* Endpoint: `/signin`
  *Returns a URL string with code in it.
* Endpoint: `/oauth`
  * Returns a token, then a USER.
