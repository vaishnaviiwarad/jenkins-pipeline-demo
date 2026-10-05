console.log("Running simple unit test...");

const appName = "jenkins-demo-app";

if (appName === "jenkins-demo-app") {
  console.log("TEST PASSED!");
  process.exit(0);
} else {
  console.log("TEST FAILED!");
  process.exit(1);
}
