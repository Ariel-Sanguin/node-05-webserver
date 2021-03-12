const http = require('http');

http.createServer((req, res)=> {

    console.log(req);

    /*res.writeHead(200, {'Content-Type': 'application/json'});//200 es q salio todo bien

    const user = {
        id: 123,
        name: 'Ariel'
    }

    res.write(JSON.stringify(user));*/
    res.setHeader('Content-Disposition', 'attachment; filename=usuarios.csv'  );
    res.writeHead(200, {'Content-Type': 'application/csv'});
    
    res.write('id,name\n123,Ariel\n456,Ruperto');
    res.end();
    
}).listen(4000);


