// Q1: Personalized Login Greeting

let userName = "Ishu"; 
let currentHour = new Date().getHours(); // Get current hour (0–23)

if (currentHour < 12) {
    console.log(`Good Morning ${userName}!`);
} else if (currentHour < 17) {
    console.log(`Good Afternoon ${userName}!`);
} else {
    console.log(`Good Evening ${userName}!`);
}
