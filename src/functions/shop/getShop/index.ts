import { getFunctionPath } from 'src/util/path';

export default {
    handler: getFunctionPath('/handler.getShop', __dirname, process.cwd()),
    events: [
        {
            http: {
                method: 'get',
                path: 'getShop',
            },
        },
    ],
};
