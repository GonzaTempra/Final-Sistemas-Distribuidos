const express = require('express');
const router = express.Router();
const controller = require('../controllers/PostController');
const auth = require('../middlewares/auth');


router.post('/api/post', auth, controller.create);
router.get('/api/posts', auth, controller.list);
router.get(
    '/api/post/:id',
    auth,
    controller.find,
    controller.show
);
router.put(
    '/api/post/:id',
    auth,
    controller.find,
    controller.update
);
router.delete(
    '/api/post/:id',
    auth,
    controller.find,
    controller.delete
);

module.exports = router;