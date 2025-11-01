# State management using React-Redux


## About Redux 
 - redux is a state management library for javascript application 
 - react-redux is a library that work as a bridge between react and redux 
 - It help us to manage the state of the app it redces the number of rerenders in the app which is a important thing

### the idea is to learn Redux so i thought to make a simple app that has items and we can add multiple items and it will give the bill summary 

 1. created a store which contains store.js and all the slices in my case cartSlice.js 
 2. created components for the app itemsList,billSummary and items.
 3. wrap the main app component in provider which includes the store in it.
 4. create the initialState of the app in cartSlice.js
 5. created a cart Slice in cartSlice.js with all the essential reducers(functions)
 6. configuring our store.js
 7. add things in all components
 8. add css


## 🛠️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/tushar0i/webdev-logs.git
cd react/state_management
```
or use this [link](https://download-directory.github.io/?url=https%3A%2F%2Fgithub.com%2Ftushar0i%2Fwebdev-logs%2Ftree%2Fmain%2Freact%2Fstate_management) to download zip file

### 2️⃣ Install dependencies
```bash
npm install
```
_or if you use yarn:_
```bash
yarn install
```

### 3️⃣ Start the development server
```bash
npm run dev
```

Your app will be running at **http://localhost:5173**


... ignore \
(just practicing touch-typing) \
Honestly saying I was following harkirat cohort 2.0 and I was at state management(recoil) lecture but my code was not working so then I found out that meta has archived the project so I started learning redux. 