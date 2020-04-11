function getbyid(id){return document.getElementById(id);}
function goitems(catid){window.location="?op=items&ac=add&catid="+catid;}
function checkall(form){for(var i = 0;i < form.elements.length; i++){var e = form.elements[i];if (e.name != 'chkall' && e.disabled != true && e.type == 'checkbox') {e.checked = form.chkall.checked;}}}
function checklistall(type)
{
	$(".selectbox").each(function()
	{
		if (type == 0)
		{
			$(this).prop("checked",$(".chkall").is(':checked'));
		}
		else if (type == 1)
		{
			$(this).prop("checked",true);
		}
		else if (type == 2)
		{
			if ($(this).is(':checked') != true){$(this).prop("checked",true);}else{$(this).prop("checked",false);}
		}
		else
		{
			$(this).prop("checked",false);	
		}
		
		if ($(this).is(':checked') == true)
		{
			$(this).parent("td").parent("tr").children("td").addClass("set");	
		}		
		else
		{
			$(this).parent("td").parent("tr").children("td").removeClass("set");		
		}
	});
}
//function checklistall(type)
//{
//	for(var i = 0;i < document.form_list.elements.length; i++){
//		var e = document.form_list.elements[i];
//		if (e.type == 'checkbox'){
//			if (type == 0){
//				if (e.name != 'chkall' && e.disabled != true) {e.checked = form_list.chkall.checked;}
//			}else if (type == 1){
//				e.checked = true;
//			}else if (type == 2){
//				if (e.checked != true){e.checked = true;}else{e.checked = false;}
//			}else{
//				e.checked = false;
//			}
//		}
//	}
//}
function submit_list_form(url){
	if (url != 1){
		
	}else{
		document.form_list.submit();	
	}
}

function selectfile(form,obj,url,width,height){
	var objname= form.obj;
	var obj = eval('document.'+objname);
	result = window.showModalDialog(url+'?objname='+objname,null,'help:no;status:no;scroll:no;dialogWidth='+width+'px;dialogHeight='+height+'px');
	if(result!=null){form.obj.value=result;}
}


function selecttime(id){
	result = window.showModalDialog('inc/time_select.php',null,'help:no;status:no;scroll:no;dialogWidth=300px;dialogHeight=260px');
	if(result!=null){
		getbyid(id).value=result;
	}
}

function selectcolor(id){
	result = window.showModalDialog('too-includes/a/color.php',null,'help:no;status:no;scroll:no;dialogWidth=300px;dialogHeight=260px');
	if(result!=null){
		getbyid(id).value=result;
	}
}

function tabmenu (pre,id,num){
	for (var i = 1 ; i <= num ; i ++ ){
		var t = pre + i ;
		var tab = pre + 'tab_' + i ;
		if (i == id){
			getbyid(t).className = "set";
			getbyid(tab).style.display = "";
		}else{
			getbyid(t).className = "";
			getbyid(tab).style.display = "none";
		}
	}
}






function InitAjax(){
	var ajax = false; 
	try { 
		ajax = new ActiveXObject("Msxml2.XMLHTTP"); 
	}catch (e){ 
		try { 
			ajax = new ActiveXObject("Microsoft.XMLHTTP"); 
		} catch (E) { 
			ajax = false; 
		} 
	}
	if (!ajax && typeof XMLHttpRequest!='undefined') { 
		ajax = new XMLHttpRequest(); 
	} 
	return ajax;
}

function randomstr ()
{
	var rnd="";
	for(var i=0;i<4;i++)
	rnd+=Math.floor(Math.random()*10);
	return rnd;
}

//------------------------------------------------------------------

// Show Loading Div
function showloading(type)
{
	if (type == 'show'){
		$("#divajaxloading").show("show");	
	}else{
		setTimeout(function(){
			$("#divajaxloading").hide("show");					
		},500);
	}
}


//Admin Body Width
function mbsize()
{
	var b_w = $(window).width();
	if (b_w < 1000) b_w = 1000;
	$("#header").width(b_w);
	$("#mainarea").width(b_w - 200);
	$("#admin_body").width(b_w - 20);
}

//------------------------------------------------------------------

function selectprovince_en(areaid,provinceid)
{
	$("#province_span").html('<select name="info[province]"><option value="0" class="gray">-Province-</option></select>');
	$("#city_span").html('<select name="info[city]"><option value="0" class="gray">-City-</option></select>');
	
	if (areaid != 45)
	{
		$("#province_tr").hide();
		$("#city_tr").hide();
	}
	else
	{
		$("#province_tr").show();
		$("#city_tr").show();
		
		$("#province_span").html('<img src="too-includes/images/loading.gif" />');
		$.get("ajax.php?ac=province_en", { upid: areaid, provinceid:provinceid, s:randomstr ()},function(data){
			$("#province_span").html(data);
		});
	}
}
function selectcity_en(areaid,cityid)
{
	$("#city_span").html('<img src="too-includes/images/loading.gif" />');
	$.get("ajax.php?ac=city_en", { upid: areaid, cityid:cityid, s:randomstr ()},function(data){
		$("#city_span").html(data);
	}); 
}


