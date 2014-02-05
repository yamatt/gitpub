yaml = require('js-yaml');
fs   = require('fs');

module.exports = function(option_config_path) {
    // Get document, or throw exception on error
    var config_path = option_config_path || __dirname + "/config.yaml"
    try {
      var config = yaml.safeLoad(fs.readFileSync(config_path, 'utf8'));
      return config;
    } catch (e) {
      console.log(e);
    }
}
