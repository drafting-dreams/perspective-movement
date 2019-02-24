const liveServer = require('live-server');

const options = {
  port: 8080,
  host: '0.0.0.0',
  root: './demo',
  watch: ['dist/**', 'demo/**'],
  open: false,
  mount: [['/dist', './dist']]
};

const server = liveServer.start(options);

module.exports = server
