
var x = document.getElementById("about");
x.addEventListener("mouseover", myFunction);
x.addEventListener("mouseout", mySecFunction);
m=document.getElementById("life").getContext("2d")
/* function myFunction() {
  document.getElementById("").innerHTML += ;
}*/
draw=(x,y,c,s)=>{
  m.fillStyle=c
  m.fillRect(x,y,s,s)
}
particles=[]
particle=(x,y,c)=>{
  return{"x":x, "y":y,"vx":0, "vy":0, "color":c}
}
random=()=>{
  return Math.random()*400+50
}
create=(number,color)=>{
  group=[]
  for(let i=0;i < number; i++){
    group.push(particle(random(),random(),color))
    particles.push(group[i])
  }
  return group
}

rule=(particles1, particles2, g)=>{
  
}

yellow = create(2,"yellow")

update=()=>{
  rule(yellow, yellow, -1)
  m.clearRect(0,0,500,500)
  draw(0,0,"black",500)
  for(1=0;i<particles.length; i++){
    draw(particles[i].x, particles[i].y,
      particles[i].color, 5)
  }
  requestAnimationFrame(update)
}

update();

function mOut(obj) {
    document.getElementById('about').style.removeBackgroundImage =  "url('img/mindfulness')";
}