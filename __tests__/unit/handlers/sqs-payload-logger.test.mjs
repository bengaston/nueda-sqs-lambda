import { sqsPayloadLoggerHandler } from '../../../src/handlers/sqs-payload-logger.mjs';
import { jest } from '@jest/globals';

describe('Test for sqs-payload-logger', function () {
    it('Verifies the payload is logged', async () => {

        console.info = jest.fn()

        let payload = {
            DelaySeconds: 10,
            MessageAttributes: {
                "Sender": {
                    DataType: "String",
                    StringValue: "sqs-payload-logger"
                }
            },
            MessageBody: "This message was sent by the sqs-payload-logger Lambda function",
            QueueUrl: "SQS_QUEUE_URL"
        }

        await sqsPayloadLoggerHandler(payload, null)

        expect(console.info).toHaveBeenCalledWith(JSON.stringify(payload))
    });
});
