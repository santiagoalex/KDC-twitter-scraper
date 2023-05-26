# KDC-twitter-scraper
A scrapper to twitter conferencist to the Kubernetes Community Day

## Run in local
- Download the project
- Go to root File
- Run `node index.js`

![image](https://github.com/santiagoalex/KDC-twitter-scraper/assets/19352507/5510704f-1fb6-497c-a66d-a38c4761f9bf)


## Steps to run in Kubernete Environment
- In root directory execute `docker build -t kcd-twitter-scraping:latest .`

![image](https://github.com/santiagoalex/KDC-twitter-scraper/assets/19352507/e8da205f-9308-49c6-8874-5efa908c8e1e)

- Use an environment to Allow use kubernetes for example minikube `minikube start`

![image](https://github.com/santiagoalex/KDC-twitter-scraper/assets/19352507/2c09b572-08e1-4985-b7d5-92fedec68779)

- Make a deployment with the following `kubectl apply -f archivo-deployment.yaml`
- You can check the deployment with `kubectl get deployments`

![image](https://github.com/santiagoalex/KDC-twitter-scraper/assets/19352507/a173c13d-6412-4bf2-b312-a8baf39b2ca4)

- Expose the deployment `kubectl expose deployment twitter-scraper-kcd --type=NodePort`

![image](https://github.com/santiagoalex/KDC-twitter-scraper/assets/19352507/ee409c37-9959-4ce6-bbca-91b3a21a9c76)

