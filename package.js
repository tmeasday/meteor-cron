Package.describe({
  summary: "An extremely simple cron job"
});

Package.on_use(function (api, where) {
  api.add_files('cron.js', ['client', 'server']);
});