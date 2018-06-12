
'use strict';

const fs = require('fs');
const path = require('path');

module.exports = (dir) => {
    const router = require('koa-router')();

    //default controller directory is controllers
    let routes_dir = path.join(__dirname, (dir || 'routes'));
    
    let files = fs.readdirSync(routes_dir)
                  .filter((f) => {
                      return f.endsWith('.js');
                  })
                  .forEach((f) => {
                      let r = require(path.join(routes_dir,f));
                      router.use(r.routes(), r.allowedMethods());
                  });

    return router.routes(); 
};
