import { getFunctionPath } from 'src/util/path';

export default {
    handler: getFunctionPath('/handler.confirmRegister', __dirname, process.cwd()),
    events: [
        {
            http: {
                method: 'post',
                path: 'confirmRegister',
            },
        },
    ],
};
