pipeline {
    environment {
      repository = "yesbee2.0"
      DOCKERHUB_CREDENTIALS = credentials('docker_credential')
    }
    agent any
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