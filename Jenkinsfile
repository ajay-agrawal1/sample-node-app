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
                echo 'Build stage successful'
            }
        }

        stage('Docker Build') {
            steps {
                sh '/usr/local/bin/docker build -t sample-node-app:v1 .'
            }
        }

        stage('Verify Image') {
            steps {
                sh '/usr/local/bin/docker images'
            }
        }
    }
}
