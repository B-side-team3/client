pipeline {
    agent any
    environment {
      imagename = "rolebit image"
      repository = "rolebit_repo"
      DOCKERHUB_CREDENTIALS = credentials('docker_credential')
    }
    stages {
      stage ('Docker Login') { 
          steps {
              sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
          }
      }
      stage ('Prune Docker data') {
          steps {
              sh 'docker container ls -a -f name=rolebit_container -q | xargs -r docker container rm'
              sh 'docker rmi rolebit'
          }
      }
      stage ('Start Dockerizing') { 
          steps {
              sh 'docker compose up -d'
              sh 'docker compose ps -a'
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