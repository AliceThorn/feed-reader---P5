/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* All of the tests are within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This test suite is for feeds definitions and the allFeeds
     * variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This tests to make sure that the allFeeds variable has
         * been defined and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /*  This test loops through each feed in the allFeeds object
         *  and ensures it has a URL defined and that the URL is not empty.
         */
        it('urls are defined', function() {

            for (i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        /* Test that loops through each feed in the allFeeds
         * object and ensures it has a name defined and that
         *  the name is not empty.
         */

        it('names are defined', function() {

            for (j = 0; j < allFeeds.length; j++) {
                expect(allFeeds[j].name).toBeDefined();
                expect(allFeeds[j].name.length).not.toBe(0);
            }
        });

    });


    /* Test suite named "The menu" */

    describe('The Menu', function() {

        /* Test that ensures the menu element is hidden by default. */

        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true)
        });

        /* Test that ensures the menu changes visibility when the
         * menu icon is clicked. Therefor it tests whether the menu
         * displays when clicked and does it hide when clicked again.
         */

        it('displays when icon is clicked', function() {
            $('.menu-icon-link').click();
            //menu-hidden is not present so menu is visible
            expect($('body').hasClass('menu-hidden')).toBe(false)
        });

        it('hidden when icon is clicked again', function() {
            $('.menu-icon-link').click();
            //menu-hidden is present so menu is hidden
            expect($('body').hasClass('menu-hidden')).toBe(true)
        });

    });

    /* Test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* Test that ensures when the loadFeed has finished
         * and there is at least a single .entry element within
         *   the .feed container.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        //using ($('.parent .child');) to select the entries inside a particular feed
        it('contains at least one entry in feed', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0)
        });
    });

    /* Test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {

        /* Test that ensures when a new feed is loaded by the loadFeed
         *  function that the content actually changes.
         */

        // As per reviwer notes and discussion on https://discussions.udacity.com/t/new-feed-selection-question/797040
        beforeEach(function(done) {
            //complete loading of first feed
            loadFeed(0, function() {
              firstFeed = allFeeds[0].url;
              done();
              })
                //complete loading of new feed
            loadFeed(1, function() {
              newFeed = allFeeds[1].url;
              done();

              })

            done();
        });

        //first feeds entry does not equal the new feeds entry
        it('ensures when a new feed is loaded, the content changes', function() {
            expect('firstFeed').not.toEqual('newFeed')

        });
    });



}());
