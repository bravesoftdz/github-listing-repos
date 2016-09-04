function Settings(){
  var
  url         = 'http://localhost:8282',
  root        = './',
  src         = root + 'src/',
  vendor      = root + "node_modules/",
  distPath    = root + 'dist/',
  assets      = {
    css     : src + 'styles/css/',
    less    : src + 'styles/less/',
    js      : src + 'js/',
    specs   : root + 'specs/',
  }

  return {
    getRootPath     : function() { return root; },
    getURL          : function() { return url; },
    getSrcPath      : function() { return src; },
    getDistPath     : function() { return distPath; },
    getCSSPath      : function() { return assets.css; },
    getLESSPath     : function() { return assets.less; },
    getJSPath       : function() { return assets.js; },
    getSpecsPath    : function() { return assets.specs; },
    getVendorPath   : function() { return vendor },
  }
}

exports.settings = new Settings();
