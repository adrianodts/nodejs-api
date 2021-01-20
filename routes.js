import hello from './hello/index.js';
import bills from './bills/index.js';
import categories from './categories/index.js';
import address from './address/index.js';

export default (app) => {
    app.use('/', hello);
    app.use('/bills', bills);
    app.use('/categories', categories);
    app.use('/address', address);
};