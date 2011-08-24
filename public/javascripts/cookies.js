// Gestion simplifiée des cookies http://brendufat.over-blog.com/article-js-cookies-66381726.html
// Sur une idée de Peter-Paul Koch - http://www.quirksmode.org/js/cookies.html
JMcookie={
        create:function(nm,v,d) { // d : durée en jours
                var dt,xp='';
                if (d){
                        var dt=new Date();
                        dt.setTime(dt.getTime()+(d*24*3600000));
                        xp=';expires='+dt.toGMTString()
                        }
                document.cookie= nm+"="+v+xp+";path=/";
                }
        ,read:function(nm) {
                var ca=document.cookie.split(';'),i,c;
                nm+="=";
                for(i=0;i<ca.length;i++)
                        {c=ca[i];
                        while (c.charAt(0)==' ') c=c.substring(1,c.length);
                        if (c.indexOf(nm)==0) return c.substring(nm.length,c.length);
                        }
                return null;
                }
        ,remove:function(nm) {this.create(nm,"",-1)}
        };