# GitHub_Hub


They asked me to write a program that calls the GitHub Api and show a user's repositories. [I was inspired for the cause](http://www.newyorker.com/magazine/2007/07/09/the-insurgent), and so here is my ode

[Demo](https://jkontiki.github.io/github_hub/)

**NOTE:** _Project **MUST** be experienced with audio._


## Limitations

Project has not been optimized for different window sizes, and will particularly not layout well on mobile devices.


## Functionality

* The app can receive an inputted username
* It can display that user's public repositories from GitHub
* If no repositories exist for user, a backup message displays
* If GitHub username does not exist, defaults to 'JKonTiki'
* If connection still fails, safety net message displays


## Instructions

This project has been deployed onto gh-pages (link at the top), but can also be served locally through node.js for slightly better performance.

* clone repository
* change into the directory `cd github_hub`
* run `npm install` and `bower install` to download dependencies (may take a minute)
* run application with `gulp serve`
* have fun


## Credits

This software is licensed under MIT license.

Copyright (c) 2016 Jeremy Fryd.
