Q1.What is react? 

1.=>React is a JavaScript Library created by Facebook in 2013(jordan walke) and           
it is used for creating dynamic and interactive applications
React is an open-source and component-based front-end JS library.   

2.=>It is used for creating single page web or mobile applications.
3.=>It's main function is data rendering
4.=>React also allow us to create reusable UI components.(which helps to maintain the code when working on larger scale projects).
5.=>React js is all about components.
6.=>React JS application is made up of multiple components and each component has its own logic and controls

Q2.Features of React:
1.JSX (JavaScript Syntax Extension)
2.Virtual DOM 
3. SPA
4.One-way data binding
5.Performance
6.Good community support
7.Components based(reusable components)



1.What is JSX ?
JSX (JavaScript Syntax Extension)=>  JSX is a combination of HTML and JavaScript. We can embed JavaScript objects inside the HTML elements.
It is a type of file used by React which allows developers to directly write HTML like template syntax in React and makes it really easy to understand. Basically it helps
to avoid writing the  functions like appendChild() or React.createElement() function which is the feature of ECMA Script 5 where as JSX is the feature of ECMA Script 6.
JSX converts HTML tags into react elements. 
=> It is also known as extension to Javascript.

2.What is DOM ?
DOM => When a web page is loaded, the browser creates a Document Object Model of the page.
web browser creates a DOM of the webpage when the page is loaded
whatever code of html and css part goes in browser so it's create tree like structure known as DOM 

VIRTUAL DOM :-
First we understand that what is dom so whenever the html, css and javascript file goes to browser and run first time then it will create tree like structure this structure is also known as document object model.
So react is used special like dom called virtual dom instead of real dom, other js framework updates real dom which makes the web application slow.
Whenever any react application gets loaded on screen for the first time react component gets mounted.
Now when any user makes changes on the screen like button click bcz of which the state variable will get updated so in this cases the change will not directly go to real DOM instead react uses virtual dom so we are having two virtual dom one virtual dom created during mounting of component so it si a copy of real dom and another virtual dom contains the new updates, states Now this two virtual dom will get compared to each other and will check for the new changes this complete procedure known as "diffing algorithm."
Now the new changes will be updated in our real dom this process is known as "Reconciliation" So manipulating virtual dom is much faster.


3. What is SPA ?
=>Single Page Application means whenever any event is occured in an application then that application not getting reloading ,
 such type of appliactions is known as Single Page Application.
=>When we create React application using CRA, it always create the application which will be Single page application.
 In react by using router we create single page applications.
=> When we click on the button or select any option in navigation bar then our website is not getting reloading in browser
 it directly updates the content of our website such type of websites are the example of SPA.

Q3.What is CRA?
CRA is a boilerplate.
=> It installs packages like react,react-DOM, Babel, Webpack etc. which will be used 
to run our React Application on web browser without any configuration.
=> Developed by Facebook
=> CRA allow us to create

->Why Browesr can't understand JSX?
=> Browsers cannot read JSX because there is no inherent implementation for the browser engines to read and understand it. You can use babel to transform your jsx into native javascript and HTML which browser can understand.
=> Browser reads only Javascript objects but JSX is not regular Javascript object.(Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser.) So we need engine to convert into Javascript regular objects(babel for it).
Q4. What is Babel?
=> Babel is a Javascript transpiler.
=> It converts new JS version (ES6 and JSX) to old version (ES5), so that it can be run in the browser. 
=> Browsers does not support ES6, so we use Babel to compile ES6 to ES5.



<!-- Q5. Difference between Library and Framework? -->
:Library is a collection of functions
	:Framework is a collection of multiple other libraries.
	:Inversion of Control = In case of library the Execution of code will be decided by the developers whereas in case of framework the execution is already defined or decided.
	:In case of Framework, it follows MVC structure (model view controller) whereas a library can only be the one for example React is View of MVC
	:Framework provides you a structure in which you just put down the code your functionality , in case of library its developers duty to design the structure.



=>To build a single page app using React-router
=> Achieving high performance due to SPA



Q6. In react why we move from class component to function component ?
=> As we know javascript is a functional programming language, 
thats why we are moving from class component to function components.

We are moving from class components to functional components in React because : 
  * Class components have a proper structure like constructor and this keyword which is tricky to use , in case of fucntional component we dont have to follow any such structure.
  * Since JS is a functional programming language , so classes are not that much preferred
  * Functional component is faster in execution compared to class


