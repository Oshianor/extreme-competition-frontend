const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes();

routes.add('index', '/');
routes.add("login", "/login");
routes.add('howToPlay', '/how-to-play');
routes.add('register', '/register');
routes.add('winners', '/winners');
routes.add('addwinner', '/admin/winner/:token');
routes.add('game', '/game/:name/:id');
routes.add('admin', '/admin/:token');
routes.add('addtestimonal', '/testimonial/:token');
routes.add('creategame', '/admin/create/:token');
routes.add("editgame", "/admin/edit/:token/:gameId");
routes.add("resetPassword", "/reset/:token");
routes.add('forgotPassword', '/forgot-password');
// routes.add("verification", "/verify/email-address/:token");
