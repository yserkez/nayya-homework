# Project Overview
This project is intended to demo the creation of the "Concierge Page". I opted to build with React + Typescript + TailwindCss for two reasons.
1. To demonstrate my experience with React in a practical manner.
2. To deliver a theoretically useful project.

The primary intentions of this project were to build the page in React components using best React, and Typescript practices. The page is not entirely functional in its interactivity and the styling must be completed per spec, however the components are built such that to complete these and connect it to an API is trivial.

The project can be seen live at https://nayya-yosef.surge.sh

**Why Typescript?** Typescript is great for ensuring best practices, readability, bug free, code. It helps not only large teams maintain code, but also the individual developer work quicker and more efficiently (after the brief learning curve), as I have experienced first hand.

**Why TailwindCss?** Tailwind is a fantastic css library with tons of utility classes and high configurability. With its low learning curve (if one already has css experience), Tailwind has helped me rapidly increase my efficiency. I have used it for multiple projects have only good things to say for it.

# Important Files
```
-- components
        -- Nav.tsx (Navigation bar in header.)
        -- NayyaWIthNotificationsCount.tsx (Nayya logo with notifications count.)
        -- NotificationPanel.tsx (Each notification renders this component. The component is dynamicly created from the props passed in.)
        -- OverviewPanel.tsx (Side bar with overview of current users spending. All data is dynamic and rendered based on the props passed in.)
        -- ProfileIcon.tsx (Profile Icon with users initial. Clickable for menu.)
        -- SpendingIcon.tsx (Top panel on page to summarize users spending.)
-- pages
    -- Concierge.tsx (Main page for this assignment. Handles the building of relevant components.)
-- App.tsx (Main file called by index.tsx upon site load. Contains MockData and passes that into our Concierge page.        Configured to handle the routing of pages.)
-- type.ts (Contains the typing for Notification. See this file for reference on how to create mock notification data.)
```

# MockData
The mock data populating the components. When running the app locally one can modify, or add data to this variable and see the changes live. Found in App.tsx line 7.
```
//App.tsx
const mockData = {
  user: {
    name: "Yosef",
    memberSince: "03/16/2021",
    potentialSavings: 2022,
    lifetimeSavings: 9283,
  },
  notifications: [
    //Duplicate this if interested in testing more notifications 
    {
      type: "claim", // can be claim, medical, dental, pharmacy, reminder
      name: "Bob",
      action: "Save up to",
      detail: "$247",
      message:
        "By submiting your urgent care claim dated Oct 27, 2020 to Guardian.",
      highlight: "urgent care claim",
      cta: "Save now",
      date: "3 min ago",
    },
    {
      type: "dental",
      name: "Joe",
      action: "Dental cleanings",
      detail: "2/yr",
      message:
        "Schedule your covered semi-annual dental cleaning with a dentist near you. Its not too late",
      highlight: "semi-annual dental cleaning",
      cta: "Save now",
      date: "2 hrs ago",
    },
  ],
};
```

# Run Locally
`npm install` and then `npm start`

# More Info on Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).