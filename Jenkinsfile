node {    def app    stage('Clone repository') {              checkout scm    }    stage('Build image') {             app = docker.build("cjones72/docker-jenkins-proj")    }    stage('Push image') {               docker.withRegistry('https://registry.hub.docker.com', 'docker-cred') {            app.push("latest")        }    }}