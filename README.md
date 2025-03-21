![Codecademy](https://www.codecademy.com/favicon.ico)

##### CODECADEMY: FULL-STACK ENGINEER COURSE

Challenge Project: Quote API
=================================================

### Author(s)
[Dan Beaumont](https://github.com/BeaumontDan)

**Date of Compleation:** 20 March 2025

## Description

This is a Exprress.js training/learning project, set by [Codecademy][codecademy], to create an [Web API][QuoteAPIProject].

## Codecademy Objective

##### Overview

"This project is slightly different than others you have encountered thus far on Codecademy. Instead of a step-by-step tutorial, this project contains a series of open-ended requirements which describe the project you’ll be building. There are many possible ways to correctly fulfill all of these requirements, and you should expect to use the internet, Codecademy, and other resources when you encounter a problem that you cannot easily solve."

##### Project Goals

"In this project, you’ll be building a small Express.js web API to store and serve different quotes about computers, coding, and technology."

#### Setup instructions

"If you choose to do this project on your computer instead of Codecademy, you can download what you’ll need by clicking the “Download” button below. You’ll need to open and work in **server.js** in a text editor. To edit **server.js**, use your text editor of choice. If you need a recommendation or help to install an editor, we recommend looking into our article about setting up a text editor for web development (Follow along until you get to the section: “Practice: Let’s Make a Project”). To run your API on your computer, you will need to install Node.js. If you need help installing Node.js, read our article on installing Node."

"Once you have an editor an Node.js set up, download the project, unzip it, navigate to that folder in your terminal and run ```npm install``` to install Express before trying to start up your server."

## Prerequsites

* To complete this project, you should have completed the Express Routes and Express Routers lessons from our Learn Express curriculum.

## Project Requirements

"You’ve been given some starter code in the form of a front-end site and some Express.js boilerplate. You’ll use this to build several route handlers to serve up interesting quotes. As you build out your app, test out the functionality either using our front-end or with a tool like Postman. Make sure to re-run ```node server.js``` as you make changes to the server, and visit ```localhost:4001``` in the browser to interact with the front-end."

"As you work, your server at any point with ```Ctrl``` + ```C``` in the terminal, and then restart it to see new changes in its behavior."

"In **server.js**, we’ve provided you with some imported helper functions and data:"
* A ```quotes``` array with some pre-populated quotes about technology. Each quote in the array has a ```person``` and ```quote``` property. You can use our array or write your own, but make sure to have at least the ```person``` and ```quote``` properties, as the front-end that we’ve provided expects each quote to have them.
* The ```getRandomElement()``` function, which takes an array and returns a random element from that array.

## Application Usage

Download Files From [GitHub Repo][GitHubRepo] run command:
```node server.js```

## Technologies & Prereqisites

* JavaScript
* Node.js
* Express.js

--------------------------------------------------------------------------------------------

## Future Improvements

* Add a PUT route for updating quotes in the data. This might require adding some sort of unique ID for each quote in the array in data.js.
* Add other data to the array, such as the year of each quote, and try to display it on the front-end.
* Add another resource to your API in addition to quotes, such as biographical blurbs (you’ll need to find your own data for this new resource). Use Express Routers to keep your code simple and separated into different files for each router.

## Credits

This project was made possible with help from Codecademy's tutorials and courses. For more information on [Codecademy][codecademy] and their Full-Stack Engineer Course, [click here][fullstackcourse].

[codecademy]: https://www.codecademy.com/
[fullstackcourse]: https://www.codecademy.com/learn/paths/full-stack-engineer-career-path
[GitHubRepo]: https://github.com/BeaumontDan/quote-api
[QuoteAPIProject]: https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-22-build-a-back-end-with-express-js/modules/wdcp-22-challenge-project-quote-api/projects/quote-api

--------------------------------------------------------------------------------------------
