import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { v4 as uuidv4 } from "uuid";

const API_VERSION = "2006-03-01";
const BUCKET = "sitka-engineering-sim";
const IDENTITY_POOL_ID = "us-west-2:9359ed2a-5b00-4b02-8923-1c8933f9e4e5";
const REGION = "us-west-2";

const credentials = fromCognitoIdentityPool({
  client: new CognitoIdentityClient({ region: REGION }),
  identityPoolId: IDENTITY_POOL_ID,
});

const s3Client = new S3Client({
  region: REGION,
  credentials,
});

interface UploadArgs {
  content: Buffer | string;
  progressCallback: (loaded: number, total: number) => void;
}

function upload({ content, progressCallback }: UploadArgs): Promise<any> {
  const command = new PutObjectCommand({
    Body: content,
    Bucket: BUCKET,
    Key: `frontend-files/${uuidv4()}`,
  });

  return new Promise((resolve, reject) => {
    s3Client.send(command).then(resolve).catch(reject);
  });
}

export default upload;
