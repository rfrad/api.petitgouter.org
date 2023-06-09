import { APIGatewayProxyEvent, APIGatewayProxyResultV2 } from "aws-lambda";

export const handle = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResultV2> => {
    const handler: InfoHandler = new InfoHandler();
    return handler.handle(event);
};

export const VERSION: string = 'X.X.X';

class InfoHandler {
    handle(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResultV2> {
        return Promise.resolve({
            statusCode: 200,
            body: JSON.stringify({
                version: VERSION
            }),
        });
    }
}