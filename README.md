# blog-posts

This project was written in **[NodeJS](https://nodejs.org/en/)** using the **[Hapi](https://hapi.dev)** framework as the back-end developer assessment for **[Hatchways](https://www.hatchways.io/)** in 2020.

The purpose of this project is to create an API that handles external API calls and sorts the received data in a certain way. It includes best practices such as tesing, caching and concurrent API calls.

For a detailed guide on how to complete the assessment on your own, please refer to the **[Instructions](docs/back-end-assessment-blog-posts.pdf)**

## Installation

Run `npm install` to install dependencies

## Development server

Run `npm run dev` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Testing

Run `npm run test` to execute tests.

## Notable npm packages

- [hapi](https://github.com/hapijs/hapi), The Simple, Secure Framework Developers Trust

- [joi](https://github.com/hapijs/joi), The most powerful schema description language and data validator for JavaScript.

- [lab](https://github.com/hapijs/lab), Node test utility written for [hapi web framework](https://hapi.dev/)

## Known Issues

- Testing functionality might be broken and requires further investigation
- Testing is only implemented for the "/api/ping" route as of version 1.0.0
- Concurrent API requests might not work as intended

## Roadmap

- Fix testing functionality
- Complete testing for the entire application
- Implement caching
- Further investigate concurrent API requests
