🍽️ TasteBuds
TasteBuds is a modern food ordering app built using React and Tailwind CSS, inspired by platforms like Swiggy. It showcases dynamic restaurant listings, menu categories, shimmer loading UI, and more.

📁 Folder Structure:

tastebuds-app/
├── .parcel-cache/

├── dist/

├── node_modules/

├── src/

│   ├── components/

│   │   ├── About.js

│   │   ├── Body.js

│   │   ├── Contact.js

│   │   ├── Error.js

│   │   ├── Header.js

│   │   ├── ItemList.js

│   │   ├── RestaurantCard.js

│   │   ├── RestaurantCategory.js

│   │   ├── RestaurantMenu.js

│   │   └── Shimmer.js

│   ├── utilities/

│   │   ├── constants.js

│   │   ├── mockData.js

│   │   └── useOnlineStatus.js

│   ├── index.css

│   ├── index.js

│   └── index.html

├── .gitignore

├── package.json

├── tailwind.config.js

└── README.md


 Getting Started

 1.Clone the repository

    git clone https://github.com/UmarZiya/TasteBuds.git


    cd TasteBuds
          
2.Install dependencies

    npm install

3.Run the app locally

    npm run start

The app will be served on http://localhost:1234/ (Parcel default port)



Built With


React – Frontend library

Tailwind CSS – Utility-first CSS framework

Parcel – Zero-config build tool

GitHub – Version control

Features


💡 Shimmer UI while loading

📦 Lazy loaded components

📶 Custom hook for online status detection

🧾 Dynamic restaurant menu with categories and items

🎨 Fully responsive layout with Tailwind