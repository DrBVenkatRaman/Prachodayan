class CA2D
{

int rows=width/10;
int columns=height/10;
int [][]board;
int [][]current;
int [][]next;

CA2D()
{
board  = new int[columns][rows];
current = new int[columns][rows];
next = new int[columns][rows];
for(int x=0;x<columns;x++)
{
  for(int y=0;y<rows;y++)
  {
    current[x][y]=int(random(2));
  }
}
}
void display()
  {
  for(int i=0;i<current.length;i++)
  {
     for(int j=0;j<current[0].length;j++)
    {
    if(current[i][j]==1)
    fill(0);
    else
    fill(255);
   rect(i*columns,j*rows,width,height);
  }
 }
}
void update()
{
  int neighbours=0;
  for(int x=0;x<columns;x++)
{
  for(int y=0;y<rows;y++)
  {
    neighbours=0;
  for(int i=-1;i<=1;i++)
  {
    for(int j=-1;j<=1;j++)
    {
      if((((x+i)<0)||((x+i)>=columns)||((y+j)<0)||((y+j)>=rows)))
      {
      }
      else{
      
        neighbours+=current[x+i][y+j];
      }
    }
  }
  neighbours-=current[x][y];
 

if((current[x][y]==1)&&neighbours<2)
{
  next[x][y]=0;
}
else if((current[x][y]==1)&&neighbours>3)
{
  next[x][y]=0;
}
else if((current[x][y]==0)&&(neighbours==3))
{
  next[x][y]=1;
}
else
{
  next[x][y]=current[x][y];
}


  }
}

current=next;
}
}
 CA2D ca;
 void setup()
 {
   size(720,720);
   background(255);
   ca=new CA2D();
 }
 
 void draw()
 {
   ca.display();
   ca.update();
 }
   
