const controller = require('../controllers/home.controller');

module.exports = app => {
    app.prefix('/', (home) => {
        home.route('/').get(controller.home);
    });
};