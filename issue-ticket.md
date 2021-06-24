# PROJECT ISSUE TICKET

## Unexpected Behavior

> When trying to update / put for an item it is returning as "PUT http://localhost:3000/comics/[object%20Object] 404 (Not Found)"

## Expected Behavior

>

## Reproduce the Error

> Describe the steps we can take to reproduce the error, i.e.:

```md
1. Clone this repo.
2. Run `npm start`.
3. Navigate to the landing page.
4. Login with username: user password: 123456
5. Click on 'Check It Out', which should return the API data set.
6. Scroll down to an editable item.
7. See the subsequent error in the console.
```

## Documentation

>

```md
xhr.js:177 PUT http://localhost:3000/comics/[object%20Object] 404 (Not Found)

Uncaught (in promise) Error: Request failed with status code 404
```

## Attempted Resolution

>

```md
1. https://stackoverflow.com/questions/48070452/uncaught-in-promise-error-request-failed-with-status-code-404
```
