# The Shoppies - Movie Award Nomination App

## 2021 Shopify Internship Challenge

- <h5 style="color: #b0965a">A Movie Nomination App For The 'Shoppies' Awards. Searches the OMDB API for movie titles. Users then nominate their favourite 5 titles from the search results lists.</h5>
- <h5 style="color: #b0965a">Built for the 2021 Shopify UX/Web Developer Internship Challenge.</h5>

<h2 style="text-align: center"> Check out the deployed version <a href="https://movie-awards-app.netlify.app/">HERE</a></h2>

## Features

- <h5 style="color: #b0965a">Built using React, Axios, Storybook CSS, and HTML</h5>
- <h5 style="color: #b0965a">Utilizes The <a href="http://www.omdbapi.com/">OMDB</a> Open Movie Database API to search for movie titles.</h5>
- <h5 style="color: #b0965a">Live Search Bar Feature - Movie search results update on the page as characters are typed.</h5>
- <h5 style="color: #b0965a">Fully Responsive for optimal viewing on large and small devices.</h5>
- <h5 style="color: #b0965a">Subtle animations on a number of events help to draw subtle user attention to important items and events.</h5>
- <h5 style="color: #b0965a">When there are no nominations - Instructions are displayed in nominee panel.</h5>
- <h5 style="color: #b0965a">Top 5 searches are displayed. Click on the Nominate button to add to the nomination list.</h5>

- <h5 style="color: #b0965a">Once a movie is nominated - The button is disabled to prevent duplicate nominations.
  </h5>
- <h5 style="color: #b0965a">Nominations can also be removed by the user.
  </h5>
- <h5 style="color: #b0965a">A counter displays how many nominations currently exist out of the required 5.
  </h5>
- <h5 style="color: #b0965a">When 5 movies have been nominated -> The submission button becomes active and allows for user submission. 
    </h5>

  ## Final Product

    <p align='center'>Home (No search Items or Nominees)</p>
    <p align="center">
      <img src="https://github.com/skendanavian/shopify-intern-challenge-2021/blob/main/docs/home.png?raw=true" >
    
    </p>
  </p>
    <p align='center'>Home (With Search Items and  5 Nominees)</p>
     <p align="center">
      <img src="https://github.com/skendanavian/shopify-intern-challenge-2021/blob/main/docs/homeSearch.png?raw=true" >
    
    </p>

  </p>
    <p align='center'>Submission Animation Page</p>
    <p align="center">
      <img src="https://github.com/skendanavian/shopify-intern-challenge-2021/blob/main/docs/submission.png?raw=true" >
     
    </p>
  </p>

  ## Design and Development

- <h5 style="color: #b0965a">My goal with this project was to create both a modern and simple UI that reflects the elegance and prestige of a movie award event like the Academy Awards. I wanted it to grab the attention of the user while remaining highly accessible.</h5>

- <h5 style="color: #b0965a">The colors, fonts, text/border shadow, and animations all add to the award nomination experience.</h5>

- <h5 style="color: #b0965a">I wanted the app to be highly functional and fully responsive and placed a large focus on making that happen. The applications makes sure that users can not add more than 5 movie nominations, and also checks all search items agains the nominee list to disable buttons if the title and the year are a match.</h5>

  ## Some Future Goals and Improvements

- <h5 style="color: #b0965a">There are a lot more features that I would like to eventually add to the project. Here are a few of them.</h5>

- <h5 style="color: #b0965a">1. Email Form to send users their nominee lists and implement back end to persist data in a server side DB.</h5>
- <h5 style="color: #b0965a">2. A popup on page load which explains the awards, nomination process and how the site works.</h5>
- <h5 style="color: #b0965a">3. Show Movie Posters and additional information than the title and year. The API offers alot of info and it would be nice to utilize more of it. </h5>
- <h5 style="color: #b0965a">4. Show more than 5 search items at a time. Again, this means a layout change to handle the larger amount of content. </h5>

### Getting Things Running

- Fork and Clone the Repository
- Run <code>npm install</code>

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
