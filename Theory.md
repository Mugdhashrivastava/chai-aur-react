# VIDEO 2 CHAI AUR REACT
web : react Dom
mobile: react Native
npx - node package executer
 * name can no longer contain capital letters because of npm naming restrictions:


#### Terminal commands used :
    npx create-react-app 01basic
go to that folder by cd and ls
    npm run start

    npm run build : gets all the js folder
    cd .. : gets you out one layer


Package.json:gives info about project

### create react app : 
    bkwas method /bulky/time taking 
    this is why we will use vite 


# Using Vite 
- faster technique
    1. npm create vite@latest
    2. enter project name:  01vite
    3. enter Package name:  01vite
    4. select framework: React
    5. select a variant : javascript

- now run 
    1. cd 01vite
    2. npm install
    3. npm run dev



# in basic react app :01basicreact
    in src 
        delete setupTest.js
        reportWebVitals.js
        App.test.js
        App.css
        remove comments and import './index.css'; in index.js
        remove import logo from './logo.svg'; in app.js
        remove all unecessary stuff

    write your code in app.js
    npm run start(in your project)

# VIDEO 3 CHAI AUR REACT
    package-lock.json : locks the stable version of the dependecies
    manifest.json:mobile devices 
    we only care about index.html which has main code.It is also called SPA single page application.

   - DOM: Tree structure. React makes its own DOM
   - App: simply a function that returns html
   - writing html like thing in js


#### Vite se run krne ka tareeka 
npm run dev
(see in scripts from package.json)


#### git-ignore
tells which files should be or shouldnt be pushed into github


in jsx file you can only return one tag at a time
so to manipulate it we will retuen one element only like empty tag <></> that is we will retuen a fragment 
now inside these empty tags you can add however tags you wanna add
So we are still keeping the convention of jsx while doing what we want
yayyyy

we are making js files in src files


## video 4
original library creation
exploration lession

props means properties. It is basically an object with all the properties is in as key value pair


run the project using go live of html not the terminal

- shift + option + arrow = replicates the line down
- cd .. gets you out of the file one level


## video 5 Why do we need hooks??

created vite app vite viadd=
    npm create vite@latest
    cd 02counter
    npm intsall
    nom run dev

Go to app.jsx clear pre existing div and write the code that you wanna write in empty <></>

in 02counter app i , Mugdha Shrivastava has created the counter app  where one button increase the value of counter while the other decreases it. We have used useState in here.


## video-6 Virtual DOM, Fibre and reconcilliation : interview only 
we should still study virtual dom
Do we still use virtual DOM in react ??? No
But will we still study?? Yes 
- ReactDOM.createRoot(document.getElementById('root')).render
- Main DOM Vs Virtual DOM
Here createRoot creates DOM like structure behind the scenes and compare its DOM with the main DOM and only updates that part which is updated in the main DOM
this is how virtual DOM works

[Article for React fiber](https://github.com/acdlite/react-fiber-architecture)

React Fibre is core algo of React.
It increases the sustainability of animation,layout gestures .

### Features of fiber
1. incremental rendering: ability to split rendering work into chunks and spread it out over multiple frames.
2.  pause, abort, or reuse work as new update come in 
3. the ability to assign priority to different types of updates
4.  new concurrency primitives.


### Recocillation Process = Virtual DOM
The  Diffing  algorithm compare two trees, one is the main DOM tree of the browser and the second one is the react tree created by the createRoot.

Usage of diffing algo in react to identify which parts are to be changed is called reconcillation process.

###update 
A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.


Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. 

- Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."


The key points are:

- In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
- Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.
- A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.

## Fiber
functionality
1. pause work and come back to it later.
2. assign priority to different types of work.
3. reuse previously completed work.
4. abort work if it's no longer needed.

### Structure of fiber : 
study after completing react


## Video-7 : Tailwind and Props in react Js
npm create vite@latest

