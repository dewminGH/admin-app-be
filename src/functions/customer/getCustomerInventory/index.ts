import { getFunctionPath } from 'src/util/path';

export default {
    handler: getFunctionPath('/handler.getCustomerInventory', __dirname, process.cwd()),
    events: [
        {
            http: {
                method: 'get',
                path: 'getCustomerInventory',
                cors: {
                    origin: '*',
                    headers: [
                        'Content-Type',
                        'X-Amz-Date',
                        'Authorization',
                        'X-Api-Key',
                        'X-Amz-Security-Token',
                        'X-Amz-User-Agent',
                        'idtoken',
                    ],
                },
            },
        },
    ],
};
