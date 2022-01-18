# Francofgp's Portfolio

### **What is this Repo about?**

Here you can find my portfolio made with React and Javascript
 
<div align="center">

![Imgur](/assetsReadme/introRepo.png)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

![JavaScript](https://badges.aleen42.com/src/javascript.svg)
![React](https://badges.aleen42.com/src/react.svg)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)



</div>


- [Francofgp's Portfolio](#francofgps-portfolio)
    - [**What is this Repo about?**](#what-is-this-repo-about)
    - [Docker Commands](#docker-commands)
  - [How To Use](#how-to-use)
  - [Linking Portfolio to GitHub](#linking-portfolio-to-github)
  - [Showcase](#showcase)
  - [Deployment](#deployment)
    - [Deploying to GitHub Pages](#deploying-to-github-pages)
    - [Deploying to Netlify](#deploying-to-netlify)
  - [Acknowledgements](#acknowledgements)
  - [License](#license)
  
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer or use [Docker](https://www.docker.com/products/docker-desktop).

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```
**Attention: It is not working with NodeJS v16.13.1**
### [Docker Commands](#docker-commands)

```
1) BUILD IMAGE : docker build -t developerfolio:latest .
2) RUN IMAGE: docker run -t -p 3000:3000 developerfolio:latest
```


## [How To Use](#how-to-use) 

From your command line, clone and run developerFolio:

```bash
# Clone this repository
git clone https://github.com/saadpasta/developerFolio.git

# Go into the repository
cd developerFolio

# Setup default environment variables

# For Linux
cp env.example .env
# For Windows
copy env.example .env

# Install dependencies
npm install

# Start a local dev server
npm start
```

## [Linking Portfolio to GitHub](#linking-portfolio-to-github)

Generate a GitHub personal access token following these [instructions](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) (make sure you don't select any scope just generate a simple token). If you are using [GitHub Actions](#configuring-github-actions-recommended) to deploy your portfolio you can skip this section.

1. Create a file called .env in the root directory of your project (if not done already in section: [How To Use](#how-to-use))

Note: Configuring environment variables before deploying your portfolio is highly recommended as some components depend on API data. 

```bash
- DeveloperFolio
  - node_modules
  - public
  - src
  - .env         <-- create it here
  - env.example  <-- this is the base file
  - .gitignore
  - package-lock.json
  - package.json
```

2. Inside the .env file, add key `REACT_APP_GITHUB_TOKEN` and assign your GitHub token like this, also add your username as `GITHUB_USERNAME`

```env
// .env
REACT_APP_GITHUB_TOKEN = "YOUR GITHUB TOKEN HERE"
GITHUB_USERNAME = "YOUR GITHUB USERNAME"
```

Set `showGithubProfile` to true or false to show Contact Profile using GitHub, defaults to false.

**Warning:** Treat your tokens like passwords and keep them secret. When working with the API, use tokens as environment variables instead of hardcoding them into your programs.

Note: Open Source Projects section only show pinned items of your GitHub.
If you are seeing something as shown below, follow these [instructions](https://docs.github.com/en/enterprise/2.13/user/articles/pinning-items-to-your-profile).

![ERROR](https://i.imgur.com/Hj6mu1K.png)

If the above solution still doesn't work, visit the [wiki page](https://github.com/saadpasta/developerFolio/wiki/Github-Setup-For-Open-Source-Projects).


## [Showcase](#showcase)

---

Full screenshot
![full screenshot](assetsReadme/screenshotPortfolio.png)

## [Deployment](#deployment)

### [Deploying to GitHub Pages](#deploying-to-github-pages)

This section guides you to deploy your portfolio on GitHub pages.

- Navigate to `package.json` and enter your domain name instead of `https://developerfolio.js.org/` in `homepage` variable. For example, if you want your site to be `https://<your-username>.github.io/developerFolio`, add the same to the homepage section of `package.json`.

- In short you can also add `/devloperFolio` to `package.json` as both are exactly same. Upon doing so, you tell `create-react-app` to add the path assets accordingly.

- Optionally, configure the domain. You can configure a custom domain with GitHub Pages by adding a `CNAME` file to the `public/` folder.

- Follow through the guide to setup GitHub pages from the official CRA docs [here](https://create-react-app.dev/docs/deployment/#github-pages).

### [Deploying to Netlify](#deploying-to-netlify)

You could also host directly with Netlify by linking your own repository.

[![Deploy To Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/saadpasta/developerFolio)

For more information, read [hosting on Netlify](https://create-react-app.dev/docs/deployment/#netlify).


## [Acknowledgements](#Acknowledgements)

---

-   [React](https://reactjs.org/) A JavaScript library for building user interfaces.
-   [typewriterjs](https://github.com/tameemsafi/typewriterjs) a delightful JavaScript Testing Framework with a focus on simplicity.
-   [react-easy-emoji](https://github.com/appfigures/react-easy-emoji) Super minimal emoji rendering utility for react.
-   [saadpasta](https://github.com/saadpasta/developerFolio) for your help in this ♥.
-   [color-thief](https://github.com/lokesh/color-thief) Grab the color palette from an image using just Javascript. Works in the browser and in Node.

## [License](#license)

Closures is provided under the [GPL v3](https://www.gnu.org/licenses/gpl-3.0.en.html).