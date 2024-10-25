# hello-godaddy

A simple project that deploy a nodejs app to AWS through CI/CD.

I crafted this small project to show how my skills with
- GitLab
- Pulumi
- Azure

can be easily carried on to 
- GitHub
- CloudFormation
- AWS

Structure of the project:
```
HELLO-WORLD/
│
├── src/                      # Your main application source code
│   ├── app.js                # Example entry point for the web app
│   └── ...
│
├── iac/                      # New folder for IaC (Infrastructure as Code)
│   ├── bin/                  # CDK entry point
│   ├── lib/                  # CDK stacks and resources
│   ├── node_modules/         # CDK dependencies
│   ├── package.json          # Separate package.json for IaC
│   └── tsconfig.json         # TypeScript config for IaC
│
├── node_modules/
├── package.json               # Main application package.json
└── ...

```