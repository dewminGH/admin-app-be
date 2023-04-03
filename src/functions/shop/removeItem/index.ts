import { getFunctionPath } from 'src/util/path';

export default {
    handler: getFunctionPath('/handler.removeItem', __dirname, process.cwd()),
    events: [
        {
            http: {
                method: 'post',
                path: 'removeItem',
            },
        },
    ],
};
