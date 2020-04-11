function menu_block2(block,menu,selectnum) {//弹出功能菜单 判断显示后隐藏,判断隐藏后显示
	if(document.getElementById(block).style.display=="none"){
	document.getElementById(block).style.display="block";document.getElementById(menu).className='cp';
	document.getElementById(menu).innerHTML="隐藏以下联系方式";
	document.getElementById(menu).htmlContent="隐藏以下联系方式";
	selshowAndHide("select","hidden",selectnum)
	}
	else
	{document.getElementById(block).style.display="none";document.getElementById(menu).className='sp';
	document.getElementById(menu).innerHTML="显示以下联系方式";
	document.getElementById(menu).htmlContent="显示以下联系方式";
	selshowAndHide("select","visible",selectnum)
		}
	}

function menu_block(block,menu,types,selectnum) {//弹出功能菜单 参数中输入 显示隐藏
	if(types=="show"){
	document.getElementById(block).style.display="block";document.getElementById(menu).className='cp';
	selshowAndHide("select","hidden",selectnum)
	}
	if(types=="hide")
	{document.getElementById(block).style.display="none";document.getElementById(menu).className='sp';
	selshowAndHide("select","visible",selectnum)
		}
	}

function selshowAndHide(sel,type,selectnum) {//弹出功能菜单 同时隐藏或显示下边的select，IE6弹出功能菜单不能覆盖select
   var obj = window.document.getElementsByTagName(sel);  
   var strElements = "";
   for (i=0;i<obj.length;i++){
	if(i==selectnum) return;
	if(i>10) return;
	//obj[i].style.visibility=type;
   }
  }


function sel_check(obj) {//选取或取消 当前行
	para_obj=obj.parentNode.parentNode;
	if(obj.checked)
	{
	 para_obj.className=para_obj.className.concat(" sel checkedsel");
	 para_obj.onmouseover=function(){};
	 para_obj.onmouseout=function(){};
	}
	else {para_obj.className=para_obj.className.replace(" sel checkedsel","");
	       para_obj.onmouseover=function(){this.className=this.className.concat(" sel")};
	       para_obj.onmouseout=function(){this.className=this.className.replace(" sel","")};
	}
}

function allsel_check(obj,types){//全选 不全选 反选 列表
	var sel_obj=window.document.getElementsByName(obj);
switch(types){
case "all"://全选
  for (i=0;i<sel_obj.length;i++){
	sel_obj[i].checked=true;
	sel_check(sel_obj[i]);
   }break;

case "no"://不全选
  for (i=0;i<sel_obj.length;i++){
	sel_obj[i].checked=false;
	sel_check(sel_obj[i]);
   }break;

case "inv"://反选
	for (i=0;i<sel_obj.length;i++){
	if(sel_obj[i].checked)
	{sel_obj[i].checked=false;
	sel_check(sel_obj[i]);}
	else {sel_obj[i].checked=true;sel_check(sel_obj[i]);}
   }break;
   
case "default"://初始
  for (i=0;i<sel_obj.length;i++){
	sel_check(sel_obj[i]);
	sel_obj[i].onclick=function(){sel_check(this)};
   }break;
	
	}
}

function check_all_check(obj,to_obj) {//根据复选框 判断 全选 不全选
	if(obj.checked)
	allsel_check(to_obj,'all')
	else
	allsel_check(to_obj,'no')
	}
function Ver_Center(obj){//垂直居中
	var heightnow=document.getElementById(obj).parentNode.getElementsByTagName("div")[1].offsetHeight;
	document.getElementById(obj).style.marginTop=heightnow/2-45+"px";
	}
	
