const day = "thursday";

if(day === "monday") {
    console.log("Plan the course structure");
    console.log("Go to coding meetup");
}else if(day === "tuesday") {
    console.log("Prepare theory videos");
}else if((day === "wednesday") || (day === "thursday")) {
    console.log("Write code examples");
}else if(day === "friday") {
    console.log("Record videos");
}else if((day === "saturday") || (day === "sunday")) {
    console.log("Enjoy the weekend :D");
}else {
    console.log("Not a valid day!");
}

// SWITCH-CASE Variant

const dayOfWeek = "saturday";

switch (dayOfWeek) {
    case "monday":
        console.log("Plan the course structure");
        console.log("Go to coding meetup");
    break;
    case "tuesday":
        console.log("Prepare theory videos");
    break;
    case "wednesday":
        console.log("Write code examples");
    case "thursday":
        console.log("Record videos");
    break;
    case "friday":
        console.log("Enjoy the weekend :D");
    break;
    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend :D");
    break;
    default: console.log("Not a valid day!");
}