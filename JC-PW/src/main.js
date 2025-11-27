
import * as THREE from 'three';
import './style.css'

// Temp for testing
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';



const red = 0x19ff9c;
const blue = 0x1f8eed;

let color = blue;


let updateInterval; //interval update
//Date and Time
function updateDateTime() {
  
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();
  
  document.getElementById("date").innerHTML = date;
  document.getElementById("time").innerHTML = time;
  
}
updateInterval = setInterval(updateDateTime, 100);

/*
//Name Randomizer
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.querySelector("h1").onmouseover = event =>{

let iterations = 0;

 const interval = setInterval(() => {
  const text = event.target.innerText;
  event.target.innerText = text.split("")
  .map((char, index) => {
    if (char === " ") {
      return " ";
    }
    if(index < iterations){
      return event.target.dataset.value[index];
    }
    return letters[Math.floor(Math.random() * 26)];  //index % 2 === 0 ? char : 
  }).join("");

  if(iterations >= event.target.dataset.value.length) clearInterval(interval);

  iterations+=1/2;
}, 100);
}
*/


//Initialize 3D scene
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//For MP3 Sound Test
//--------------------------------------------
const listener = new THREE.AudioListener();
camera.add(listener);

// 2. Create a global audio source
const sound = new THREE.Audio(listener);

// 3. Load the MP3 file
const audioLoader = new THREE.AudioLoader();
audioLoader.load('assets/Deus Ex OST Main menu theme.mp3', function(buffer) {
    sound.setBuffer(buffer);
    sound.setLoop(true);      // or true
    sound.setVolume(0.); //0.1
    sound.play();           
});
//--------------------------------------------

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight);
camera.position.setZ(30);



//Tori
const torus1Geometry = new THREE.TorusGeometry(10,3,16,25)
const torus1Material = new THREE.MeshBasicMaterial({color:color, wireframe:true});
const torus1 = new THREE.Mesh(torus1Geometry,torus1Material);

const torus2Geometry = new THREE.TorusGeometry(5,1.5,8,25)
const torus2Material = new THREE.MeshBasicMaterial({color:color, wireframe:true});
const torus2 = new THREE.Mesh(torus2Geometry,torus2Material);

scene.add(torus2)
scene.add(torus1)


// Background Sphere
const sphereGeometry = new THREE.SphereGeometry(50,30,20)
const sphereMaterial = new THREE.MeshBasicMaterial({color:color, wireframe:true});
const sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);

scene.add(sphere)


//SMOKE
var smokeTexture = new THREE.TextureLoader().load('/assets/images/smoke.png');
var smokeGeometry = new THREE.PlaneGeometry(200,200);
var smokeMaterial = new THREE.MeshLambertMaterial({ map: smokeTexture, opacity: 0.6, transparent: true});
var smokeParticles;
smokeParticles = [];
for (var i = 0; i < 5; i++)
{    
    var smoke_element = new THREE.Mesh(smokeGeometry,smokeMaterial);
    smoke_element.scale.set(2, 2, 2);
    smoke_element.position.set( Math.random()*200-100, Math.random()*200-300, Math.random()*200-100);
    smoke_element.rotation.z = Math.random() * 360;
            
    scene.add(smoke_element);
    smokeParticles.push(smoke_element);
}

//Light
const light = new THREE.HemisphereLight(0xb9f9f4, color, 1);
scene.add(light);


//Responsiveness
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}

//-------------------------------------------------------------------------

// Top Menu
var roundedBoxGeometry = new THREE.BoxGeometry( 70, 5, 1, 5, 1, 5 );
var roundedBox = new THREE.Mesh( roundedBoxGeometry, new THREE.MeshBasicMaterial( { color: color, transparent:true, opacity:0.3 } ) );
scene.add( roundedBox );
roundedBox.position.set(0,20.5,0);

// NameImage Text
var NameTitleTexture = new THREE.TextureLoader().load('/assets/textimages/NameText1000x200.png');
const NameTitleGeometry = new THREE.PlaneGeometry(20, 4);   // width, height
const NameTitleMaterial = new THREE.MeshBasicMaterial({ map: NameTitleTexture, transparent: true, });
const NameTitleMesh = new THREE.Mesh(NameTitleGeometry, NameTitleMaterial);

NameTitleMesh.position.set(0,19.5,1);
scene.add(NameTitleMesh);

//-------------------------------------------------------------------------
// Menu1 RIGHTMENU
var roundedBoxGeometry = new THREE.BoxGeometry( 25, 35, 1, 5, 1, 5 );
var roundedBox = new THREE.Mesh( roundedBoxGeometry, new THREE.MeshBasicMaterial( { color: color, transparent:true, opacity:0.3 } ) );
scene.add( roundedBox );
roundedBox.position.set(27.5,-2.5,0);



// FaceImage
var FaceImageTexture = new THREE.TextureLoader().load('/assets/images/Face.jpg');
const FaceImageGeometry = new THREE.PlaneGeometry(10, 10);   // width, height
const FaceImageMaterial = new THREE.MeshBasicMaterial({ map: FaceImageTexture});
const FaceImageMesh = new THREE.Mesh(FaceImageGeometry, FaceImageMaterial);

