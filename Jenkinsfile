pipeline {
    agent any

    parameters {
        choice(
            name: 'BROWSER',
            choices: ['chrome', 'firefox', 'edge'],
            description: 'Выберите браузер для запуска',
            defaultValue: 'chrome'
        )

        booleanParam(
            name: 'PARALLEL_BROWSERS',
            defaultValue: false,
            description: 'Запустить тесты параллельно в двух браузерах'
        )

        booleanParam(
            name: 'PARALLEL_FOLDERS',
            defaultValue: false,
            description: 'Запустить тесты из папок booking-tests и admin-tests параллельно'
        )
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Setup') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    if (params.PARALLEL_FOLDERS) {
                        sh 'npm run jenkins:parallel:folders'
                    }
                    else if (params.PARALLEL_BROWSERS) {
                        sh 'npm run jenkins:parallel:browsers'
                    }
                    else {
                        sh "npm run jenkins:${params.BROWSER}"
                    }
                }
            }
        }

        stage('Archive Results') {
            steps {
                archiveArtifacts artifacts: 'cypress/videos/**/*.mp4, cypress/screenshots/**/*.png'
            }
        }
    }
}