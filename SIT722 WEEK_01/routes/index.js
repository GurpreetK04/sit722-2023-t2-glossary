// routes/index.js

const express = require('express');
const router = express.Router();

// Define your glossary data here (terms, descriptions, references)
const glossaryData = [
  {
    term: 'CI/CD',
    description: 'A DevOps practice that emphasizes automating the process of integrating code changes into a shared repository (Continuous Integration) and deploying code to production automatically (Continuous Deployment). It enables frequent releases, rapid feedback, and reduces the risk of integration issues.',
    reference: 'https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment'
  },
  {
    term: 'Docker',
    description: 'A containerization platform that allows developers to package applications and their dependencies into lightweight, portable containers. Docker containers provide consistent environments across different stages of the development and deployment process, improving consistency and reducing conflicts.',
    reference: 'https://docs.docker.com/get-started/overview/'
  },
  {
    term: 'Kubernetes',
    description: 'An open-source container orchestration tool used in DevOps environments to automate the deployment, scaling, and management of containerized applications. It ensures high availability and resilience of applications in production.',
    reference: 'https://kubernetes.io/docs/home/'
  },
  {
    term: 'Jenkins',
    description: 'An open-source automation server widely used for Continuous Integration and Continuous Deployment. Jenkins enables developers to automate the build, test, and deployment processes, making it a crucial tool in DevOps pipelines.',
    reference: 'https://www.jenkins.io/doc/'
  },
  {
    term: 'Git',
    description: 'A distributed version control system that enables developers to collaborate, track changes, and manage source code effectively. Git plays a crucial role in DevOps by providing a versioned and collaborative code repository.',
    reference: 'https://git-scm.com/'
  },
  {
    term: 'Infrastructure as Code (IaC)',
    description: 'A DevOps practice of managing and provisioning infrastructure through machine-readable code, such as scripts or configuration files. IaC enables the automated and consistent deployment of infrastructure, reducing manual efforts and ensuring reproducibility.',
    reference: 'https://www.hashicorp.com/resources/what-is-infrastructure-as-code'
  },
  {
    term: 'DevSecOps',
    description: 'An extension of DevOps that integrates security practices into the development and deployment process. DevSecOps aims to identify and address security issues early in the development lifecycle, making security an integral part of the continuous delivery pipeline.',
    reference: 'https://www.redhat.com/en/topics/devops/what-is-devsecops'
  },
  {
    term: 'Microservices',
    description: 'A software architecture pattern where applications are divided into small, loosely coupled services. Microservices enable independent development, deployment, and scalability of each service, making it easier to maintain and evolve complex applications.',
    reference: 'https://docs.microsoft.com/en-us/dotnet/architecture/microservices/'
  },
  {
    term: 'Automation Testing',
    description: 'The practice of using automated tools to execute test cases and validate the functionality of software applications. In DevOps, automation testing is critical for ensuring rapid feedback and continuous quality assurance.',
    reference: 'https://smartbear.com/learn/automated-testing/what-is-automated-testing/'
  },
  {
    term: 'Cloud Computing',
    description: 'A model for delivering computing resources (e.g., servers, storage, databases, networking) over the internet on a pay-as-you-go basis. Cloud computing is fundamental to DevOps as it provides scalable and flexible infrastructure to support continuous integration and deployment.',
    reference: 'https://aws.amazon.com/what-is-cloud-computing/'
  }
];

// Route handler for the root URL (http://localhost:3000/)
router.get('/', function(req, res, next) {
  // Render the 'glossary.ejs' view file and pass the glossaryData to the view
  res.render('glossary', { glossaryData });
});

module.exports = router;


