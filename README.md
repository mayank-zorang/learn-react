# Learn React 🚀

# Parcel

- Dev build
- Local server
- HMR -> hot module replacement
- File watching Algorithm - written in C++
- Caching - Faster build
- Image optimization (most expensive for browser)
- Minification (while production build)
- Bundling
- Compressing
- Consistent Hashing
- Code splitting
- differnetial Bundling -> to support older browsers/version
- Diagnostic
- Error Handling
- HTTPs
- Tree shaking -> remove unused code
- Different build for dev and production

# Food Ordering App

/_
Header
-logo
-Nav Items
Body
-Search
-RestaurantContainer
-RestaurantCard - Food-Image - Name, Rating, Price, cuisine delivarytime etc
Footer
-copyright
-Links
-Address  
_/

# Two types of Export/Import

- Default Export/Import

export default Component;
import Component from "path"

- Named Export/Import

export const Component
import {Component} from "path"

# React Hooks

(Normal JS utility function)

- useState() - use to create State varaible in react
- useEffect -

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build store
- Connect store to our app
- Slice (cardSlice)
- dispatch(action)
- Selector

# Type of Testing as Developer
- Unit Testing
- Integration
- End to End testing - e2e testing

# setting up Testing in our app
- Install React Testing Library
- Install Jest
- Install Babel dependencies
- Configure Bable
- Configure Pracel config file to disable default bable transpilation
- jest configuretion 
- jsom library 
- install  @babel/preset-react for make jsx work for test case
- Include  @babel/preset-react inside the babel config
- Install  @testing-library/jest-dom