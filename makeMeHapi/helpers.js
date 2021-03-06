/*
Create a server which responds to requests to /?name=Helping&suffix=! using
the template from the VIEWS exercise.

Instead of placing the query parameter directly in the template, create a helper
at helpers/helper.js and use this helper in the template to output the name
query parameter.

    <html>
        <head><title>Hello Helping!</title></head>
        <body>
            Hello Helping!
        </body>
    </html>

The helper should concatenate the name and suffix query parameters.

-------------------------------------------------------------------------------

## HINTS

Helpers are functions used within templates to perform transformations and other
data manipulations using the template context or other inputs.

You can define a helpers path in the server options. All .js files in this
directory will be loaded and the file name will be used as the helper name.

    var options = {
        views: {
            ...
            helpersPath: 'helpers'
        }
    };

Each file must export a single method with the signature function(context) and
return a string.

    module.exports = function(context) {
        return context.data.root.query.foo;
    }

The helper function can then be used in the template.

    <div>{{helper}}</div>
*/
var Hapi = require('hapi');
var path = require('path');
var options = {
  views:{
      path: path.join(__dirname + '/templates'),
      engines :{
        html: require('handlebars'),
      },
      helpersPath: 'helperfiles'
    }
};

var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080), options);

server.route({
  method: 'GET',
  path: '/',
  handler: {
    view :'indexHelper.html'
  }
});

server.start();
