pipeline {
    agent any
    stages {
      stage ('Prune Docker data') {
          steps {
              sh 'docker system prune -a --volumes -f'
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