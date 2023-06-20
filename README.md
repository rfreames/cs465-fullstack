# cs465-fullstack
CS-465 Full Stack Development with MEAN

**Architecture**

*  Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA). Why did the backend use a NoSQL MongoDB database?

In this course, I developed a web application using the MEAN stack. Express HTML and Javascript were used when developing the multi-page web application, with angular being used for an administrative site to update the travel section of the application. MongoDB was used as an easy way to update various components (particularly different trips) using JSON, which could then be used to provide updated listings for users.

**Functionality**

* How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces? Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

JSON is used to hold data objects, but not used for functions. JSON objects can be used by programming languages such as JavaScript to simplify data storage. As an example, for this project JSON was used to hold information for various pages, rather than having to input data on each html / hbs file each time an item needed to be updated. By doing so, files for pages were significantly shortened and made easier to understand, and understanding the sort of data being held for each page was made easy by keeping data in named JSON files with labels.

**Testing**

* Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

For this project, multiple endpoints were created for users to access the API. Beyond retrieving a list of trips, authorized users can add, edit, or delete trips through the methods created to interact with MongoDB. Security was added to these various endpoints in the form of verifying user credentials using a token (in this project, though there are multiple ways to go about implementing security). By including the use of a generated token in API, users attempting to add, edit, or delete without a valid token are unable to do so. To test, I did both manual testing through the web application, as well as testing using Postman to send HTTP requests both with and without authentication.

**Reflection**

* How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course was a great introduction to the MEAN stack. It was great developing with the MVC architecture and seeing how each part of the stack interacted to create a functioning web application. Given the MEAN stack's popularity and the overlapping tech with the MERN stack, this course gave me a great starting point to further my understanding and be a stronger candidate when applying to web development (or adjacent) roles.
