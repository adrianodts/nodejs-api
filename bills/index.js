import express from 'express';
import all from './services/all.js';
import id from './services/id.js';
import create from './services/create.js';
import remove from './services/remove.js';

const router = express.Router();

router.get('/', all);
router.get('/:id', id);
router.post('/', create);
router.delete('/:id', remove);


export default router;