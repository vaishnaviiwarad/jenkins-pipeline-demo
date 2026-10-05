# Interview Questions & Answers - TASK 2: Jenkins Pipeline

---

### Q1: What is Jenkins, and how is it used in CI/CD?
**Answer:**
Jenkins is an open-source automation server. In CI/CD, it automatically builds, tests, and deploys code whenever a developer pushes changes to GitHub, eliminating manual steps and catching bugs early.

---

### Q2: What is a Jenkinsfile?
**Answer:**
A `Jenkinsfile` is a text file placed in your code repository that defines the pipeline steps as code ("Pipeline as Code").

---

### Q3: How do you create and configure Jenkins pipelines?
**Answer:**
1. Create a `Jenkinsfile` in your repository.
2. In Jenkins, create a new **Pipeline** item.
3. Choose **Pipeline script from SCM**, paste your GitHub repository URL, set script path to `Jenkinsfile`, and click Save.

---

### Q4: What are some common stages in a Jenkins pipeline?
**Answer:**
- **Checkout**: Pull code from Git.
- **Build**: Install dependencies (`npm install`).
- **Test**: Run test scripts (`npm test`).
- **Deploy**: Deploy the application to a server or container.

---

### Q5: What is the difference between a declarative and scripted Jenkins pipeline?
**Answer:**
- **Declarative Pipeline**: Uses a simple, structured block starting with `pipeline { }`. It is easier to read and recommended for beginners.
- **Scripted Pipeline**: Uses Groovy code inside a `node { }` block. It offers more custom control but is harder to write and debug.
