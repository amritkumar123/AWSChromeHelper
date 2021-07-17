	// Inject the payload.js script into the current tab after the popout has loaded

	//window.addEventListener('click', )
//var updateProperties = { 'active': true };
	// chrome.tabs.update(tabId, updateProperties, (tab) => { });

	// Inject the payload.js script into the current tab after the popout has loaded

	//window.addEventListener('click', )
//var updateProperties = { 'active': true };
	// chrome.tabs.update(tabId, updateProperties, (tab) => { });
	
	function getRelaventIDs(str,prefix){
		let set=new Set();
		let ctr=0;
		while(str && str.length&& ctr<50){
			ctr++;
			console.log(str.length);
			let begIndex= str.indexOf(prefix);
			if(begIndex==-1)
				break;
			let str1 =str.substring(begIndex);
			let endIndex=str1.split("").findIndex((char)=>{
				if(char=="\'"|| char=='\"'|| char=="'"|| char=='"'|| char==","|| char==";"||char=="&"||char=="%"|| char==" "|| char==")"|| char=="\n"){
					return true;
				}
			})
			endIndex=(endIndex>-1)?endIndex:str1.length;
			let pipelineId=str1.substring(0,endIndex);
			set.add(pipelineId);
			str=str1.substring(endIndex+1);
		
		}
	
		return Array.from(set);
	}
	

	document.addEventListener("DOMContentLoaded",function () {
		console.log('dddddd');
		document.getElementById("submit1").addEventListener("click",function(){
			console.log("onclickedlistener");

			let userinputval = document.getElementById('pipelineID').value.trim();
			console.log(userinputval);


			if(userinputval.indexOf("df-")>-1){
				
				let pipelineids=getRelaventIDs(userinputval,"df-")

				
				pipelineids.forEach(pipelineid=>{
					document.getElementById('loading').innerHTML = "waiting for"+pipelineid;

					var newURL = "https://console.aws.amazon.com/datapipeline/home?region=us-east-1#ExecutionDetailsPlace:pipelineId=pipelineid&show=latest";

					newURL=newURL.replace("pipelineid",pipelineid)
					chrome.tabs.create({ url: newURL, active: false },function(tab){
						document.getElementById('loading').innerHTML = "waiting for "+pipelineid+" at"+tab.id;

					});
				})


			}
			 if(userinputval.indexOf("j-")>-1){
				let pipelineids=getRelaventIDs(userinputval,"j-")
				pipelineids.forEach(pipelineid=>{

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
				});
			}
			
			if(userinputval.indexOf("s3://")>-1){
		
				let pipelineids=getRelaventIDs(userinputval,"s3://")

				pipelineids.forEach(pipelineid=>{
					document.getElementById('loading').innerHTML = "waiting for"+pipelineid;
					pipelineid=pipelineid.substring(5);
					var newURL = "https://s3.console.aws.amazon.com/s3/object/pipelineid?region=us-east-1&tab=overview";
					if(pipelineid[pipelineid.length-1]=="/")
						newURL = "https://s3.console.aws.amazon.com/s3/buckets/pipelineid?region=us-east-1&tab=overview"
					newURL=newURL.replace("pipelineid",pipelineid)
					chrome.tabs.create({ url: newURL, active: false },function(tab){
						document.getElementById('loading').innerHTML = "waiting for "+pipelineid+" at"+tab.id;


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







