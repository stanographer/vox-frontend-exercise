# Vox Media Front-End Engineer Interview Exercise

## Intro

This web app allow editors to place published stories on the home page of the website, and organize the order in which they'll appear on that page.

The queued stories appear on a column on the right where the stories originally appear chronologically but the users are able to move them around via their mouse or keyboard.

The published stories appear in the "Live on the page" section on the right where the published stories will appear in the order in which they were dragged into the live-on-page queue. Users are then able to move the items around at any time, and the dashboard will reflect the placement of the story via a "Not placed" flag for items still awaiting publishing in the queue or "Hero story" if it's the top story in the "Live on page section" or "Slot X" with "X' reflecting the numerical slot the story holds on the list.

The button at the top resets the stories back to the Queue in database order. Clicking on "Save Changes" persists the story choices to localstorage (for now).

This app is my implementation based of this task given the project description and accompanied mock-up found at [https://gist.github.com/gesteves/6a5e01c13f46d5707c36ab1418252b7a](https://gist.github.com/gesteves/6a5e01c13f46d5707c36ab1418252b7a).

## Design Principles

This is a simple front-end application that does not have a formal backend. It uses Redux to fetch original data from a hard-coded file and populates the application state. Once loaded, the main container component, App.js initializes its state based on application state.

As the user rearranges the stories, those changes are only reflected in App's component state. Clicking Save Changes fires a Redux action that updates the global application state, to which all events are subscribed to via a loadState middleware which handles changes to the application state by attempting to save them (using try-catch in case the user does not allow localstorage access) or tries to retrieve any saved state in favor of populating the application state with the hard-coded values.

This is meant to simulate the fetching and putting of data on a server backend.

## Installation

To install this application, you will need Node 10.x.x or higher installed on your system.

Installing is as simple as:

1. Cloning the repo onto your system via:
```sh
git clone https://github.com/stanographer/vox-frontend-exercise.git
```

2. Installing the dependencies locally:
```sh
npm install
```

3. Running the dev script to run locally on your machine:
```sh
npm run dev
```

4. Or if building for production, running the build script:
```sh
npm run build
```