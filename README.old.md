# Front End Coding Assessment

It’s worth mentioning that we care about testing our code here at Podium, and it would be beneficial for you to demonstrate how you test in the challenge as well.

Shakespeare has been getting a lot of reviews recently about his plays. So far he has managed to build a backend API to serve them, but he doesn’t have the chops to finish out the UI. That’s where you come in, your task is to build a client side app for Shakespeare’s API. The **design** of the application is up to you.

### API Documentation

**Authentication:**

- Authentication is done by passing your API token using the **x-api-key** header. The value of this header will contain nothing more than just the token value.
- Your authentication token is: ```H3TM28wjL8R4#HTnqk?c```

**Endpoints:**

Two endpoints exist for this API.

1. **Reviews Index**

    - **GET** [https://shakespeare.podium.com/api/reviews](https://shakespeare.podium.com/api/reviews)
    - Response looks like this:
```
  [
    {
        "rating": 0.8,
        "publish_date": "2016-09-05T23:25:47.642350Z",
        "id": "9783221620868",
        "body": "The fool doth think he is wise, but the wise man knows himself to be a fool.",
        "author": "Kaley Schiller"
    },
    {
        "rating": 3.2,
        "publish_date": "2016-09-04T23:25:47.642388Z",
        "id": "9793364045824",
        "body": "Can one desire too much of a good thing?.",
        "author": "Fay Lemke"
    },
    {
        "rating": 4.1,
        "publish_date": "2016-09-03T23:25:47.642545Z",
        "id": "9784620626604",
        "body": "How bitter a thing it is to look into happiness through another man's eyes!",
        "author": "Tatyana Olson"
    }
]
```


2. **Reviews Show**

    - **GET** [https://shakespeare.podium.com/api/reviews/:id](https://shakespeare.podium.com/api/reviews/:id)
    - Response looks like this:
```
{
    "rating": 0.8,
    "publish_date": "2016-09-05T23:25:47.642350Z",
    "id": "9783221620868",
    "body": "The fool doth think he is wise, but the wise man knows himself to be a fool.",
    "author": "Kaley Schiller"
}
```
