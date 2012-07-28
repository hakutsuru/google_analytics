## Google Analytics Helper Functions & Methods

*Disclaimer: I may never use github the way it is intended. I have plans to share gems and projects that may involve collaboration, but I suspect most of my "projects" will be little more than code showcases.*


### Orientation -- Virtual Pageviews

Google Analytics [Tracking Basics (Asynchronous Syntax)](https://developers.google.com/analytics/devguides/collection/gajs/)

The standard case for a typical website would be to include Google Analytics code in a footer. When dealing with JavaScript driven applications, however, this will not work.

You could simply include the push statements throughout your application, but that would be a mistake. A better option is to use helper functions in your namespace for this. The benefit is that you can easily include console logging to test your tracking. Also, it is much cleaner and quicker to shut off tracking in one place, than to update dozens of lines -- especially since this could be a temporary adjustment.

Functions to track events and generate virtual pageviews are included in "google-analytics-javascript.js".


### Orientation -- Callbacks & Tracking

Google Analytics [Tool: URL Builder](http://support.google.com/googleanalytics/bin/answer.py?hl=en&answer=55578)

When embedding a link in email or online, Google Analytics requires such urls to be tagged for tracking.

Included in "google-analytics-ruby.rb" is a method to add tagging to callback urls.


### Environment
    Macintosh-2:~] direwolf% ruby --version
    ruby 1.9.2p290 (2011-07-09 revision 32553) [x86_64-darwin10]


### Example Code Run -- Callback Tagging
    [Macintosh-2:~] direwolf% ruby [...]/google_analytics/google-analytics-ruby.rb
    Appending Google Tracking to Callbacks...
    
    https://cool.io
    https://cool.io?utm_source=myspots&utm_medium=web&utm_name=callback_url
    
    https://cool.io?oauth=aeibae
    https://cool.io?oauth=aeibae&utm_source=trendster&utm_medium=web&utm_name=callback_url
