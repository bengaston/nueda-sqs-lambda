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

## Branching and pipeline rationale 

This is based on a trunk based development strategy where developers will build and test locally, then use a development environment to further test their solutions in an actual AWS environment using a feature branch (likely to follow feature/jira-ticket format). Once a PR has been raised from their feature branch, approved and merged in to the main branch, all automated testing and deployment to a staging environment where potential further manual QA can take place if required. If the all pipeling checks and deployment are successful to the staging environment are successful, a draft release will be created. Once published, the release will be promoted to production provided the build steps and quality checks are passed during the build process.

A set of different environments containing secrets required for production has been created on the github repository. 


### Pipeline Steps:

1. Create feature branch off ticket number
2. Make changes, test locally, write unit tests and integration test. Push feature branch to repo
3. Test in development environment, ensure code analysis checks pass
4. If happy, raise a PR to main
5. Once merged, to main, kick off the staging pipeline
6. If build and testing pass, create a draft release tag to be published manually
7. Once release is manually published, kick off the production pipeline

## Assumptions 
1. Some manual testing may be required in each environment
2. Input from other developers in the form of PRs and release reviews are required
3. Github repo will alert the required people to review the release. 

## Potential improvements

If this was to be set up in a real world environment and with more time the following potential improvements could be made: 

- Pipeline IAM roles, cloudfront roles and an artifact bucket per environment
- Create the actual AWS accounts per environment
- Potentially use one pipeline workflow for all enviornments with conditions on branch/releases
- Automated pull request raising on feature branches
- E2E testing with production release rollback on failure
- Enforcing coding standards and test coverage through the pipeline
- Add commit history and descriptions to release draft
