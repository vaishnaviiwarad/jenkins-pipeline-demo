# TASK 2: Create a Simple Jenkins Pipeline for CI/CD with Docker

## 📌 Objective
Set up a basic Jenkins pipeline to automate building, testing, and deploying an application using Docker.

---

## 🛠 Tools & Deliverables
- **Tools**: Jenkins, Docker, Node.js
- **Deliverables**: `Jenkinsfile`, `Dockerfile`, `app.js`, `README.md`, `INTERVIEW_QUESTIONS.md`

---

## 📄 Jenkins Pipeline Stages
1. **Build**: Runs `npm install`
2. **Test**: Runs `npm test`
3. **Build Docker Image**: Runs `docker build -t jenkins-demo-app:latest .`
4. **Deploy Docker Container**: Runs `docker run -d --name jenkins-demo-app -p 3000:3000 jenkins-demo-app:latest`

---

## 🚀 How to Run & Test
1. Make sure Docker Desktop is open on your computer.
2. Push code to GitHub:
   ```powershell
   git add .
   git commit -m "feat: add Docker build and deploy stages"
   git push origin main
   ```
3. Open Jenkins (`http://localhost:8080`) and click **Build Now**!
