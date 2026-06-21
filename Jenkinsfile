pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Getting Source Code'
            }
        }

        stage('Build') {
            steps {
                echo 'Building Application'
                sh 'npm install'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker Image'
                sh 'docker build -t sample-node-app:v1 .'
            }
        }

        stage('Verify Image') {
            steps {
                sh 'docker images'
            }
        }
    }
}
