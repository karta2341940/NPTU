
  //-------------------------------------------API VAR-------------------------------------\\
var api_Test_Var=0;
/**
 * @param {string} api_Youtube_Vedio_ID The Youtube ID
 */
var api_Youtube_Vedio_ID="";
/**
 * @param {object} vdplayer to use Youtube function
 */
var vdplayer;
//-----------------------------------------Inside var----------------------------------\\
let Player;
let a1=1,a2=0,count=1;
let YTHeigh=0;
let YTWidth=0;
let YT_Start_Time_Array;     //For Youtube
let YTswitch=0;              //For Youtube
let mt=1;                    //For Youtube
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
/**
 * You can use this function to Play an Animation
 * @param {string} ID The object ID that you want it appeares animation
 * @param Animation_Name The name of your customized Animation
 * @param Second The second that you want it keep
 * @param Mode The Animaion mode . You can chooes : none | forwards | backwards | both 
 */
function api_Animate(ID,Animation_Name,Second,Mode)
{
  let condition= Animation_Name+" "+Second+" "+Mode;
  document.getElementById(ID).style.animation =condition;
}


/**
 * To go other web site
 * @param {string} href 
 * @param {boolean} open_new_window 
 */
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


/**
 * This function is for random play vedio or display picture
 * @param {string} ID The object ID that you want it random play
 * @param api_Img_Array Input image array that it will display by random 
 */
function api_Media_Random_no_btn(ID,api_Img_Array,)
{
  let leng=api_Img_Array.length;
  let vdo = document.getElementById(ID);
  let rnd = parseInt(Math.random()*10)%leng;
  a1=rnd;
  if(count)
  {
    vdo.src=api_Img_Array[rnd];
    a2=rnd;
    count--;
  }
  else if(!count)
  {
    if(a1 == a2)
    {
      if(a1 == 0)
      {a1++;}
      else if(a1 == leng-1)
      {a1--;}
    }
  }

  $(ID).attr("src",api_Img_Array[a1])
  a2=a1;
}


/**
 * Using it to random play picture or vedio and also change button's text and link
 * @param {string} ID The picture tag's ID
 * @param {Array} api_Img_Array The Vedio Array that you wanna play
 * @param {string} btnID Button's ID
 * @param {Array} btn_text_Array The text array you want it show
 */
function api_Media_Random(ID,api_Img_Array,btnID,btn_text_Array)
{
  //decalere
  let leng=api_Img_Array.length;
  let rnd = parseInt(Math.random()*10)%leng;
  a1=rnd;

  if(count)
  {
    count--;
  }
  else if(!count)
  {
    if(a1 == a2)
    {
      if(a1 == 0)
      {
        a1++;
      }
      else if(a1 == leng-1)
      {
        a1--;
      }
    }
  }
  $(ID).attr("src",api_Img_Array[a1]);
  $(btnID).text(btn_text_Array[a1]);
  a2=a1;
}


//-------------------------------------------Youtube API---------------------------------------\\
/**
 * Use this function to typing the parameter to ensure the window size and the Start second
 * @param {*} YT_Player The div which you want to play youtube vedio id
 * @param {*} Height The Height of youtube window
 * @param {*} Width The Width of youtube window
 * @param {string} Start_Time_Array The array of the random start time
 */
function YTPlayer(YT_Player,Width,Heigh,Start_Time_Array)
{
  Player=document.getElementById(YT_Player);
  YTHeigh=Heigh;
  YTWidth=Width;
  YT_Start_Time_Array=Start_Time_Array;
}
/**
 * To type in switch-code to determin whether the youtube_api work
 * @param {boolean} switchCode 
 */

function onYoutubeIframeAPIReady()
{
  if(YTswitch)
  {   
    let Time = parseInt(Math.random()*10)%api_Start_Time_Array.length;           //For Youtube
    
    vdplayer=new YT.Player(Player,{
    videoId: api_Youtube_Vedio_ID, // 要播放的第一支YouTube 影片ID
    height: YTHeigh,              // 播放器高度 (px)
    width: YTWidth,
    playerVars: 
      {
        autoplay: 1,        // 在讀取時自動播放影片
        controls: 0,        // 在播放器顯示暫停／播放按鈕
        showinfo: 0,        // 隱藏影片標題
        modestbranding: 1,  // 隱藏YouTube Logo
        loop: 1,            // 讓影片循環播放
        playlist: api_Youtube_Vedio_ID,  //要播放的第二支YouTube 影片ID，若要重複撥放同一個影片則設為同ID即可
        fs: 0,              // 全螢幕按鈕
        playsinline: 1,     //This parameter controls whether vedios play inline or fullscreen
        cc_load_policty: 0, // 隱藏字幕
        iv_load_policy: 3,  // 隱藏影片註解
        autohide: 0,         // 當播放影片時隱藏影片控制列
        start: YT_Start_Time_Array[Time]
      },
      events:{
        'onReady' : onReady,
        'onStateChange' : onStateChange
      }
    });
  }
}


