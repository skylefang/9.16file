/*
* @Author: DELL-PC
* @Date:   2017-09-15 17:14:41
* @Last Modified by:   DELL-PC
* @Last Modified time: 2017-09-16 00:04:15
*/
let user = document.getElementById('user');
let pass = document.getElementById('pass');
let button = document.getElementById('button');
button.onclick=function(){
	let u = user.value.trim();
	let p = pass.value.trim();
	if(u=='zhangsan'&& p=='12345'){
		alert('success');
	}else{
		location.assign('error.html');
	}
}