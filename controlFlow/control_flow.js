// let userRole = "admin";
// let accessLevel;
// let isLoggedIn = true;
// let userMessage;
// let userType = "subscriber";
// let userCategory;
// let isAuthenticated = true;



// // -------------- Step 2 -----------------------
// if (userRole === "admin") {
//     accessLevel = "Full access granted";
// } else if (userRole === "manager") {
//     accessLevel = "Limited access granted";
// } else {
//     accessLevel = "No access granted";
// }

// console.log("Access level:",accessLevel);

// // -------------- Step 3 -----------------------
// if (isLoggedIn) {
//     if (userRole === "admin"){
//         userMessage = "welcome,Admin!";
//     } else {
//         userMessage = "Welcome, User!";
//     }
// } else {
//     userMessage = "Please log in to access the system.";
// }

// console.log("User Message:", userMessage);


// // -------------- Step 4 -----------------------
// switch (userType) {
//     case "admin":
//         userCategory = "Adminstrator";
//         break;
//         case "manager":
//             userCategory = "Manager";
//             break;
//             case "subscriber":
//                 userCategory = "Subscriber";
//                 break
//                 default:
//                     userCategory = "Unknown";
//                 }
//                 console.log("User Category:", userCategory);

// // -------------- Step 5 -----------------------
// let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authennticated";

// console.log("Authentication Status:",authenticationStatus)



let Role = "Employee";

if (Role === "Employee") {
    accessLevel = "Dietary Services granted";
} else if (Role === "Enrolled Member") {
    accessLevel = "Dietary Servicesand one-on-one";
} else if (Role === "Subscriber") {
    accessLevel = "Dietary Services granted";
} else {
    accessLevel = "Need to enroll first"
}

console.log("Access level:",accessLevel);