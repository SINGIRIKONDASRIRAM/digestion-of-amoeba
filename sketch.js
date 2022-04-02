var backgroundImg;
var himalyas,himalyasImg;
var desert,desertImg;
var costalplains,costalplainsImg;
var animalshimalyaImg,animalshimalya;
var himalyaflower1,himalyaflower1Img;
var himalyaflower2,himalyaflower2Img;
var himalyaflower3,himalyaflower3Img;
var mt,mtImg
var c,cImg;
var ca1,ca2,ca1Img,ca2Img;
var d,dImg;
var da1,da2,da1Img,da2Img;
var i,iImg;
var ia1,ia2,ia1Img,ia2Img;
var np,npImg;
var npa1,npa2,npa1Img,npa2Img;
var ppImg;
var pa1,pa2,pa1Img,pa2Img;
var assimilation,assimilationImg;


function preload()
{
	backgroundImg=loadImage("blue.jpg")
	himalyasImg=loadImage("digestion.png");
	animalshimalyaImg=loadImage("ingestion.png");
	himalyaflower1Img=loadImage("digestion1.png")
	himalyaflower2Img=loadImage("absorption.png")
	himalyaflower3Img=loadImage("egestion.png")
	mtImg=loadImage("assimilation.png");
	cImg=loadImage("assimilation.png");
	ca1Img=loadImage("assimilation1.png");
	ca2Img=loadImage("assimilation2.png");
	dImg=loadImage("ingestion.png");
	da1Img=loadImage("ingestion2.png");
	da2Img=loadImage("ingestion1.png");
	iImg=loadImage("egestion.png");
	ia1Img=loadImage("egestion1.png");
	ia2Img=loadImage("egestion2.png");
	npImg=loadImage("absorption.png");
	npa1Img=loadImage("absorption1.png");
	npa2Img=loadImage("absorption3.png");
	npImg=loadImage("absorption.png");
	pImg=loadImage("digestion1.png");
	pa1Img=loadImage("digestion2.png");
	pa2Img=loadImage("digestion3.png");
}

function setup() {
	createCanvas(1000,1000);
himalyas=createSprite(500,100,20,20);
himalyas.addImage(himalyasImg);
himalyas.scale=0.5;	
c=createSprite(100,550,20,20);
c.addImage(cImg);
c.scale=0.7;
d=createSprite(100,200,20,20);
d.addImage(dImg);
d.scale=0.6;
i=createSprite(700,550,20,20);
i.addImage(iImg);
i.scale=0.7;
np=createSprite(790,200,20,20);
np.addImage(npImg);
np.scale=0.6;
p=createSprite(450,200,20,20);
p.addImage(pImg);
p.scale=0.6;
	
  
}


function draw() {
  background(backgroundImg);
  if(mousePressedOver(himalyas)){
	  animalshimalya=createSprite(200,150,20,20);
	  animalshimalya.addImage(animalshimalyaImg);
	  animalshimalya.scale=0.7;
	  animalshimalya.lifetime=400;
	  himalyaflower1=createSprite(350,150,20,20);
	  himalyaflower1.addImage(himalyaflower1Img);
	  himalyaflower1.scale=0.7;
	  himalyaflower1.lifetime=400;
	  himalyaflower2=createSprite(500,150,20,20);
	  himalyaflower2.addImage(himalyaflower2Img);
	  himalyaflower2.scale=0.7;
	  himalyaflower2.lifetime=400;
	  mt=createSprite(650,150,20,20);
	  mt.addImage(mtImg);
	  mt.scale=0.7;
	  mt.lifetime=400;
	  himalyaflower3=createSprite(800,150,20,20);
	  himalyaflower3.addImage(himalyaflower3Img);
	  himalyaflower3.scale=0.7;
	  himalyaflower3.lifetime=400;
  }
  if(mousePressedOver(c)){
	ca1=createSprite(250,600,20,20);
	ca1.addImage(ca1Img);
	ca1.scale=0.7;
	ca1.lifetime=400;
	ca2=createSprite(200,700,20,20);
	ca2.addImage(ca2Img);
	ca2.scale=0.7;
	ca2.lifetime=400;
	
  }

if(mousePressedOver(p)){
	pa1=createSprite(470,250,20,20);
	pa1.addImage(pa1Img);
	pa1.scale=0.6;
	pa1.lifetime=400;
	pa2=createSprite(470,350,20,20);
	pa2.addImage(pa2Img);
	pa2.scale=0.4;
	pa2.lifetime=400;
	
}


if(mousePressedOver(np)){
	npa1=createSprite(790,250,20,20);
	npa1.addImage(npa1Img);
	npa1.scale=0.6;
	npa1.lifetime=400;
	npa2=createSprite(800,340,20,20);
	npa2.addImage(npa2Img);
	npa2.scale=0.9;
	npa2.lifetime=400;
}


if(mousePressedOver(i)){
	ia1=createSprite(700,600,20,20);
	ia1.addImage(ia1Img);
	ia1.scale=0.6;
	ia1.lifetime=400;
	ia2=createSprite(740,700,20,20);
	ia2.addImage(ia2Img);
	ia2.scale=0.7;
	ia2.lifetime=400;
}

if(mousePressedOver(d)){
	da1=createSprite(140,250,50,50);
	da1.addImage(da1Img);
	da1.scale=0.6;
	da1.lifetime=400;
	da2=createSprite(150,370,50,50);
	da2.addImage(da2Img);
	da2.scale=0.4;
	da2.lifetime=400;
	
}


  drawSprites();
 
}



