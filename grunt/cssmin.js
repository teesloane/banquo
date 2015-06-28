'use strict';

module.exports = {
  options: {
    banner: "/*\n <%= pkg.description %>\n @author: <%= pkg.author %>\n @email: <%= pkg.email %>\n @url: <%= pkg.homepage %>\n @version: <%= pkg.version %>\n*/\n",
    keepSpecialComments: 0
  },
  minify: {
    expand: true,
    cwd: "<%= dirs.release %>/css",
    src: [
      "*.css"
    ],
    dest: "<%= dirs.release %>/css",
    ext: ".min.css"
  }
};