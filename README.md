<textarea id="source">

<h1 class="slide-header">Functions</h1>

<span id=time-estimate class="color-grey-500">60 mins</span>

<p id="lesson-description">
One of the best ways to create buggy code is to copy-paste a few lines of code across many files, then trying to update those lines consistently later. Luckily we have functions, or blocks of code you can run on command to perform a specific routine. Just call the function’s name and it comes running. In this lesson, we’ll learn how to wrap our reusable code into functions.
</p>

<h5 id="topics-header" class="color-grey-500">Topics</h5>

Writing Functions

<hr>

Function Inputs and Outputs

<hr>

Scope in JavaScript

<hr>

---

<h1 class="slide-header">Learning Objectives</h1>

<p>By the end of this lesson, you'll be able to:</p>

<ul>
  <li>Write and execute functions.</li>
  <li>Provide input for functions using parameters and arguments.</li>
  <li>Use return statements to store a function’s output.</li>
</ul>

---

<h1 class="slide-header">Not Like This...</h1>

Imagine you’re creating a battle game where a player can take damage from lots of sources — other players, monsters, machines, and more. To program the game, you’d have to write the exact same lines for every situation in which the player could get damaged:

```javascript
if (enemyAttack === true) {
   player.health -= 1;
   player.damageTaken += 1;
   player.points -= 100;
} else if (monsterAttack === true) {
   player.health -= 1;
   player.damageTaken += 1;
   player.points -= 100;
} else if (machineAttack === true) {
   player.health -= 1;
   player.damageTaken += 1;
   player.points -= 100;
}
```
...and so on.

If you decided that players should only lose 50 points when they take damage, you’d have to track down EVERY appearance of that line of code in the program, which might be in dozens or hundreds of places. This is a recipe for buggy code and long, hard-to-read programs. Time for functions to step in.

---

<h1 class="slide-header">...Like This</h1>

We can bundle up those lines of code into a **function**:

```javascript
function takeDamage() {
    player.health -= 1;
    player.damageTaken += 1;
    player.points -= 100;
}
```

Later in our game program, we can use that function by invoking it with its name, `takeDamage()`. If we need to add more logic to this procedure, all we have to do is change this one block of code.

---

<h1 class="slide-header">The Need for DRY Code</h1>

Functions not only modularize our work, they also allow us to save time and effort when writing programs.

This is an important programming practice known as “**D**on’t **R**epeat **Y**ourself,” or DRY coding. When our code is DRY:
* It’s easier to maintain.
* It performs better.
* It’s more readable.
* It’s less buggy.

That’s basically everything you want your code to be. Sounds great, right?

![](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/js-unit-assets/dry.png)

---

<h1 class="slide-header">Defining a Function</h1>

Let’s take a look at a simple function to break down its parts:

![](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/js-unit-assets/function.png)

* First, we have the `function` keyword, which lets JavaScript know we’re declaring a function.
* Then, we write the function’s name — in this case, `sayHello`. **A function’s name should always describe what the function does.**
* The parentheses are there to define parameters or any input the function requires. This function has no parameters, but we still put empty `()` after the function name.
* Then, we have the code block we want to execute surrounded by curly braces. This should seem familiar — it’s the same way we defined a code block for conditionals and loops. The idea is the same; we define what we want to happen under certain conditions (in this case, when the function is invoked).

---

<h1 class="slide-header">Invoking a Function</h1>

Once you’ve defined the function, getting it to execute is as easy as using the function’s name with parentheses included: `sayHello()`.

A common error for first-time programmers is forgetting to call the function after defining it.

This JavaScript won’t actually do anything:
```javascript
function sayHello() {
    console.log("Hello!");
}
```

But this code will, as we invoked the function by adding its name. (You might also hear this referred to as “calling” the function.)
```javascript
function sayHello() {
    console.log("Hello!");
}

sayHello();
```

---

<h1 class="slide-header">Sing Out!</h1>

Let’s practice by writing and invoking a function that logs the chorus of your favorite song.

* Name the function `sing`.
* Inside the function, use a `console.log()` with the lyrics of your choice.
* Once you’ve defined the function, bring it into action by invoking it one time.

<iframe height="300" style="width: 100%;" scrolling="no" title="Sing Out" src="https://codepen.io/GAmarketing/embed/bGJBmzJ?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
   See the Pen <a href="https://codepen.io/GAmarketing/pen/bGJBmzJ">
   Sing Out</a> by General Assembly (<a href="https://codepen.io/GAmarketing">@GAmarketing</a>)
   on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

<h1 class="slide-header">Using Our Functions</h1>

We can make our functions a lot more complicated than just logging statements.

For example, if you were a coffee shop owner, you could create a function to calculate the total cost of a latte:

```js
function latteTotal() {
  const price = 4.50;
  const salesTaxRate = .10;
  const totalAmount = price + (price * salesTaxRate);
  console.log("The total is $" + totalAmount);
}
```

