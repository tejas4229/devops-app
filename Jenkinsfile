pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps { git 'https://github.com/tejas4229/devops-app.git' }
    }

    stage('Build Image') {
      steps {
        sh 'docker build -t tej42/devops-app:latest .'
      }
    }

    stage('Push Image') {
      steps {
        sh 'docker push tej42/devops-app:latest'
      }
    }

    stage('Deploy to K8s') {
      steps {
        sh '''
        kubectl apply -f deployment.yaml
        kubectl apply -f service.yaml
        '''
      }
    }
  }
}
