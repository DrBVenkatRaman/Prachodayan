function assign_values()
{
document.f1.d11.value=Math.round(Math.random().toFixed(2));
document.f1.d12.value=Math.round(Math.random().toFixed(2));
document.f1.d13.value=Math.round(Math.random().toFixed(2));
document.f1.d14.value=Math.round(Math.random().toFixed(2));
document.f1.d15.value=Math.round(Math.random().toFixed(2));
document.f1.d21.value=Math.round(Math.random().toFixed(2));
document.f1.d22.value=Math.round(Math.random().toFixed(2));
document.f1.d23.value=Math.round(Math.random().toFixed(2));
document.f1.d24.value=Math.round(Math.random().toFixed(2));
document.f1.d25.value=Math.round(Math.random().toFixed(2));
document.f1.d31.value=Math.round(Math.random().toFixed(2));
document.f1.d32.value=Math.round(Math.random().toFixed(2));
document.f1.d33.value=Math.round(Math.random().toFixed(2));
document.f1.d34.value=Math.round(Math.random().toFixed(2));
document.f1.d35.value=Math.round(Math.random().toFixed(2));
document.f1.d41.value=Math.round(Math.random().toFixed(2));
document.f1.d42.value=Math.round(Math.random().toFixed(2));
document.f1.d43.value=Math.round(Math.random().toFixed(2));
document.f1.d44.value=Math.round(Math.random().toFixed(2));
document.f1.d45.value=Math.round(Math.random().toFixed(2));
document.f1.d51.value=Math.round(Math.random().toFixed(2));
document.f1.d52.value=Math.round(Math.random().toFixed(2));
document.f1.d53.value=Math.round(Math.random().toFixed(2));
document.f1.d54.value=Math.round(Math.random().toFixed(2));
document.f1.d55.value=Math.round(Math.random().toFixed(2));
document.f1.f00.value=Math.round(Math.random().toFixed(2));
document.f1.f01.value=Math.round(Math.random().toFixed(2));
document.f1.f02.value=Math.round(Math.random().toFixed(2));
document.f1.f10.value=Math.round(Math.random().toFixed(2));
document.f1.f11.value=Math.round(Math.random().toFixed(2));
document.f1.f12.value=Math.round(Math.random().toFixed(2));
document.f1.f20.value=Math.round(Math.random().toFixed(2));
document.f1.f21.value=Math.round(Math.random().toFixed(2));
document.f1.f22.value=Math.round(Math.random().toFixed(2));
document.f1.d00.value=0;
document.f1.d01.value=0;
document.f1.d02.value=0;
document.f1.d03.value=0;
document.f1.d04.value=0;
document.f1.d05.value=0;
document.f1.d06.value=0;
document.f1.d10.value=0;
document.f1.d16.value=0;
document.f1.d50.value=0;
document.f1.d56.value=0;
document.f1.d60.value=0;
document.f1.d61.value=0;
document.f1.d62.value=0;
document.f1.d63.value=0;
document.f1.d64.value=0;
document.f1.d65.value=0;
document.f1.d66.value=0;
document.f1.d10.value=0;
document.f1.d16.value=0;
document.f1.d20.value=0;
document.f1.d26.value=0;
document.f1.d30.value=0;
document.f1.d36.value=0;
document.f1.d40.value=0;
document.f1.d46.value=0;
document.f1.d50.value=0;
document.f1.d56.value=0;
}
function reset_result()
{
document.f1.r00.hidden=true;
document.f1.r01.hidden=true;
document.f1.r02.hidden=true;
document.f1.r03.hidden=true;
document.f1.r04.hidden=true;
document.f1.r10.hidden=true;
document.f1.r11.hidden=true;
document.f1.r12.hidden=true;
document.f1.r13.hidden=true;
document.f1.r14.hidden=true;
document.f1.r20.hidden=true;
document.f1.r21.hidden=true;
document.f1.r22.hidden=true;
document.f1.r23.hidden=true;
document.f1.r24.hidden=true;
document.f1.r30.hidden=true;
document.f1.r31.hidden=true;
document.f1.r32.hidden=true;
document.f1.r33.hidden=true;
document.f1.r34.hidden=true;
document.f1.r40.hidden=true;
document.f1.r41.hidden=true;
document.f1.r42.hidden=true;
document.f1.r43.hidden=true;
document.f1.r44.hidden=true;
}
function pad()
{
if(document.f1.padding.value=="same")
{
document.f1.d00.hidden=false;
document.f1.d01.hidden=false;
document.f1.d02.hidden=false;
document.f1.d03.hidden=false;
document.f1.d04.hidden=false;
document.f1.d05.hidden=false;
document.f1.d06.hidden=false;
document.f1.d10.hidden=false;
document.f1.d16.hidden=false;
document.f1.d50.hidden=false;
document.f1.d56.hidden=false;
document.f1.d60.hidden=false;
document.f1.d61.hidden=false;
document.f1.d62.hidden=false;
document.f1.d63.hidden=false;
document.f1.d64.hidden=false;
document.f1.d65.hidden=false;
document.f1.d66.hidden=false;
document.f1.d20.hidden=false;
document.f1.d21.hidden=false;
document.f1.d30.hidden=false;
document.f1.d31.hidden=false;
document.f1.d40.hidden=false;
document.f1.d41.hidden=false;
document.f1.d25.hidden=false;
document.f1.d26.hidden=false;
document.f1.d35.hidden=false;
document.f1.d36.hidden=false;
document.f1.d45.hidden=false;
document.f1.d46.hidden=false;
}
else
{
document.f1.d00.hidden=true;
document.f1.d01.hidden=true;
document.f1.d02.hidden=true;
document.f1.d03.hidden=true;
document.f1.d04.hidden=true;
document.f1.d05.hidden=true;
document.f1.d06.hidden=true;
document.f1.d10.hidden=true;
document.f1.d16.hidden=true;
document.f1.d50.hidden=true;
document.f1.d56.hidden=true;
document.f1.d60.hidden=true;
document.f1.d61.hidden=true;
document.f1.d62.hidden=true;
document.f1.d63.hidden=true;
document.f1.d64.hidden=true;
document.f1.d65.hidden=true;
document.f1.d66.hidden=true;
document.f1.d20.hidden=true;
document.f1.d26.hidden=true;
document.f1.d30.hidden=true;
document.f1.d36.hidden=true;
document.f1.d40.hidden=true;
document.f1.d46.hidden=true;
document.f1.d10.hidden=true;
document.f1.d16.hidden=true;
document.f1.d50.hidden=true;
document.f1.d56.hidden=true;
}
step1();
}
function dim_cal()
{
var pad=document.f1.padding.value;
var p=0,n=5,f=3;
if(document.f1.padding.value=="same")
{
p=1;
}
var nf=parseFloat(document.f1.filters.value);
//var pd=parseFloat(document.f1.pooldim.value);
var pt=document.f1.pool.value;
var s=parseFloat(document.f1.stride.value);
var dim1=Math.floor(((n+(2*p)-f)/s)+1);
//alert("Output dimension after convolution operation is "+dim1+" X "+nf);
generate_conv_result_dim(dim1)
generate_conv_result(dim1);
}
function generate_conv_result(dim1)
{
var n=0;
if( document.f1.padding.value=="same")
n=7;
else
n=5;
var d=new Array(n);
for(var i=0;i<n;i++)
d[i]=new Array(n);
//console(d);
var f=new Array(3);
for(var i=0;i<3;i++)
f[i]=new Array(3);
//console(f);
var c=new Array(dim1);
for(var i=0;i<dim1;i++)
c[i]=new Array(dim1);
f[0][0]=parseFloat(document.f1.f00.value);
f[0][1]=parseFloat(document.f1.f01.value);
f[0][2]=parseFloat(document.f1.f02.value);
f[1][0]=parseFloat(document.f1.f10.value);
f[1][1]=parseFloat(document.f1.f11.value);
f[1][2]=parseFloat(document.f1.f12.value);
f[2][0]=parseFloat(document.f1.f20.value);
f[2][1]=parseFloat(document.f1.f21.value);
f[2][2]=parseFloat(document.f1.f22.value);
if( document.f1.padding.value=="same")
{
d[0][0]=parseFloat(document.f1.d00.value);
d[0][1]=parseFloat(document.f1.d01.value);
d[0][2]=parseFloat(document.f1.d02.value);
d[0][3]=parseFloat(document.f1.d03.value);
d[0][4]=parseFloat(document.f1.d04.value);
d[0][5]=parseFloat(document.f1.d05.value);
d[0][6]=parseFloat(document.f1.d06.value);
d[1][0]=parseFloat(document.f1.d10.value);
d[1][1]=parseFloat(document.f1.d11.value);
d[1][2]=parseFloat(document.f1.d12.value);
d[1][3]=parseFloat(document.f1.d13.value);
d[1][4]=parseFloat(document.f1.d14.value);
d[1][5]=parseFloat(document.f1.d15.value);
d[1][6]=parseFloat(document.f1.d16.value);
d[2][0]=parseFloat(document.f1.d20.value);
d[2][1]=parseFloat(document.f1.d21.value);
d[2][2]=parseFloat(document.f1.d22.value);
d[2][3]=parseFloat(document.f1.d23.value);
d[2][4]=parseFloat(document.f1.d24.value);
d[2][5]=parseFloat(document.f1.d25.value);
d[2][6]=parseFloat(document.f1.d26.value);
d[3][0]=parseFloat(document.f1.d30.value);
d[3][1]=parseFloat(document.f1.d31.value);
d[3][2]=parseFloat(document.f1.d32.value);
d[3][3]=parseFloat(document.f1.d33.value);
d[3][4]=parseFloat(document.f1.d34.value);
d[3][5]=parseFloat(document.f1.d35.value);
d[3][6]=parseFloat(document.f1.d36.value);
d[4][0]=parseFloat(document.f1.d40.value);
d[4][1]=parseFloat(document.f1.d41.value);
d[4][2]=parseFloat(document.f1.d42.value);
d[4][3]=parseFloat(document.f1.d43.value);
d[4][4]=parseFloat(document.f1.d44.value);
d[4][5]=parseFloat(document.f1.d45.value);
d[4][6]=parseFloat(document.f1.d46.value);
d[5][0]=parseFloat(document.f1.d50.value);
d[5][1]=parseFloat(document.f1.d51.value);
d[5][2]=parseFloat(document.f1.d52.value);
d[5][3]=parseFloat(document.f1.d53.value);
d[5][4]=parseFloat(document.f1.d54.value);
d[5][5]=parseFloat(document.f1.d55.value);
d[5][6]=parseFloat(document.f1.d56.value);
d[6][0]=parseFloat(document.f1.d60.value);
d[6][1]=parseFloat(document.f1.d61.value);
d[6][2]=parseFloat(document.f1.d62.value);
d[6][3]=parseFloat(document.f1.d63.value);
d[6][4]=parseFloat(document.f1.d64.value);
d[6][5]=parseFloat(document.f1.d65.value);
d[6][6]=parseFloat(document.f1.d66.value);
}
else
{
d[0][0]=parseFloat(document.f1.d11.value);
d[0][1]=parseFloat(document.f1.d12.value);
d[0][2]=parseFloat(document.f1.d13.value);
d[0][3]=parseFloat(document.f1.d14.value);
d[0][4]=parseFloat(document.f1.d15.value);
d[1][0]=parseFloat(document.f1.d21.value);
d[1][1]=parseFloat(document.f1.d22.value);
d[1][2]=parseFloat(document.f1.d23.value);
d[1][3]=parseFloat(document.f1.d24.value);
d[1][4]=parseFloat(document.f1.d25.value);
d[2][0]=parseFloat(document.f1.d31.value);
d[2][1]=parseFloat(document.f1.d32.value);
d[2][2]=parseFloat(document.f1.d33.value);
d[2][3]=parseFloat(document.f1.d34.value);
d[2][4]=parseFloat(document.f1.d35.value);
d[3][0]=parseFloat(document.f1.d41.value);
d[3][1]=parseFloat(document.f1.d42.value);
d[3][2]=parseFloat(document.f1.d43.value);
d[3][3]=parseFloat(document.f1.d44.value);
d[3][4]=parseFloat(document.f1.d45.value);
d[4][0]=parseFloat(document.f1.d51.value);
d[4][1]=parseFloat(document.f1.d52.value);
d[4][2]=parseFloat(document.f1.d53.value);
d[4][3]=parseFloat(document.f1.d54.value);
d[4][4]=parseFloat(document.f1.d55.value);
}
var iterx=parseInt(document.f1.stride.value);
var itery=parseInt(document.f1.stride.value);
var w1=0,w2=0;
for(var i=0;i<dim1;i++)
{
for(var j=0;j<dim1;j++)
{
c[i][j]=0;
for(var a1=w1,a=0;((a1<(n))&&(a<3)&&(w1<(n-1)));a1++,a++)
{
for(var b1=w2,b=0;((b1<(n))&&(b<3)&&(w2<(n-1)));b1++,b++)
{
//alert("For"+i+","+j+": multiplying data "+a1+","+b1+" with filter "+a+","+b);
c[i][j]+=d[a1][b1]*f[a][b];
}
}
w2=w2+itery;
}
w1=w1+iterx;
w2=0;
}
var s;
for(var i=0;i<dim1;i++)
{
for(var j=0;j<dim1;j++)
{
s="r"+i+""+j;
//alert(document.getElementById(s).value);
//alert("hi");
//document.f1.getElementById(s).value=r[i][j];
//document.getElementById(s).value=r[i][j];
document.getElementById(s).value=c[i][j];
//document.getElementsByName();
}
}
var pool_ans_dim=parseInt(dim1-2)+1;
document.getElementById("dim_msg1").value=dim1+" x "+dim1+" x "+document.f1.filters.value;
document.getElementById("dim_msg2").value=pool_ans_dim+" x "+pool_ans_dim+" x
"+document.f1.filters.value;
generate_pool_result_dim(pool_ans_dim);
var pool=new Array(pool_ans_dim);
for(var i=0;i<pool_ans_dim;i++)
pool[i]=new Array(pool_ans_dim);
var iter=0;
var max=-100.0;
var sum=0;
var w1=0,w2=0;
for(var i=0;i<pool_ans_dim;i++)
{
for(var j=0;j<pool_ans_dim;j++)
{
sum=0;
pool[i][j]=c[w1][w2];
max=c[w1][w2];
for(var a1=w1,a=0;((a1<(n))&&(a<2)&&(w1<(n)));a1++,a++)
{
for(var b1=w2,b=0;((b1<(n))&&(b<2)&&(w2<(n)));b1++,b++)
{//alert("hi ");
if(c[a1][b1]>max)
{
max=c[a1][b1];
pool[i][j]=max;
}
sum=sum+c[a1][b1];
}
}
if(document.f1.pool.value=="max")
{
document.getElementById("p"+i+""+j).value=max;
}
else
{
document.getElementById("p"+i+""+j).value=parseFloat(sum/4);
}
w2++;
}
w1++;
w2=0;
}
}
function generate_pool_result_dim(ans)
{
var n=parseInt(ans);
if(n==1)
{
document.f1.p00.hidden=false;
document.f1.p01.hidden=true;
document.f1.p02.hidden=true;
document.f1.p03.hidden=true;
document.f1.p10.hidden=true;
document.f1.p11.hidden=true;
document.f1.p12.hidden=true;
document.f1.p13.hidden=true;
//document.f1.p14.hidden=true;
document.f1.p20.hidden=true;
document.f1.p21.hidden=true;
document.f1.p22.hidden=true;
document.f1.p23.hidden=true;
//document.f1.p24.hidden=true;
document.f1.p30.hidden=true;
document.f1.p31.hidden=true;
document.f1.p32.hidden=true;
document.f1.p33.hidden=true;
//document.f1.p34.hidden=true;
}
else if(n==2)
{
document.f1.p00.hidden=false;
document.f1.p01.hidden=false;
document.f1.p02.hidden=true;
document.f1.p03.hidden=true;
document.f1.p10.hidden=false;
document.f1.p11.hidden=false;
document.f1.p12.hidden=true;
document.f1.p13.hidden=true;
//document.f1.p14.hidden=true;
document.f1.p20.hidden=true;
document.f1.p21.hidden=true;
document.f1.p22.hidden=true;
document.f1.p23.hidden=true;
//document.f1.p24.hidden=true;
document.f1.p30.hidden=true;
document.f1.p31.hidden=true;
document.f1.p32.hidden=true;
document.f1.p33.hidden=true;
//document.f1.p34.hidden=true;
}
else if(n==3)
{
document.f1.p00.hidden=false;
document.f1.p01.hidden=false;
document.f1.p02.hidden=false;
document.f1.p03.hidden=true;
//document.f1.p04.hidden=true;
document.f1.p10.hidden=false;
document.f1.p11.hidden=false;
document.f1.p12.hidden=false;
document.f1.p13.hidden=true;
//document.f1.p14.hidden=true;
document.f1.p20.hidden=false;
document.f1.p21.hidden=false;
document.f1.p22.hidden=false;
document.f1.p23.hidden=true;
//document.f1.p24.hidden=true;
document.f1.p30.hidden=true;
document.f1.p31.hidden=true;
document.f1.p32.hidden=true;
document.f1.p33.hidden=true;
//document.f1.p34.hidden=true;
}
else
{
document.f1.p00.hidden=false;
document.f1.p01.hidden=false;
document.f1.p02.hidden=false;
document.f1.p03.hidden=false;
//document.f1.p04.hidden=true;
document.f1.p10.hidden=false;
document.f1.p11.hidden=false;
document.f1.p12.hidden=false;
document.f1.p13.hidden=false;
//document.f1.p14.hidden=true;
document.f1.p20.hidden=false;
document.f1.p21.hidden=false;
document.f1.p22.hidden=false;
document.f1.p23.hidden=false;
//document.f1.p24.hidden=true;
document.f1.p30.hidden=false;
document.f1.p31.hidden=false;
document.f1.p32.hidden=false;
document.f1.p33.hidden=false;
//document.f1.p34.hidden=true;
}
}
function generate_conv_result_dim(ans)
{
var n=parseFloat(ans);
if(n==2)
{
document.f1.r00.hidden=false;
document.f1.r01.hidden=false;
document.f1.r02.hidden=true;
document.f1.r03.hidden=true;
document.f1.r04.hidden=true;
document.f1.r10.hidden=false;
document.f1.r11.hidden=false;
document.f1.r12.hidden=true;
document.f1.r13.hidden=true;
document.f1.r14.hidden=true;
document.f1.r20.hidden=true;
document.f1.r21.hidden=true;
document.f1.r22.hidden=true;
document.f1.r23.hidden=true;
document.f1.r24.hidden=true;
document.f1.r30.hidden=true;
document.f1.r31.hidden=true;
document.f1.r32.hidden=true;
document.f1.r33.hidden=true;
document.f1.r34.hidden=true;
document.f1.r40.hidden=true;
document.f1.r41.hidden=true;
document.f1.r42.hidden=true;
document.f1.r43.hidden=true;
document.f1.r44.hidden=true;
}
else if(n==3)
{
document.f1.r00.hidden=false;
document.f1.r01.hidden=false;
document.f1.r02.hidden=false;
document.f1.r03.hidden=true;
document.f1.r04.hidden=true;
document.f1.r10.hidden=false;
document.f1.r11.hidden=false;
document.f1.r12.hidden=false;
document.f1.r13.hidden=true;
document.f1.r14.hidden=true;
document.f1.r20.hidden=false;
document.f1.r21.hidden=false;
document.f1.r22.hidden=false;
document.f1.r23.hidden=true;
document.f1.r24.hidden=true;
document.f1.r30.hidden=true;
document.f1.r31.hidden=true;
document.f1.r32.hidden=true;
document.f1.r33.hidden=true;
document.f1.r34.hidden=true;
document.f1.r40.hidden=true;
document.f1.r41.hidden=true;
document.f1.r42.hidden=true;
document.f1.r43.hidden=true;
document.f1.r44.hidden=true;
}
else if(n==4)
{
document.f1.r00.hidden=false;
document.f1.r01.hidden=false;
document.f1.r02.hidden=false;
document.f1.r03.hidden=false;
document.f1.r04.hidden=true;
document.f1.r10.hidden=false;
document.f1.r11.hidden=false;
document.f1.r12.hidden=false;
document.f1.r13.hidden=false;
document.f1.r14.hidden=true;
document.f1.r20.hidden=false;
document.f1.r21.hidden=false;
document.f1.r22.hidden=false;
document.f1.r23.hidden=false;
document.f1.r24.hidden=true;
document.f1.r30.hidden=false;
document.f1.r31.hidden=false;
document.f1.r32.hidden=false;
document.f1.r33.hidden=false;
document.f1.r34.hidden=true;
document.f1.r40.hidden=true;
document.f1.r41.hidden=true;
document.f1.r42.hidden=true;
document.f1.r43.hidden=true;
document.f1.r44.hidden=true;
}
else
{
document.f1.r00.hidden=false;
document.f1.r01.hidden=false;
document.f1.r02.hidden=false;
document.f1.r03.hidden=false;
document.f1.r04.hidden=false;
document.f1.r10.hidden=false;
document.f1.r11.hidden=false;
document.f1.r12.hidden=false;
document.f1.r13.hidden=false;
document.f1.r14.hidden=false;
document.f1.r20.hidden=false;
document.f1.r21.hidden=false;
document.f1.r22.hidden=false;
document.f1.r23.hidden=false;
document.f1.r24.hidden=false;
document.f1.r30.hidden=false;
document.f1.r31.hidden=false;
document.f1.r32.hidden=false;
document.f1.r33.hidden=false;
document.f1.r34.hidden=false;
document.f1.r40.hidden=false;
document.f1.r41.hidden=false;
document.f1.r42.hidden=false;
document.f1.r43.hidden=false;
document.f1.r44.hidden=false;
}
}
function step1()
{
dim_cal();
}
function calculate()
{
dim_cal();
}
