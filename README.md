# hello-godaddy

### A simple project that deploy a nodejs app to AWS through CI/CD.
_________

I crafted this small project to show how my skills with
- GitLab
- Pulumi
- Azure

can be easily carried on to 
- GitHub
- CloudFormation
- AWS
_________
Structure of the project:
```
HELLO-GODADDY/
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
Todos:
- [ ] Add HealthCheck Endpoint.
- [ ] Remove hardcoded service name from workflow (think of a way to retrieve it from aws)
- [ ] Review documentation.
___________
Here's the link to the [app](http://iacsta-myalb-uebxjf5fhtcu-1741050391.ca-central-1.elb.amazonaws.com/).

I haven't bought a domain yet...

I'm sure we can work it out together ;-)
