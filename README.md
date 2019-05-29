# Vox Media Front-End Engineer Interview Exercise

## Intro

During the technical interview, you'll be asked to walk us through your solution for this take-home exercise. We'll treat this like a group code review, asking you to explain how you approached the problem, and ask you to share your screen and walk us through your code. Along the way, we'll ask questions about why you've solved things a certain way, why you used certain tools instead of others, and in general have a conversation about the problem. You may be asked questions like "if we wanted to do X instead, how would you do that?" to hear how you'd approach that change in requirements, or if possible, see what changes you'd make to your code. Read the following instructions carefully, and if you have any questions about the interview or the exercise below, please don't hesitate to reach out and ask.

## Exercise scenario

Our fancy modern media publishing platform needs a tool to allow editors to place published stories on the home page of the website, and organize the order in which they'll appear on that page. Your job is to put together this tool, writing code to turn the following mockup into a functional tool.

Here's the rough mockup of the tool:

![](https://i.imgur.com/XJtC7ci.jpg)

Here's how it works:

* The "Queue" lane on the left contains a list of recently published stories that haven't been placed on the home page, and therefore aren't visible yet on the home page.
* The "Live on the page" lane on the right contains the stories that have been placed on the home page. These stories will appear on the home page in the order set in this lane.
* Our users (the editors of the website) can drag & drop these story cards from the "queue" lane to the "live" lane to place the stories on the home page, or drag live stories back to the queue to remove them from the front page.
* The editors can also drag & drop stories on the "live" lane to change their order.
* The badges on the upper right corner of each story card should update as soon as each card is dropped in place. For example, if a card is dropped in the "live" lane, the badge should be updated to be green and reflect the card's position ("Hero Story" if it's the first one at the top, and then "Slot 1", "Slot 2", etc. for the ones below). Conversely, if a card is dropped back in the "queue" lane, the badge should be red and read "not placed".
* Once the editor is satisfied with the order of the cards, they can hit the "save changes" button, which should send a POST request to the server to preserve the current order of the cards. Otherwise, they can hit the "reset" button to put the cards back in their initial state. (Just to be safe, after pressing either button, you should ask the user to confirm that this is what they want to do.)

As an example, here's what it should look like after moving some stories around:

![](https://i.imgur.com/3T1DfZU.jpg)

To sum up:

* Write HTML & CSS (using the tools, frameworks, or pre- and post-processors of your choice) to recreate the UI from the mockup.
* Write JS (again using the tools, frameworks, or libraries of your choice) to implement the drag & drop functionality as per the requirements above.

Some implementation notes:

* To give you a head start, we've provided a sample HTML file in this gist, which you can use as a starting point if you wish. Feel free to make any changes you wish to the markup (including changing, adding or removing elements, adding classes, IDs, data attributes, etc.)
* Even though the purpose of the tool is to organize stories on a theoretical home page, you don't need to build that home page. We only want you to build the tool in the mockups.
* This is a purely front-end exercise, so you don't need to build any kind of back-end service for this.
* Since there isn't a real back-end server or database to query stories from, you can hardcode the markup for the story cards. You can use some kind of image placeholder and/or lorem ipsum service to create some fake stories (we're fond of [jeffsum.com](https://jeffsum.com) and [fillmurray.com](http://www.fillmurray.com), as you can see in the sample HTML.)
* Similarly, since there's no real server to save the changes after hitting the "save" button, you can stub out that call in your code. We'd love to hear things like what parameters you'd send to the server in your POST request, though!
* As mentioned, you can use any languages, frameworks, preprocessors, tools, libraries, etc. you want. Use whatever you're comfortable with! Tell us why you chose them, and what you like or don't like about them.

What we're looking (and not looking) for:

* We are interested in making sure you're able to accurately show us how you approach problems, and how you break down and think through technical scenarios. We want to see how you explain your thought process.
* We're not judging on how many algorithms or libraries you've memorized, or how much immediate knowledge you have about the esoteric aspects of a language. Use Google, Stack Overflow, MDN, CSS Tricks, or whatever other resources you'd normally use.
* We're not looking for pixel perfection, so use the mockups as a guideline. We're more interested in how you approach the problem and how you structure your code than in whether or not you can make a pixel-perfect copy of the mockups.
* Try to complete as much of the exercise as you can, but if you can't get the whole thing done, we'd love to hear how you would have approached the incomplete parts and what the stumbling blocks were. We will help you if you got stuck, as that's what teammates would do.