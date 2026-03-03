// Examples of promises
   // Make API request
   // Hash a password
   // creating tokens
   // Database / HTTP Libraries
   // File and Stream APIs

/* Make API request API--> application program interface it connects the application 
JSON connects the different application and each application have apis  like (java) --> to python --> (javascript) */
// technology neutral data format one is xml{olden days } and another one is json{modern} days
//json: javascript objectnotation --> it is same as java script object 

// API requeest
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.json())  // consume the promise of json function 
.then(postData=>console.log(postData))
.catch(err=>console.log("err is",err));
