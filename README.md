![ESTUDANTINDER](/.github/README.png)

# Estudantinder Web App

Languages: [![EN](/.github/EN.png)**EN**](/README.md) | [![BR](/.github/BR.png)**BR**](/README.pt-br.md)

Estudantinder deals with the search and encounter of other students, in order to increasingly develop their autonomy in their studies. See [Estudantinder's official website](https://estudantinder.com.br/) for more information.

## Usage

### Site

Simply go to the website https://estudantinder.com.br wherever you want, it can be on your cell phone, notebook, desktop or even on TV!

## Installation

You will need some tools to run the project locally. If you just want to access the site, see the topic [Usage](#usage)

### GIT

- Install git on your machine: https://git-scm.com/downloads
- With git installed on your machine, clone the repository using the **Code** button at https://github.com/Estudantinder/estudantinder-api

### NodeJS

- Download the LTS version of the node at https://nodejs.org/en/
- To test whether node is installed on your machine, run the following `node -v` command. The NodeJS version should appear

### Yarn

- Download the newest version of yarn at https://classic.yarnpkg.com/en/docs/install
- To test whether yarn is installed on your machine, run the following `yarn -v` command. The version of Yarn should appear

### Installing the packages

- Inside the project folder, run the following command: `yarn`

### Create development styling

- Within the project folder, run the following command: `yarn dev`

### Opening the index.html file

- Open the src/index.html file in your favorite browser

Well done! You can now start using the website, go to the [Scripts](#scripts) tab to see which scripts are available for use

## Scripts

All of these scripts can be run on your machine using yarn

The script parameters will be represented with a `$` prefix

### dev

```shell script
yarn dev
```

Creates the src/styles.css file to create all the tailwindCSS styling, use this command only in case the tailwind.config.js file is modified

### build

```shell script
yarn build
```

Creates the src/styles.css file to create all the styling **used** in the src/index.html file

**After running the script:** Copies all files from the src folder to the public folder

## Used tools

You can see all the project's dependencies at the following link: https://github.com/Cauaspinheiro/estudantinder-web/network/dependencies

## Mobile Application

You can see the application's mobile application in the following repository: https://github.com/Estudantinder/estudantinder-mobile

## Rest API (Backend)

You can see the backend application in the following repository: https://github.com/Estudantinder/estudantinder-api
