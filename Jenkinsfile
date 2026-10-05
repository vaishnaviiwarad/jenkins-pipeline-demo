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

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                echo 'Application deployed successfully!'
            }
        }
    }
}
