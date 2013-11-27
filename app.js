var http = require('http'),
	url = require('url'),
	querystring = require('querystring');

http.createServer(function(req,res){
	var pathname = url.parse(req.url).pathname;

	var data="";
	if(pathname === '/get'){
		var query = url.parse(req.url).query,
			ajaxUrl = decodeURIComponent(querystring.parse(query)['url']),
			callback = querystring.parse(query)['callback'];

		http.get(ajaxUrl,function(response){
			// console.log("status:"+response.statusCode+response.headers);
			data += callback+"(";
			response.on('data',function(buffer){
				data+=buffer;
			});
			response.on('end',function(){
				data+=")";

				res.writeHead(200,{'Content-Type':'text-plain'});
				console.log(data);
				res.write(data);
				res.end();
			})
		})
	}else if(pathname === '/post'){

	}else{
		//do nothing;
	}

	
}).listen(3000);