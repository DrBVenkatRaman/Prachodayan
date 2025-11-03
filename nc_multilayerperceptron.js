/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function assign_weights1()
{
    
    location.reload();
    
}
function assign_weights()
{
    
    document.f1.i1.value=Math.random().toFixed(2);
    document.f1.i2.value=Math.random().toFixed(2);
    document.f1.w1.value=Math.random().toFixed(2);
    document.f1.w2.value=Math.random().toFixed(2);
    document.f1.w3.value=Math.random().toFixed(2);
    document.f1.w4.value=Math.random().toFixed(2);
    document.f1.w5.value=Math.random().toFixed(2);
    document.f1.w6.value=Math.random().toFixed(2);
    document.f1.w7.value=Math.random().toFixed(2);
    document.f1.w8.value=Math.random().toFixed(2);
    document.f1.wb1.value=Math.random().toFixed(2);
    document.f1.wb2.value=Math.random().toFixed(2);
    document.f1.do1.value=Math.random().toFixed(2);
    document.f1.do2.value=Math.random().toFixed(2);
    
}

function calculate()
{
    var i1=parseFloat(document.f1.i1.value);
    var i2=parseFloat(document.f1.i2.value);
    var w1=parseFloat(document.f1.w1.value);
    var w2=parseFloat(document.f1.w2.value);
    var w3=parseFloat(document.f1.w3.value);
    var w4=parseFloat(document.f1.w4.value);
    var w5=parseFloat(document.f1.w5.value);
    var w6=parseFloat(document.f1.w6.value);
    var w7=parseFloat(document.f1.w7.value);
    var w8=parseFloat(document.f1.w8.value);
    var wb1=parseFloat(document.f1.wb1.value);
    var wb2=parseFloat(document.f1.wb2.value);
    var do1=parseFloat(document.f1.do1.value);
    var do2=parseFloat(document.f1.do2.value);
    
    var h1_sum=(i1*w1)+(i2*w3)+wb1;
    var h1=1/(1+Math.pow(Math.E, -h1_sum));
    
    var h2_sum=(i1*w2)+(i2*w4)+wb1;
    var h2=1/(1+Math.pow(Math.E, -h2_sum));
    
    document.f1.h1.value=h1;
    document.f1.h2.value=h2;
    
    var o1_sum=(h1*w5)+(h2*w7)+wb2;
    var o1=1/(1+Math.pow(Math.E, -o1_sum));
    
    var o2_sum=(h1*w6)+(h2*w8)+wb2;
    var o2=1/(1+Math.pow(Math.E, -o2_sum));
    
    document.f1.output1.value=o1;
    document.f1.output2.value=o2;
    
    var e1=((do1-o1)*(do1-o1))/2;
    var e2=((do2-o2)*(do2-o2))/2;
    
    document.f1.error1.value=e1;
    document.f1.error2.value=e2;
    document.f1.total_error.value=e1+e2;
    
    var dw1,dw2,dw3,dw4,dw5,dw6,dw7,dw8,dwb1,dwb2;
    dw5=((-1)*(do1-o1))*(o1*(1-o1))*(h1);
    document.f1.dw5.value=dw5;
    
    dw6=(((-1)*(do2-o2))*(o2*(1-o2))*(h1));
    document.f1.dw6.value=dw6;
    
    dw7=(((-1)*(do1-o1))*(o1*(1-o1))*(h2));
    document.f1.dw7.value=dw7;
    
    dw8=(((-1)*(do2-o2))*(o2*(1-o2))*(h2));
    document.f1.dw8.value=dw8;
    
    dw1=(((-1)*(do1-o1)*(o1*(1-o1))*w5)+((-1)*(do2-o2)*(o2)*(1-o2)*w6))*(h1)*(i1);
    document.f1.dw1.value=dw1;
    
    dw2=(((-1)*(do1-o1)*(o1*(1-o1))*w7)+((-1)*(do2-o2)*(o2)*(1-o2)*w8))*(h2)*(i1);
    document.f1.dw2.value=dw2;
    
    dw3=(((-1)*(do1-o1)*(o1*(1-o1))*w5)+((-1)*(do2-o2)*(o2)*(1-o2)*w6))*(h1)*(i2);
    document.f1.dw3.value=dw3;
    
    dw4=(((-1)*(do1-o1)*(o1*(1-o1))*w7)+((-1)*(do2-o2)*(o2)*(1-o2)*w8))*(h2)*(i2);
    document.f1.dw4.value=dw4;
    
    
    dwb2=(((-1)*(do1-o1))+((-1)*(do2-o2)))*(((o1*(1-o1)))+((o2*(1-o2))))*2;
    document.f1.dwb2.value=dwb2;
    
    dwb1=(((((-1)*(do1-o1)*(o1*(1-o1))*w5)+((-1)*(do2-o2)*(o2)*(1-o2)*w6)))+(((-1)*(do1-o1)*(o1*(1-o1))*w7)+((-1)*(do2-o2)*(o2)*(1-o2)*w8)))*(h1+h2)*(2);
    document.f1.dwb1.value=dwb1;
    
    document.f1.w1next.value=w1-dw1;
    document.f1.w2next.value=w2-dw2;
    document.f1.w3next.value=w3-dw3;
    document.f1.w4next.value=w4-dw4;
    document.f1.wb1next.value=wb1-dwb1;
    document.f1.w5next.value=w5-dw5;
    document.f1.w6next.value=w6-dw6;
    document.f1.w7next.value=w7-dw7;
    document.f1.w8next.value=w8-dw8;
    document.f1.wb2next.value=wb2-dwb2;
}

function iterate()
{
    calculate();
    
    document.f1.w1.value=document.f1.w1next.value;
    document.f1.w2.value=document.f1.w2next.value;
    document.f1.w3.value=document.f1.w3next.value;
    document.f1.w4.value=document.f1.w4next.value;
    document.f1.wb1.value=document.f1.wb1next.value;
    document.f1.w5.value=document.f1.w5next.value;
    document.f1.w6.value=document.f1.w6next.value;
    document.f1.w7.value=document.f1.w7next.value;
    document.f1.w8.value=document.f1.w8next.value;
    document.f1.wb2.value=document.f1.wb2next.value;
}