But, what if you wanted to calculate the price of an Americano? Should you write another function called `americanoTotal()` that performs the same calculation with a different price? What about calculating the prices of scones or donuts? Writing all of these functions doesn’t sound like DRY code, does it? 

---

<h1 class="slide-header">Introducing Parameters</h1>

We can give the function different information to work with using **parameters**. Instead of doing the same thing with the same information each time, we have the function perform the same tasks on any data we give it.

Remember how we’ve been leaving the `()` after our function’s name empty? It’s time to throw some parameters in there. Here’s how we’d refactor the `latteTotal()` function to work for any product in our coffee shop:

```javascript
function calculateTotal(price, salesTaxRate) {
   const totalAmount = price + (price * salesTaxRate);
   console.log("The total is $" + totalAmount);
}
```

A few things to note:
* There’s nothing special about the words `price` or `salesTaxRate`. We’re using descriptive names to remember what information we’re providing our function. It’s up to you to choose parameter names that make sense for what you’re trying to do.
* We can add multiple parameters separated by commas in the parentheses.

---

<h1 class="slide-header">From Parameters to Arguments</h1>

When we invoke a function, we replace parameters with the data we want them to actually use. The data we provide when invoking a function is called an **argument**. 

Here’s how we’d invoke a function with arguments:

```javascript
function calculateTotal(price, salesTaxRate) {
   const totalAmount = price + (price * salesTaxRate);
   console.log("The total is $" + totalAmount);
}

calculateTotal(4.50, .10);
```

In this example, `4.50` corresponds to `price` and `.10` corresponds to `salesTaxRate`. **The order the arguments are written is important**, because it tells JavaScript which parameters they represent.

---

<h1 class="slide-header">Hello, You!</h1>

Now that we know about parameters, let’s make a friendly function that can greet anybody by their name. 

* Define a function named `helloThere()`.
* It should have one parameter for the `name` of the person we’re greeting.
* It should log the message `Hello, _____!`, filling in the `name` in the blank.

<iframe height="300" style="width: 100%;" scrolling="no" title="Hello, There!" src="https://codepen.io/GAmarketing/embed/jORVeJN?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
   See the Pen <a href="https://codepen.io/GAmarketing/pen/jORVeJN">
   Hello, There!</a> by General Assembly (<a href="https://codepen.io/GAmarketing">@GAmarketing</a>)
   on <a href="https://codepen.io">CodePen</a>.
 </iframe>

---

<h1 class="slide-header">What Comes Out of a Function</h1>

Just as crucial as what goes into a function is what comes out of it. So far, we’ve been using `console.log` to view the results of our function. But what if we don’t want to log the results immediately?

The output of a function is called its **return** value, and we use the `return` keyword inside the function to define the output.

Let’s refactor our `calculateTotal()` function so that the result is returned:

```js
function calculateTotal(price, salesTaxRate) {
   return (price + (price * salesTaxRate));
}
```

Now, we can use the result of the function. We could create a new variable called `total` and use it to store the result of `calculateTotal()` so that we can refer to it elsewhere.

```javascript
const total = calculateTotal(4.5, .10);
```

---

<h1 class="slide-header">Return vs. Console.log</h1>

At this point, you might be wondering about the actual difference between `return` and `console.log`. They both give you output, right?

Think of a function like a vending machine. You feed in your money and choice of selection, and you expect a product to come out of it. A `console.log` is the equivalent of a message on the machine that tells you, “I got your request for M&M’s.” It’s a helpful message, but you sure can’t eat it! The machine has to `return` something to you — in this case, the bag of M&M’s — which is the output of whatever you told it to do.

Although most of our examples up to this point have used `console.log`, in a real application, those statements are mostly used to debug what’s going wrong. A mature, finished browser application should have no `console.log` statements at all, because (hopefully) all of the bugs are fixed.

![](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/intro-js/vending-machine.png)

---

<h1 class="slide-header">Your Programming Powers Have Multiplied</h1>

Write a function named `multiply()` that accepts two parameters and returns the result of multiplying the given numbers.

<iframe height="300" style="width: 100%;" scrolling="no" title="Your Powers Have Multiplied" src="https://codepen.io/GAmarketing/embed/poBNxYv?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
   See the Pen <a href="https://codepen.io/GAmarketing/pen/poBNxYv">
   Your Powers Have Multiplied</a> by General Assembly (<a href="https://codepen.io/GAmarketing">@GAmarketing</a>)
   on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

<h1 class="slide-header">Scope</h1>

Now that we’re more familiar with the concept of code blocks, we can discuss the idea of **scope**. In JavaScript, where you declare a variable or function affects where it can be used by the program. Scope helps us specify if and how a program can use specific variables and functions.

