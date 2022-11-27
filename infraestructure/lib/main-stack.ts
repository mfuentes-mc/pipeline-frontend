import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Options } from "../types/options";
import { Environment, options } from '../config';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";
import { CfnOutput } from 'aws-cdk-lib';
import { CloudFrontWebDistribution } from 'aws-cdk-lib/aws-cloudfront';

interface LambdaStackProps extends cdk.StackProps {
    options: Options,
    stageEnvironment: Environment
}

export class MainStack extends cdk.Stack {
    constructor(scope: Construct, stageName: string, props: LambdaStackProps) {
        super(scope, stageName, {...props});

        const bucket = new s3.Bucket(this, 'FrontendBucket', {
            bucketName:  `${options.bucketName}-${props.stageEnvironment.toLocaleLowerCase()}`,
            websiteIndexDocument: 'index.html',
            publicReadAccess: true,
            removalPolicy: cdk.RemovalPolicy.DESTROY,
        });

        // Deployment
        const src = new BucketDeployment(this, "DeployFrontendApp", {
            sources: [Source.asset("../dist")],
            destinationBucket: bucket
        });
        console.log("SRC OBJECT",src);
        new CfnOutput(this, 'FrontendAppS3Url', {
            value: bucket.bucketWebsiteUrl
        });

        const cloudFront = new CloudFrontWebDistribution(
            this,
            'frontend-app-distribution', {
                originConfigs:[
                    {
                        behaviors: [
                            {
                                isDefaultBehavior: true
                            }
                        ],
                        s3OriginSource: {
                            s3BucketSource: bucket
                        }
                    }
                ]
            }
        );
        new CfnOutput(this, 'spaceFinderWebAppCloudFrontUrl', {
            value: cloudFront.distributionDomainName
        })
    }
}
