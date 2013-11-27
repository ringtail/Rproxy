Rproxy
======

Ajax cross domain proxy

###DEMO 
some website don't have jsonp api,so the WD will be very sad  
and i develope this proxy for you.  
you can jsonp method to replace a ajax api .  
for example:
douban.fm ajax api  

http://douban.fm/j/mine/playlist?type=s&sid=1410744&pt=0.0&channel=21027&pb=64&from=mainsite&r=0ffd6f7427


and you can just use it like this:

```javascript      
   var URL = "http://douban.fm/j/mine/playlist?type=s&sid=1410744&pt=0.0&channel=21027&pb=64&from=mainsite&r=0ffd6f7427";

   $.ajax({
	url:"http://localhost:3000/get?url="+encodeURIComponent(URL),
    	dataType:"jsonp",
  	callback:"callback",
	success:function(data){
		//do something you like;
   		console.log(data);
		}
	})
```
