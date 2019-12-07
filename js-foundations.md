# ASSESSMENT 2: FOUNDATIONS OF JAVASCRIPT
## Interview Practice Questions

### Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

Consider the function:

var text = 'outside'
function logIt(){
  console.log(text)
  var text = 'inside'
}
logIt()


1a. Look at this Javascript function and try to predict what the console show.

inside

1b. Test the function. Explain why the function returned what it did.

  Your answer: It comes back undefined because we haven't passed var text = 'outside' as an argument of the function, and the console.log() is run before text is defined later in the function.

  Researched answer: It comes back as undefined due to variable hoisting. In JavaScript the declaration is hoisted and the initialization is not, so we end up with a variable with no value assigned to it.


2. What is JSON?

  Your answer: JSON is a way to create objects that are a collection of key:value pairs.

  Researched answer: JSON stands for JavaScript Object Notation. It is used to store information in an easy-to-access manner. It gives us data that is easy to read.


3. What does CRUD stand for?

  Your answer: no idea

  Researched answer: CRUD stands for Create, Read, Update and Delete, referring to operations performed in a database or datastore.



4. What does are the 5 HTTP verbs?

  Your answer: not sure

  Researched answer: HTTP defines a set of request methods to indicate the desired action to be performed for a given resource. These request methods are sometimes referred to as HTTP verbs. The five most useful methods for web development are GET, HEAD, POST, PUT, and DELETE.


5. What is a higher-order function?

  Your answer: A higher-order function is a function that takes another function as an argument or returns a function as a result.

  Researched answer: Higher-order functions are functions that operate on other functions, either by taking them as arguments or by returning them. There are various higher-order functions built into JavaScript, however we can also create our own.


6. STRETCH: What is a closure, what is it good for and how do you recognize one?

  Your answer:

  Researched answer: A closure is the combination of a function bundled together with references to its surrounding state. A closer gives you access to an outer function's scope from the inner function. In JavaScript, closures are created every time a function is created, at function creation time.


7. STRETCH: What is an API?

  Your answer:

  Researched answer: Application Programming Interfaces are constructs made available in programming languages to allow developers to create complex functionality more easily. They abstract more complex code away from you, providing some easier syntax to use in it's place.


### Additional Feedback Questions.

1. Do you have a suggestion for a Check In question?

What is an interesting fact about yourself?

2. What was your favorite topic this week?

Getting into React was fun, and I look forward to learning how to work with that better.

3. What was your "A-ha!" moment this week?

I feel like I had many of those moments this week, but the most satisfying was when I started my assessment for this week, and I realized I know a lot of information and I'm able to apply my knowledge a lot easier this week than I could last week.