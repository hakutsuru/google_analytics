
// ====================
// = GOOGLE ANALYTICS =
// ====================
gaPageview = function(relativePath,callback){
  var gaTrackingCall;
  _gaq.push(['_trackPageview', relativePath]);
  
  // uncomment for debugging
  // gaTrackCall = "_gaq.push(['_trackPageview', '" + relativePath + "'])";
  // console.log('googe-analytics :: ' + gaTrackingCall);
  
  // optional callback
  // ... typical use: generate virtual pageview for
  // ... analytics conversion or funnel analysis
  typeof callback === 'function' && callback();
};
// [[example usage]]
// gaPageview('/portal/your/virtual/page');
// [[example with callback]]
// ga_pageview('/logon',function(){ window.location='/portal/' });

gaEvent = function(eventConfig){
  var category;
  var action;
  var label;
  var value;
  var gaTrackingCall;

  // obtain parameter values
  category = eventConfig.category; // required
  action = eventConfig.action; // required
  label = eventConfig.label ? eventConfig.label : null;
  value = eventConfig.value ? eventConfig.value : null;

  // google analytics "noninteraction" unused -- causes reference error...
  _gaq.push(['_trackEvent', category, action, label, value]);

  // uncomment for debugging
  // gaTrackingCall = "_gaq.push(['_trackEvent', '" + category + "', '" + action + "', " +
  //                  (label ? "'" + label + "'" : label) + ", " + value + "])";
  // console.log('googe-analytics :: ' + gaTrackingCall);
};
// [[example usage]]
// gaEvent({ //comma check!
//   category: 'teaser_campaign',
//   action: 'play_video'
//   //label: 'REPLACE-ME' //optional
//   //value: 88 //optional
// });







