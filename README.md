# Comical

## Overview

_**Comical** is a a database of shared comic strips. Signed in users will be able to add their favorite comic strips and leave reviews as well as add, edit and delete it.


<br>

## MVP


- _Full CRUD for the comic strip displays_
- _Full CRUD for reviews_
- _User authentication_
- _Filter and search functions_
- _A simple and intutitve UX_

<br>

### Libraries and Dependencies



|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Front end user interface_ |
|   React Router   | _Used to define multiple routes in the application_ |
| React Router DOM | _Rendering components in the front end_ |
|     Axios      | _Helps make API calls in React_ |
|  Styled Components  | _Hamburger Menu_ |
|  Ruby on Rails  | _The server side web app framework_ |
|  jwt  | _Implementation of JSON Web Tokens_ |
|  bcrypt  | _A password-hashing function _ |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. Include a link to your component tree

[Component Tree Sample](https://gist.git.generalassemb.ly/davidtwhitlatch/414107e2560ae0bb65e233570f2fe056#file-component-tree-png)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure


src
|__ components/
      |__ Nav.jsx
      |__ Footer.jsx
      |__ Search.jsx
      |__ Filter.jsx
      |__ ComicCard.jsx
      |__ Comments.jsx
      |__ CommentCard.jsx
      |__ CommentCreate.jsx
|__ containers/
      |__ ComicContainer.jsx
|__ layouts/
      |__ Layout.jsx
      |__ Layout.css
|__ screens/
      |__ Login.jsx
      |__ SignUp.jsx
      |__ ComicCreate.jsx
      |__ Comic.jsx
      |__ ComicDetails.jsx
      |__ ComicEdit.jsx
|__ services/
      |__ api-config.js
      |__ auth.js
      |__ comics.js
      |__ comments.js
      |__ tags.js
|__ App.js
|__ App.css
|__ index.js
|__ index.css



```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create backend models    |    H     |     2 hrs      |      hrs     |    TBD   |
| Create backend controllers |    H     |     2 hrs      |      hrs     |     TBD     |
| Test full CRUD on backend |    H    |     2 hrs      |      hrs     |     TBD     |
| Authorization |    H    |     3 hrs      |      hrs     |     TBD     |
| React App framework and folder structure. Installing dependencies, |    H    |     2 hrs      |      hrs     |     TBD     |
| Build api-config and auth files |    H    |     3 hrs      |      hrs     |     TBD     |
| Layout screen and components |    H    |     2 hrs      |      hrs     |     TBD     |
| Login and Sign Up Screens |    H    |     2 hrs      |      hrs     |     TBD     |
| ComicsContainer and App.js |    H    |     2 hrs      |      hrs     |     TBD     |
| Build Comics screen and ComicCard to view all comic strips |    H    |     3 hrs      |      hrs     |     TBD     |
| CommicDetails screen |    H    |     3 hrs      |      hrs     |     TBD     |
| Create and Edit screens |    H    |     3 hrs      |      hrs     |     TBD     |
| Comment components |    H    |     3 hrs      |      hrs     |     TBD     |
| Building CreateComment |    H    |     3 hrs      |      hrs     |     TBD     |
| Media Queries |    H    |     3 hrs      |      hrs     |     TBD     |
| Extra CSS |    H    |     3 hrs      |      hrs     |     TBD     |
| Deployment |    H    |     1 hrs      |      hrs     |     TBD     |
| Total |    H    |     42 hrs      |      hrs     |     TBD     |



<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

[ERD Sample](https://drive.google.com/file/d/1kLyQTZqfcA4jjKWQexfEkG2UspyclK8Q/view)
<br>

***

## Post-MVP

- _users can share a comic strip_
- _users can like a comic strip_
- _users can rate a comic strip_
- _comic strip recommendations based on what user has liked or saved_
- _links to merchandise or books for sale_

<br>

***

## Code Showcase

> 

## Code Issues & Resolutions

> 
