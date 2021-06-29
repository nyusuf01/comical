![Screen Shot 2021-06-22 at 7 54 59 AM](https://user-images.githubusercontent.com/80069382/122934469-8bfcd300-d33d-11eb-9613-51c9526fd5ff.png)

# Comical

## Overview

**Comical** is a a database of shared comic strips. Signed in users will be able to add their favorite comic strips and leave comments as well as add, edit and delete.

<br>

## MVP

- _Full CRUD for the comic strip displays_
- _Full CRUD for reviews_
- _User authentication_
- _Search functions for comics_
- _A simple and intutitve UX_

<br>

### Libraries and Dependencies

|      Library      | Description                                         |
| :---------------: | :-------------------------------------------------- |
|       React       | _Front end user interface_                          |
|   React Router    | _Used to define multiple routes in the application_ |
| React Router DOM  | _Rendering components in the front end_             |
|       Axios       | _Helps make API calls in React_                     |
| Styled Components | _Hamburger Menu_                                    |
|   Ruby on Rails   | _The server side web app framework_                 |
|        jwt        | _Implementation of JSON Web Tokens_                 |
|      bcrypt       | _A password-hashing function _                      |

<br>

### Client (Front End)

#### Wireframes

https://www.figma.com/file/GI6OeA7hm8myqyMIhJk8Ab/Untitled?node-id=0%3A1

![Screen Shot 2021-06-22 at 7 54 59 AM](https://user-images.githubusercontent.com/80069382/122920537-83050500-d32f-11eb-9e4d-adb58805e66c.png)

![Screen Shot 2021-06-22 at 7 55 12 AM](https://user-images.githubusercontent.com/80069382/122920589-8ef0c700-d32f-11eb-9482-6c7808e96a2d.png)

![Screen Shot 2021-06-22 at 1 15 11 PM](https://user-images.githubusercontent.com/80069382/122970509-050b2300-d35c-11eb-9bff-0ea1d1b01228.png)

![Screen Shot 2021-06-22 at 9 35 33 AM](https://user-images.githubusercontent.com/80069382/122934251-5f48bb80-d33d-11eb-9be9-227001125142.png)

![Screen Shot 2021-06-22 at 9 35 47 AM](https://user-images.githubusercontent.com/80069382/122934306-6a035080-d33d-11eb-920a-13444f335681.png)

![Screen Shot 2021-06-22 at 1 12 37 PM](https://user-images.githubusercontent.com/80069382/122970194-97f78d80-d35b-11eb-8c5b-11a14ce27349.png)

![Screen Shot 2021-06-22 at 1 12 46 PM](https://user-images.githubusercontent.com/80069382/122970242-a8a80380-d35b-11eb-8a2f-92faff8dd793.png)

![Screen Shot 2021-06-22 at 9 10 43 AM](https://user-images.githubusercontent.com/80069382/122934351-74bde580-d33d-11eb-8e5a-e55a6324f8fc.png)

#### Component Tree

<img width="702" alt="Screen Shot 2021-06-22 at 11 15 26 AM" src="https://user-images.githubusercontent.com/80069382/122951382-3b8c7200-d34b-11eb-8166-2f36ac14be46.png">

#### Component Architecture

```structure


src
|__ components/
      |__ Nav.jsx
      |__ Footer.jsx
      |__ Search.jsx
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

| Task                                                               | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------------------------------------------ | :------: | :------------: | :-----------: | :---------: |
| Create backend models                                              |    H     |     2 hrs      |     2 hrs     |    2 hrs    |
| Create backend controllers                                         |    H     |     2 hrs      |     2 hrs     |    2 hrs    |
| Test full CRUD on backend                                          |    H     |     2 hrs      |     2 hrs     |    2 hrs    |
| Authorization                                                      |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| React App framework and folder structure. Installing dependencies, |    H     |     2 hrs      |     2 hrs     |    2 hrs    |
| Build api-config and auth files                                    |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| Layout screen and components                                       |    H     |     2 hrs      |     2 hrs     |    3 hrs    |
| Login and Sign Up Screens                                          |    H     |     2 hrs      |     2 hrs     |    2 hrs    |
| ComicsContainer and App.js                                         |    H     |     2 hrs      |     2 hrs     |    2 hrs    |
| Build Comics screen and ComicCard to view all comic strips         |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| CommicDetails screen                                               |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| Create and Edit screens                                            |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| Comment components                                                 |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| Building CreateComment                                             |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| Media Queries                                                      |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| Extra CSS                                                          |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| Deployment                                                         |    H     |     1 hrs      |     1 hrs     |    1 hrs    |
| Total                                                              |    H     |     42 hrs     |    42 hrs     |   42 hrs    |

<br>

### Server (Back End)

#### ERD Model

![Screen Shot 2021-06-22 at 1 15 44 PM](https://user-images.githubusercontent.com/80069382/122970544-0f2d2180-d35c-11eb-9f69-8caee0abb564.png)

<br>

---

## Post-MVP

- _users can share a comic strip_
- _users can like a comic strip_
- _users can rate a comic strip_
- _comic strip recommendations based on what user has liked or saved_
- _links to merchandise or books for sale_

<br>

---

## Code Showcase

> const handleChange = (e) => {

    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

};

return (
<>
<form
onSubmit={(e) => {
e.preventDefault();
handleUpdate(id, formData);
}} >
<h3>Edit</h3>
<label>
Title:
<input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />

## Code Issues & Resolutions

> It was tricky dealing with this code in particular. Everything was running fine in the back end and I couldn't figure out why the editing function for the comics wasn't functioning the way that it should. With some help, I found out that I wasn't passing the id on submit and therefore it wasn't rendering correctly.
