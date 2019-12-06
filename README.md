# OldBikes-Blog
OldBike`s Blog System


This is a simple blog system based on React JS

used external libraries in project: 
- react-avatar - to create avatar for users when they create a post - https://www.npmjs.com/package/react-avatar
- react-responsive-carousel - used for landing page with slideshow from four images - https://www.npmjs.com/package/react-responsive-carousel
- mdbreact - used for React Bootstrap with Material Design Components - https://www.npmjs.com/package/mdbreactjs

used Bakc-end:
- Kinvey - https://console.kinvey.com/

Basic Functionality in Application

Unauthorized users can see:
- the landing page, 
- About section, 
- Login,
- Register 

Authorized/LoggedIn users can see:
- Home page with listing of last 9 posts ordered by date of creation,
- About section
- Create post page
- Edit post page if there are an author of current post
- Delete post if there are an author of current post
- Logout
