function assign_weights()
{
document.f1.i1.value=Math.random().toFixed(2);
document.f1.i2.value=Math.random().toFixed(2);
document.f1.b.value=Math.random().toFixed(2);
document.f1.w1.value=Math.random().toFixed(2);
document.f1.w2.value=Math.random().toFixed(2);
document.f1.wb.value=Math.random().toFixed(2);
document.f1.d.value=Math.random().toFixed(2);
}
function calculate()
{
i1=document.f1.i1.value;
i2=document.f1.i2.value;
bias=document.f1.b.value;
w1=document.f1.w1.value;
w2=document.f1.w2.value;
wb=document.f1.wb.value;
d=document.f1.d.value;
law=document.f1.law.value;
activation=document.f1.activation.value;
if(activation==""||activation==null)
alert("Select the type of activation function");
else if(law==""||law==null)
alert("Select the type of learning law");
else if(i1==""||i2==""||bias==""||w1==""||w2==""||wb==""||activation==""||d=="")
alert("Fill the values properly");
else if(isNaN(i1)||isNaN(i2)||isNaN(bias)||isNaN(w1)||isNaN(w2)||isNaN(wb)||isNaN(d))
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
calculate1();
}
function calculate1()
{
var d=parseFloat(document.f1.d.value);
var a=parseFloat(document.f1.activation_result.value);
i1=parseFloat(document.f1.i1.value);
i2=parseFloat(document.f1.i2.value);
bias=parseFloat(document.f1.b.value);
w1=parseFloat(document.f1.w1.value);
w2=parseFloat(document.f1.w2.value);
wb=parseFloat(document.f1.wb.value);
var dw1=0,dw2=0,dwb=0;
var lr="";
switch(document.f1.law.value)
{
case "perceptron": dw1=parseFloat((d-a)*i1);
dw2=parseFloat((d-a)*i2);
dwb=parseFloat((d-a)*bias);
lr="delta(w)=learning rate*input*(desired_output-actual_output)";
document.f1.lrule.value=lr;
document.f1.desired_result.value=document.f1.d.value;
document.f1.dw1.value=dw1;
document.f1.dw2.value=dw2;
document.f1.dwb.value=dwb;
break;
case "hebbian":
dw1=parseFloat(parseFloat(document.f1.activation_result.value)*i1);
dw2=parseFloat(parseFloat(document.f1.activation_result.value)*i2);
dwb=parseFloat(parseFloat(document.f1.activation_result.value)*bias);
lr="delta(w)=learning rate*input*actual_output of each unit";
document.f1.lrule.value=lr;
document.f1.desired_result.value="N.A (Unsupervised learning)";
document.f1.dw1.value=dw1;
document.f1.dw2.value=dw2;
document.f1.dwb.value=dwb;
break;
case "delta": dw1=parseFloat((d-a)*i1*parseFloat(Math.derivative(a,(d-a))));
alert("delta");
dw2=parseFloat((d-a)*i2*Math.derivative(a,(d-a)));
dwb=parseFloat((d-a)*bias*Math.derivative(a,(d-a)));
lr="delta(w)=learning rate*(desired_outputactual_
output)*((d/dx)(actual_output))*input";
document.f1.lrule.value=lr;
document.f1.desired_result.value=document.f1.d.value;
document.f1.dw1.value=dw1;
document.f1.dw2.value=dw2;
document.f1.dwb.value=dwb;
break;
case "lms": if((document.f1.activation.value!="linear"))
{
alert("LMS learning law works for linear activation function");
}
else{
var s1,s2,s3,s=0.0;
s1=(d-(i1*w1));
s2=(d-(i2*w2));
s3=(d-(bias*wb));
if((s1<s2)&&(s1<s3))
{
s=i1;
}
else if((s2<s1)&&(s2<s3))
{
s=i2;
}
else
{
s=i3;
}
var i=s;
dw1=parseFloat((d-a)*i);
dw2=parseFloat((d-a)*i);
dwb=parseFloat((d-a)*i);
lr="delta(w)=learning rate*winner_input*(desired_output-actual_output)";
document.f1.lrule.value=lr;
document.f1.desired_result.value=document.f1.d.value;
document.f1.dw1.value=dw1;
document.f1.dw2.value=dw2;
document.f1.dwb.value=dwb;}
break;
case "instar": dw1=parseFloat((d-a)*i1);
dw2=parseFloat((d-a)*i2);
dwb=parseFloat((d-a)*bias);
lr="delta(w)=learning rate*input*(desired_output-actual_output)";
document.f1.lrule.value=lr;
document.f1.desired_result.value=document.f1.d.value;
document.f1.dw1.value=dw1;
document.f1.dw2.value=dw2;
document.f1.dwb.value=dwb;
break;
case "outstar": dw1=parseFloat((d-a)*i1);
dw2=parseFloat((d-a)*i2);
dwb=parseFloat((d-a)*bias);
lr="delta(w)=learning rate*input*(desired_output-actual_output)";
document.f1.lrule.value=lr;
document.f1.desired_result.value=document.f1.d.value;
document.f1.dw1.value=dw1;
document.f1.dw2.value=dw2;
document.f1.dwb.value=dwb;
break;
case "correlation":dw1=parseFloat(d*i1);
dw2=parseFloat(d*i2);
dwb=parseFloat(d*bias);
lr="delta(w) = learning rate * input * desired output";
document.f1.lrule.value=lr;
document.f1.desired_result.value=document.f1.d.value;
document.f1.dw1.value=dw1;
document.f1.dw2.value=dw2;
document.f1.dwb.value=dwb;
break;
}
}

