# Ally Guide

An open source project that helps citizens search and automate letter writing to their representatives to accelerate policies that focus on racial justice. (Breathe Act, Farm Workers aid, Land Reclamation, etc) - part of the [ProgramEquity](www.programequity.com) initiative. 

**Stack:**
- [Express](https://expressjs.com/) - A minimal web framework for Node.js web applications
- [Node.js](https://nodejs.org/) - A promise-based ORM for Node.js that supports PostgreSQL, MySQL, and SQLite.
- [Bootstrap 4](https://getbootstrap.com/) - An open source design system for HTML, CSS, and JS.
- [Vuejs](https://vuejs.org/) - A popular templating language for building layouts.


## Project setup
```
npm install
```

### Configuration

```
cp .env.local.template .env.local
```

Edit `.env.local` and assign values to `VUE_APP_AIRTABLE_API_KEY` and `VUE_APP_AIRTABLE_BASE`

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

**Running tests**
- npm install --save-dev chai
- npm run test


## Contributing
- Help is welcome! Check out our [Roadmap Project Board](https://github.com/Ally-Guide/ally-guide-app/projects/1) to get started (good first issue is a great label to start with). **[Slack](https://join.slack.com/t/ally-guide/shared_invite/zt-fpx4ach3-OlGutY6lsd7lXKphj8KpAA)** for communication or if you're not sure where to start. 

1. Fork the branch
2. Create a branch with your changes
3. Make sure all test are passing by running 
4. Submit a pull request
