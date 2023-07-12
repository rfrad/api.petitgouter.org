import { AuthResponse, APIGatewayAuthorizerEvent } from 'aws-lambda'

export const authorize = async (event: APIGatewayAuthorizerEvent): Promise<AuthResponse> => {
    const authorizer: OpenToAll = new OpenToAll();
    return await authorizer.authorize(event);    
}

class OpenToAll {
    async authorize(event: APIGatewayAuthorizerEvent): Promise<AuthResponse> {
        return {
            policyDocument: {
                Version: '2012-10-17',
                Statement: [{
                    Action: 'execute-api:Invoke',
                    Effect: 'Allow',
                    Resource: "arn:aws:execute-api:*:*:*"
                }]
            },
            principalId: 'anyone'
        };
    }
}