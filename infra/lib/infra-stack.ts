import * as cdk from "@aws-cdk/core";
import * as amplify from "@aws-cdk/aws-amplify";

export class AmplifyInfraStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Part 2 - Creation of the Amplify Application
    const amplifyApp = new amplify.App(this, "sample-react-app ", {
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: "niomwungeri-fabrice",
        repository: "https://github.com/niomwungeri-fabrice/niomwungeri-web.git",
        oauthToken: cdk.SecretValue.secretsManager('github-token'),
      }),
    });
    
    const masterBranch = amplifyApp.addBranch("main");

    new cdk.CfnOutput(this, 'AmplifyAppURL', {
      value: amplifyApp.defaultDomain,
      description: 'The Amplify app default domain',
    });
  }
}