What is the purpose of render() in React.

# React JS library has 2 components i.e. functional and class components.
# Class components uses render() function.
# React renders HTML to the web page by using a func. called render().
(The ReactDOM.render() function takes two arguments, HTML code and an HTML element.)
# Purpose of the function is to display the specified HTML code inside the specified HTML element.
# In the render() method , we can read props and state and return our JSX code to the root Component of our app.
# In the render() method, we cannot change the state, and we cannot cause side effects( such as making an HTTP request to the webserver).

*  In class component render() method is used to display the UI of the DOM structure which if not called 
     nothing will be displayed on the browser

________________________________________________________________________________________________________________

## Asynchronous JavaScript: Asynchronous code allows the program to be executed immediately where the synchronous code will block further execution of the remaining code until it finishes the current one



SN	Props	(props stands for properties.)                                                   State
1.	Props are read-only.	                          State is both read and write (State changes can be asynchronous.)
2.	Props are immutable.	                          State is mutable.
3.	Props allow you to pass data from one             State holds information about the components.
        component to other components as an argument.	  (The Data is passed within the component only.)
4.	Props can be accessed by the child component.	  State cannot be accessed by child components.
5.	Props are used to communicate between components. States can be used for rendering dynamic changes with the component.
6.	Stateless component can have Props.	          Stateless components cannot have State.
7.	Props make components reusable.	                  State cannot make components reusable.
8.	Props are external and controlled by whatever     The State is internal and controlled by the React Component itself.
              renders the component.
9.      Props are arguments passed into React components.

10.     Props are passed to components via HTML attributes.


___________________________________________________________________________

How can you update the state of a component?
=>
We can change state in both Functional as well as in child components:

Child component:
i)  When we declare state in constructor method in child component we can modify that state using this.setState() method.
ii) This is achieved by using the above method inside an event trigger method like onClick();
iii)The trigger method is then bound to the class and when it is called then this.setState() will run inside that and
    modify the state.

Functional component:

i)  Functional components do not use setState method instead they use hooks for the declaration as well as modification of the states.
ii) useState() React hook is used for achieving this which takes in 2 parameters first state name and second state modify method.
iii)As mentioned above whenever an event is triggered then the state modify method will be called from the trigger method and modify the state.


_________________________________________________--




ROUTING => it helps to use SPA
=>  React Router is used to define multiple routes in our application.



# Lifecycle Methods ( Class Component )

## Mounting :
When an instance of a component is being created and inserted into the DOM.

## Updating :
When a component is being re-render as a result of changes to either its props or state 

## Unmounting : 
When a component is being removed from the DOM



## Mounting :
1. constructor                      [ only in mounting ]
2. static getDerivedStateFromProps
3. render   
4. componentDidMount                [ only in mounting ]

## Updating :
1. static getDerivedStateFromProps
2. shouldComponentUpdate
3. render
4. getSnapshotBeforeUpdate
5. componentDidUpdate

## Unmounting : 
1. componentWillUnmount




# Mouting Phase
### Constructor
- constructor is a initial phase where we set our state variabels using this.state
{} => this bracket is for to write JS in HTML(JSX)

- A special type of function that will get called whenever a new component is created.
- Used to initialize states & Binding events.
- Not perform, Http req.

### static getDerivedStateFromProps (rarely used)
- When the state of component depends on change in props.
- set the state
- Not perform, Http req.


### render
- Only Required Method
- Return JSX
- Children component Lifecycle methods also get execute
- Not perform, Http req.


### componentDidMount
- Invoked immediately after a component and its child components have been rendered to DOM
- Perform any AJAX call to load data.



# Updating Phase
### static getDerivedStateFromProps
- Method is called every time a component is re-rendered.
- set the state
- Not perform, Http req.

### shouldComponentUpdate
- Dictates if the component should re-render or not.
- Perfomance Optimization
- Not perform, Http req.

### Render
- Only Required Method
- Return JSX
- Not perform, Http req.

### getSnapshotBeforeUpdate()    [Rarely Used]
- Called right before the changes from the virtual DOM are to be reflected in the DOM.
- Capture some Information From DOM

### componentDidUpdate()
- called after the render is finished in the re-render Cycles.
<!-- - Cause side effects -->


### Unmounting Phase ( LAST WISH )
- Method is invoked immediately before a component is unmounted and destroyed.
- Cancelling any network req. , also invalidating timers.
- DO NOT CALL THE SetSTATE METHOD