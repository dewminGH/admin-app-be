import { getFunctionPath } from 'src/util/path';

export default {
    handler: getFunctionPath('/handler.saveItem', __dirname, process.cwd()),
    events: [
        {
            http: {
                method: 'post',
                path: 'saveItem',
            },
        },
    ],
};
