import * as cdk from 'aws-cdk-lib';
import { StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Options } from '../types/options';
import { CodePipeline, CodePipelineSource, ManualApprovalStep, ShellStep } from 'aws-cdk-lib/pipelines';
import { DeployStage } from './deploy-stage';
import { options } from '../config';


interface PipelineCompletoStackProps extends StackProps {
  options: Options,
}


export class PipelineFrontendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: PipelineCompletoStackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this,`${props?.options.pipelineName}`,{
      pipelineName: `${props?.options.pipelineName}`,
      synth: new ShellStep('Synth',{
        input: CodePipelineSource.gitHub(`${props?.options.rootAccount}/${props?.options.reposName}`,'main'),
        commands: [
          'cd infraestructure',
          'npm ci',
          'npm run build',
          'npx cdk synth'
        ]
      })
    });
    for (const option of props?.options.stageOptions ?? []) {
      const stage = new DeployStage(this, option.environment, {
        options: options,
        env: { account: option.account, region: props?.options?.defaultRegion },
        stageEnvironment: option.environment
      });
      const stageDeployment = pipeline.addStage(stage);
      stageDeployment.addPre(new ManualApprovalStep(`PromoteTo${option.environment}`));
    }
  }
}
