// Starter code:
function mysteryOperation() {
  const outcome = Math.random(); // Generates a random number between 0 and 1.

  if (outcome < 0.5) {
    console.log("The operation is completed successfully!");
  } else {
    throw new Error("The operation is failed mysteriously!");
  }
}

const daysOnSuccess = 13;
const daysOnFailure = 1;
const daysOnAttendance = 20;