function selectprovince(areaid,provinceid)
{
	$("#province_span").html('<select name="info[province]"><option value="0" class="gray">\u9009\u62e9\u7701\u5e02</option></select>');
	$("#city_span").html('<select name="info[city]"><option value="0" class="gray">\u9009\u62e9\u57ce\u5e02</option></select>');
	
	if (areaid != 45)
	{
		$("#province_tr").hide();
		$("#city_tr").hide();
	}
	else
	{
		$("#province_tr").show();
		$("#city_tr").show();
		
		$("#province_span").html('<img src="too-includes/images/loading.gif" />');
		$.get("ajax.php?ac=province", { upid: areaid, provinceid:provinceid, s:randomstr ()},function(data){
			$("#province_span").html(data);
		});
	}
}
function selectcity(areaid,cityid)
{
	$("#city_span").html('<img src="too-includes/images/loading.gif" />');
	$.get("ajax.php?ac=city", { upid: areaid, cityid:cityid, s:randomstr ()},function(data){
		$("#city_span").html(data);
	}); 
}

//------------------------------------------------------------------
function close_usernotes()
{
	$(".usernotes").animate({height:"0"},300, function(){$(".usernotes").hide()});
}
function showotherspan(id,divid)
{
	if (id == -1){$("#"+divid).show();}else{$("#"+divid).hide();}
}






//Fields Select
function subselect(upvar, fieldname, lang)
{
	$.get("ajax.php?ac=subfield", {upvar:upvar, fieldname:fieldname, lang:lang, s:randomstr ()},function(data){
		$("#" + fieldname + "_span").html(data);
	});
}

function subselect_a(upvar, fieldname, lang, inputname, inputvalue, returnfunc)
{
	$.get("ajax.php?ac=subfield_a", {upvar:upvar, fieldname:fieldname, lang:lang, inputname:inputname, inputvalue:inputvalue, returnfunc:returnfunc, s:randomstr ()},function(data){
		$("#" + fieldname + "_span").html(data);
	});
}

function subselect_checkbox(upvar, fieldname, lang)
{
	
	$.getJSON("ajax.php?ac=subfield_checkbox", {upvar:upvar, fieldname:fieldname, lang:lang, s:randomstr ()}, function(json){
		

		$.each(json.vals, function(i,val){
			if (val.is_show == 1)
			{
				$("#"+fieldname+"_option_"+val.option_id).show();
			}
			else
			{
				$("#"+fieldname+"_option_"+val.option_id).hide();
			}
		});
		
	});
}

//------------------------------------------------------------------
$(document).ready(function(){

	too_tips();

});

function too_tips()
{
	$('.chillTip').mouseover(function(){								  
		$('body').append('<div class="chititle"></div>');
		var title = $(this).attr("title");
		title=title.replace(/\n/g,"<br />") 

		$('.chititle').append('<p>' + title + '</p>');
		$('.chititle').css("filter:","alpha(opacity=95)").css("-moz-opacity","0.95").css("-khtml-opacity", "0.95").css("opacity", "0.95");  
		$('body').append('<iframe style="position:absolute; z-index:100; left:0; top:0; background:#EEE; display:none" class="chiiframe" frameborder="no" scrolling="no"></iframe>');
		
		$('.chititle').fadeIn(100);
		$('.chiiframe').fadeIn(100);
		this.tip = this.title;
		this.title = "";
	});
	
	$('.chillTip').mousemove(function(e){
		var border_top = $(window).scrollTop(),border_right = $(window).width(),offset = 15,left_pos,top_pos;
		if(	border_right - (offset *2) >= $('.chititle').width() + e.pageX){left_pos = e.pageX + offset;}
		else{left_pos = border_right - $('.chititle').width() - offset;}
		if(border_top + (offset *2 ) >= e.pageY - $('.chititle').height()){top_pos = border_top + offset;}
		else{top_pos = e.pageY-$('.chititle').height( )- offset;}	
		$('.chititle').css({left:left_pos, top:top_pos});
		$('.chiiframe').css({left:left_pos, top:top_pos, width:$('.chititle').width(), height:$('.chititle').height()});
		
	});
	
	$('.chillTip').mouseout(function(){
		$('.chititle').remove();
		$('.chiiframe').remove();
			this.title = this.tip;
	});	




}
//------------------------------------------------------------------

