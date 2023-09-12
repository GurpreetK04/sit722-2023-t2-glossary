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
  {
    term: 'Infrastructure as a Service (IaaS)',
    description: 'IaaS is a cloud computing service model that provides virtualized computing resources over the internet. It offers on-demand access to servers, storage, and networking, enabling organizations to scale their infrastructure without the need to invest in physical hardware.',
    reference: 'https://azure.microsoft.com/en-us/overview/what-is-iaas/'
  },
  {
    term: 'Service Level Agreement (SLA)',
    description: 'An SLA is a formal agreement between a service provider and a customer that outlines the expected level of service, including performance metrics, availability, and response times. SLAs are crucial in DevOps for defining service expectations and ensuring accountability.',
    reference: 'https://www.cio.com/article/243828/7-ways-to-boost-your-application-performance.html'
  },
  {
    term: 'Workflow',
    description: 'Workflow in DevOps refers to the series of steps and processes that define the path of a task or project from initiation to completion. It encompasses the automation and coordination of tasks, ensuring efficient and predictable execution throughout the software development and delivery lifecycle.',
    reference: 'https://www.smartsheet.com/what-is-workflow-definition-and-importance'
  },
  {
    term: 'Virtualization',
    description: 'Virtualization is a technology that enables the creation of virtual instances of computer hardware, operating systems, or software applications. It allows multiple virtual environments to run on a single physical system, improving resource utilization, scalability, and flexibility in DevOps for testing, development, and production environments.',
    reference: 'https://www.vmware.com/topics/glossary/content/virtualization'
  },
  {
    term: 'Quality Assurance',
    description: 'Quality Assurance (QA) is the practice of systematically monitoring and evaluating the quality of a product or process. In DevOps, QA encompasses strategies, techniques, and tools to ensure that software applications meet predefined quality standards and functional requirements throughout the development and deployment pipeline.',
    reference: 'https://www.guru99.com/quality-assurance-tutorial.html'
  },
  {
    term: 'DevOps Toolchain',
   description: 'A DevOps toolchain refers to a set of tools and technologies used in the DevOps process to automate, manage, and streamline various stages of software development and deployment. It includes tools for version control, continuous integration, deployment, monitoring, and more.',
   reference: 'https://devops.com/devops-tools/',
  },
  {
    term: 'Elasticity',
    description: 'Elasticity in DevOps refers to the ability of a system or infrastructure to dynamically scale up or down in response to changing workloads or demand. It allows resources such as servers, storage, and computing power to be provisioned or de-provisioned automatically to maintain optimal performance and cost-efficiency.',
    reference: 'https://aws.amazon.com/what-is-elasticity/',
  },
  {
    term: 'MongoDB',
    description: 'MongoDB is a popular NoSQL database management system that is often used in DevOps and modern application development. MongoDB stores data in flexible, schema-less documents, making it well-suited for handling unstructured or semi-structured data. It is known for its scalability, high availability, and support for distributed database architectures.',
    reference: 'https://www.mongodb.com/what-is-mongodb',
  },
  {
    term: 'Blue-Green Deployment',
    description: 'Blue-Green Deployment is a deployment strategy that involves maintaining two separate environments, one "blue" (production) and one "green" (new version). The new version is deployed to the green environment and tested, and then traffic is switched from blue to green, minimizing downtime and risk during updates.',
    refernce: 'https://martinfowler.com/bliki/BlueGreenDeployment.html',
  },
  {
    term: 'Cluster',
    description: 'In DevOps, a cluster refers to a group of interconnected servers, nodes, or instances that work together to distribute workloads, improve fault tolerance, and enhance the performance of applications. Clustering is used to achieve high availability, scalability, and reliability in distributed systems.',
    reference: 'https://www.cloudflare.com/en-au/learning/network-layer-attacks/what-is-a-cluster/',
  },
];

// Route handler for the root URL (http://localhost:3000/)
router.get('/', function(req, res, next) {
  // Render the 'glossary.ejs' view file and pass the glossaryData to the view
  res.render('glossary', { glossaryData });
});

module.exports = router;



