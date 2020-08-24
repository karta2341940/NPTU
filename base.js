
  //-------------------------------------Youtube-------------------------------------\\
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  var imgArray=['https://front.nptu.edu.tw/var/file/9/1009/img/3679/004.png','https://front.nptu.edu.tw/var/file/9/1009/img/3679/003.png','https://front.nptu.edu.tw/var/file/9/1009/img/3679/002.png','https://front.nptu.edu.tw/var/file/9/1009/img/3679/001.png'];
  let rnd= parseInt(Math.random()*10)%imgArray.length;
  let startArray=[0,41,64,86,111];
  let startime= parseInt(Math.random()*10)%startArray.length;
  //-------------------------------------variable-------------------------------------\\
  function disappeared()
  {
    document.getElementById("image").style.animation = "disappear 6s forwards";
    document.getElementById("top").style.animation= "disappear2 10s forwards";
    document.getElementById("mute").style.display="inline";
  }

  var vdplayer;
  function onYouTubeIframeAPIReady() {
  vdplayer = new YT.Player('player', {
    videoId: 'dSOrZnqfdBk', 
    height: '1080',  
    width: '1920',   
    playerVars: 
      {
      autoplay: 1,  
      controls: 1,       
      showinfo: 0,   
      modestbranding: 1,
      loop: 1,       
      playlist: 'dSOrZnqfdBk',
      fs: 0,              
      cc_load_policty: 0, 
      iv_load_policy: 3,  
      autohide: 0,         
      start: startArray[startime]
    },
    events: {'onReady': onReady,'onStateChange': onStateChange}
  });
//--------
 }
  function onReady(event)   
  {
    event.target.playVideo();
    event.target.mute();
  }
  let mt=1;
  function mute(e)
  {
    var classVal = document.getElementById("mute").getAttribute('class');
    if(mt %2 == 0)
    {
      classVal = classVal.replace("fa-volume-down","fa-volume-mute");
      document.getElementById("mute").setAttribute("class",classVal );
      mt++;
      vdplayer.mute();
    }
    else if(mt % 2 ==1)
    {
      classVal = classVal.replace("fa-volume-mute","fa-volume-down");
      document.getElementById("mute").setAttribute("class",classVal );
      mt = 0;
      vdplayer.unMute();
    }
  }
  function onStateChange(e)
  { 
    disappeared();
  }
  
  //-------------------------ReadyState----------------------------576
  document.onreadystatechange=function()
  {
    document.getElementById("vdo").width=$(window).width();
    let player = document.getElementById("player");
    var wsc=$(window).width();
    var hsc=wsc*9/16;
    /*
    $("#vdo").css({"height": hsc+"px"});
    $("#vdo").css({"width":  wsc + "px"});
    //$("#sec").text(hsc);
    $("#base").css({"height": hsc+"px"});
    $("#base").css({"width":  wsc + "px"});
    $("#mask").css({"height": hsc+"px"});
    $("#mask").css({"width":  wsc + "px"});
    $("#image").css({"height": hsc+"px"});
    $("#image").css({"width":  wsc + "px"});
    */
    $(".fsc").css({"width": wsc + "px","height": hsc + "px"});
    imageRandom();

    if(wsc >= 1024)
    {
      player.width=wsc;
      player.height=hsc;
      $("#vdo").css({"height": hsc+"px"});
      $("#vdo").css({"width":  wsc + "px"});
      $("#mask").css({"height": hsc+"px"});
      $("#mask").css({"width":  wsc + "px"});
      $("#top").css({"margin-top": 0 +"px"});
      $("#bottom").css({"margin-top": hsc-250 +"px"});
      $("#scLogo").css({"margin-top": hsc-170 +"px"});
      $("#scLogo").css({"margin-right": wsc*0.05 +"px"});
      $(".fsc").css({"width": wsc + "px","height": hsc + "px"});
    }

    if( wsc < 1024 && wsc >= 576)
    {

      image.style.width=wsc;
      image.style.height=hsc;
      document.getElementById("bottom").style.display="none";
      $("#vdo").css({"height": hsc+"px"});
      $("#vdo").css({"width":  wsc + "px"});
      $("#mask").css({"height": hsc+"px"});
      $("#mask").css({"width":  wsc + "px"});
      document.getElementById("player").id="play";
      $("#base").css({"height": hsc+"px"});
      $("#base").css({"width":  wsc + "px"});
      $("#nptulink").css({"margin-top": hsc*1/10+"px"});
      $("#nptulink").css({"margin-left": "50px"});
      $("#nptulink").css({"font-size": "48pt"});
      $("#btnn").css({"margin-top": hsc*7/10+"px"});
      $("#btnn").css({"margin-left": "50px"});
      $(".fsc").css({"width": wsc + "px","height": hsc + "px"});
    }
    else if(wsc <= 576)
    {
      image.style.width=wsc;
      image.style.height=hsc;
      document.getElementById("bottom").style.display="none";
      $("#vdo").css({"height": hsc+"px"});
      $("#vdo").css({"width":  wsc + "px"});
      $("#mask").css({"height": hsc+"px"});
      $("#mask").css({"width":  wsc + "px"});
      $("#base").css({"height": hsc+"px"});
      $("#base").css({"width":  wsc + "px"});
      document.getElementById("player").id="play";
      $("#nptulink").css({"margin-top": hsc*0.5/10+"px"});
      $("#nptulink").css({"margin-left": "50px"});
      $("#nptulink").css({"font-size": wsc/16+"pt"});
      $("#btnn").css({"margin-top": hsc*6/10+"px"});
      $("#btnn").css({"margin-left": "50px"});
      $("#btnn").css({"font-size": wsc/36+"pt"});
      $(".fsc").css({"width": wsc + "px","height": hsc + "px"});
    }
    
  }
  window.onresize=function()
  {
    let player = document.getElementById("player");
    let image = document.getElementById("image");
    document.getElementById("vdo").width=$(window).width();

    var wsc=$(window).width();
    var hsc=wsc*9/16;
    
    //document.getElementById("size").innerText = wsc;
    
    if( wsc >= 1024 )
    {
      player.width=wsc;
      player.height=hsc;
      $("#vdo").css({"height": hsc+"px"});
      $("#vdo").css({"width":  wsc + "px"});
      $("#base").css({"height": hsc+"px"});
      $("#base").css({"width":  wsc + "px"});
      $("#mask").css({"height": hsc+"px"});
      $("#mask").css({"width":  wsc + "px"});
      $("#top").css({"margin-top": 0 +"px"});
      $("#bottom").css({"margin-top": hsc-195 +"px"});
      $("#scLogo").css({"margin-top": hsc-170 +"px"});
      $("#scLogo").css({"margin-right": wsc*0.05 +"px"});
      $(".fsc").css({"width": wsc + "px","height": hsc + "px"});
    }
    
    else if( wsc < 1024 && wsc >= 576 )
    {
      $("#vdo").css({"height": hsc+"px"});
      $("#vdo").css({"width":  wsc + "px"});
      $("#base").css({"height": hsc+"px"});
      $("#base").css({"width":  wsc + "px"});
      $("#image").css({"height": hsc+"px"});
      $("#image").css({"width":  wsc + "px"});
      $("#mask").css({"height": hsc+"px"});
      $("#mask").css({"width":  wsc + "px"});
      $("#nptulink").css({"margin-top": hsc*1/10+"px"});
      $("#nptulink").css({"margin-left": "50px"});
      $("#nptulink").css({"font-size": "48pt"});
      $("#btnn").css({"margin-top": hsc*7/10+"px"});
      $("#btnn").css({"margin-left": "50px"});
      $(".fsc").css({"width": wsc + "px","height": hsc + "px"});
    }

    if(wsc <= 560)
    {
      $("#vdo").css({"height": hsc+"px"});
      $("#vdo").css({"width":  wsc + "px"});
      $("#base").css({"height": hsc+"px"});
      $("#base").css({"width":  wsc + "px"});
      $("#image").css({"height": hsc+"px"});
      $("#image").css({"width":  wsc + "px"});  
      $("#mask").css({"height": hsc+"px"});
      $("#mask").css({"width":  wsc + "px"});
      $("#nptulink").css({"margin-top": hsc*0.5/10+"px"});
      $("#nptulink").css({"margin-left": "50px"});
      $("#nptulink").css({"font-size": wsc/16+"pt"});
      $("#btnn").css({"margin-top": hsc*6/10+"px"});
      $("#btnn").css({"margin-left": "50px"});
      $("#btnn").css({"font-size": wsc/36+"pt"});
      $(".fsc").css({"width": wsc + "px","height": hsc + "px"});
      
    }
  }
  //------------Functions--------- 
  
  function imageRandom()
  {
    document.getElementById("image").src=imgArray[rnd];
  }
  function gohome()
  {
    document.location.href="https://www.nptu.edu.tw"
  }
  function goto(href,open_new_window)
{
  if(open_new_window)
  {
    window.open(href[a1]);
  }
  else if(!open_new_window)
  {
    document.location.href=href[a1];
  }
}