function CheckForm(theForm){
	var obj = theForm || event.srcElement;
	var count = obj.elements.length;
	for(var i=0;i<count;i++){
		with(obj.elements[i]){
			var _datatype = getAttribute("datatype");
			var _msg = getAttribute("msg");
			var _value = getAttribute("value");
			if (_datatype == 'txt' && !IsEmpty(_value)){
				alert(_msg);
				obj.elements[i].focus();
				return false;
			}
			if (_datatype == 'username' && !IsUsername(_value)){
				alert(_msg);
				obj.elements[i].focus();
				return false;
			}
			if (_datatype == 'password' && !IsPassword(_value)){
				alert(_msg);
				obj.elements[i].focus();
				return false;
			}
			if (_datatype == 'email' && !IsMail(_value)){
				alert(_msg);
				obj.elements[i].focus();
				return false;
			}
		}
	}
}
function IsEmpty(str){if (str == ''){return false}else{return true};}
function IsUsername(str){
	if (str.length < 5 || str.length > 18){
		return false;	
	}else{
		var patrn = /^\w+[a-zA-Z0-9]*$/;
		if(!patrn.test(str)) return false;
		else return true;
	}
}
function IsPassword(str){
	if (str.length < 6 || str.length > 20){
		return false;	
	}else{
		var patrn = /^\w+[\w@$]*$/;
		if(!patrn.test(str)) return false;
		else return true;
	}
}
function IsMail(mail)
{ 
	var patrn = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; 
	if (!patrn.test(mail)) 
	return false; 
	else 
	return true; 
}


function goto(url)
{
	self.location = url;
}


function isChinese(str)
{
   var lst = /[u00-uFF]/;       
   return !lst.test(str);      
}


function strlen(str) 
{
	var strlength=0;
	for (i=0;i<str.length;i++)
	{
		if (isChinese(str.charAt(i))==true)
			strlength=strlength + 2;
		else
			strlength=strlength + 1;
	}
	return strlength;
}

function checklistallsmp(obj,box)
{
	$("."+box+" .selectbox").each(function()
	{
		if (obj.checked == true){
			$(this).prop("checked",true);
		}else{
			$(this).prop("checked",false);	
		}
		
		if ($(this).attr("checked") == true) $(this).parent("td").parent("tr").children("td").addClass("set");	
		else $(this).parent("td").parent("tr").children("td").removeClass("set");	
	});
}

function refreshcode(siteurl){getbyid("Chcode").innerHTML = '<img align="absmiddle" src="'+siteurl+'/too-includes/code.php?s='+randomstr()+'" />';}


function gomenu(url)
{
	self.location=url;	
}

/* Product Panel */
function proplampamount(lamp_type)
{
	$.get("ajax.php?ac=proplampamount", { lamp_type:lamp_type, str:randomstr ()}, function(data){
		$("#proplampamount_span").show();												   
		$("#proplampamount_span").html(data);
		too_tips();
	});
	
}
function proplampshape(lamp_type)
{
	$.get("ajax.php?ac=proplampshape", { lamp_type:lamp_type, str:randomstr ()}, function(data){
		$("#proplampshape_span").show();																				  
		$("#proplampshape_span").html(data);
	});
	
}


function complaint_link(type, val)
{
	if (uid > 0)
	{
		if (type == 'inv')
		{
			document.write('<a rel="nofollow" href="member_cn.php?op=complaint&ac=add&type=inv&valueid='+val+'"><img src="too-templates/cn/images/icon/report.gif" align="absbottom"  />投诉举报虚假违规</a>');
		}
		else if (type == 'modeldetail')
		{
			document.write('<a rel="nofollow" href="member_cn.php?op=complaint&ac=add&type=inv&source=modeldetail_cn_stock&valueid='+val+'" target="_blank" title="如现货信息虚假或交易纠纷，可以点击投诉">投诉</a>');		
		}
		else if (type == 'modeldetailuid')
		{
			document.write('<a href="member_cn.php?op=complaint&ac=add&type=mp&source=modeldetail_cn_supplier&uid='+val+'" target="_blank" title="如卖家无法供应此产品或交易纠纷，可以点击投诉">投诉</a>');
		}
		else if (type == 'modeldetailinv')
		{
			document.write('<a rel="nofollow" href="member_cn.php?op=complaint&ac=add&type=inv&source=inventory_cn&valueid='+val+'" target="_blank" title="如卖家无法供应此产品或交易纠纷，可以点击投诉">投诉</a>');
		}
		else if (type == 'modeldetailsup')
		{
			document.write('<a rel="nofollow" href="member_cn.php?op=complaint&ac=add&type=mp&source=supplier_cn&uid='+val+'" target="_blank" title="如卖家无法供应此产品或交易纠纷，可以点击投诉">投诉</a>');
		}
		else if (type == 'ne_product_view')
		{
			document.write('<a href="member_cn.php?op=complaint&ac=add&type=product&source=ne_product_view_cn&reported_uid='+val+'">投诉举报虚假违规</a>');
		}
		else if (type == 'company_yp')
		{
			document.write('<a href="member_cn.php?op=complaint&ac=add&type=company_yp&source=company_yp_cn&reported_uid='+val+'">投诉举报</a>');
		}
		else if (type == 'company_site')
		{
			document.write('<a href="member_cn.php?op=complaint&ac=add&type=company_site&source=company_site_cn&reported_uid='+val+'"><img src="too-templates/cn/images/icon/report.gif" align="absbottom" style=" vertical-align:middle" /> 投诉举报</a>');
		}
	}
	else
	{
		
		if (type == 'inv')
		{
			document.write('<a rel="nofollow" href="javascript:ajax_login_box()" title="请先登录会员中心"><img src="too-templates/cn/images/icon/report.gif" align="absbottom"  />投诉举报虚假违规</a>');
		}
		else if (type == 'company_site')
		{
			document.write('<a style="background:none" rel="nofollow" href="javascript:ajax_login_box()" title="请先登录会员中心"><img src="too-templates/cn/images/icon/report.gif" align="absbottom" style=" vertical-align:middle" /> 投诉举报</a>');
		}
		else if (type == 'ne_product_view')
		{
			document.write('<a rel="nofollow" href="javascript:ajax_login_box()" title="请先登录会员中心">投诉举报虚假违规</a>');
		}
		else
		{
			document.write('<a rel="nofollow" href="javascript:ajax_login_box()" title="请先登录会员中心">投诉</a>');
		}
		
	}
}

