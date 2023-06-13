import 'jasmine';
import { InfoHandler, VERSION } from './info-handler';
import { APIGatewayProxyEvent, APIGatewayProxyResultV2 } from 'aws-lambda';

describe('InfoHandler', () => {
    it('should return the info values', async () => {
        const handler: InfoHandler = new InfoHandler();
        const result: APIGatewayProxyResultV2 = await handler.handle(<APIGatewayProxyEvent><unknown>undefined);
        expect(result).toEqual({
            statusCode: 200,
            body: `{"version":"${VERSION}"}`
        });
    });
});