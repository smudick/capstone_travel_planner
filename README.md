# Front End Capstone -- Travel Planner

<a href="https://sm-travel-planner.netlify.app/">Link to Deployed Site</a>

[![Netlify Status](https://api.netlify.com/api/v1/badges/c44b79f2-12aa-4ad6-9ef2-2c2d4a7bc1b1/deploy-status)](https://app.netlify.com/sites/sm-travel-planner/deploys)

## User Story
![screencapture-sm-travel-planner-netlify-app-2021-01-24-21_10_39](https://user-images.githubusercontent.com/65687019/105656893-e24a1080-5e88-11eb-97d7-17e579593c9f.png)
When logged in to Travel Planner, a user should be able to plan and view their ideal travel itinerary. 

### Home Page
![screencapture-localhost-3000-2020-12-18-18_29_25](https://user-images.githubusercontent.com/65687019/102676615-06b51d80-4164-11eb-8059-58c9357714b7.png)
On the home page, the user will see two buttons, one to start planning a new trip and one to view saved itineraries they had previously built. If they click on the new trip button, a modal will prompt them to select the city they are travelling to and the date they are going to be there. Each day is planned out individually, so if they are planning a multi-day trip, separate itineraries will need to be built for each day. Once they have selected their city and date, they can press the Add Activities button to start adding activities to save for their trip. 

### Activities Page
![screencapture-localhost-3000-activities-2020-12-18-18_29_59](https://user-images.githubusercontent.com/65687019/102676614-0583f080-4164-11eb-911d-80e9756a0187.png)
On the activities page, the user can save an activity in two ways, by searching for activities or creating their own.

They can search for a place in the provided search bar to query the Yelp data base for matching results. Searches can be specific, like Starbucks and The Ryman, or general, like coffee shop and concert venue. The top five matching results will appear as cards displaying the name, address, description, rating, and a picture in the search results section. To save an activtity, the user can click the "save" button on the card which will move it over to the saved activities section.

To create a custom activity, the user can click the Build Custom Activity button. A modal will appear with a form asking for the name, description, address and a picture of the custom activity. Once the form is submitted the information will also be displayed in card form in the saved activities section.

If a user would like to remove a saved activity or edit, they may do so by clicking the edit and remove buttons on the saved activity cards. 

Once the user is satisfied with the amount of activities saved, they can click the create itinerary button to move on to the create itinerary page. 

### Create Itinerary Page
![screencapture-localhost-3000-single-itinerary-MOsNFEoPh15K7rEhdxU-2020-12-18-18_30_49](https://user-images.githubusercontent.com/65687019/102676613-0452c380-4164-11eb-96cd-b8635930d92f.png)
On the create itinerary page, the user can organize their saved activities into an itinerary of their day arranged by time. 

To schedule an activity, the user may click the "schedule an activity" button at the top of the page. This will open a modal asking them to select from a list of saved activities and set a start time and duration for the activity. Once submitted, the activity will display in the itinerary below, arranged from top to bottom according according to start time. The height of the activity is determined by the length of time. If the user wants to add more activities, they can click the "add more activities" button to go back to the previous page. Once they are happy with their schedule, they can save the itinerary, which takes them to the saved itineraries page. 

### Saved Itineraries Page
![screencapture-localhost-3000-saved-itineraries-2020-12-18-18_31_33](https://user-images.githubusercontent.com/65687019/102676610-02890000-4164-11eb-8b2a-d1c3fdd94114.png)
This page displays previously saved itineraries the user has made. They appear as cards with the city name and date as the title, and a predetermined picture of the city as the body. To return to a detailed view of a saved itinerary, with editing capabilities, a user may click on the corresponding card. 




## ERD
![Screen Shot 2020-12-01 at 8 13 32 PM](https://user-images.githubusercontent.com/65687019/100819459-d5bdb480-3411-11eb-93c6-0d0016aefcb9.png)

## Wireframes Here
https://www.figma.com/file/wHVTrLgz59tqB7xvDpwjWw/Capstone-Travel-Planner?node-id=0%3A1

## Project Planning Video
https://www.loom.com/share/ba0499bdb02049518d8101a9bc378cb1
