import { getFunctionPath } from 'src/util/path';

export default {
    handler: getFunctionPath('/handler.login', __dirname, process.cwd()),
    events: [
        {
            http: {
                method: 'post',
                path: 'login',
            },
        },
    ],
};
