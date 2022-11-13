#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { PipelineFrontendStack } from '../lib/pipeline-frontend-stack';
import { options } from '../config';

const app = new cdk.App();
new PipelineFrontendStack(app,`${options.stackNamePrefix}-${options.stackName}` , {
  env:{
    account: options.account,
    region: options.defaultRegion
  },
  options:options
});