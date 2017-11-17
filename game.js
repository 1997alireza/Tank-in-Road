speedtime=1500;
jwerty.key('→',function(){if(run==1)
	{
	if(position==0){$('#center').click();}
	else if(position==1){$('#right').click();}
	}
	});
jwerty.key('←',function(){if(run==1)
	{
	if(position==1){$('#left').click();}
	else if(position==2){$('#center').click();}
	}
	});
jwerty.key('esc',function(){$('#st').click();});
jwerty.key('r',function(){$('#restart').click();});
score=0;
$(document).ready(function(){
$('#ltab').click(function(){
	if(run==1)
	$('#left').click();
	});
});
$(document).ready(function(){
	$('#ctab').click(function(){
		if(run==1)
	$('#center').click();
	});
});	
$(document).ready(function(){
	$('#rtab').click(function(){
		if(run==1)
	$('#right').click();
	});	
});		
$(document).ready(function(){window.setInterval(function(){if(run==1){
	score++;
	$('#score').html('Your Score : '+score);
	
}},50);});
$(document).ready(function(){window.setInterval(function(){if(run==1)
	{if(speedtime>600)
	{speedtime=speedtime-10;}
	}
	},1000);});
$(document).ready(function(){window.setInterval(function(){if(run==1){addBlock()}},speedtime-500);});
run=0;
$(document).ready(function(){
$('#restart').click(function(){
	$('#game-alert').css({'background':'none','opacity':'0'});
	$('#game-alert').html('');
	$('#road').html('');
	speedtime=1500;
	score=0;
	$('#score').html('Your Score : 0');
	$('#tank').removeClass();
	$('#tank').addClass('center');
	$('#tank').attr('src', "images/tank-b.png");
	position=1;
	$('#right').attr('disabled','disabled');
$('#center').attr('disabled','disabled');
$('#left').attr('disabled','disabled');
$('#st').attr('value','Start');
i=0;
run=0;
$('#linav').css('background-color','#333');

	});
  });
$(document).ready(function(){
$('#st').click(function(){
	if(run==1)
	{run=0;
	$('#score').css({'color':'#FFF'});
	$('#linav').css('background-color','#333');
    $('#road img').each(function(){
		$(this).stop();
		});
			
$('#right').attr('disabled','disabled');
$('#center').attr('disabled','disabled');
$('#left').attr('disabled','disabled');
$('#st').attr('value','Resume');

}
	else
	{run=1;
	$('#score').css({'color':'#000'});
	$('#linav').css('background-color','#FFF');
	 $('#road img').each(function(){
		$(this).animate({top:'410px'},(410-$(this).position().top)*speedtime/410,function(){$(this).remove();});
		});
$('#right').removeAttr('disabled');
$('#center').removeAttr('disabled');
$('#left').removeAttr('disabled');
$('#st').attr('value','Pause');}
	
});
});


position=1;
$(document).ready(function(){
$('#left').click(function(){
	$('#tank').removeClass();
	$('#tank').addClass('left');
	position=0;
	});
  });
$(document).ready(function(){
$('#right').click(function(){
	$('#tank').removeClass();
	$('#tank').addClass('right');
	position=2;
	});
  });
$(document).ready(function(){
$('#center').click(function(){
	$('#tank').removeClass();
	$('#tank').addClass('center');
	position=1;
	});
  });   

  var i=0;	
function addBlock(){
		  if(run==1)
		  {
		pos=Math.random()*3;
	 
	  if(pos<1)
	  {
	  $('#road').append("<img src='images/block.png' class='block' location='0'  style='left:7px;' id='block"+i+"' />");
	  $('#block'+i).animate({top:'410px'},speedtime,function(){$(this).remove();});
	   i++;
	  }
	 
	  else if(pos>2)
	  {
	  $('#road').append("<img src='images/block.png' class='block' location='1' style='left:63px;' id='block"+i+"' />");
	  $('#block'+i).animate({top:'410px'},speedtime,function(){$(this).remove(); });
	  i++;
	  }
	  
	  else
	  {
	  $('#road').append("<img src='images/block.png' class='block' location='2' style='left:130px;' id='block"+i+"' />");
	  $('#block'+i).animate({top:'410px'},speedtime,function(){$(this).remove();});
	   i++;
	  
	  }
		  }	  
}

$(document).ready(function(){window.setInterval(function(){
$('#road img').each(function(){
if($(this).position().top>=231 && $(this).position().top<=334)
{if($(this).attr('location')==position)
{
	
$('#tank').attr('src', "images/tank-r.png");
$('#game-alert').html('Game Over <br /> your Score is <font size="50" style="color:#06F">'+score+'</font>');
	$('#right').attr('disabled','disabled');
$('#center').attr('disabled','disabled');
$('#left').attr('disabled','disabled');

run=0;
$('#linav').css('background-color','#333');
$('#game-alert').css({'background-color':'#F3F3F3','opacity':'0.8'});
$('#road img').each(function(){
		$(this).stop();
		});
	
		}
}
	
});
},1);});
	
	