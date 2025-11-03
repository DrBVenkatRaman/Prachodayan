function play()
{

var s=document.f1.istate.value;

if(s=="s1")
{
document.f1.s1.src="ld.jpg";
sleep(1000).then(() => {document.f1.s3.src="right.jpg";});

sleep(2000).then(() => {document.f1.s5.src="down.jpg";});

}
else if(s=="s2")
{
document.f1.s2.src="rd.jpg";
sleep(1000).then(() => {document.f1.s4.src="left.jpg";});

sleep(2000).then(() => {document.f1.s6.src="down.jpg";});
}

else if(s=="s3")
{
document.f1.s3.src="right.jpg";
sleep(1000).then(() => {document.f1.s5.src="down.jpg";});

}

else if(s=="s4")
{
document.f1.s5.src="down.jpg";
}

else if(s=="s5")
{
document.f1.s6.src="down.jpg";


}
else if(s=="s6")
{
document.f1.s4.src="left.jpg";
sleep(1000).then(() => {document.f1.s6.src="down.jpg";});
}
else if(s=="s7")
{
alert("Game completed with zero steps");
}

else if(s=="s8")
{
alert("Game completed with zero steps");
}




}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function load_graph()
{
document.f1.s1.src="white.jpg";
document.f1.s2.src="white.jpg";
document.f1.s3.src="white.jpg";
document.f1.s4.src="white.jpg";
document.f1.s5.src="white.jpg";
document.f1.s6.src="white.jpg";

}
