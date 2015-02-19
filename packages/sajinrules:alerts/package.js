Package.describe({
  name: 'sajinrules:alerts',
  summary: ' A pattern to display application alerts to the user',
  version: '1.0.0',
  git: ' git@github.com:spencerlambert/recurring-xero-sajin.git '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('sajinrules:alerts.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('sajinrules:alerts');
  api.addFiles('sajinrules:alerts-tests.js');
});
