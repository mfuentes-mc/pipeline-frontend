import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Options } from "../types/options";
import { Environment, options } from '../config';
import * as s3 from 'aws-cdk-lib/aws-s3';

interface LambdaStackProps extends cdk.StackProps {
    options: Options,
    stageEnvironment: Environment
}

export class MainStack extends cdk.Stack {
    constructor(scope: Construct, stageName: string, props: LambdaStackProps) {
        super(scope, stageName, {...props});

        const bucket = new s3.Bucket(this, 'FrontendBucket', {
            bucketName:  `${options.bucketName}-${props.stageEnvironment.toLocaleLowerCase()}`
        });
    }
}
