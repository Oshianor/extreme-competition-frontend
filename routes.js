const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes();

routes.add('index', '/')
routes.add('builder', '/form/builder')
routes.add('rules', '/form/rules')
routes.add('preview', '/form/preview')
routes.add('settings', '/form/setttings')
// routes.add('forgotPassword', '/forgotpassword')
// routes.add('dashboard', '/dashboard/in')
// routes.add('groups', '/dashboard/groups')
// routes.add('admin', '/dashboard/admins')
// routes.add('user', '/dashboard/users')
// routes.add('setting', '/dashboard/setting')
