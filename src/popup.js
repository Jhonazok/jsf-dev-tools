(function(){
  'use strict';

  jQuery('#activate').bind('click', function() {

    chrome.tabs.executeScript(null, { 
      file: 'content.js' 
    });

    window.close();

  });

})();

