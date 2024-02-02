# Website

Source code for Tattle's website. Its hosted at [tattle.co.in](https://tattle.co.in/)

Other than reading our tweets, blog and mailing list, reading the commit history of this repo is a great way to know what we are upto.

## Developing Locally

The website is built using [Gatsby](https://www.gatsbyjs.com/).
<br><br>
Install all the relevant dependencies

```sh
npm install
```

To start the development server run 
```sh
gatsby develop
``` 
A development server will be started at [http://localhost:8000](http://localhost:8000), the GraphQL structure will be deployed at [http://localhost:8000/__graphql](http://localhost:8000/__graphql) 

To build a production ready version of the website. Run, 
```sh
gatsby build
```

### How to Add an Update?
To make a change/ addition to the [Updates](https://tattle.co.in/updates) section on the website, could be done by adding/ editing a markdown file (.mdx).
The mark down files can be found in the udpates folder under src.
```
src   
└───updates
│   │   file1.mdx
│   │   file2.mdx
```
The .mdx files should look like this
```sh
---
date: YYYY-MM-DD
title: "Example Title"
excerpt: "A small demo of the .mdx file"
url: "https://tattle.co.in/updates"
tags: Demo, Example
---
```
**NOTE** 
- The format should be followed, else an error might occur
- It is important to add the _"day"_ in the date. 
- Currently, tags cannot be written as arrays. 

### Adding Tags to blog posts
Try to from the following list of tags
1. bts (behind the scene), announcement
2. Themes : responsible-ai, online-harms, civic-agency
3. Topic : archives, misinformation, content-moderation, media-literacy, web-scraping

## Tech Stack

Gatsby, ReactJS, Github Actions


REsume 
hyphen case all tags
    limit the number of tags