function menu_block2(block,menu,selectnum) {//�������ܲ˵� �ж���ʾ������,�ж����غ���ʾ
	if(document.getElementById(block).style.display=="none"){
	document.getElementById(block).style.display="block";document.getElementById(menu).className='cp';
	document.getElementById(menu).innerHTML="����������ϵ��ʽ";
	document.getElementById(menu).htmlContent="����������ϵ��ʽ";
	selshowAndHide("select","hidden",selectnum)
	}
	else
	{document.getElementById(block).style.display="none";document.getElementById(menu).className='sp';
	document.getElementById(menu).innerHTML="��ʾ������ϵ��ʽ";
	document.getElementById(menu).htmlContent="��ʾ������ϵ��ʽ";
	selshowAndHide("select","visible",selectnum)
		}
	}

function menu_block(block,menu,types,selectnum) {//�������ܲ˵� ���������� ��ʾ����
	if(types=="show"){
	document.getElementById(block).style.display="block";document.getElementById(menu).className='cp';
	selshowAndHide("select","hidden",selectnum)
	}
	if(types=="hide")
	{document.getElementById(block).style.display="none";document.getElementById(menu).className='sp';
	selshowAndHide("select","visible",selectnum)
		}
	}

function selshowAndHide(sel,type,selectnum) {//�������ܲ˵� ͬʱ���ػ���ʾ�±ߵ�select��IE6�������ܲ˵����ܸ���select
   var obj = window.document.getElementsByTagName(sel);  
   var strElements = "";
   for (i=0;i<obj.length;i++){
	if(i==selectnum) return;
	if(i>10) return;
	//obj[i].style.visibility=type;
   }
  }


function sel_check(obj) {//ѡȡ��ȡ�� ��ǰ��
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

function allsel_check(obj,types){//ȫѡ ��ȫѡ ��ѡ �б�
	var sel_obj=window.document.getElementsByName(obj);
switch(types){
case "all"://ȫѡ
  for (i=0;i<sel_obj.length;i++){
	sel_obj[i].checked=true;
	sel_check(sel_obj[i]);
   }break;

case "no"://��ȫѡ
  for (i=0;i<sel_obj.length;i++){
	sel_obj[i].checked=false;
	sel_check(sel_obj[i]);
   }break;

case "inv"://��ѡ
	for (i=0;i<sel_obj.length;i++){
	if(sel_obj[i].checked)
	{sel_obj[i].checked=false;
	sel_check(sel_obj[i]);}
	else {sel_obj[i].checked=true;sel_check(sel_obj[i]);}
   }break;
   
case "default"://��ʼ
  for (i=0;i<sel_obj.length;i++){
	sel_check(sel_obj[i]);
	sel_obj[i].onclick=function(){sel_check(this)};
   }break;
	
	}
}

function check_all_check(obj,to_obj) {//���ݸ�ѡ�� �ж� ȫѡ ��ȫѡ
	if(obj.checked)
	allsel_check(to_obj,'all')
	else
	allsel_check(to_obj,'no')
	}
function Ver_Center(obj){//��ֱ����
	var heightnow=document.getElementById(obj).parentNode.getElementsByTagName("div")[1].offsetHeight;
	document.getElementById(obj).style.marginTop=heightnow/2-45+"px";
	}
	
