# GitHub_Hub

https://jkontiki.github.io/github_hub/

This project was inspired by a simple code school assignment: write a program that calls the GitHub Api to show a user's repositories. I happened to have been taken by [this article](http://www.newyorker.com/magazine/2007/07/09/the-insurgent) the evening before, and was inspired to tie in a greater theme relating to the contemporary open source movement. 

**NOTE:** _Project **MUST** be experienced with audio._


## Limitations

Project has not been optimized for variable media queries, and will particularly not layout well on mobile devices.


## Specs

* The app can receive an inputted username
* It can display that user's public repositories from GitHub
* If no repositories exist for user, a backup message displays
* If GitHub username does not exist, defaults to 'JKonTiki'
* If connection still fails, safety net message displays


## Instructions

This project has been deployed onto gh-pages (link at the top), but can also be served locally through node.js for slightly better performance.

-clone repository

-retrieve API token from github by navigating to settings page of personal account

-create .env file with the following scripts: _exports.apiKey = "...";_ (where '...' is the token retrieved from GitHub);

-have fun


## Credits

This software is licensed under MIT license.

Copyright (c) 2016 Jeremy Fryd.
