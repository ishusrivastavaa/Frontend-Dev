// Q5: Boolean Logic Access System

let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

let isSecure =
    isAlarmOn &&
    isDoorLocked &&
    isWindowClosed &&
    isOwnerInside;

console.log(isSecure ? "Secure" : "Unsafe");

// Try different combinations
isOwnerInside = false;
isSecure =
    isAlarmOn &&
    isDoorLocked &&
    isWindowClosed &&
    isOwnerInside;

console.log(isSecure ? "Secure" : "Unsafe");
