<h2>Intro to programming/JavaScript</h2><br />

Before we can write any code at all, we need to get you up to speed on the "console", aka your "terminal". <br />

Depending on where you are in the internet, it is possible to hear both terminal and console interchangeably. For the sake of our absolute sanity, I will be refering to it as the "terminal".

You will be using this terminal to run your tests and ultimately see if you passed, all here using vscode. 
Vscode has a decent and convenient terminal, just know that it is also possible to run commands in your computers built-in terminal. (Given that you have led it to the proper files)

Now, open it.

On VSCode, for both mac & pc:
```
control + `
```
<h5>The backtick ` should be located left of your 1 key. </h5> <br />

You should now see it pop up from the bottom of vscode with the name of your computer and and file path name.

It is similair on PC, but on mac it should show something like this:
```
MyName@ComputerName CurrentOpenFolder % 
```
PC just reads out of bit more info
<h5>Note: you can change your computer name to shorten the length of the initial path. For Example: mine just reads erickbravo@MBP. Long path names can get annoying.</h5> <br />

Welcome to your lovely console ...I mean terminal.<br />

Like I said, we wll be using it to run tests, as well as help you `debug` your code.

There is so much you can do with your terminal. We can create folders and files (known as directories), we can delete what we created, we use it to "push" up code to source control for our clients multi million dollar website, but for the sake of simplicity, we will continue on ...for now. 

Here are the basic commands you will be running. You can copy and paste, but I highley encourage you to type them out in these early stages of your development. 

```
npm install
npm run test
node /randomFolder/randomFile.js
```

Go ahead and run an `npm install` (You will only ever need to run this once)
- What is going to happen is your terminal will make your computer install all the necessary tools that I pulled in (that other people created) to create this curriculum. 
- It knows what to install based on what our special file has inside it
- Go ahead and open the `package.json` file and see that under `"devDependencies"` (line 20) there are a couple dependencies in there. In this case, "chai" and "mocha". I pulled these in to write tests. 
- To give you an idea, dependencies are pulled in all the time. A multi-million dollar website can have an endless list of dependencies. I have more than a couple dozen in a personal project myself. 
- After hitting `enter` on that command, and watch your terminal do its magic, you should now see a file called `node_modules`. You rarely ever have to worry about this file. The only thing to know at this time is that, when  no node_modules exist, you need to run an `npm install`.

Now, go ahead and run the next command `npm run test`
- Everything should fail, hooray!
- Check out our package.json again and see the "script" to run our tests. (line 7)
- Now, I have it so it makes sense for us contextually, but if you'd like, you can literally change `"test"` to `"potato"` and run the command `npm run potato`. This will work. I'll let you decide what you'd like to do. 

Now you may be thinking, "woah Erick, you wrote everything in the package.json file? What a beast." And to that I say, What are you crazy!?!
Absolutely bonkers, aren't you? <br />

I typed in a command in the terminal to spit out a template for me to modify. Also, after every dependency I installed (another command in the terminal) it gets automatically added in the correct section of our package.json file.

I hope you understand the power of what the terminal beholds, and that you have yet to uncover its true magic. 

...but more importantly, understand that programmers are lazy.

Speaking of, go ahead and go to your terminal again and hit the `up arrow` on your keyboard. You can scroll through all the commands you have used recently. Yes I know, I said to type it out, but youre an adult and you can make your own decisions. Do what you think is best for you at any given time.

For that last command, we are going to talk more about it in our first file where you, yes YOU, will be writing your first lines of code. 

I am really excited for you. 

Go ahead and proceed to the next file in this directory.

