function assign_weights()
{
document.f1.w1.value=Math.random().toFixed(2);
document.f1.w2.value=Math.random().toFixed(2);
document.f1.wb.value=Math.random().toFixed(2);
document.f1.w1a.value="";
document.f1.w2a.value="";
document.f1.wba.value="";
}
function backpropagate()
{
var a=0,b=0,c=0,error=0;
var msg="<br>";
var w1=parseFloat(document.f1.w1.value);
var w2=parseFloat(document.f1.w2.value);
var wb=parseFloat(document.f1.wb.value);
if(document.f1.gate.value=="or")
{
loop1:
while(c<4)
{
for(a=0;a<2;a++)
{
for(b=0;b<2;b++)
{
if((a+b)<1)
{
if(((a*w1)+(b*w2)+wb)<0)
{
c++;
msg=msg+"<tr><td>"+(a+"</td><td>"+b+"</td><td>1</td><td>"+w1+"</td><td>"+w2+"</td><td>"+wb
+"</td><td>"+parseFloat(((a*w1)+(b*w2)+wb)).toFixed(2)+"</td><td>"+((((a*w1)+(b*w2)+wb)<0)?0:1)+
"<td>"+error+"</td><td><font color=green>Right</font></td></tr>");
}
else
{
c=0;
error=-1;
msg=msg+"<tr><td>"+(a+"</td><td>"+b+"</td><td>1</td><td>"+w1+"</td><td>"+w2+"</td><td>"+wb
+"</td><td>"+parseFloat(((a*w1)+(b*w2)+wb)).toFixed(2)+"</td><td>"+((((a*w1)+(b*w2)+wb)<0)?0:1)+
"<td>"+error+"</td><td><font
color=red>Wrong</font></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr>
</tr><tr></tr>");
w1=w1+a*error;
w2=w2+b*error;
wb=wb+error;
error=0;
continue loop1;
}
}
else
{
if(((a*w1)+(b*w2)+wb)<0)
{
c=0;
error=1;
msg=msg+"<tr><td>"+(a+"</td><td>"+b+"</td><td>1</td><td>"+w1+"</td><td>"+w2+"</td><td>"+wb
+"</td><td>"+parseFloat(((a*w1)+(b*w2)+wb)).toFixed(2)+"</td><td>"+((((a*w1)+(b*w2)+wb)<0)?0:1)+
"<td>"+error+"</td><td><font
color=red>Wrong</font></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr>
</tr><tr></tr>");w1=w1+a*error;
w2=w2+b*error;
wb=wb+error;
error=0;
continue loop1;
}
else
{
c++;
msg=msg+"<tr><td>"+(a+"</td><td>"+b+"</td><td>1</td><td>"+w1+"</td><td>"+w2+"</td><td>"+wb
+"</td><td>"+parseFloat(((a*w1)+(b*w2)+wb)).toFixed(2)+"</td><td>"+((((a*w1)+(b*w2)+wb)<0)?0:1)+
"<td>"+error+"</td><td><font color=green>Right</font></td></tr>");
}
}
}
}
alert("Hurray! The learning process is completed.");
document.f1.w1a.value=w1;
document.f1.w2a.value=w2;
document.f1.wba.value=wb;
document.f1.msg.value=msg;
}
}
else
{
loop1:
while(c<4)
{
for(a=0;a<2;a++)
{
for(b=0;b<2;b++)
{
if((a+b)<=1)
{
if(((a*w1)+(b*w2)+wb)<0)
{
c++;
msg=msg+"<tr><td>"+(a+"</td><td>"+b+"</td><td>1</td><td>"+w1+"</td><td>"+w2+"</td><td>"+wb
+"</td><td>"+parseFloat(((a*w1)+(b*w2)+wb)).toFixed(2)+"</td><td>"+((((a*w1)+(b*w2)+wb)<0)?0:1)+
"<td>"+error+"</td><td><font color=green>Right</font></td></tr>");
}
else
{
c=0;
error=-1;
msg=msg+"<tr><td>"+(a+"</td><td>"+b+"</td><td>1</td><td>"+w1+"</td><td>"+w2+"</td><td>"+wb
+"</td><td>"+parseFloat(((a*w1)+(b*w2)+wb)).toFixed(2)+"</td><td>"+((((a*w1)+(b*w2)+wb)<0)?0:1)+
"<td>"+error+"</td><td><font
color=red>Wrong</font></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr>
</tr><tr></tr>");
w1=w1+a*error;
w2=w2+b*error;
wb=wb+error;
error=0;
continue loop1;
}
}
else
{
if(((a*w1)+(b*w2)+wb)<0)
{
c=0;
error=1;
msg=msg+"<tr><td>"+(a+"</td><td>"+b+"</td><td>1</td><td>"+w1+"</td><td>"+w2+"</td><td>"+wb
+"</td><td>"+parseFloat(((a*w1)+(b*w2)+wb)).toFixed(2)+"</td><td>"+((((a*w1)+(b*w2)+wb)<0)?0:1)+
"<td>"+error+"</td><td><font
color=red>Wrong</font></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr>
</tr><tr></tr>");w1=w1+a*error;
w2=w2+b*error;
wb=wb+error;
error=0;
continue loop1;
}
else
{
c++;
msg=msg+"<tr><td>"+(a+"</td><td>"+b+"</td><td>1</td><td>"+w1+"</td><td>"+w2+"</td><td>"+wb
+"</td><td>"+parseFloat(((a*w1)+(b*w2)+wb)).toFixed(2)+"</td><td>"+((((a*w1)+(b*w2)+wb)<0)?0:1)+
"<td>"+error+"</td><td><font color=green>Right</font></td></tr>");
}
}
}
}
alert("Hurray! The learning process is completed.");
document.f1.w1a.value=w1;
document.f1.w2a.value=w2;
document.f1.wba.value=wb;
document.f1.msg.value=msg;
}
}
}
function nullify()
{
document.f1.w1a.value="";
document.f1.w2a.value="";
document.f1.wba.value="";
}
