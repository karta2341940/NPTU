
<<<<<<< HEAD:V1/base.js
=======
    .container {width: 100%; margin: 0px !important; padding: 0px !important;}
    .row .col .mcol{ padding: 0 !important;}
    .hdline{display: none;}
    @media (max-width: 768px){
      .contain{width: 100%;}
    .minner {padding-left: 0px !important; padding-right: 0px !important;}
    }
    @media (min-width: 1200px){
      .container{width: 100% !important;}
    }
    @media (min-width: 992px){
      .container{width: 100% !important;}
    }
    @keyframes disappear{ 
    0% { 
     opacity: 1; 
    }
    75% { 
     opacity: 0; 
    }
    100% { 
     opacity: 0; 
    }
    } 
    @keyframes disappear2{ 
    0% { 
     opacity: 1; 
    }
    25%
    {
      opacity: 1; 
    }
    50% { 
     opacity: 0.8; 
    }
    75% { 
     opacity: 0.6; 
    }
     100% { 
     opacity: 0; 
    }
    }
    @keyframes appear{ 
      0% 
      { 
        opacity: 0; 
      }
      50%
      {
        opacity: 0.1;
      }
      100%
      {
        opacity: 1;
      }
    }
    #base
    {
      position: relative;
      z-index: 0;
    }
    #player
    {
      position: absolute;
      z-index: 4;
    }
    #image
    {
      position: absolute;
      z-index: 20;
    }
    #nptulink
    {
      position: absolute;
      z-index: 60;
      font-size: 48pt;
      color: honeydew;
      text-decoration:none;
      margin: 300px 50px;
      text-shadow: 2px 2px 9px rgb(27, 27, 27), -2px -2px 9px rgb(27, 27, 27);
      font-family: "Times New Roman", Times, serif;

    }
    #mask
    {
      position: absolute;
      z-index: 21;
      padding: 30px 30px;
    }
    #btnn
    {
      position: absolute;
      z-index: 60;
      font-size: 16pt;
      margin: 480px 50px;
    }
    .btn
    {
      border-color: rgba(255, 255, 255, 0.767);
      color: rgb(255, 255, 255);
      background-color: rgba(255, 255, 255, 0.144);
    }
    .btn:hover
    {
      border-color: rgba(255, 255, 255, 0.521);
      color: rgb(255, 255, 255);
      background-color: rgba(61, 61, 61, 0.582);
    }
    #top
    {
      position: absolute;
      z-index: 5;
      background-image: linear-gradient(to bottom,#fff 0,rgb(255, 255, 255) 11.8%,hsla(0,0%,100%,.866) 21.3%,hsla(0,0%,100%,.8) 29%,hsla(0,0%,100%,.735) 35.2%,hsla(0,0%,100%,.67) 40.1%,hsla(0,0%,100%,.605) 44.3%,hsla(0,0%,100%,.54) 47.9%,hsla(0,0%,100%,.475) 51.4%,hsla(0,0%,100%,.41) 55%,hsla(0,0%,100%,.344) 59.2%,hsla(0,0%,100%,.277) 64.2%,hsla(0,0%,100%,.21) 70.5%,hsla(0,0%,100%,.141) 78.3%,hsla(0,0%,100%,.071) 88%,hsla(0,0%,100%,0) 100%);
      height: 350px;
      position: absolute;
      width: 100%;
    }
    #bottom
    {
      position: absolute;
      z-index: 5;
      background-image: linear-gradient(to top,#fff 0,rgb(255, 255, 255) 11.8%,hsla(0,0%,100%,.866) 21.3%,hsla(0,0%,100%,.8) 29%,hsla(0,0%,100%,.735) 35.2%,hsla(0,0%,100%,.67) 40.1%,hsla(0,0%,100%,.605) 44.3%,hsla(0,0%,100%,.54) 47.9%,hsla(0,0%,100%,.475) 51.4%,hsla(0,0%,100%,.41) 55%,hsla(0,0%,100%,.344) 59.2%,hsla(0,0%,100%,.277) 64.2%,hsla(0,0%,100%,.21) 70.5%,hsla(0,0%,100%,.141) 78.3%,hsla(0,0%,100%,.071) 88%,hsla(0,0%,100%,0) 100%);
      height: 200px;
      position: absolute;
      width: 100%;
    }
    #scLogo
    {
      position: absolute;
      z-index: 6;
      right: 0px;
    }
    #scbar
    {
      position: absolute;
      z-index: 6;
      margin-left: 20%;
      display: none;

    }
    #mute
    {
      position: absolute;
      z-index: 65;
      right: 10px;
      margin-top: 10px;
      display: none;
    }
    
    </style>
    
<script>
  //--
>>>>>>> origin/master:Version1.html
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