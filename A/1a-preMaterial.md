<h1>Intro to programming/JavaScript</h1><br />

(Hello this is an md file, aka a MardDown file. Right click the above tab or file name and select "Open Preview")<br />
(Do this for all md files to see the intended format)

<br />
Before we can write any code at all, we need to get you up to speed on the terminal. <br />
<br />

Depending on where you are in the internet, it is has multiple names: "terminal", "console" or "command line".<br /> 
For the sake of our absolute sanity, we will be referring to it as the "terminal".<br />


You will be using this terminal to debug your code and run your tests ultimately see if you passed, all here using VSCode. <br />

VSCode has a decent and convenient terminal, just know that it is also possible to run commands in your computers built-in terminal. <br />
 (Given that you have led it to the proper files)

Now, open it.

On VSCode, for both mac & pc:
```
control + `
```
<h5>The backtick ` should be located left of your 1 key. </h5> <br />

You should now see it pop up from the bottom of VSCode with the name of your computer, along with file path name.

It is similair on PC, but on mac it should show something like this:
```
MyName@ComputerName CurrentOpenFolder % 
```
PC just reads out of bit more info
<h5>Note: you can change your computer name to shorten the length of the initial path. For Example: mine just reads erickbravo@MBP. Long path names can get annoying.</h5> <br />

Welcome to your lovely console ...I mean terminal.<br />


There is so much you can do with your it. We can create folders and files (known as directories), we can delete what we created, we use it to "push" up code to version control for our clients multi-million dollar website, but for the sake of simplicity, we will only use it to debug and test, as mentioned above. 

Here are the basic commands you will be running. You can copy and paste, but I highley encourage you to type them out in these early stages of your development. 

```
npm install
npm run test
node randomFolder/randomFile.js
```
<h2>Step 1</h2>

Go ahead and run an `npm install` (You will only ever need to run this once per clone)
- After hitting `enter` on that command, and watch your terminal do its magic, you should now see 2 new files. They are titled `node_modules` and `package-lock.json` . You rarely ever have to worry about these file. The only thing to know at this time is that, when no `node_modules` OR `package-lock.json` exist, you need to run an `npm install`.
- What just happened? Your terminal just made your computer install all the 
necessary tools that I pulled in (that other people created) to run this curriculum. 
- It knows what to install based on what our special file `package.json` had inside it
- I'll remind you at the beggining of every lesson to install your node_modules, for now we are good.

<h2>Step 2</h2>

Now, go ahead and run the next command `npm run test`
- Everything should fail, hooray!
- Check out the `package.json` file and see the `"script"` to run our tests. (line 7)
- I have it so it makes sense for us contextually, but if you'd really like, you can literally change `"test"` to `"potato"` and run the command `npm run potato`. This will work the same. Just remember when I ask you to use `npm run test`, you need to use your own custom command. I'll let you decide what you'd like to do. 
- Note: Don't expect to run the tests right away. There is some study material you need to practice first, then i'll direct you to your actual test when you're' ready.<br />
- Come to think of it, there is a folder called `test`. This is NOT your testing folder. You can poke around in it if you're curious as to how tests are written, but please, don't modify anything in this folder.
- Your actual test will be in the folder named `B`.

Now you may be thinking, "woah Erick, you wrote everything in the package.json file? What a beast." And to that I say, What are you crazy!?! <br />

I typed in a command in the terminal to spit out a template for me to modify. Also, after every dependency I installed (another command in the terminal) it gets automatically added to the correct section of our package.json file.

I hope you understand the power of what the terminal beholds, and that you have yet to uncover its true magic. 

...but more importantly, that programmers are lazy.

Speaking of, go ahead and open your terminal again and hit the `up arrow` on your keyboard. You can scroll through all the commands you have used recently. Yes I know, I said to type it out, but you're an adult and you can make your own decisions. Do what you think is best for you at any given time.

<h2>Step 3</h2>

For that last command, we are going to talk more about it in the first file where you, yes YOU, will be writing your first lines of code. 

I am really excited for you. 

Go ahead and proceed to the next file in this directory. (2-console.js)

(you can now close out this tab)

