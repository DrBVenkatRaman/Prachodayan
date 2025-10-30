function calculate()
{
i1=document.f1.i1.value;
i2=document.f1.i2.value;
bias=document.f1.b.value;
w1=document.f1.w1.value;
w2=document.f1.w2.value;
wb=document.f1.wb.value;
activation=document.f1.activation.value;
if(activation==""||activation==null)
alert("Select the type of activation function");
else if(i1==""||i2==""||bias==""||w1==""||w2==""||wb==""||activation=="")
alert("Fill the values properly");
else if(isNaN(i1)||isNaN(i2)||isNaN(bias)||isNaN(w1)||isNaN(w2)||isNaN(wb))
alert("Please enter numbers only in the fields specified");
else
{
var a1=parseFloat(i1);
var b1=parseFloat(i2);
var wa1=parseFloat(w1);
var wb1=parseFloat(w2);
var bias1=parseFloat(bias);
var wbias=parseFloat(wb);
var
sum=(parseFloat(parseFloat(a1*wa1)+parseFloat(b1*wb1)+parseFloat(bias1*wbias))).toFixed(2);
document.f1.summation.value=sum;
if(activation=="threshold")
{
if(sum>=0)
{
document.f1.activation_result.value=1;
}
else
{
document.f1.activation_result.value=0;
}
}
else if(activation=="sigmoid")
{
document.f1.activation_result.value=1/(1+Math.pow(Math.E, -sum));
}
else if(activation=="linear")
{
document.f1.activation_result.value=sum;
}
else if(activation=="tanh")
{
document.f1.activation_result.value=Math.tanh(sum);
}
else if(activation=="relu")
{
if(sum>=0)
{
document.f1.activation_result.value=sum;
}
else
{
document.f1.activation_result.value=0;
}
}
else if(activation=="arctan")
{
document.f1.activation_result.value=Math.atanh(sum);
}
}
}
function calculate1()
{
i1=document.f1.i1.value;
i2=document.f1.i2.value;
bias=document.f1.b.value;
w1=document.f1.w1.value;
w2=document.f1.w2.value;
wb=document.f1.wb.value;
activation=document.f1.activation.value;
alert(i1+" "+i2+" "+bias+" "+w1+" "+w2+" "+wb);
}
