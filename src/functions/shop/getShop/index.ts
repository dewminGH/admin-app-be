import { getFunctionPath } from 'src/util/path';

export default {
    handler: getFunctionPath('/handler.getShop', __dirname, process.cwd()),
    events: [
        {
            http: {
                method: 'get',
                path: 'getShop',
                cors: {
                    origin: '*',
                    headers: [
                        'Content-Type',
                        'X-Amz-Date',
                        'Authorization',
                        'X-Api-Key',
                        'X-Amz-Security-Token',
                        'X-Amz-User-Agent',
                    ],
                },
            },
        },
    ],
};
