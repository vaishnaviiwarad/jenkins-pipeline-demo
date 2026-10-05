# TASK 2: Create a Simple Jenkins Pipeline for CI/CD

## 📌 Objective
Set up a basic Jenkins pipeline to automate building, testing, and deploying a simple web app.

---

## 🛠 Manual Jenkins Setup (No Docker)

### Step 1: Download & Start Jenkins
1. Download `jenkins.war` from: **[https://get.jenkins.io/war-stable/latest/jenkins.war](https://get.jenkins.io/war-stable/latest/jenkins.war)**
2. Open Command Prompt or PowerShell and run:
   ```cmd
   java -jar jenkins.war
   ```
3. Open your browser at: **`http://localhost:8080`**

---

### Step a: Create a `Jenkinsfile`
The project repository contains a simple `Jenkinsfile` with three stages:
- **Build**: Runs `npm install`
- **Test**: Runs `npm test`
- **Deploy**: Deploys the application

---

### Step b: Configure Jenkins to Trigger Pipeline on Code Commit
1. Open Jenkins Dashboard (`http://localhost:8080`) > Click **New Item**.
2. Name it **`jenkins-pipeline-demo`** and select **Pipeline**.
3. Under **Pipeline Definition**, select **Pipeline script from SCM**.
4. Select **Git** and paste your GitHub repository URL: `https://github.com/vaishnaviiwarad/jenkins-pipeline-demo.git`.
5. Script Path: `Jenkinsfile`.

---

### Step c: Add Stages Like Build, Test, and Deploy
The `Jenkinsfile` defines these exact stages:
```groovy
pipeline {
    agent any
    stages {
        stage('Build') { steps { sh 'npm install' } }
        stage('Test') { steps { sh 'npm test' } }
        stage('Deploy') { steps { echo 'Application deployed successfully!' } }
    }
}
```

---

### Step d: Test the Pipeline
1. Push your code to GitHub.
2. Click **Build Now** on the Jenkins Dashboard to see the pipeline run!
