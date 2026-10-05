pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building application...'
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing application...'
                bat 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker Image...'
                bat 'docker build -t jenkins-demo-app:latest .'
            }
        }

        stage('Deploy Docker Container') {
            steps {
                echo 'Deploying Docker Container...'
                bat 'docker stop jenkins-demo-app || exit 0'
                bat 'docker rm jenkins-demo-app || exit 0'
                bat 'docker run -d --name jenkins-demo-app -p 3000:3000 jenkins-demo-app:latest'
            }
        }
    }
}
