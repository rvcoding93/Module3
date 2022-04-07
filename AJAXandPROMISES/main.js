/**
 * AJAX and Promises Part 1
 * 
 *  Client - Server Model
 *  HTTP
 *  HTTP Methods
 *      - GET    (Get Info)
 *      - POST   (Send Data)
 *      - PATCH  (Update)
 *      - DELETE (Delete)
 *  HTTP Status Codes
 *      - 100s ( Informational)
 *      - 200s ( Success )
 *      - 300s ( Redirects )
 *      - 400s ( 404 Not Found )
 *      - 500s ( Server Issues )

 */
// //======================================================================

// document.addEventListener("DOMContentLoaded", function() {
//     const myRequest = new XMLHttpRequest();

//     myRequest.onreadystatechange = function() {
//         console.log('REQUEST STATE',this.readyState);
//         console.log('STATUS', this.status)
//     }

//     myRequest.open("GET", "http://placekitten.com/400/400");
//     myRequest.open("GET", "https://images.squarespace-cdn.com/content/v1/61229a19fca2354fa4ed236c/ba81b78e-5789-4223-a7b0-9130ec77f8db/F3243B55-9952-443D-B510-B0B9AAF10967.png?format=1000w")
//     //myRequest.open("GET", "espn.com/yankeefanalways")
//     myRequest.send();

//     const reportError = () => {
//         console.error('THERE WAS AN ERROR');
//     };
// })
// //======================================================================




// document.addEventListener("DOMContentLoaded", function() {
//     const myRequest = new XMLHttpRequest();

//     myRequest.onreadystatechange = function() {
//         console.log('REQUEST STATE',this.readyState);
//         console.log('STATUS', this.status)
//     }

//     myRequest.open("GET", "google.com/notarealpage")
//     myRequest.send();

//     const reportError = () => {
//         console.error('THERE WAS AN ERROR');
    
//     myRequest.onerror = function () {
//         console.log(reportError())
//         myRequest.open("https://kicksdigitalmarketing.com/wp-content/uploads/2019/09/iStock-1142986365.jpg")
//         myRequest.send()
//     }
//     };
// })
// //======================================================================
// document.addEventListener("DOMContentLoaded", function() {
//     const myRequest = new XMLHttpRequest();

//     myRequest.onreadystatechange = function() {
//         console.log('REQUEST STATE',this.readyState);
//         console.log('STATUS', this.status)
//     }

//     myRequest.open("GET", "http://placekitten.com/400/400");
//     myRequest.send();

//     const reportError = () => {
//         console.error('THERE WAS AN ERROR');
//     };
// })

// //======================================================================
// document.addEventListener("DOMContentLoaded", function() {
//     const errorReports = document.addEventListener('error')
//     const myRequest = new XMLHttpRequest();

//     myRequest.onreadystatechange = function() {
//         console.log('REQUEST STATE',this.readyState);
//         console.log('STATUS', this.status)
//     }

//     myRequest.open("GET", "http://placekitten.com/400/400");
//     myRequest.send();

//     const reportError = () => {
//         console.error('THERE WAS AN ERROR');
//     };
// })



