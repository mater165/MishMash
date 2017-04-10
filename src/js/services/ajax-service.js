const AjaxService = {
  getPromise: function getPromise(url) {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url);

      xhr.onload = function() {
        if (xhr.status === 200) {
          resolve(xhr.response);
        } else {
          reject(Error(xhr.statusText));
        }
      };

      // Handle network errors
      xhr.onerror = function() {
        reject(Error('Network Error'));
      };

      xhr.send();
    });
  }
};

export default AjaxService;