module.exports = {
  'src_folders': ['test/functional/specs'],
  'output_folder': 'test/functional/reports',
  'custom_assertions_path': ['test/functional/assertions'],

  'selenium': {
    'start_process': true,
    'server_path': require('selenium-server').path,
    'host': '127.0.0.1',
    'port': 4444,
    'cli_args': {
      'webdriver.chrome.driver': require('chromedriver').path
    },
  },

  'test_settings': {
    'default': {
      'selenium_port': 4444,
      'selenium_host': 'localhost',
    },

    'chrome': {
      'desiredCapabilities': {
        'browserName': 'chrome',
        'acceptSslCerts': true,
        'javascriptEnabled': true,
      },
    },
  }
}