FaceImageMesh.position.set(26,7,1);
scene.add(FaceImageMesh);

// BioImage Text
var BioImageTexture = new THREE.TextureLoader().load('/assets/textimages/BioText2000x2000.png');
const BioImageGeometry = new THREE.PlaneGeometry(20, 20);   // width, height
const BioImageMaterial = new THREE.MeshBasicMaterial({ map: BioImageTexture, transparent: true, });
const BioImageMesh = new THREE.Mesh(BioImageGeometry, BioImageMaterial);

BioImageMesh.position.set(26,-8,1);
scene.add(BioImageMesh);

// BioTitle Text
var BioTitleTexture = new THREE.TextureLoader().load('/assets/textimages/BioTitleText1000x200.png');
const BioTitleTextGeometry = new THREE.PlaneGeometry(15, 3);   // width, height
const BioTitleTextMaterial = new THREE.MeshBasicMaterial({ map: BioTitleTexture, transparent: true, });
const BioTitleTextMesh = new THREE.Mesh(BioTitleTextGeometry, BioTitleTextMaterial);

BioTitleTextMesh.position.set(23,13,1);
scene.add(BioTitleTextMesh);

//-------------------------------------------------------------------------
// Menu2 LEFTMENU
var roundedBox2 = new THREE.Mesh( roundedBoxGeometry, new THREE.MeshBasicMaterial( { color: color, transparent:true, opacity:0.3 } ) );
scene.add( roundedBox2 );
roundedBox2.position.set(-27.5,-2.5,0);

// Projects Text
var ProjectsTextTexture = new THREE.TextureLoader().load('/assets/textimages/ProjectsText1000x200.png');
const ProjectsTextGeometry = new THREE.PlaneGeometry(15, 3);   // width, height
const ProjectsTextMaterial = new THREE.MeshBasicMaterial({ map: ProjectsTextTexture, transparent: true, });
const ProjectsTextMesh = new THREE.Mesh(ProjectsTextGeometry, ProjectsTextMaterial);

ProjectsTextMesh.position.set(-29,13,1);
scene.add(ProjectsTextMesh);

//-------------------------------------------------------------------------

// Pole1 LEFTPOLE
var poleGeometry = new THREE.CylinderGeometry(1,1,35,10,30);
const poleMaterial = new THREE.MeshBasicMaterial({color:color, wireframe:true});
const pole = new THREE.Mesh(poleGeometry,poleMaterial);
scene.add( pole );
pole.position.set(-40,-2.5,0);

// Pole2 LEFTPOLE
const pole2 = new THREE.Mesh(poleGeometry,poleMaterial);
scene.add( pole2 );
pole2.position.set(40,-2.5,0);

//-------------------------------------------------------------------------

//TEXT TEMP
/*
// create a canvas element
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
// set the font and style of the text
context.font = "Bold 40px Arial";
context.fillStyle = "rgba(255,255,255,0.95)";
// draw the text onto the canvas
context.fillText('PORTFOLIO', 0, 50);
// create a texture from the canvas
var texture = new THREE.Texture(canvas) 
texture.needsUpdate = true;
// create a sprite from the texture
var spriteMaterial = new THREE.SpriteMaterial({ map: texture });
var sprite = new THREE.Sprite( spriteMaterial );
// set the size of the sprite
sprite.scale.set(10,5,1);
// add the sprite to the scene
scene.add( sprite );
// position the sprite in the scene
sprite.position.set(22,12,1);

// create a canvas element
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
// set the font and style of the text
context.font = "Bold 40px Arial";
context.fillStyle = "rgba(255,255,255,0.95)";
// draw the text onto the canvas
context.fillText('DEBRIEF', 0, 50);
// create a texture from the canvas
var texture = new THREE.Texture(canvas) 
texture.needsUpdate = true;
// create a sprite from the texture
var spriteMaterial = new THREE.SpriteMaterial({ map: texture });
var sprite = new THREE.Sprite( spriteMaterial );
// set the size of the sprite
sprite.scale.set(10,5,1);
// add the sprite to the scene
scene.add( sprite );
// position the sprite in the scene
sprite.position.set(-30,12,1);
*/


//temp orbital controls
const controls = new OrbitControls(camera, renderer.domElement);


//Clock
var clock = new THREE.Clock();

//Each frame
function animate(){
  
    requestAnimationFrame(animate);
  
    torus1.rotation.x += 0.008;
    torus1.rotation.y += 0.004;
    torus1.rotation.z += 0.008;

    torus2.rotation.x += 0.016;
    torus2.rotation.y += 0.008;
    torus2.rotation.z += 0.016;

    sphere.rotation.y += 0.0025;

    pole.rotation.y += 0.005;
    pole2.rotation.y -= 0.005;

 

    //Smoke
    var delta = clock.getDelta();
    for(var i = 0; i < smokeParticles.length ; i++)
    {
        smokeParticles[i].rotation.z += (delta * 0.025);
    }

    //temp orbital controls
    controls.update(); // IMPORTANT for damping


    renderer.render(scene,camera);



  }
  
  animate()