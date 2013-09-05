Package.describe({
  summary: "An extremely simple cron job"
});

Package.on_use(function (api, where) {
  api.use('underscore', ['client', 'server']); 
  api.add_files('cron.js',['client' ,'server']);
  if (api.export) 
    api.export('Cron');
});