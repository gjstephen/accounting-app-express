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
One of the biggest challenges was being able to record a single transaction with multiple line items as individual yet connected entries in the database, with the creation of it being user friendly. I settled on a system where each line item is treated as its own form; each form is submitted by the one button and includes the common journal information (ie date, journal number) that the user has only needed to add in once.

Because I wanted to limit all access to only signed in users this presented another challenge that I could persist the logged in user, and session, information to be able to create and retrieve the right data. This information needed to be passed through each React component so that all had access to it, and it required me to restructure my component layout.

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
