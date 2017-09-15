/*
* @Author: DELL-PC
* @Date:   2017-09-15 23:49:46
* @Last Modified by:   DELL-PC
* @Last Modified time: 2017-09-16 00:27:05
*/
let info = document.getElementById('info');
let t = setInterval(function(){
	if(info.innerText<=0){
		clearInterval(t);
		location.replace('login.html')
	}
	info.innerText-=1;
},1000);