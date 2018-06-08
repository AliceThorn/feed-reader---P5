# feed-reader---P5
Alicia Thornthwaite -- 5th Project from Udacity Course
Version 1

PROJECT SPECIFICATIONS

Write a test that creates a loop through all Feeds and makes sure URL is defined:
For this test a 'for loop' was created after examining apps.js where the function loadFeed and variables are defined. From this allFeeds[id].url can be used to determine if URL is defined using jasmine toBeDefined and that the .length of the object cannot be 0.

Write a test that creates a loop through all Feeds and makes sure name is defined:
For this test a 'for loop' was created after examining apps.js where the function loadFeed and variables are defined. From this allFeeds[id].name can be used to determine if Name is defined using jasmine's 'toBeDefined' and that the .length of the object cannot be equal to 0.

 A new test suite called 'The Menu' was created.

Write a test that ensures the menu element is hidden by default:
This test shows that the menu is disabled and/or shown by adding and removing the .menu-hidden class. To test its presence then the class menu-hidden (.hasClass) should be in the body of index.html.
Show that .menu-hidden is true using .hasClass (to determine whether element has the class menu-hidden)

Write a test that ensures the menu changes visibility when the menu icon is clicked:
This test checks that on click of the menu icon the menu is shown and then disabled on a second click. In app.js .menu-icon-link uses toggle class to add and remove the .menu-hidden class.

Two tests will be required in this test suite. One to show that .menu-hidden is false using .hasClass so menu is hidden. and one to show that .menu-hidden is true using .hasClass so menu is visible.

A new test suite called 'Initial Entries' was created.

Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container:
loadFeed is asynchronous so we need to use the done() function to make sure this is completed first.
Then test that the number of entries in the .entry class is more than 0 entries using jasmine .toBeGreaterThan.

A new test suite called 'New Feed Selection' was created.

Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes:
loadFeed is asynchronous so we need to use the done() function to make sure loadFeed(0) and loadFeed(1) are completed first .
Then test that first feeds entry does not equal the new feeds entry using jasmine .not.toEqual.

All Tests then Pass

Styling
Application uses CSS to style components for the game.

Usability
All application components are usable across modern desktop, tablet, and phone browsers.

Documentation
CRITERIA
MEETS SPECIFICATIONS
README
A README file is included detailing the game and all dependencies.

Comments
Comments are present and effectively explain longer code procedure when necessary.

Code Quality
Code is formatted with consistent, logical, and easy-to-read formatting as described in the Udacity JavaScript Style Guide.


Prerequisites
You will need a browser window to see the feed at https://alicethorn.github.io/feed-reader---P5/
and files at
https://github.com/AliceThorn/feed-reader---P5


Built With
Atom

Versioning
Git Repo
https://github.com/AliceThorn/feed-reader---P5

Authors
Alicia Thornthwaite


Acknowledgments and Credits
Team Udacity and my Mentor for all their help
http://jsbeautifier.org/
http://jshint.com/
https://jasmine.github.io/2.4/introduction#section-Included_Matchers
https://devhints.io/jasmine
Reviewer Notes on
https://discussions.udacity.com/t/new-feed-selection-question/797040
More understanding gained from
https://code.tutsplus.com/tutorials/testing-your-javascript-with-jasmine--net-21229