The curly braces surrounding a code block — in a function or conditional statement — define a new scope, which will limit how you can access variables **outside** of the scope.
* **Globally scoped** variables aren't declared inside of any code block, and are available anywhere in the program. 
* **Locally scoped** variables are only available inside of the code block they're declared within. A `let i = 0` declaration inside of a for loop is a classic example– you won't be able to access that particular `i` variable outside of the for loop.

Let’s look more closely at global and local scope.

---

<h1 class="slide-header">Global Scope</h1>

A **globally scoped variable** is one to which the entire program has access. Most of the variables we’ve defined so far have been global in scope. They’ve been defined outside of a function or specific code block, which means all scripts and functions on a webpage can access them.

In the code below, the `brother` variable is a **global variable** because it’s defined on its own, outside of a specific function:

```js
const brother = "Phillip";

function sayHello() {
   console.log("Hello " + brother);
}

sayHello();   // brother can be accessed here

console.log(brother);   // and brother can be accessed here
```

---

<h1 class="slide-header">Local Scope</h1>

Conversely, a **locally scoped variable** is declared inside of a code block and can only be accessed by other members of the same code block. It cannot be referenced outside of that code block, which means it cannot be called or used outside of the braces in which it’s contained.

In the code below, we can call `sayHello()` with no trouble, but the `console.log` will give you `undefined`, because the variable it’s trying to access is local to a function:

```js
function sayHello() {
   const brother = "Phillip";
   console.log("Hello " + brother);
};

sayHello();   // brother would be logged here...

console.log(brother);   // but it can’t be accessed on its own here.
```

---

<h1 class="slide-header">Knowledge Check</h1>

What will we get from the `console.log` below?

```js
if (user === "me") {
   const permitted = true;
}

console.log(permitted);
```

<fieldset>
    <legend>Please select one of the following</legend>
<input type='radio' name='answers' id='answer1' value='answer1' correct='true'/><label for='answer1'>true</label><br />
<input type='radio' name='answers' id='answer2' value='answer2' /><label for='answer2'>me</label><br />
<input type='radio' name='answers' id='answer3' value='answer3' /><label for='answer3'>undefined</label><br />
</fieldset>
<button class='ant-btn ant-btn-primary multiple-choice-radio-submit'>Submit Answer</button>

---

<h1 class="slide-header">The Arrow Function</h1>

The oldest way to write a function is how we’ve already been doing it: by using the `function` keyword. 

In newer versions of JavaScript, there’s another syntax for defining functions called **arrow functions**.  Here’s the same function, written both with the `function` keyword and as an arrow function:

```js
// Older way:
function calculateTotal(price, salesTaxRate) {
   return (price + (price * salesTaxRate));
}
calculateTotal(4.5, .10);

// Newer way:
const calculateTotal = (price, salesTaxRate) => {
   return (price + (price * salesTaxRate));
}
calculateTotal(4.5, .10);
```

Things to note:
* Only the first line of the function changes.
* Instead of using `function` to define the function, we use `const`.
* Then, we separate the parameters using a `=`, followed by the “arrow” symbol, `=>`.
* There are some advanced differences between regular functions and arrow functions, but we don't need to get into those here. If you're curious, check out <a href="https://www.geeksforgeeks.org/difference-between-regular-functions-and-arrow-functions/" target="_blank" rel="noreferrer noopener">this article</a> that explains them.

---

<h1 class="slide-header">Knowledge Check</h1>

How could we rewrite the following function using the arrow function syntax?

```js
function embraceChange() {
  console.log("Now I'm an arrow function.");
}
embraceChange();
```

<details>
  <summary>Reveal Answer</summary>
  Here’s how that function should look now. Because this function has no parameters, we’ll leave the `()` blank (however, we still need to include them).

  ```js
  const embraceChange = () => {
     console.log("Now I'm an arrow function.");
  }
  embraceChange();
  ```
</details>

---

<h1 class="slide-header">Functions and Arrays</h1>

The last few concepts we’ve learned are especially powerful in combination with each other. Let’s try writing a function named `printArray()` with the following guidelines:

* `printArray()` accepts an array as a parameter, which you could name `arr`.
* `printArray()` uses a `for` loop to iterate over each element in order to log each element to the console.

<iframe height="300" style="width: 100%;" scrolling="no" title="With These Powers Combined" src="https://codepen.io/GAmarketing/embed/MWRbPxa?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
   See the Pen <a href="https://codepen.io/GAmarketing/pen/MWRbPxa">
   With These Powers Combined</a> by General Assembly (<a href="https://codepen.io/GAmarketing">@GAmarketing</a>)
   on <a href="https://codepen.io">CodePen</a>.
 </iframe>
---

<h1 class="slide-header">Conclusion</h1>

Functions are the key to creating re-usable, readable programs. Instead of a pile of lines of disorganized code, you end up with clearly named blocks that add up to bigger things.

You're now ready to start practicing JS with code challenges on sites like [Codewars](https://www.codewars.com/) or [LeetCode](https://leetcode.com/), which typically take the form of "Write a function that does _________."

</textarea>