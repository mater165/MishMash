const AjaxService = {
  getPromise: function getPromise(url, addHeaders) {
    return new Promise(function(resolve, reject) {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      if (addHeaders) {
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
      }

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