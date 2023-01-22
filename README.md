## Marvel application :love_you_gesture:

The application is a comics catalog where users can see a list of comics by Marvel.

### Running the app :star:

The app is deployed on https://marvel-explorer-seven.vercel.app/
If you want to run it locally, clone the repo and run the following:

> My node version running this app v16.4.0

```
npm install
npm run dev
```


### User stories :point_left:

- When a user enters the page, a list or grid of comics by Marvel should be displayed including
the following information:
Image, Title, Issue Number, Price
- **Infinite Scrolling** : The Marvel comics endpoint is returning 20 comics at a time.
Once the user scrolls to the bottom, more comics should be loaded from the endpoint ( you can
use the offset parameter to ask for a different results “page”).
- Responsive App


 **Tech Used** :
  1. ReactJS
  2. Typescript
  3. Tailwind CSS
  4. Intersection Observer API
  
This app was created with Vite

