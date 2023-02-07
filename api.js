var resp;
var j=0;
axios.get('http://universities.hipolabs.com/search?country=United+Kingdom')
.then(response=>{
	resp=response.data;
	console.log(resp);
},err=>{
	console.log(err);
})
function appear(){
	t=document.getElementById('srh').value;
	if(t==''){
		document.getElementsByTagName('table')[0].style.display='none';
		document.getElementsByTagName('table')[1].style.display='none';
		document.getElementById('dummy').style.display='inline-block';
	}else{
		var tab=document.getElementsByTagName('table')[0]
		for(var i=0;i<resp.length;i++){
			if(t.toLowerCase()==resp[i].name.toLowerCase()){
				tab.style.display='inline-block';
				document.getElementsByTagName('table')[1].style.display='inline-block';
				document.getElementsByTagName('td')[0].innerHTML=resp[i].name;
				document.getElementsByTagName('td')[2].innerHTML=resp[i].name;
				document.getElementsByTagName('td')[2].style.color='blue';
				document.getElementsByTagName('td')[4].innerHTML=resp[i].country;
				document.getElementsByTagName('td')[4].style.color='blue';
				document.getElementsByTagName('td')[6].innerHTML=resp[i].web_pages[0];
				document.getElementsByTagName('td')[6].style.color='blue';
				j+=1
			}
		}
		if(j==0){
			document.getElementById('dummy').style.display='inline-block';
			tab.style.display='none';
			document.getElementsByTagName('table')[1].style.display='none';
		}
		else{
			document.getElementById('dummy').style.display='none';
				j=0
		}
	}
}