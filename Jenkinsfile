pipeline {
  agent any

  environment {
    DOCKER_CREDS = credentials('6c8fbaa6-2a8b-4bfc-b509-7b676f30b880')
    IMAGE_NAME = "tej42/devops-app"
  }

  stages {
    stage('Build Docker Image') {
      steps {
        sh 'docker build -t $IMAGE_NAME:latest .'
      }
    }

    stage('Login to DockerHub') {
      steps {
        sh '''
        echo $DOCKER_CREDS_PSW | docker login -u $DOCKER_CREDS_USR --password-stdin
        '''
      }
    }

    stage('Push Image') {
      steps {
        sh 'docker push $IMAGE_NAME:latest'
      }
    }
     stage('Deploy to Kubernetes') {
      steps {
        sh '''
          kubectl apply -f deployment.yaml
          kubectl apply -f service.yaml
          kubectl rollout restart deployment/devops-app
          kubectl rollout status deployment/devops-app
        '''
      }
    }
  }
}

