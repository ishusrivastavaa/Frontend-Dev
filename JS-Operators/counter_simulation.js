// Q6: Event-Based Counter Simulation

let count = 0;

function increment() {
    count++;
    console.log("Count after increment:", count);

    function nested() {
        console.log("Nested function sees count as:", count);
    }
    nested();
}

function decrement() {
    count--;
    console.log("Count after decrement:", count);

    function nested() {
        console.log("Nested function sees count as:", count);
    }
    nested();
}

// Simulated clicks
increment();
increment();
decrement();
