# blog-posts

### blog-posts API written in [Hapi](https://hapi.dev) framework for [Hatchways](https://www.hatchways.io/) back-end assessment project

## How to run

```sh
  npm install #install dependencies
  npm run dev # start server in development mode
  npm run test # run tests
```

## Documentation

- Notable npm packages

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
