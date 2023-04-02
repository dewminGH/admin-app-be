import { getFunctionPath } from 'src/util/path';

export default {
    handler: getFunctionPath('/handler.getNewTokens', __dirname, process.cwd()),
    events: [
        {
            http: {
                method: 'post',
                path: 'getNewTokens',
            },
        },
    ],
};
