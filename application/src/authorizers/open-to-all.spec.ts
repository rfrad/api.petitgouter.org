import 'jasmine';
import { authorize } from './open-to-all';
import { APIGatewayAuthorizerEvent, AuthResponse } from 'aws-lambda';

describe('OpenToAll authorizer', () => {
    it('should return the authorizer values', async () => {
        const result: AuthResponse = await authorize(<APIGatewayAuthorizerEvent><unknown>undefined);
        expect(result).toEqual({
            policyDocument: {
                Version: '2012-10-17',
                Statement: [{
                    Action: 'execute-api:Invoke',
                    Effect: 'Allow',
                    Resource: "arn:aws:execute-api:*:*:*"
                }]
            },
            principalId: 'anyone'
        });
    });
});