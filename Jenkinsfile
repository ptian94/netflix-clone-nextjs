pipeline {
  agent any
  stages {
    stage('Checkout code') {
      steps {
        git(url: 'https://github.com/ptian94/netflix-clone-nextjs', branch: 'main')
      }
    }

    stage('Log') {
      parallel {
        stage('Log') {
          steps {
            sh 'ls -la'
          }
        }

        stage('Front-end Unit Test') {
          steps {
            sh 'npm i && npm run test:unit'
          }
        }

      }
    }

  }
}