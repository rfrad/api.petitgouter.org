import 'jasmine';
import { handle, VERSION } from './info-handler';
import { APIGatewayProxyEvent, APIGatewayProxyResultV2 } from 'aws-lambda';

describe('InfoHandler', () => {
    it('should return the info values', async () => {
        const result: APIGatewayProxyResultV2 = await handle(<APIGatewayProxyEvent><unknown>undefined);
        expect(result).toEqual({
            statusCode: 200,
            body: `{"version":"${VERSION}"}`
        });
    });
});