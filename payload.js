
{
console.log("im herer");
	let pipelineID;
	let ctr=0;




	var i = 1;                     //  set your counter to 1
var MINUTE_CONST=1000*60;
function myLoop () {           //  create a loop function
   setTimeout(function () {    //  call a 3s setTimeout when the loop is called
      //let temp=scrap_zerodha();//scrap_yahoo();
      scrap_zerodha().then(data=>{
      	save(data);
      })
		
		//location.reload();

               //  your code here
      i++;                     //  increment the counter
      if (i < 600) {            //  if the counter < 10, call the loop function
         myLoop();
                      //  ..  again which will trigger another 
      }                        //  ..  setTimeout()
   }, MINUTE_CONST*1)
}

function OneClicker(){
	let classnames=[];
	classnames.push("GLGUVL0HE GLGUVL0CF GLGUVL0OE GLGUVL0IR");

	classnames.push("GLGUVL0HE GLGUVL0CF GLGUVL0OE GLGUVL0NQ");
//
	classnames.push("GMD-42SDHE GMD-42SDCF GMD-42SDOE GMD-42SDNQ");
	classnames.push("GIEVJ5JDH-com-amazon-aws-ast-gwt-edgy-client-resources-css-ButtonStyle-button GIEVJ5JDCB-com-amazon-aws-ast-gwt-edgy-client-resources-css-ButtonStyle-text GIEVJ5JDO-com-amazon-aws-ast-gwt-edgy-client-resources-css-ButtonStyle-regularText GIEVJ5JDNM-com-amazon-aws-ast-gwt-edgy-client-widgets-table-resources-css-TableStyle-bottomLoadMore");
	classnames.push("GIEVJ5JDH-com-amazon-aws-ast-gwt-edgy-client-resources-css-ButtonStyle-button GIEVJ5JDCB-com-amazon-aws-ast-gwt-edgy-client-resources-css-ButtonStyle-text GIEVJ5JDO-com-amazon-aws-ast-gwt-edgy-client-resources-css-ButtonStyle-regularText GIEVJ5JDIN-com-amazon-aws-ast-gwt-edgy-client-widgets-table-resources-css-TableStyle-filterLoadMore");
	classnames.push("GIEVJ5JDH-com-amazon-aws-ast-gwt-edgy-client-resources-css-ButtonStyle-button GIEVJ5JDCB-com-amazon-aws-ast-gwt-edgy-client-resources-css-ButtonStyle-text GIEVJ5JDO-com-amazon-aws-ast-gwt-edgy-client-resources-css-ButtonStyle-regularText GIEVJ5JDIN-com-amazon-aws-ast-gwt-edgy-client-widgets-table-resources-css-TableStyle-filterLoadMore");

	let validClass;
	classnames.forEach(clssname=>{
		if(document.getElementsByClassName(clssname) && document.getElementsByClassName(clssname).length > 0){
			validClass=clssname;
		}
	})

	function clicker(){
		setTimeout(function(){

			if(document.getElementsByClassName(validClass)[0].innerText =="load more"){
				document.getElementsByClassName(validClass)[0].click();clicker()
			}

		},1000)
	}

	if(validClass)
		clicker();

	setTimeout(function(){ clicker() },1000)
}




	setTimeout(function(){



		let fullUrl= window.location.href;

		if(fullUrl.indexOf("datapipeline")>=0 && fullUrl.indexOf("aws.amazon")>=0 ) {
			scrapAws();

		}
	},6000);
let flag=false;
function scrapAws(){


		chrome.storage.local.get('pipelines', function(result){
			if(!result){
				chrome.storage.local.set({ "pipelines": [] });
			}

		});


	let fullUrl= window.location.href;
	console.log("AMRRR",fullUrl);
	//https://console.aws.amazon.com/datapipeline/home?region=us-east-1#ExecutionDetailsPlace:pipelineId=df-077528227MMBFPD2WVXB&show=latest
	if(fullUrl.indexOf("datapipeline")>=0){

		if(!pipelineID){
			let pipelineIdbeg=fullUrl.indexOf("df-");
			let substr=fullUrl.substring(pipelineIdbeg,fullUrl.length);
			let endindex=substr.indexOf("&");
			pipelineID=substr.substring(0,endindex);

		}

		if(ctr>10){
			sendMessage( "some issue",pipelineID);
			return false;
		}
		console.log("AMRRR",pipelineID,ctr++);
//
		let test1=document.getElementsByClassName("GAWDX-2BDL-com-amazon-aws-ast-gwt-edgy-client-widgets-table-resources-css-TableStyle-filterUserMessage");

				if(test1 && test1.length>0 && document.getElementsByClassName("GAWDX-2BDL-com-amazon-aws-ast-gwt-edgy-client-widgets-table-resources-css-TableStyle-filterUserMessage")[0].innerHTML.indexOf("all loaded")==-1){
					try{
						OneClicker();
						setTimeout(function(){
							scrapAws();
						},1000)
					}catch(err){
						console.log("AMRRR all done");
						//alert("all done",test1.length);

					}
				}else{

						console.log("im done dona done")
						let str=document.getElementsByClassName("GAWDX-2BDL-com-amazon-aws-ast-gwt-edgy-client-widgets-table-resources-css-TableStyle-filterUserMessage")[0].innerHTML;
						let countFromText=str.substring(0,str.indexOf(" "));
						if(countFromText == document.getElementsByClassName("GAWDX-2BGK-com-amazon-aws-ast-gwt-edgy-client-widgets-table-resources-css-TableStyle-cell GAWDX-2BMRE-edp-console-client-resources-style-CommonStyles-greenInlineStatus").length){
							console.log("all success ",countFromText);
							//chrome.notifications.create("all success "+countFromText);
							//document.getElementById('pagetitle').innerHTML = "all success "+countFromText;
							sendMessage( "all success "+countFromText,pipelineID);




						}else{
							sendMessage( "Some are failed",pipelineID);
						}

				}


			//on more
		//GAWDX-2BD-com-amazon-aws-ast-gwt-edgy-client-resources-css-ButtonStyle-button GAWDX-2BO-com-amazon-aws-ast-gwt-edgy-client-resources-css-ButtonStyle-text GAWDX-2BK-com-amazon-aws-ast-gwt-edgy-client-resources-css-ButtonStyle-regularText GAWDX-2BNK-com-amazon-aws-ast-gwt-edgy-client-widgets-table-resources-css-TableStyle-filterLoadMore
//on end
		//GAWDX-2BDL-com-amazon-aws-ast-gwt-edgy-client-widgets-table-resources-css-TableStyle-filterUserMessage
	}
}


	function scrap(){
			let parentDiv=document.getElementsByClassName("ML43Jb");
			let map={};
			if(parentDiv && parentDiv.length>0){


				for(let i=0;i<parentDiv.length;++i){
					let item=parentDiv[i];
					let key=item.getElementsByClassName("j7FfMb")[0].innerText;
					let value=item.getElementsByClassName("IsqQVc")[0].innerText;
					map[key]=value;
				}


			}

			return map;

	}



	function save(mapitem){
		let goodname=getFormattedDate();
	

		chrome.storage.sync.set({ "name": goodname }, function(){
    //  A data saved callback omg so fancy
});
		chrome.storage.sync.set({ goodname: mapitem }, function(){
    //  A data saved callback omg so fancy
});

		setTimeout(function(){
			saveText(goodname, JSON.stringify(mapitem));
		},200);
	}

		
	    


function sendMessage(messg,pipelineIDparam){


	chrome.storage.local.get('pipelines', function(result){
		//keywords = result;
		let temp=[];

		for(item in result){
			console.log("bbb",item,result[item]);
			if(item && item.length)
			   temp.push(result[item]);

		}
		temp.push([pipelineIDparam,messg]);

		let stringMessage=temp.join("-");
		console.log("my local storage--",);
		chrome.storage.local.set({ "pipelines": temp });

		chrome.runtime.sendMessage(stringMessage);
	/*
		chrome.runtime.sendMessage('', {
			type: 'notification',
			pipeid: pipelineIDparam,
			options: {
				title: messg,
				message: temp,
				iconUrl: 'logo.png',
				type: 'basic'
			}
		});

		*/

	});






		/*
		chrome.storage.local.set({"amrr": "success"}, function() {
			// Notify that we saved.
			console.log('Settings saved ');
		});


		chrome.storage.local.get(['pipelines'], function(result) {

				console.log(result);
				chrome.storage.local.set({pipelineID: "success"}, function() {
					// Notify that we saved.
					console.log('Settings saved ');
				});



		});
*/





}

	


//let tempkey=;
//let tempval=document.getElementsByClassName("vddl-draggable")[0];



function getFormattedDate() {
    var date = new Date();

    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;
    hour = (hour < 10 ? "0" : "") + hour;
    min = (min < 10 ? "0" : "") + min;
    sec = (sec < 10 ? "0" : "") + sec;

    var str = date.getFullYear() + "-" + month + "-" + day + "_" +  hour + ":" + min + ":" + sec;

    /*alert(str);*/

    return str;
}



function saveText(filename, text) {
            var tempElem = document.createElement('a');
            tempElem.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
            tempElem.setAttribute('download', filename);
            tempElem.click();
         }









     }