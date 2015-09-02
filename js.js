document.onclick = function() {
    
};



    
    window.onload= function ()
    {
        
        //Global Variable for the country selected on firspage
        var countrSelected;
    	//************country selection*********
    	//
		//
		
		$(".countryButton").on('click',countrySelection);

		function countrySelection()
		{
			
			
				var country = $(this).text();
				countrSelected =country;

				//hiding global overlay
				$(".countryButton").css({"visibility":"hidden", "display":"none"});
				$("#globalChose").css({"visibility":"hidden", "display":"none"});
				
			
		}
		
    	
		
		//************Open float helper************
		//
		//
		//
		document.getElementById("helper").addEventListener("click",openHelper,false);
		
		function openHelper(a){
			$("#floatHelper").toggle();
				return a;
		}

		
		//*************************Text Editor************************
		//tinymce.init({selector:'#GenText'});
		$("#genTex").on('click',openEditor);
		$("#disclaimer").on('click',openEditor);
		$("#Textpf").on('click',openEditor);
		$("#Textpf2").on('click',openEditor);
		
		function openEditor()
		{
			var tEditor = $("#footer");
			if(!$("#footer #textEditorPlace").length)
			{
			$("#footer").append("<textarea id='textEditorPlace'></textarea>");
			$("#footer").css({"height":"400px","index-z":"1"});
			tinymce.init({selector:"#textEditorPlace"});
			$('#textEditorPlace_ifr').css({"height":"260px"})
			}
				//show and hide the footer when the textEditor is created
				tEditor.toggle();
				
			
		}
		
        //*****************************  select the PF or Gen required   **************************** 
                
		$("[name='standard']").on('click',clickedPF);
		$("#checkGen").on('click',clickedPF);
		$("#checkPF").on('click',clickedPF);
		function clickedPF()
		{
			var standardSelected = document.querySelector("input[name='standard']:checked").value;
			if( standardSelected == 2 || standardSelected == 4)
			{
				alert("Standard"+standardSelected+" is not available yet");
			}
			if(document.querySelector('#checkPF:checked'))
			{

				//path images
				$("#pahtGen").css("width","145");
				$("#pathPF").css({"visibility":"visible", "display":"inline-block"});
				
				//line PF
				$("#basketLinePF").css({"visibility":"visible", "display":"block"})
				//topbasket
				$("#basketText").css({"visibility":"visible", "display":"inline-block"})
				
				//links 
				$("#linksG").css("width","145");
				$("#linksPF").css({"visibility":"visible", "display":"inline-block"});
				//text 
				$("#genTex").css("width","145");
				$("#Textpf").css({"visibility":"visible", "display":"inline-block"});

				//secondText
				$("#divFormPf2").css({"visibility":"visible", "display":"inline-block"});


				console.log('PF[' + standardSelected + ']' + ' ' + 'Gen[' + standardSelected + ']');


			}
			else if(document.querySelector('#checkGen:checked'))
			{
				if(standardSelected == 1)//standard 1Gen
				{
					
					//path images
					$("#pahtGen").css("width","310");
					$("#pathPF").css({"visibility":"hidden", "display":"none"});
					
					//line PF
					$("#basketLinePF").css({"visibility":"hidden", "display":"none"})
					//topbasket
					$("#basketText").css({"visibility":"hidden", "display":"none"})

					//links 
					$("#linksG").css("width","310");
					$("#linksPF").css({"visibility":"hidden", "display":"none"});
					
					//text 
					$("#genTex").css("width","310");
					$("#Textpf").css({"visibility":"hidden", "display":"none"});

					//secondText
					$("#divFormPf2").css({"visibility":"hidden", "display":"none"});

				}
				console.log('PF[' + standardSelected + ']' + ' ' + 'Gen[' + standardSelected + ']');
			}
	};
          //*****************************  select the PF or Gen required  ****************************  
          //
          //
          //
          //*****************************  Load the Template    **************************** 

        

	//*****************************  Preview Template   **************************** 
	
	$(".myButton.preview").on('click',previewHTML);
	
	function previewHTML(){
			
			//check if I have the iframe already
			var iframeN = document.getElementById("iframe-content");
			var iframe;
			var iframeDoc;
			var codeText;
			//catch the value of the button clicked
			var typeTemplate = $(this).text();

			//if not, I will create the iframe and add it on the id="iframe-body"
			if(!iframeN)
			{
				iframe = document.createElement("iframe");
				//iframe.id("iframe-content");
				iframe.setAttribute("id","iframe-content");

				//paste the new iframe on my id created already
				$("#iframe-body").append(iframe);
				
			}
		
			//***calling the function getContentBox()
			var codeText = getContentBox(typeTemplate);
			
			
				
			//Replacing my iframe content for the HTML created
			var newIframe = document.getElementById('iframe-content');
			newIframe.contentWindow.document.open()
			newIframe.contentWindow.document.write(codeText);
			$("#iframe-content").css({'display':'block','z-index': '2'});
			$('div#overlay').css({'display':'block'});
	
	    
	};
		
	//*****Get the text from the Box
	function getContentBox(type){
		
		if(type == 'Preview Gen')
				{
					var codeText = $('#GenText').text();
				}
		else
				{
					var codeText = $('#PFText').text();

				}	
		return codeText;
		
	}
		
	//***************************Closing the Overlay*********************
	//
	$('#overlay').on('click',closeOverlay);
		
		function closeOverlay()
		{
			document.getElementById('iframe-content').remove();
			$('div#overlay').css({'display':'none'});
			
		}
	
	
	//*****************************  Displaying the code    ****************************
	
	$(".myButton.coding").on('click',displayCode);
	
        function displayCode()
        {
             

			
			var merchantName = document.getElementById('Merchant').value;
			var preview = document.getElementById('preview').value;
			var linksG = document.getElementById('linksG').value;
			var linksPF = document.getElementById('linksPF').value;
			var imagesGen = document.getElementById('pahtGen').value;
			var imagesPF = document.getElementById('pathPF').value;
			var colorLine =  document.getElementById('basketLine').value;
			var basketText = document.getElementById('basketText').value;
			var socialBackGround = document.getElementById('headerText').value;
			var textGen = document.getElementById('genTex').value;
			var textPF = document.getElementById('Textpf').value;
			var textPF2 = document.getElementById('Textpf2').value;
			var disclaimer = document.getElementById('disclaimer').value;
			var socialLink1,socialLink2,socialLink3,cursor1,cursor2,cursor3;
			//***********check if the mandatory fields********
			//
			//mandatory for Gen
			if(!merchantName || !linksG || !imagesGen || !disclaimer){
				alert("Don't forget the mandatory field");
			}//mandatory for PF
			if(document.querySelector("#checkPF:checked") && (!linksPF || !imagesPF || !textPF))
			{
					alert("Don't forget the mandatory field");
			
			}

			else{//****if everything is ok with mandatory fields
				
				if(socialBackGround == "")
					{
						socialBackGround = "#f3f3f3";
					}
			    
			//*********Special code for social links. I wont cursor them if they dont exist*******
				if(document.getElementById('social1').value)
					{
						 socialLink1 = "href='"+document.getElementById('social1').value+"'";
						cursor1 = "pointer";
					}
				else
					{
						socialLink1 = "";
						cursor1 = "default";
					}
			
				if(document.getElementById('social2').value)
					{
						socialLink2 = "href='"+document.getElementById('social2').value+"'";
						cursor2 = "pointer";
					}
				else
					{
						socialLink2 = "";
						cursor2 = "default";
					}
				if(document.getElementById('social3').value)
						{
							socialLink3 = "href='"+document.getElementById('social3').value+"'";
							cursor3 = "pointer";
						}
				else
						{
							socialLink3 = "";
							cursor3 = "default";
						}
				//****************************************************************
				//
				
				
				
                //****Checking the gobal variable for choise the right templates
                        
                        var selection = document.querySelector("input[name='standard']:checked").value;
                        //checking if there are social links
                        if(selection == 1)
                        {

                        	if(!document.getElementById('social1').value && !document.getElementById('social2').value && !document.getElementById('social1').value)
                        	{//if there are not any social link, pick the template with no socials
                        		selection = 2;
                        	}
                        }

                        if(countrSelected == "HK")
	                        {
	                        	var selectionKeyGen = {
	                            '1': 'standard1GenAsia.html',
	                            '2': 'standard1GenAsiaNoSocial.html',
	                            '3': 'standard3GenAsia.html',
	                            };
	                
	                        var selectionKeyPF = {
	                            '1': 'standard1pfAsia.html',
	                            '2': 'standard1pfAsiaNoSocials.html',
	                            '3': 'standard3pfAsia.html',
	                            };
	                        }
	                    else if(countrSelected == "AU")
		                    {
		                    	var selectionKeyGen = {
	                            '1': 'standard1GenAustralia.html',
	                            '3': 'standard3GenAustralia.html',
	                            };
	                
	                        var selectionKeyPF = {
	                            '1': 'standard1pfAustralia.html',
	                            '3': 'standard3pfAustralia.html',};
		                    }
		                else if(countrSelected == "JP")
		                    {
		                    	var selectionKeyGen = {
	                            '1': 'standard1GenJp.html',
	                            '3': 'standard3GenJp.html',
	                            };
	                
	                        var selectionKeyPF = {
	                            '1': 'standard1pfJp.html',
	                            '3': 'standard3pfJp.html',};
		                    }
		                   else{console.log("Erron getting the country");}
                        
                        console.log("the country slected is: " + countrSelected+ "->Gen: "+selectionKeyGen[selection]+",->PF: "+selectionKeyPF[selection]);
                            
                //llamo al servidor donde tengo el archivo Gen
                $.ajax({
                            //esta URL me cojera la url donde tengo el archivo ./standard.html
                            url: './Gen/'+ selectionKeyGen[selection],
                            //si la conexion esta bien hecha entro en success
                            success: function(data)
                            {
                            //primero paso el el archivo a compiled y luego lo sustituyo por los datos
                    var compiled = _.template(data);
                    text = compiled({HOMEPAGELINK: linksG, PREVIEWTEXT: preview,MERCHANTNAME: merchantName, ImageKey: imagesGen, TEXTCONTENT: textGen,DISCLAIMER: disclaimer,BGCOLORSOCIALLINKS: socialBackGround,SOCIALLINK1: socialLink1,SOCIALLINK2:socialLink2,SOCIALLINK3:socialLink3,CURSOR1: cursor1,CURSOR2: cursor2,CURSOR3: cursor3});
                    document.getElementById('GenText').innerHTML = text;
                            }, 
                            error: function() {
                    console.log(arguments);
                    alert("No HTML received From Server");
                            }
                        });
                
                //llamo al servidor donde tengo el archivo PF
                $.ajax({
                            //esta URL me cojera la url donde tengo el archivo ./standard.html
                            url: './PF/'+ 'standard1pfAsia.html',
                            //si la conexion esta bien hecha entro en success
                            success: function(data)
                            {
                            //primero paso el el archivo a compiled y luego lo sustituyo por los datos
                    var compiled = _.template(data);
                    text = compiled({HOMEPAGELINK: linksPF,PREVIEWTEXT: preview, MERCHANTNAME: merchantName, ImageKey: imagesPF, PFTEXTCONTENT1: textPF,PFTEXTCONTENT2: textPF2,COLOURLINE: colorLine,TOPBASKET: basketText,DISCLAIMER: disclaimer,BGCOLORSOCIALLINKS: socialBackGround, SOCIALLINK1: socialLink1,SOCIALLINK2:socialLink2,SOCIALLINK3:socialLink3, CURSOR1: cursor1,CURSOR2: cursor2,CURSOR3: cursor3});
                    document.getElementById('PFText').innerHTML = text;
                            }, 
                            error: function() {
                    console.log(arguments);
                    alert("No HTML received From Server");
                            }
                        });
			
				}
        
               
        };      
		
		//*****************************  Template loaded    **************************** 
		//
		////*****************************  Template loaded    **************************** 
		//
		//GENERIC
		$(".myButton.download").on('click',downloadFile);
		
		
		function downloadFile (){
			var fileNameElement = document.getElementById('Merchant');
			var bottomValue = $(this).text();
			var type = "Default";
			if(bottomValue.indexOf("Gen") !== -1)
				{//Gen
				var textArea = document.getElementById('GenText');
				type = "Generic";
				}
			else
				{//PFeed
				var textArea = document.getElementById('PFText');
				type = "PF";
				}
			if(fileNameElement && textArea ){
				var merchantName = fileNameElement.value;
				textArea = textArea.value;
				textArea = textArea.replace(/http.*(veinteractive.com)/g,"");
				textArea = textArea.replace(/<</g,"&lt;&lt;");
				textArea = textArea.replace(/>>/g,"&gt;&gt;");
				var html = "data:text/html," + encodeURI(textArea)
				var link = document.createElement("a");
				link.setAttribute("href", html);
				link.setAttribute("download",type+" "+merchantName+".html");
				link.click();
			}
		}
    };
    


    
    
