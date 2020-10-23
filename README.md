This repo acts as a template to help quickly bootstrap a Rails API application with a React frontend. It includes some documentation below to set up some development tools to make the dev process mroe enjoyable/easier to manage with your team. Feel free to contribute!

# Project setup

This project has multiple 'root directories', one standard project folders where project wide configuration is set, and specific roots for the client (frontend) and the server (backend). Make sure you run `yarn` both in the project root and in the frontend folder, as well as bundle in the backend folder.

## Prettier

To install prettier for both the Ruby backend and the React front end, the configuration file needs to be in the prject root (i.e. in the directory above the front end and the backend). A `.prettierrc` file with the follow settings will have to be initialized:

```
{
"trailingComma": "es5",
"tabWidth": 2,
"semi": true,
"singleQuote": true
}
```

VSCode will let you choose prettier (inluding the rprettier plugin) as the default formatter in the settings. You may have to go intot the `settings.json` file and add the following lines:

```
{
  ...
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
}
```

This will initialize a new `package.json` file (in addition to the one in the front end folder), which we can use to run npm scripts from the project root, i.e. we can run `yarn start` from the root rather than have to go into the frontend folder.

I'm not sure what the setup requirement for other editors are, but getting information on how to set up `Prettier` should be easy enough to find. If you manage to figure it out, feel free to add it to this readme :)

## ESLint

ESLint offers some pretty cool features that help avoid errors, for example with the `eslint-plugin-react-hooks` [plugin](https://www.npmjs.com/package/eslint-plugin-react-hooks) we can ensure React lifecycle hooks are used in legally, i.e. only in top level functional components. There is also some setup required to make it play nicely with Prettier (luckily all we need is the `eslint-plugin-prettier` [plugin](https://github.com/prettier/eslint-plugin-prettier)). You can look into the `.eslintrc.js` file to get an idea of how it's set up:

```
...
extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  ...
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  ...
```

Note: ESLint will cause errors if there are multiple versions set up. It should be included with `react-scripts` so you should not have to install it seperatly.

## Foreman

To start the api and web server with one command we can use the `foreman` gem (needs to be added to the develoment group in the `Gemfile`.). We then need to add the following settings:

```
web: cd frontend && yarn start
api: cd backend && bundle exec rails s -p 3000
```

We also have to ensure that our react app and our rails app don't start on the same server. You can do this by changing the `start` script in the `package.json` file to the following in the frontend folder:

```
"start": "PORT=4000 react-scripts start",
```

This will start the react server on port 4000 instead (the number is irrelevant as long as not both apps start on 3000).

We can now start both the server and the client at the same time with the `foreman start` command.

## Resources

For some more information [here](https://medium.com/@eth3rnit3/create-react-app-rails-6-0-custom-server-deployment-part-1-development-configuration-92ce11ea9c56) are some of the guide I followed to set this project up.

[This](https://www.youtube.com/watch?v=z18zLCAg7UU&list=PLgYiyoyNPrv_yNp5Pzsx0A3gQ8-tfg66j) video series is also a good starting point

Note this project used the `rails new appname --api` method to generate an API only backend.
