# Amplifyy

## Overview

Amplifyy is a project designed and developed as part of [Co.Lab5](https://www.joincolab.io/).
We wanted to create a new aggregation app that served the AAPI community and their allies
during this time of increases in violence and hate crimes.
It aims to inform via News Aggregation based on personal social interests, but also contains embedded calls to action via external links to verified sources.
It was designed by our very talented Product Designer [Gerald Tung](https://www.linkedin.com/in/geraldtung/) and made possible thanks to extensive research by our wonderful product manager [Michelle Chen](https://www.linkedin.com/in/mwjchen/) and coded by [me](https://www.linkedin.com/in/traciamanda).

## Tech Stack

1. ReactJS
1. MaterialUI
1. Express
1. Express-Sessions
1. PostgreSQL
1. Contextual Web Search API

## Setup

To start, please use `npm install` and then `npm run seed` to seed the database of resources. To run the article queries, you will need your own API Key available here:
https://rapidapi.com/contextualwebsearch/api/web-search and to update your own secrets file. Each user login is made using Express Sessions and then saved in the user model.

## Start

Sync and seed your database by running `npm run seed`. Running `npm run start:dev` will make great things happen!

- start:dev will both start your server and build your client side files using webpack

### Heroku

You can see this deployed site at
[amplifyy.herokuapp.com](https://amplifyy.herokuapp.com)
