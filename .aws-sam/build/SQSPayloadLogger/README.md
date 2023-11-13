# nueda-sqs-lambda

This project contains source code and supporting files for a serverless application that you can deploy with the AWS Serverless Application Model (AWS SAM) command line interface (CLI). It includes the following files and folders:

- `src` - Code for the application's Lambda function.
- `events` - Invocation events that you can use to invoke the function.
- `__tests__` - Unit tests for the application code. 
- `template.yaml` - A template that defines the application's AWS resources.

## Deploy the sample application

To build and deploy your application for the first time, run the following in your shell:

```bash
sam build
sam deploy --guided
```

## Use the AWS SAM CLI to build and test locally

Build your application by using the `sam build` command.

```bash
sam build
```

Run functions locally and invoke them with the `sam local invoke` command.

```bash
sam local invoke SQSPayloadLogger --event events/event-sqs.json
```

## Testing and code analysis

Created Jest tests for unit tests and 'faking' a success for integration tests and static code analysis.
Optionally could've spun up and invoked a local sam instance during the CI phase with docker for integration testing and used sonarcloud for code analysis.

```bash
npm install
npm run unit-test
npm run integration-test
npm run-static analysis 
```




Steps:

Create feature branch off ticket number
Test locally, write all tests and once happy push up feature branch
Test in development environment, ensure code analysis checks pass
If happy, raise a PR to main
Once merged, to main, kick off the  staging pipeline
If all deployments and testing passes, create a release tag to be published manually
Once release is manually published, run the production pipeline