# The Movies

The application for watching list of popular movies (updates daily) from The Movie Database API, you can search movie by name or click on it and read more abt specific movie. On each page located 20 movies.

![example](https://user-images.githubusercontent.com/59844722/175820055-45e7a508-5728-4ad5-b68b-9003e887304b.jpg)


## Thechnologies

Angular 14,
Angular Material,
rxjs,
The Movie Database API

## Presentation

You can see how it looks https://supermegaprojectmovies.web.app/movies

## How to run

0. Clone project to your computer
1. run "npm install" to install all modules
2. run "npm start"
3. Navigate to `http://localhost:4200/ 
   The application will be there.


## How it works

The application has a few components: list of movies, search field, about component, pagination.
When we open the app, it's loading genres and popular movies from API's provided below
https://developers.themoviedb.org/3/movies/get-popular-movies
https://developers.themoviedb.org/3/genres

Because of genres in Array<number> instead of Array<string> we need to use list of all genres and change number
of genre to string in movie object before it showed in UI.

Search field on top of the page starting searching for movies immidiatly after typing
The API https://developers.themoviedb.org/3/search/search-movies

It's replacing popular movies list on page

You can navigate from 1 page of results to another by using pagination at bottom of page.

By clicking on specific movie opens about component with info about the movie. You can return to main page by clicking on logo at top-left part of screen or use you mouse and choose "Back" option.



## Concerns

1. when we getting data from specific movie by id we getting full information about movie, but if we getting list of popular movies the data about movie twice less and
some properties has not the same data. For example, genres: {id:number, name: string} and genre_ids with Array<number>.
solved: by using different movie interfaces and additional action
  
 2. i faced server restriction when you can't reach 501 page - only 500 or less. You choosing the last page and getting error.
 Thats means you have more data but can't get it
 solved partially: by setting max count of results 10000 (500pages * 20 results)
  
 
