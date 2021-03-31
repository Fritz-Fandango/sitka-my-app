import AWS from 'aws-sdk';
import uuidv4 from 'uuid/v4';
import { Progress } from 'aws-sdk/lib/request';

const API_VERSION = '2006-03-01';
const BUCKET = 'sitka-engineering-sim';
const IDENTITY_POOL_ID = 'us-west-2:9359ed2a-5b00-4b02-8923-1c8933f9e4e5';
const REGION = 'us-west-2';

const S3_PARAMS = {
	apiVersion: API_VERSION,
	params: {
		Bucket: BUCKET
	},
};

AWS.config.update({
	region: REGION,
	credentials: new AWS.CognitoIdentityCredentials({
		IdentityPoolId: IDENTITY_POOL_ID
	})
});

const s3 = new AWS.S3(S3_PARAMS);

interface UploadArgs {
	content: AWS.S3.Types.PutObjectRequest['Body'];
	progressCallback: (loaded: number, total: number) => void;
}

function upload({ content, progressCallback }: UploadArgs): Promise<AWS.S3.PutObjectOutput | Error> {
	return new Promise((resolve, reject) => {
		const uploader = s3.putObject({
			Body: content,
			Bucket: BUCKET,
			Key: `frontend-files/${uuidv4()}`
		}, function (error, data) {
			if (error) {
				return reject(error);
			}

			return resolve(data);
		})

		if (progressCallback) {
			uploader.on('httpUploadProgress', (event: Progress) =>
				progressCallback(event.loaded, event.total)
			);
		}
	});
}

export default upload;
