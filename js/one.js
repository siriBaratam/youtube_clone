
            function check()
            {
             var t=document.getElementById("t");
             var x=t.value;
             /*var t1=document.getElementById("t1");
             var y=t1.value;
             var l=y.length;
             if(atposition<1||dotposition<atposition+2||dotposition)*/
             if(isNaN(x)||x<=0||x>10)
             {
                alert("invalid input");
                return false;
             }
            }
            function c2()
            {
                var t1=document.getElementById("t1");
                var y=t1.value;
                if(y.trim()=="")
             {
                alert("must be entered in second field ");
                return false;
             }
            }
            function tc()
            {
                var tx=document.getElementById("txt");
                var t=document.getElementById("on");
                var tv=tx.value;
                var l=tv.length;
                t.innerText=l+"/10";
                if(l>=10)
                {
                    alert("you reached max length");
                    return false;
                }

            }
            function uc()
            {
                var t2=document.getElementById("t2");
                var u=t2.value;
                t2.value=u.toUpperCase();
            }