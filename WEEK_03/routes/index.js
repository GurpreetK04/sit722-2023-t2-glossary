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
  },
  {
    term: 'Agile',
    description: 'Agile is a set of software development principles and practices that emphasize collaboration, adaptability, and iterative development. Agile methodologies, such as Scrum and Kanban, promote close collaboration between development and operations teams, allowing them to respond to changes and deliver valuable software more frequently.',
    reference: 'https://www.agilealliance.org/agile101/'
  },
  {
    term: 'Dark Launch',
    description: 'Dark Launch, also known as Feature Toggles or Feature Flags, is a DevOps technique where new features are deployed to production but remain hidden from users. This allows teams to gradually expose features to a subset of users for testing and validation, reducing the risk associated with large deployments and enabling faster feedback loops.',
    reference: 'https://launchdarkly.com/blog/what-is-dark-launch/'
  },
  {
    term: 'Test-driven Development (TDD)',
    description: 'Test-driven Development (TDD) is a software development practice where developers write automated tests before writing the actual code. TDD promotes writing small, focused units of code that satisfy the requirements of the test cases. This approach enhances code quality, encourages design simplicity, and ensures that the codebase remains reliable during changes.',
    reference: 'https://www.agilealliance.org/glossary/tdd/'
  },
  {
    term: 'Provisioning ',
    description: 'Provisioning refers to the process of setting up and configuring resources, such as servers, virtual machines, or databases, to meet the requirements of an application or service. In DevOps, provisioning is often automated using Infrastructure as Code (IaC) tools to ensure consistency, speed up deployments, and reduce manual errors.',
    reference: 'https://docs.microsoft.com/en-us/azure/architecture/cloud-adoption/getting-started/provisioning-infrastructure/'
  },
  {
    term: 'Configuration Management',
    description: 'A practice of tracking, maintaining, and controlling the configuration settings and changes of software and systems. Configuration management ensures consistency, traceability, and enables efficient management of infrastructure.',
    reference: 'https://www.redhat.com/en/topics/devops/what-is-configuration-management/'
  },
  {
    term: 'Orchestration',
    description: 'The automated arrangement, coordination, and management of various tasks, processes, and components within a DevOps workflow. Orchestration tools streamline complex workflows and ensure consistent execution.',
    reference: 'https://www.ibm.com/cloud/learn/orchestration/'
  },
  {
    term: 'Deployment Pipeline',
    description: 'A sequence of automated stages in a DevOps workflow that enables the continuous integration, testing, and deployment of code changes. The deployment pipeline ensures consistent and reliable software delivery.',
    reference: 'https://continuousdelivery.com/patterns/continuous-deployment-pipeline/'
  },
  {
    term: 'Canary Release',
    description: 'A deployment technique where new code changes are gradually rolled out to a small subset of users or servers before being deployed to the entire infrastructure. This allows for monitoring and testing the new releases impact on a limited scale.',
    reference: 'https://martinfowler.com/bliki/CanaryRelease.html/'
  },
  {
    term: 'Version Control',
    description: 'A system that manages changes to source code and other files, allowing multiple contributors to collaborate on a project. Version control is fundamental in DevOps to track changes, facilitate collaboration, and maintain a history of code modifications.',
    reference: 'https://www.atlassian.com/git/tutorials/what-is-version-control/'
  },
  {
    term: 'Chaos Engineering',
    description: 'A discipline that involves deliberately introducing failures and disruptions into a system to test its resilience and identify weaknesses. Chaos engineering helps organizations build more reliable and robust systems by uncovering potential issues before they occur in production.',
    reference: 'https://principlesofchaos.org/'
  },
];

// Route handler for the root URL (http://localhost:3000/)
router.get('/', function(req, res, next) {
  // Render the 'glossary.ejs' view file and pass the glossaryData to the view
  res.render('glossary', { glossaryData });
});

module.exports = router;


