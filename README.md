# image-grid-scroller

POC application for virtual scrolling 10.000 images from Flickr

# Description

Comments in no particular order:

1. The app is using the ngRX Store for state management and effects for getting the data from Flickr.

2. Modules:
  - Shared module: for other shared components, ex. loading-spinner
  - Scroller module: specific for the features requested

3. Regarding styling, I prefer to use the BEM methodology whenever it makes sense and keep different files for a logical (from my perspective :D) separation of variables, functions etc.

4. For making sure there will be no rendering issues due to the number of items, I used the virtual scrolling with the ScrollerRoutingModule

5. I'm sure I missed other cool ideas, so if you have any other questions about aproaches and decisions made during the development process, don't be shy and ask :)


# ImageGridScroller

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
