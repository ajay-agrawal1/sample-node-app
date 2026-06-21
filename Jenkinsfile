pipeline {
    agent any

    stages {

        stage('Debug Environment') {
            steps {
                sh 'whoami'
                sh 'pwd'
                sh 'echo $PATH'
                sh 'which docker || true'
                sh 'ls -l /usr/local/bin/docker || true'
            }
        }
    }
}
