# LocalArtCo - client side
Developed of our final proyect at IronHack. It's a MERN Stack application, check the frontend repository [here](https://github.com/eoGimenez/localartCo-server).

## About
We are Lucas, Lucia and Eugenio we met each other at the web development Bootcamp of IronHack. 

 Local Art Co. connects artisans with physical stores.  Artisans leave their products in consignment, set the price, and stores sell the products and earn a percentage. We guarantee a fair deal for all parties involved.

![Project Image](https://res.cloudinary.com/dxk04cijr/image/upload/v1678989961/localartco/navbarlogo_bjkqoq.png "Project Image")

## Deployment
You can check the app fully deployed [here](localartco.netlify.app. If you wish to view the API deployment instead, check [here](https://localartco.netlify.app/login).

## Work structure
We decide to use [Trello](https://trello.com/b/pWR9rkVU/app) to organize the workflow.

## Installation guide
- Fork this repo
- Clone this repo 

```shell
$ cd fair-trade-client
$ npm install
$ npm start
```

## Routes
| Route                | Privacy         | Renders                  |
| -------------------- | :-------------: | ------------------------ |
| /                    | public          | Home.page                |
| /signup              | public          | Signup.page              |
| /login               | public          | Login.page               |
| /profile             | private (user)  | Profile.page             |
| /profile/:userId     | private (user)  | Profile.page             |
| /posts               | private (user)  | Posts.page               |
| /post/:postId.       | private (user)  | PostDetails.page         |
| /post/new            | private (user)  | PostNew.page             |
| /logout              | private (user)  | Home.page                |


## Components
- FormUser
- Profile
- Footer
- Loading
- Navbar
- Inbox
- Navbar
- Categorias
- ChatBox
- InBox
- NewPostForm
- PostCard
- PostDetail
- PostFilter
- PostUpdate
- IsPrivate
- IsAnon
- HomeVideo

## CustomHooks
- useCategory
- useField
- useFile
- usePosts

---
