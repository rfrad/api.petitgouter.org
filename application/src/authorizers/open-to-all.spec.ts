import 'jasmine';
import { authorize } from './open-to-all';
import { APIGatewayAuthorizerEvent, AuthResponse, PolicyDocument } from 'aws-lambda';

describe('OpenToAll authorizer', () => {
    it('should return the authorizer values', async () => {
        const result: AuthResponse = await authorize(<APIGatewayAuthorizerEvent><unknown>undefined);
        expect(result).toEqual({
            policyDocument: {} as PolicyDocument,
            principalId: ''
        });
    });
});