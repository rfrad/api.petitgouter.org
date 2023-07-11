import { AuthResponse, APIGatewayAuthorizerEvent, PolicyDocument } from 'aws-lambda'

export const authorize = async (event: APIGatewayAuthorizerEvent): Promise<AuthResponse> => {
    const authorizer: OpenToAll = new OpenToAll();
    return authorizer.authorize(event);
}

class OpenToAll {
    async authorize(event: APIGatewayAuthorizerEvent): Promise<AuthResponse> {
        return {
            policyDocument: {} as PolicyDocument,
            principalId: ''
        };
    }
}