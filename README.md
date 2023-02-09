# Simple Accounting App
I have created a web app where users can create record accounting transactions through creating manual journals and view them in simple reports.

# :computer: [Click here](https://accounting-app.fly.dev/) to see my live project!

# :page_facing_up: About
- In order to use the app you will need to create an account.
- To create a manual journal navigate to the 'create' tab and select 'manual journals'.
- After you have created your journal you can view summaries of total journals in a variety of reports.

# :pencil2: Planning & Problem Solving
- I started out planning all the features that I wanted to add to the website.
- I then split them into core features and additional features, based on their necessity for getting the web app up and running.
- Based on this list I considered and planned the data types I would be using and how best to store them.
- I started implementing the basic create and read features of the manual journals themselves as this was the foundation for the whole app.
- I built up the reports and styling around the specific information that I wanted to display.

# :rocket: Cool Tech
- Node JS, PSQL
- React
- Express
- Bcrypt, express-sessions

# :scream: Bugs to fix :poop:
- add in some input validation on the manual journals page to ensure journals are recorded correctly
- some reports break when loading whithout the user having logged in.

# :sob: Lessons learnt
Learning how to store and retrieve list information of unknown size in a database was tricky, especially when also being able to display it on the webpage in a usable and appropriate format. This was the most challenging part of the project for me was this data manipulation in psql.

# :white_check_mark: Future features
- more reports!!
- filter and sort features for reports (specifically detailed general ledger)
- ability to create journals of more than two lines
- record transactions by entering purchase or sales invoice
- add ability to create and manage multiple entities
- show reports based on selected entity rather than user creator
- potential fx conversion based on currency
- ability to add and store files (eg invoices) to manual journals
- manual journals auto-repeat on designated days
- export tables into excel
- add customer and supplier lists
