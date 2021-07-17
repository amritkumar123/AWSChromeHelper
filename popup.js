	// Inject the payload.js script into the current tab after the popout has loaded

	//window.addEventListener('click', )
//var updateProperties = { 'active': true };
	// chrome.tabs.update(tabId, updateProperties, (tab) => { });


	document.addEventListener("DOMContentLoaded",function () {
		console.log('dddddd');
		document.getElementById("submit1").addEventListener("click",function(){
			console.log("onclickedlistener");

			let userinputval = document.getElementById('pipelineID').value.trim();
			console.log(userinputval);

			let beg=userinputval.indexOf("df-");
			let pipelineid;
			if(beg>-1){
				let pipelineids=[];
				userinputval.split("df-").forEach(item=>{
					item=item.trim();
					let end= item.length;
					if(item.indexOf("&")>-1){
						end= item.indexOf("&");
					}else if(item.indexOf(" ")>-1){
						end= item.indexOf(" ");
					}else if(item.indexOf("\n")>-1){
						end= item.indexOf("\n");
					}
					if(item && item.substring(0,end).length)
						pipelineids.push("df-"+item.substring(0,end));
				})


				pipelineids.forEach(pipelineid=>{
					document.getElementById('loading').innerHTML = "waiting for"+pipelineid;

					var newURL = "https://console.aws.amazon.com/datapipeline/home?region=us-east-1#ExecutionDetailsPlace:pipelineId=pipelineid&show=latest";

					newURL=newURL.replace("pipelineid",pipelineid)
					chrome.tabs.create({ url: newURL, active: false },function(tab){
						document.getElementById('loading').innerHTML = "waiting for "+pipelineid+" at"+tab.id;


						//document.getElementById('loading').className="tabid";
						//	var node = document.createElement("a");                 // Create a <li> node
						// Create a text node
						///	node.innerHTML=  pipelineid;                           // Append the text to <li>
						//	document.getElementById("loading").appendChild(node);
					});
				})


			}else if(userinputval.indexOf("j-")>-1){
				beg=userinputval.indexOf("j-");
				pipelineid=userinputval.substring(beg,userinputval.length).trim();
				let end=pipelineid.indexOf("&");
				if(end>-1){
					pipelineid=pipelineid.substring(0,end);

				}

				document.getElementById('loading').innerHTML = "waiting for"+pipelineid;

				var newURL = "https://console.aws.amazon.com/elasticmapreduce/home?region=us-east-1#cluster-details:pipelineid";

				newURL=newURL.replace("pipelineid",pipelineid)
				chrome.tabs.create({ url: newURL, active: false },function(tab){
					document.getElementById('loading').innerHTML = "waiting for "+pipelineid+" at"+tab.id;


					//document.getElementById('loading').className="tabid";
					//	var node = document.createElement("a");                 // Create a <li> node
					// Create a text node
					///	node.innerHTML=  pipelineid;                           // Append the text to <li>
					//	document.getElementById("loading").appendChild(node);
				});
			}else if(userinputval.indexOf("s3://")>-1){
				let pipelineids=[];
				userinputval.split("s3://").forEach(item=>{
					item=item.trim();
					let end= item.length;
					if(item.indexOf("&")>-1){
						end= item.indexOf("&");
					}else if(item.indexOf(" ")>-1){
						end= item.indexOf(" ");
					}else if(item.indexOf("\n")>-1){
						end= item.indexOf("\n");
					}else if(item.indexOf("\t")>-1){
						end= item.indexOf("\t");
					}
					if(item && item.substring(0,end).length)
						pipelineids.push(item.substring(0,end));
				})


				pipelineids.forEach(pipelineid=>{
					document.getElementById('loading').innerHTML = "waiting for"+pipelineid;

					var newURL = "https://s3.console.aws.amazon.com/s3/object/pipelineid?region=us-east-1&tab=overview";
					if(pipelineid[pipelineid.length-1]=="/")
						newURL = "https://s3.console.aws.amazon.com/s3/buckets/pipelineid?region=us-east-1&tab=overview"
					newURL=newURL.replace("pipelineid",pipelineid)
					chrome.tabs.create({ url: newURL, active: false },function(tab){
						document.getElementById('loading').innerHTML = "waiting for "+pipelineid+" at"+tab.id;


						//document.getElementById('loading').className="tabid";
						//	var node = document.createElement("a");                 // Create a <li> node
						// Create a text node
						///	node.innerHTML=  pipelineid;                           // Append the text to <li>
						//	document.getElementById("loading").appendChild(node);
					});
				})
			}

			//https://console.aws.amazon.com/datapipeline/home?region=us-east-1#ExecutionDetailsPlace:pipelineId=df-027366833U3D62M01DO6&show=latest
		})

		document.getElementById("clear").addEventListener("click",function(){

			document.getElementById('info').innerHTML = '';
			chrome.storage.local.set({ "pipelines": [] });
		})

		document.getElementById("focus").addEventListener("click",function(){

			document.getElementById('info').innerHTML = '';
			chrome.storage.local.set({ "pipelines": [] });
		})

	})




	window.addEventListener('load', function (evt) {

		chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
			file: 'payload.js'
		});;


	});





	chrome.runtime.onMessage.addListener(function (data) {
		var ba = chrome.browserAction;
		function setAllRead(ctr) {
			ba.setBadgeBackgroundColor({color: [0, 255, 0, 128]});
			ba.setBadgeText({text: ctr});   // <-- set text to '' to remove the badge
		}
		setAllRead("0");



		if(data){
			console.log("asdf",data);

			let text='';

			setAllRead("1");
			document.getElementById('info').innerHTML = data;
		}



		/*
		if (data.type == 'notification') {
			//chrome.notifications.create('', data.options);
			//chrome.tabs.create({'url':"chrome://newtab?pipeid="+data.pipeid});
			document.getElementById('pagetitle').innerHTML = "Pipeline Status";
			let options=data.options;
			console.log("options",options);
			if(options){
				console.log("asdf",messArray);
				let messArray=options.message;
				let text='';
				if(messArray){
					messArray.forEach(item =>{
						text+item[0]+"="+item[1];
					})
					setAllRead(messArray.length+"");
				}else{
					setAllRead("nil");
				}

				document.getElementById('info').innerHTML = text;
			}



		}

*/


	});








