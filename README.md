<div  id="top"><div>

<!--

*** This is the Readme for Budget tracker 

-->

  

<!-- Project Shields -->

  

[![LinkedIn][linkedin-shield]][linkedin-url]

  

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  

<!-- Project Logo -->

<br  />

<div  align="center">

<a  href="https://intense-bastion-97617.herokuapp.com/">

<img  src="./public/assets/images/logo.png"  alt="logo">

<br>Click the logo to launch APP<br>

<a/>

<h3  align="center">

Budget Tracker

</h3>

<p  align="center">

MongoDB powered Database
<br  />

<a  https://github.com/aaguirre7/friendly-system">

<strong>Explore the docs</strong>

</a>

<br  />

<br  />

</div>

  

<!-- TABLE OF CONTENTS -->

<details>

<summary>Table of Contents</summary>

<ol>

<li>

<a  href="#about-the-project">About The Project</a>

</li>

<li>

<a  href="#what-was-done"> What was done</a>

</li>

<li>

<a  href="#instalation"> instalation</a>

</li>

<li>

<a  href="#usage"> usage</a>

</li>

<li>

<a  href="#contact">Contact</a>

</li>

  

</ol>

</details>

  

<!-- ABOUT THE PROJECT -->

## About The Challange

  

[![Product Name Screen Shot][product-screenshot1]](./public/assets/images/11-express-homework-demo-01.png)

  

### The Task

  


```md
AS AN avid traveler
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am traveling 

```

  

### Criteria

  


```md
GIVEN a budget tracker without an internet connection
WHEN the user inputs an expense or deposit
THEN they will receive a notification that they have added an expense or deposit
WHEN the user reestablishes an internet connection
THEN the deposits or expenses added while they were offline are added to their transaction history and their totals are updated
```
  

### What was done

  

Created a No-SQL mongodb database with routes for API and schema for the DB. connected the Atlas mongoDB to Heroku and deployed so the aplication is live. a Worker was created to cache the transactions if the app is being used offline. 

  

App build in:
 
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?logo=css3&logoColor=white&style=for-the-badge)  
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?logo=html5&logoColor=white&style=for-the-badge)  
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?logo=javascript&logoColor=%23F7DF1E&style=for-the-badge)  
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB&style=for-the-badge)  
![NPM  ](https://img.shields.io/badge/NPM-%23000000.svg?logo=npm&logoColor=white&style=for-the-badge)  
![Node.js  ](https://img.shields.io/badge/node.js-6DA55F?logo=node.js&logoColor=white&style=for-the-badge)  
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?logo=mongodb&logoColor=white&style=for-the-badge)

  

### Instalation

Run this app directly from our [Heroku deployment](https://intense-bastion-97617.herokuapp.com/)  
If you want your own:

 1. Fork
 2. Clone
 3. install nodejs & and Mongodb
 4. in the APP directory run: `npm i`
 5. then run: `npm start`
 6. go to localhost:3001
 7. ENJOY!

  

### Usage

  

Run the following from the directory where you have downloaded the repo.

  

```

  

npm start

  

```

  

this is only if you want to run this in your own deployment. the live app is currently deployed on heroku.

 

-------------------------

Thank you for taking time looking at this page.

  

Happy painting!

  

<p  align="right">(<a  href="#top">back to top</a>)</p>

  

<!-- CONTACT -->

## Contact

  

Abraham Aguirre Aguirre.Abraham@gmail.com

  

Project Link: [https://github.com/aaguirre7/friendly-system](https://github.com/aaguirre7/bug-free-commerce)

  

<!-- MARKDOWN LINKS & IMAGES -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

[linkedin-url]: https://www.linkedin.com/in/abraham-aguirre-1b237293/

[product-screenshot1]: ./public/assets/images/screenshot_1.png

