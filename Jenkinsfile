pipeline {
    agent any
    environment {
      imagename = "rolebit image"
      repository = "rolebit_repo"
      DOCKERHUB_CREDENTIALS = credentials('docker_credential')
    }
    stages {
      stage ('Prune Docker data') {
          steps {
              sh 'docker system prune -a --volumes -f'
          }
      }
      stage ('Docker Login') { 
          steps {
              sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
          }
      }
      stage ('Start Dockerizing') { 
          steps {
              sh 'docker compose up -d'
              sh 'docker compose ps'
          }
      }
      stage ('Deploy') { 
          steps {
              echo 'Deploy'
          }
      }
    }
    post {
      success {
        echo "Deployment success"
      }
      failure {
        echo "Deployment failed"
      }
    }
}