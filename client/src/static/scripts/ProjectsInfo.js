const portfolioProjects = {
  geteller: {
    name: 'ge.teller',
    site: 'https://github.com/Diaresta/Grand-Exchange-Stocks',
    image: '/images/projects/geteller-ex.jpg',
    about:
      "ge.teller is a tool to assist players in traversing the video game OldSchool RuneScape's Grand Exchange. Data is congregated from the official OldSchool RuneScape and OSRS Wiki APIs to provide players with up to date item information. While other Grand Exchange websites offer users item data updates within a week, they lock everything sooner behind a paywall. ge.teller prides itself in giving users free up to date item data within the minute. Using React for the front end, real-time updates are provided via a Node.js/Express server. ge.teller's buy/sell feature provides players a medium to make mock item transactions.  These purchases are stored on a MongoDB database, allowing users to track their purchase history.",
    code: 'https://github.com/Diaresta/Grand-Exchange-Stocks',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API', 'Sass'],
  },
  draftboys: {
    name: 'DRAFTBOYS',
    site: 'https://github.com/Diaresta/DRAFTBOYS',
    image: '/images/projects/draftboys-ex.jpg',
    about:
      "Draftboys is a Magic: The Gathering draft simulator, allowing a player to partake in draft gameplay as if they're seated around a table with friends. Draftboys uses Handlebars as a view engine as well as pure JavaScript for the front end, with a Node.js/Express server and MongoDB database. Foregoing external APIs, Draftboys’ client-side stores all MTG card sets as JSON Objects, allowing quick and dynamic retrieval of cards to be drafted. When a user completes a draft, Draftboys allows them to download their cards as a text file. These text files can then be easily imported into companion software such as MTG Arena and MTG Online, allowing users to play full Magic: The Gathering games online with their decks created on Draftboys.",
    code: 'https://github.com/Diaresta/DRAFTBOYS',
    tech: [
      'ES6 JavaScript',
      'Handlebars',
      'Node.js',
      'Express',
      'MongoDB',
      'REST API',
    ],
  },
  vandal: {
    name: 'Vandal',
    site: 'https://github.com/Diaresta/Valorant-Map-Strats',
    image: '/images/projects/vandal-ex.jpg',
    about:
      'Vandal is a tool to assist players in planning out strategies for their Valorant matches. With the ability to draw, and place Agents along with their skills onto maps, Vandal strives to give players freedom in expressing and bringing their ideas to life in a fun and dynamic way. Vandal’s front end uses React, with all dynamic assets fetching from local JSON Objects. These assets are then placed upon Vandal’s canvas, the app’s focus, allowing its drawing and dragging functionality.',
    code: 'https://github.com/Diaresta/Valorant-Map-Strats',
    tech: ['React', 'Node.js', 'Sass'],
  },
  shine: {
    name: 'Shine',
    site: 'https://github.com/Diaresta/Slippi-Stats-Website',
    image: '/images/projects/shine-ex.jpg',
    about:
      'Shine is a tool that parses .slp files, computes stats, and displays them in a visibly succinct way, with inspiration from head-to-head sports stats. Shine uses Handlebars as a view engine as well as pure JavaScript for the front end, with a Node.js/Express server. Multer’s used for users to upload .slp files, files that hold recorded player inputs from a game of Super Smash Bros. Melee. Shine then parses the data from the uploaded file, and structures into stats that display what occurred throughout the match. These stats include macro match info such as who won and characters being played, and goes as micro as average kill percents and damage per opening, as well as much more.',
    code: 'https://github.com/Diaresta/Slippi-Stats-Website',
    tech: ['ES6 JavaScript', 'Handlebars', 'Multer', 'Node.js', 'Express'],
  },
};

exports.portfolioProjects = portfolioProjects;
