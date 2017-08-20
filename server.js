var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));
var Pool = require('pg').Pool;
var Pool = new Pool(config);

var config = {
    user:'arun77733',
    database:'arun77733',
    host:'arun77733.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};


app.get('/test-db', function(req,res){
    pool.query('SELECT * FROM test', function (err, result){
        if (err) {
            res.status(500).send(err,toString());
                 }
        else    {
                res.send(JSON.stringify(result.rows));
                 }
        
        
    });
});

var articleOne = {
    title : 'Article 1 | Arun Jp',
    heading: 'Article One',
    date: 'Asdadawd',
    content:    `<p>
                         Content ContentContentContentContentContentContentContentContent
                         ContentContentContentContentContentContent
                    </p>
                    <p>
                         Content ContentContentContentContentContentContentContentContent
                         ContentContentContentContentContentContent
                    </p>` 
    
    
                };
var app = express();
app.use(morgan('combined'));

function createTemplate (data) 
{
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    
    var htmlTemplate = ` <html>
             <head>
            <title>
              ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link href="ui/style.css" rel="stylesheet" />
            <style>
            
                        </style>
             </head>
             <body>
            <div class="container">
            <div>
                <a href="/">Home</a>
                
            </div>
            <h1> ${heading}</h1>
            <div>${date}</div>
            <div>
               ${content}
                    
            </div>
            </div>
            </body>
            </html> `
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article1', function (req, res) {
  res.send(createTemplate(article1));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
