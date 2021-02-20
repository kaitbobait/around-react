
# Project 10: Around The U.S.

### Description

* This is a site that you'll be able to edit your name and occupation. You will be able to add images and titles do the site, as well like "like" any photo.

### Technologies

**In this site, we are using:**

* HTML
* CSS
* Javascript
* React
* Webpack
* BEM methodology


### Overview

* Figma
* Images

**Figma**

* [Link to the project in Figma](https://www.figma.com/file/mUgu8OSHWE0M6p6vfwmdu9/Sprint-4-Around-The-U.S.-desktop-mobile?node-id=0%3A1)

**Github Pages**
* [Link to my project on Github Pages] (https://kaitbobait.github.io/web_project_4/ )

**Images**

The way you'll do this at work is by exporting images directly from Figma — we recommend doing that to practice more. Don't forget to optimize them [here](https://tinypng.com/), so your project loads faster. 

Have fun with JavaScript!

### To Do List:

## Setting up Popups

# setting up the popup event handlers
* How to get to work with document...?

# Move common popup component
* Use for the following Popups:
- Edit Profile
- New Place
- Update profile picture
- Are you sure? 
* All common markup should be placed inside the new component
* only titles and the form identifiers (in the form of strings) should be passed from outside
the component
* Add the corresponding TITLE and NAME props, then substitute their values in JSX
* to correctly substitude NAME into the CSS class of the container user this syntax: 
className={`popup popup_type_${props.name}`}  
* So as above, I need to change the name of some of the HTML CODE to match the new name structure
* The NAME props will be used for the name of the CSS class container AND the NAME attribute of the form tag
* will need to update NAME attributes on forms

# Move the ImagePopup component
* This component has no props or nested content yet
* Transfer the added event handlers from the Main component to the App component by: 
* using the new props: onEditProfile, onAddPlace, and onEditAvatar
* This will allow those event handlers to still be called from the Main component.

**These state variables are responsible for the visibility of three popups should also appear in the App component**
* isEditProfilePopupOpen
* isAddPlacePopupOpen
* isEditAvatarPopupOpen

**Replace the imperative code in the event handlers with code that will change the values of the corresponding state varaible**
* set them to TRUE

**Add  the isOpen prop to the PopupWithForm component**
* The CSS class responsible for the popup visibility will be set in JSX depending on the isOpen prop

**GOAL: For Popups to open again, but this time they will be controlled by state variables, which is the declarative approach**

**Close Popups**
* Repeat previous steps, but this time to make the popups close
* The new onClose prop of the PopupWithForm component and its handler will help you. 
* The handler should be inside the App and should be called closeAllPopups()







# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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
