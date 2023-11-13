/**
 * A Lambda function that logs the payload received from SQS.
 */

export const sqsPayloadLoggerHandler = async (event, context) => {
    console.info(JSON.stringify(event));
}
