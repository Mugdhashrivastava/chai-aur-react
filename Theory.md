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