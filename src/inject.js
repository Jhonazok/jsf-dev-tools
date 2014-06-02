window.jsfdevtools = (function(){
  'use strict';

  var enabled = true;

  function processJsfAjaxEvent(data) {
 
    if (data.status === 'success' && data.responseXML) {

      var updates = data.responseXML.getElementsByTagName('update');

      for (var i = 0; i < updates.length; i++) {

        var id = updates[i].getAttribute('id');

        if( id.indexOf('javax.faces.ViewState') === -1 ) {

          fadeElementById(id);              

        }

      }

    }

  }

  function fadeElementById(id) {

    var element = document.getElementById(id);

    if (element) {

      element.style.opacity = 0.0;

      window.setTimeout(function() {
        element.style.transition = 'opacity 2s ease';
        element.style.opacity = 1.0;        
      }, 1);

    }

  }

  function registerEventListener() {

    jsf.ajax.addOnEvent(function(data) {

      if(enabled) {
        processJsfAjaxEvent(data);
      }

    });

  }

  if( window.jsf && window.jsf.ajax ) {
    registerEventListener();
  } 
  else {
    window.alert('Could not find JSF 2.x on this page! Sorry!');
  }

  return {

    enable: function() {
      enabled = true;
    },

    disable: function() {
      enabled = false;
    }

  };

})();
