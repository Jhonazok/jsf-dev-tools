(function(){
  'use strict';

  function injectScript() {

    var link = chrome.extension.getURL('inject.js');

    var element = document.createElement('script');
    element.type = 'text/javascript';
    element.src = link;
    document.body.appendChild(element);

    window.jsfdevtoolsinjected = true;

  };

  if(window.jsfdevtoolsinjected) {
    alert('JSF Development Tools have already been added to the page!');
  } 
  else {
    injectScript();
  }

})();
