export default function getBaseUrl() {
   return getQueryStringParameterByName('useMockApi') ? 'http://localhost:8081/' : '/';
 }
 function getQueryStringParameterByName(name, url) {
   console.log('name: ', name);
   console.log('url: ', url);

   if (!url) url = window.location.href;
   console.log('url2: ', url);
   name = name.replace(/[\[\]]/g, "\\$&");
   var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
       results = regex.exec(url);
       console.log('res: ', results);
   if (!results) return null;
   if (!results[2]) return '';
   return decodeURIComponent(results[2].replace(/\+/g, " "));
 }
