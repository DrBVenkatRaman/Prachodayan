/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function assign_weights()
{
    
    document.f1.i1.value=0.0;
    document.f1.i2.value=0.0;
    document.f1.i3.value=0.0;
    document.f1.i4.value=Math.random().toFixed(2);
    document.f1.i5.value=Math.random().toFixed(2);
    
    
    document.f1.wih00.value=Math.random().toFixed(2);
    document.f1.wih01.value=Math.random().toFixed(2);
    document.f1.wih02.value=Math.random().toFixed(2);
    document.f1.wih03.value=Math.random().toFixed(2);
    
    
    document.f1.wih10.value=Math.random().toFixed(2);
    document.f1.wih11.value=Math.random().toFixed(2);
    document.f1.wih12.value=Math.random().toFixed(2);
    document.f1.wih13.value=Math.random().toFixed(2);

    
    document.f1.wih20.value=Math.random().toFixed(2);
    document.f1.wih21.value=Math.random().toFixed(2);
    document.f1.wih22.value=Math.random().toFixed(2);
    document.f1.wih23.value=Math.random().toFixed(2);

    
    document.f1.wih30.value=Math.random().toFixed(2);
    document.f1.wih31.value=Math.random().toFixed(2);
    document.f1.wih32.value=Math.random().toFixed(2);
    document.f1.wih33.value=Math.random().toFixed(2);
    
    document.f1.wih40.value=Math.random().toFixed(2);
    document.f1.wih41.value=Math.random().toFixed(2);
    document.f1.wih42.value=Math.random().toFixed(2);
    document.f1.wih43.value=Math.random().toFixed(2);
    
    document.f1.who00.value=Math.random().toFixed(2);
    document.f1.who01.value=Math.random().toFixed(2);
    document.f1.who02.value=Math.random().toFixed(2);
    
    document.f1.who10.value=Math.random().toFixed(2);
    document.f1.who11.value=Math.random().toFixed(2);
    document.f1.who12.value=Math.random().toFixed(2);
    
    document.f1.who20.value=Math.random().toFixed(2);
    document.f1.who21.value=Math.random().toFixed(2);
    document.f1.who22.value=Math.random().toFixed(2);
    
    document.f1.who30.value=Math.random().toFixed(2);
    document.f1.who31.value=Math.random().toFixed(2);
    document.f1.who32.value=Math.random().toFixed(2);
    
    document.f1.o1.value="";
    document.f1.o2.value="";
    document.f1.o3.value="";
 
}

function calculate()
{
    var i1=parseFloat(document.f1.i1.value);
    var i2=parseFloat(document.f1.i2.value);
    var i3=parseFloat(document.f1.i3.value);
    var i4=parseFloat(document.f1.i4.value);
    var i5=parseFloat(document.f1.i5.value);
    
    var wih00=parseFloat(document.f1.wih00.value);
    var wih01=parseFloat(document.f1.wih01.value);
    var wih02=parseFloat(document.f1.wih02.value);
    var wih03=parseFloat(document.f1.wih03.value);
    
    var wih10=parseFloat(document.f1.wih10.value);
    var wih11=parseFloat(document.f1.wih11.value);
    var wih12=parseFloat(document.f1.wih12.value);
    var wih13=parseFloat(document.f1.wih13.value);
    
    var wih20=parseFloat(document.f1.wih20.value);
    var wih21=parseFloat(document.f1.wih21.value);
    var wih22=parseFloat(document.f1.wih22.value);
    var wih23=parseFloat(document.f1.wih23.value);
   
    var wih30=parseFloat(document.f1.wih30.value);
    var wih31=parseFloat(document.f1.wih31.value);
    var wih32=parseFloat(document.f1.wih32.value);
    var wih33=parseFloat(document.f1.wih33.value);
   
    var wih40=parseFloat(document.f1.wih40.value);
    var wih41=parseFloat(document.f1.wih41.value);
    var wih42=parseFloat(document.f1.wih42.value);
    var wih43=parseFloat(document.f1.wih43.value);
    
    var who00=parseFloat(document.f1.who00.value);
    var who01=parseFloat(document.f1.who01.value);
    var who02=parseFloat(document.f1.who02.value);
    
    var who10=parseFloat(document.f1.who10.value);
    var who11=parseFloat(document.f1.who11.value);
    var who12=parseFloat(document.f1.who12.value);
    
    var who20=parseFloat(document.f1.who20.value);
    var who21=parseFloat(document.f1.who21.value);
    var who22=parseFloat(document.f1.who22.value);
    
    var who30=parseFloat(document.f1.who30.value);
    var who31=parseFloat(document.f1.who31.value);
    var who32=parseFloat(document.f1.who32.value);
    
    
    var sh1=(i1*wih00)+(i2*wih10)+(i3*wih20)+(i4*wih30)+(i5*wih40);
    var oh1=1/(1+Math.pow(Math.E, -sh1));
    
    var sh2=(i1*wih01)+(i2*wih11)+(i3*wih21)+(i4*wih31)+(i5*wih41);
    var oh2=1/(1+Math.pow(Math.E, -sh2));
    
    var sh3=(i1*wih02)+(i2*wih12)+(i3*wih22)+(i4*wih32)+(i5*wih42);
    var oh3=1/(1+Math.pow(Math.E, -sh3));
    
    var sh4=(i1*wih03)+(i2*wih13)+(i3*wih23)+(i4*wih33)+(i5*wih43);
    var oh4=1/(1+Math.pow(Math.E, -sh4));
    
    var so1=(oh1*who00)+(oh2*who10)+(oh3*who20)+(oh4*who30);
    var oo1=1/(1+Math.pow(Math.E, -so1));
    
    var so2=(oh1*who01)+(oh2*who11)+(oh3*who21)+(oh4*who31);
    var oo2=1/(1+Math.pow(Math.E, -so2));
    
    var so3=(oh1*who02)+(oh2*who12)+(oh3*who22)+(oh4*who32);
    var oo3=1/(1+Math.pow(Math.E, -so3));
    
    document.f1.o1.value=oo1;
    document.f1.o2.value=oo2;
    document.f1.o3.value=oo3;
}

function iterate()
{
    if(document.f1.o1.value!="")
    document.f1.i1.value=document.f1.o1.value;
    else
      document.f1.i1.value=0.0;
  
    if(document.f1.o2.value!="")
    document.f1.i2.value=document.f1.o2.value;
    else
      document.f1.i2.value=0.0;
  
    if(document.f1.o3.value!="")
    document.f1.i3.value=document.f1.o3.value;
    else
      document.f1.i3.value=0.0;
    
    calculate();
    
}