## This is a single page application created for a job application at Achievers.

~~The application is under construction, and will be online and running in 48 hours.~~
The project is finished now, with all basic funcionalities working properly. 

The deadline of handing in the application is August.21, I will keep maintaining the project and adding new features until then.

Most work should be done in the first 48-hour sprint, though, since after that there are a lot of interviews and final exams waiting on the timeline.

You can view the current build at: https://cheukhoyun.github.io/app_for_achievers/

### Purpose of this project:

- Demonstrate that the applicant is able to perform full-stack web development.
- Show off the applicant's knowledge about technologies including React, Redux, NodeJS, Bootstrap, etc. (Which techs will be used will be decided on the fly.)
- Show the applicant's ability to gather information, learn new concepts and build stuff in a very short period of time.

### Updates:

- Aug.18 20:00: Added several basic components and applied some css styles.
- Aug.18 21:55: Added a dummy button and a counter, having fun with conditional rendering.
- Aug.18 22:43: Tried some API call to SWAPI. Works in Safari but not in Chrome, gonna fix it.
- **Aug.18 23:14: Switched to TMDB API, the fetch is working properly. Will use it for later build.**
- Aug.18 23:51: Correctly installed bootstrap, included a sample usage.

- Aug.19 19:18: Added the search bar. This stuff starts to look pretty.
- Aug.19 20:35: Things are looking better and I'm more comfortable with bootstrap now.
- **Aug.19 22:50: All buttons have correct appearance now. Can't get fetch to work on click, learning about promise now.**
- **Aug.19 23:00: Successfully fetching data based on user input. Only tasks left: Format movie cards onto the page, make the shopping cart component.**
- Aug.20 01:25: Fixed a weird bug caused by "submit" typed buttons.
- Aug.20 01:52: Component template for movie cards is done. Ready to do the format.
- Aug.20 03:01: Successfully mapping movie cards to their positions. Time for some sleep.
- Aug.20 03:04: Fixed some typos in README.md
- Aug.20 09:55: Back to work
- **Aug.20 11:01: Fixed the filter by rating feature.**
- **Aug.20 12:05: Succesfully making movie cards with fetched poster img. When the poster is not available, correctly points to local default pic.**
- Aug.20 12:40: Added purchase button and information for movies that will show up when mouse hovering over.
- Aug.20 13:15: Bunch of visual bugs got fixed.
- Aug.20 13:47: Buttons all set up. Last task: implement shopping cart.
- **Aug.20 15:15: Shopping cart is visually done.**
- **Aug.20 16:38  Everything works. Now, polish the code and the README file.**

### What's done & what's next (Sprint Review):

- Total duration: 48 hours.
- Actual coding time: ~16 hours.
- Features:
  - With TMDB API, allows users to search for movies by keyword.
  - User can choose to include adult content, or not to.
  - The search result can be filterd so that only movies above desired ratings will be displayed.
    - 5 Stars -> rating >= 7.4
    - 4 Stars -> rating >= 6.5
    - 3 Stars -> Everything
  - Movies are displayed as cards, which contains the poster, the title, and a purchase button with price on it.
  - When hovering your cursor over the poster, you will see the movie's rating and a piece of overview.
  - There is a price calculated based on the movie's popularity. The more popular it is, the more expensive it will be. Maximum price is set at 19.99\$
  - Users can add movies to the shopping cart.
  - Inside the cart, a list of items is displayed. Total amount is calculated.
  - Users can remove items from the cart. There is also a check out button which is not functional.
- Possible next steps:
  1. Setting up a register / log-in system. May use API's from Google and others to allow login with those accounts.
  2. To implement the Check Out button, take user to a check out page, and allow them to do transaction with credit cards. There are plenty of credit card API's out there that can be utilized.
  3. Introduce more searching criterias (actors, genre, etc.)
  4. Allow users to sort the results using different rules. At the moment it's defaulted to by ElasticSearch score of the results.
  5. Some of the above features (1&2) require a backend server. I'm not sure if Git pages can host a backend Node / Python program. Will need to figure out.
- Bugs to be fixed / Small features to be implemented:
  - Need to set up a protocol to handle failed fetch requests.
  - Need to delete some code written for debugging purpose and the code commented out.
  - Add an animation for "add item to cart".
  - ~~Add an extra button for closing the cart.~~ Done
