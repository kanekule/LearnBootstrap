$(document).ready(function(){
	
	
	//$('#myModal').modal({backdrop:'static',keyboard:false});
	//$('#myModal1').modal({backdrop:'static',keyboard:false});
	
	$('#login').click(function(){
		
		var user_id = $.trim($("#usrID").val());
		var password = $.trim($("#pswd").val());
		if(user_id=="C1212005" && password=="123"){
			$("#myModal").modal('hide'); 
			$("#div_page1").css("display","none");
		}else{
			alert("用户名或密码错误，请重新输入！");
			$("#usrID").val('');
			$("#pswd").val('');
		}
		
		
		//$("#myModal").modal('hide'); 
		//$("#myModal1").modal('show'); 
		
	})
	
	
	
	$('#start').click(function(){
		$("#usrID").val('');
		$("#pswd").val('');
		$("#myModal").modal('show'); 
	})
	
	
	

	






















})