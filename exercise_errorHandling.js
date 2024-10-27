// Starter code:
function mysteryOperation() {
  const outcome = Math.random(); // Generates a random number between 0 and 1.

  if (outcome < 0.5) {
    console.log("The operation is completed successfully!");
  } else {
    throw new Error("The operation is failed mysteriously!");
  }
}

const numberOfOperations = 20; // Number of operations to simulate

const daysOnSuccess = 13; // Number of days earned for successful operation
const daysOnFailure = 1; // Number of days earned for failed operation
const daysOnAttendance = 3; // Number of days earned for attendance

let daysEarned = 0; // Initialize the total vacation days earned. This will be updated as operations are simulated.

// Simulate the specified number of operations and calculate the total vacation days earned.
for (let i = 0; i < numberOfOperations; i++) {
  try {
    mysteryOperation(); // Simulate an operation
    daysEarned += daysOnSuccess; // Add days for successful operation
  } catch (error) {
    // Handle the error if an operation fails
    daysEarned += daysOnFailure; // Add days for failed operation
  } finally {
    // Always add days for attendance
    daysEarned += daysOnAttendance; // Add days for attendance regardless of success or failure
  }
}

console.log("Vacation days earned:", daysEarned); // Output the total vacation days earned
