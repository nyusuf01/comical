![Screen Shot 2021-06-22 at 7 54 59 AM](https://user-images.githubusercontent.com/80069382/122920470-708acb80-d32f-11eb-96dc-8f8f59866a9d.png)
# Comical

## Overview

**Comical** is a a database of shared comic strips. Signed in users will be able to add their favorite comic strips and leave reviews as well as add, edit and delete it.


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

![Screen Shot 2021-06-22 at 7 54 59 AM](https://user-images.githubusercontent.com/80069382/122920537-83050500-d32f-11eb-9e4d-adb58805e66c.png)

![Screen Shot 2021-06-22 at 7 55 12 AM](https://user-images.githubusercontent.com/80069382/122920589-8ef0c700-d32f-11eb-9482-6c7808e96a2d.png)

![Screen Shot 2021-06-22 at 7 55 22 AM](https://user-images.githubusercontent.com/80069382/122920639-9c0db600-d32f-11eb-9150-f5fb0dcf6183.png)


#### Component Tree

<img width="590" alt="Screen Shot 2021-06-22 at 7 07 38 AM" src="https://user-images.githubusercontent.com/80069382/122914481-af695300-d328-11eb-8edd-8c08229537da.png">


#### Component Architecture



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

<img width="563" alt="Screen Shot 2021-06-22 at 6 49 23 AM" src="https://user-images.githubusercontent.com/80069382/122912226-18030080-d326-11eb-8ea6-f100a5b02883.png">

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
