# Talent Accelerator front-end assignment

## Task description

You will be creating a basic web page using HTML/CSS/Javascript that displays
Star Wars characters and provides information about them.

You can use any libraries/frameworks you want to, it's totally up to you.

As far as styling goes spend some time making it look however you want it to but focus on making the information easy to parse and the application easy to use.

There are three features we want you to implement, I suggest developing them one at a time in the following order:

1. List all the Star Wars characters by first and last name. Use swapi (Star Wars API) for this.
   The following **GET** request will retrieve a list of characters and their related information `https://swapi.dev.api/people`. It uses pagination meaning you will have to either keep requesting based on the next url that is sent as part of the response or you can implement pagination in the application as well.
   You can read all of the documentation for the API [here](https://swapi.dev/).

2. Display additional information about the characters when their names are clicked. The user should also be able to hide this information again. You can pick a couple of properties to show based on what you get from the API.

3. Implement a search feature allowing the user to filter the characters based on their first name or last name.

## Setup

You can create your own project from scratch or you can clone this one that has a basic project setup.
If you choose to clone this one you will need to install [Node.js](https://nodejs.org/en/z`).

You can then execute `npm start` in your terminal while inside the project directory to launch the application in the web with auto refresh when you save file changes.

## Delivery

You can either upload your project to github and send a link or zip the project files (without the node_modules directory) and send them directly to sascha.ringstrom@redmind.se

Also please answer the following questions in the email:

1. What parts did you struggle with and why?

2. Would you do anything differently if you were to do it again?
