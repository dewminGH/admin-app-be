import { getFunctionPath } from 'src/util/path';

export default {
    handler: getFunctionPath('/handler.register', __dirname, process.cwd()),
    events: [
        {
            http: {
                method: 'post',
                path: 'register',
            },
        },
    ],
};
