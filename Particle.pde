class PVector
{
  float x;
  float y;

  
  PVector(float x_,float y_)
  {
    x=x_;
    y=y_;
  }
  
  void add(PVector v)
  {
    x=x+v.x;
    y=y+v.y;
  }
}

class Walker
{
  PVector location;
  PVector velocity;
  PVector acceleration;
  
  Walker()
  {
    location=new PVector(0,height/2);
    velocity = new PVector(0,0);
    acceleration=new PVector(0.001,0.01);
    
  }

  void display()
  {
    stroke(0);
    fill(175);
    ellipse(location.x,location.y,16,16);
  }
  
  void step()
  {
   velocity.add(acceleration);
   location.add(velocity);
   
   if((location.x>width) || (location.x<0))
   velocity.x=velocity.x*-1;
   if((location.y>height) || (location.y<0))
   velocity.y=velocity.y*-1;
   
  }
}

Walker w;

void setup()
{

  size(640,360);
  w = new Walker();
  background(255);
  
}

void draw()
{

  w.step();
  w.display();
}
