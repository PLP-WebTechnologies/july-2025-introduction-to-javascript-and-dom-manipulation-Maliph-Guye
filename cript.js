// ===== PART 1: Variables and Conditionals =====
let score = 85;
const passingGrade = 70;

if (score >= passingGrade) {
    console.log("You passed!");
} else {
    console.log("Try again.");
}

// ===== PART 2: Custom Functions =====
// Function 1: Add two numbers
function addNumbers(a, b) {
    return a + b;
}

// Function 2: Check if even
function isEven(num) {
    return num % 2 === 0;
}

// ===== PART 3: Loops =====
// Loop 1: For loop (count 1 to 5)
for (let i = 1; i <= 5; i++) {
    console.log("Count:", i);
}

// Loop 2: While loop (count down 3 to 1)
let count = 3;
while (count > 0) {
    console.log("Countdown:", count);
    count--;
}

// ===== PART 4: DOM Interactions =====
// 1. Get button and paragraph elements
const button = document.getElementById("btn");
const output = document.getElementById("output");
const list = document.getElementById("list");

// 2. Add click event to button
button.addEventListener("click", function() {
    output.textContent = "Button clicked!";
});

// 3. Add items to list using loop
const items = ["Apple", "Banana", "Orange"];
for (let item of items) {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
}