
    //Set time here
    var Days = 1; //Unit : Days



    //setCookie(Cookie_name,Cookie_Value,Cookie_Aging)
    //cname => Cookie's Name .Set a sinificant Name ( Unit : String )
    //cval  => Cookie's Value .Give cookie a value ( Unit : None )
    //alive => Cookie's valid time it means that how long cookie can be checked indeed. ( Unit : Days )

    function setCookie(cname , cval , alive) 
    {
        var day=new Date();
        day.setTime( day.getTime() + (alive * 24 * 60 * 60 * 1000) ); 
        var expires = "expires=" + day.toGMTString();
        document.cookie =cname + "=" + cval + ";" + expires + ";path=/";
    }

    
    function setCookieHour(cname , cval , alive) 
    {
        var day=new Date();
        day.setTime( day.getTime() + (alive * 60 * 60 * 1000) ); 
        var expires = "expires=" + day.toGMTString();
        document.cookie =cname + "=" + cval + ";" + expires + ";path=/";
    }

    function setCookieMin(cname , cval , alive) 
    {
        var day=new Date();
        day.setTime( day.getTime() + (alive * 60 * 1000) ); 
        var expires = "expires=" + day.toGMTString();
        document.cookie =cname + "=" + cval + ";" + expires + ";path=/";
    }

    function setCookieSec(cname , cval , alive) //alive Unit is second
    {
        var day=new Date();
        day.setTime( day.getTime() + (alive * 1000) ); 
        var expires = "expires=" + day.toGMTString();
        document.cookie =cname + "=" + cval + ";" + expires + ";path=/";
    }

    function getCookie(cname)
    {
        var name =cname + "=";
        var docookie=decodeURIComponent(document.cookie);
        var ca = docookie.split(";");
        for(let i = 0 ; i < ca.length ; i++ )
        {
            let c = ca[i];
            while( c.charAt(0) == " ")
            {
                c = c.substring(1); 
            }
            if( c.indexOf(name) == 0)
            {
               return c.substring(name.length,c.length);
            }
        }
        return "";
    }

    function checkCookie()
    {
        //Search and get cookie which named entered
        let etn = getCookie("entered");
        //Check whether the cookie exist
        //---------------------------------------------------------------Add / Remove function here-----------------------------------------------------
        if(etn == "")
        { 
            let etned=1;
            if(document.referrer != "https://front.nptu.edu.tw/" && document.referrer != "https://front.nptu.edu.tw" )//if the user doesn't come from front.nptu that redirect to front.nptu
            {
                setCookie("entered",etned,Days);                    //Setting the cookie's name "entered" and give it a value --1 set its aging 1day
                document.location.href="https://front.nptu.edu.tw";
            }
            setCookie("entered",etned,Days);
            
        }
        //---------------------------------------------------------------Add / Remove function here-----------------------------------------------------
    }
    checkCookie();