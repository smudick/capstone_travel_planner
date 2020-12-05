# Front End Capstone -- Travel Planner

## User Story
When logged in to Travel Planner, a user should be able to plan and view their ideal travel itinerary. 

### Home Page
On the home page, the user will see two buttons, one to start planning a new trip and one to view saved itineraries they had previously built. If they click on the new trip button, a modal will prompt them to select the city they are travelling to and the date they are going to be there. Each day is planned out individually, so if they are planning a multi-day trip, separate itineraries will need to be built for each day. Once they have selected their city and date, they can press the Add Activities button to start adding activities to save for their trip. 

### Activities Page
On the activities page, the user can save an activity in two ways, by searching for activities or creating their own.

They can search for a place in the provided search bar to query the Yelp data base for matching results. Searches can be specific, like Starbucks and The Ryman, or general, like coffee shop and concert venue. The top five matching results will appear as cards displaying the name, address, description, rating, and a picture in the search results section. To save an activtity, the user can click the "plus" button on the card which will move it over to the saved activities section.

To create a custom activity, the user can click the Build Custom Activity button. A modal will appear with a form asking for the name, description, address and a picture of the custom activity. If no picture is uploaded, a default photo will be added to the card. Once the form is submitted the information will also be displayed in card form in the saved activities section.

If a user would like to remove a saved activity or edit, they may do so by clicking the edit and remove buttons on the saved activity cards. 

Once the user is satisfied with the amount of activities saved, they can click the create itinerary button to move on to the create itinerary page. 

### Create Itinerary Page
On the create itinerary page, the user can organize their saved activities into an itinerary of their day arranged by time. 

To put a saved activity in a specific time slot, the user will need to select the activity from the dropdown menu of the corresponding time slot. Once the activity is in a time slot, it can be removed, making it available for selection at a different time. If the user decides to add additional activities, they may do so by pressing the "add more activities" button which will take them back to the Activities page. When they are satisfied with their itinerary the user may click the "save itinerary" button to go the saved itineraries page. 

### Saved Itineraries Page
This page displays previously saved itineraries the user has made. They appear as cards with the city name and date as the title, and a predetermined picture of the city as the body. To see a detailed view of a saved itinerary, a user may click on the corresponding card. 

### Single Itinerary Page
This page displays a detailed view of a single saved itinerary. Each activity's name and address are displayed in its time slot. Time slots where no activity was placed are displayed as "free time". To edit the itinerary the user may click the edit button to be routed back to the create itinerary page. They can also get back to the Saved Itineraries page by clicking the "back" button



## ERD
![Screen Shot 2020-12-01 at 8 13 32 PM](https://user-images.githubusercontent.com/65687019/100819459-d5bdb480-3411-11eb-93c6-0d0016aefcb9.png)

## Wireframes Here
https://www.figma.com/file/wHVTrLgz59tqB7xvDpwjWw/Capstone-Travel-Planner?node-id=0%3A1

## Project Planning Video
https://www.loom.com/share/ba0499bdb02049518d8101a9bc378cb1