function complaint_link_en(type, val)
{
	if (uid > 0)
	{
		if (type == 'inv')
		{
			document.write('<a rel="nofollow" href="member.php?op=complaint&ac=add&type=inv&valueid='+val+'"><img src="too-templates/en/images/icon/report.gif" align="absbottom"  />Report Suspicious Activity</a>');
		}
		else if (type == 'modeldetail')
		{
			document.write('<a rel="nofollow" href="member.php?op=complaint&ac=add&type=inv&source=modeldetail_en_stock&valueid='+val+'" target="_blank" title="If the stock information false or transaction disputes, you can click to complaint">Report</a>');		
		}
		else if (type == 'modeldetailuid')
		{
			document.write('<a href="member.php?op=complaint&ac=add&type=mp&source=modeldetail_en_supplier&uid='+val+'" target="_blank" title="If the seller can\'t supply this product or transaction disputes, you can click to complaint">Report</a>');
		}
		else if (type == 'modeldetailinv')
		{
			document.write('<a rel="nofollow" href="member.php?op=complaint&ac=add&type=inv&source=inventory_en&valueid='+val+'" target="_blank" title="If the stock information false or transaction disputes, you can click to complaint">Report</a>');
			
		}
		else if (type == 'modeldetailsup')
		{
			document.write('<a rel="nofollow" href="member.php?op=complaint&ac=add&type=mp&source=supplier_en&uid='+val+'" target="_blank" title="If the seller can\'t supply this product or transaction disputes, you can click to complaint">Report</a>');
		}
		else if (type == 'ne_product_view')
		{
			document.write('<a href="member.php?op=complaint&ac=add&type=product&source=ne_product_view_en&reported_uid='+val+'" class="added">Report Suspicious Activity</a>');
		}
		else if (type == 'company_yp')
		{
			document.write('<a href="member.php?op=complaint&ac=add&type=company_yp&source=company_yp_en&reported_uid='+val+'">Report</a>');
		}
		else if (type == 'company_site')
		{
			document.write('<a href="member.php?op=complaint&ac=add&type=company_site&source=company_site_en&reported_uid='+val+'"><img src="too-templates/en/images/icon/report.gif" align="absbottom" style=" vertical-align:middle" /> Report Suspicious Activity</a>');
		}
	}
	else
	{
		if (type == 'inv')
		{
			document.write('<a rel="nofollow" href="javascript:ajax_login_box()" title="Please Login"><img src="too-templates/en/images/icon/report.gif" align="absbottom"  /> Report Suspicious Activity</a>');
		}
		else if (type == 'company_site')
		{
			document.write('<a style="background:none" rel="nofollow" href="javascript:ajax_login_box()" title="Please Login"><img src="too-templates/en/images/icon/report.gif" align="absbottom" style=" vertical-align:middle" /> Report Suspicious Activity</a>');
		}
		else
		{
			document.write('<a rel="nofollow" href="javascript:ajax_login_box()" title="Please Login">Report</a>');
		}
	}
}


function login_go(uid, url)
{
	if (uid > 0)
	{
		self.location=url; 
	}
	else
	{
		ajax_login_box();
		$("#gopage").val(url);
	}
}