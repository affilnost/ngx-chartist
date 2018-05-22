# Contributing
Please first see the CONTRIBUTING_AGREEMENT file.


## Environment installation
You need to have `Node.js` and `npm` installed on your PC/Mac.

Then just run `npm install` in the project's root.


### Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Unit tests / end-to-end tests
Tests are currently not supported

### Generating  NPM package ###
To generate the new npm package, run:

`npm run packagr`

then go to the dist folder and execute:

`npm pack`

If you want to test this package somewhere locally,

- copy & paste ngx-chartis-0.0.0.tgz into your project,
then
- remove ngx-chartis from the node folder

- `npm install ngx-chartis-0.0.0.tgz`

- restart the server
