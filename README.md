# Getting Started with scandiweb products App

This small project is just a challenge given by scandiweb 

I've developed this full-stack app test using React, Express, Node.js & MySQL

The application consists of 2 parts, frontend and the backend

## Frontend (client folder):
### Dependencies:
npm i react-router-dom axios moment sass @mui/material @emotion/react @emotion/styled
### Structure
The frontend is developed used React.js. It uses Javascript, HTML & CSS (SASS) and it consists of:
#### Pages:
Home: To show the full list of products with two top buttons, "Add" and "Delete".
Add Product: A form is used to enter products of 3 different types (DVD, Book & Furniture). In which, the required fields are displayed by changing the value of "product type" combobox as the following:
DVD: Size (MB).
Book: Weight (KG).
Furniture: Height (CM) - Width (CM) - Length (CM).
There are 2 main actions of this form, "Save" and "Cancel":
Save: To save the product in the database.
Cancel: To return back the the product list (Home page).

#### Components:
There are 2 components:
Navbar: To display the logo and buttons (Add & Delete).
Footer: To display the word (Scandiweb test assignment) and the developer name (Tarek Elassasdy).

## Backend (api folder):
The backend is developed used Express (middleware) and the MYSQL database (localhost):
### Dependencies:
npm i express mysql nodemon cors multer
### Database
The CRUD operations used to create (post), read (get), update (put) and delete (delete) the data from the database.
- To Create the database "dbProducts:
CREATE DATABASE dbProducts;
- To Create tbProducts (1 endpoint) for all types (DVD, Book, Furniture) :
CREATE TABLE `tblproducts` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `sku` varchar(11) NOT NULL,
 `name` varchar(50) NOT NULL,
 `price` int(11) NOT NULL,
 `type` varchar(20) NOT NULL,
 `size` int(11) DEFAULT NULL,
 `weight` int(11) DEFAULT NULL,
 `height` int(11) DEFAULT NULL,
 `width` int(11) DEFAULT NULL,
 `length` int(11) DEFAULT NULL,
 `img` varchar(300) DEFAULT NULL,
 `description` varchar(300) DEFAULT NULL,
 `date` date NOT NULL,
 PRIMARY KEY (`id`)
 )

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
