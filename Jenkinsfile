node {
	def app
	
	stage('Clone repository') {

		checkout scm
	}

	stage('Build image) {

		app = docker.build("cjones72/Docker-Jenkins-Proj")
	}

	stage('Test image') {

		app.inside {
			echo "Test passed"

		}
	}
	stage('Push image') {
		/*

		*/
		docker.withRegistry('https://registry.hub.docker.com', 'cb1e4ce1-bf7c-4058-9eb1-6905479a7d89') { 
			app.push("${env.BUILD_NUMBER}")
			app.push ("latest")
			}

			echo "Project One Docker Jenkins"

	}
}