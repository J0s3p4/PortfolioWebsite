//main.js

import * as THREE from 'three';
import './style.css';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { setupScene, scene, camera, renderer } from './sceneManager.js';
import { loadAudio, sound } from './audio.js';

import { torus1, torus2, sphere, pole, pole2, smokeParticles,
     FaceImageMesh, BioImageMesh, BioTitleTextMesh, 
     setupObjects, 
     NameTitleMesh, 
     BeeAlgorithmSimTextMesh, BeeAlgorithmSimTitleTextMesh,
     BearPitTextMesh, BearPitTitleTextMesh, BearPitDescTextMesh, BearPitImageMesh,
     ARMuseumAppTextMesh, ARMuseumAppTitleTextMesh, MuseumARAppDescTextMesh,
     TheatrixVRTextMesh, TheatrixVRTitleTextMesh, TheatrixVRDescTextMesh,
     LinkTextMesh,
    } from './objects.js';


import { updateAnimation } from './animation.js';
import { makeClickable, setupClickListener } from './interactivity.js';
// --- Global Setup ---

// Define color and clock (these are used across multiple modules)
const color = 0x1f8eed; // blue
var clock = new THREE.Clock();

// Initialize the scene, camera, and renderer
setupScene(color);

// Add all objects to the scene
setupObjects(scene, color);

//Link for opening other pages
var currentLink;

var currentlyShownMeshes = [FaceImageMesh,BioImageMesh,BioTitleTextMesh];

function toggleCurrentlyShown(arrayToShow) {
    currentlyShownMeshes.forEach(mesh => {
        if (mesh) mesh.visible = false;
    });

    currentlyShownMeshes = arrayToShow;

    arrayToShow.forEach(mesh => {
        if (mesh) mesh.visible = true;
    });
}


/**
 * Single handler function that executes different actions 
 * based on the clicked mesh's name.
 * @param {THREE.Mesh} mesh - The mesh that was clicked.
 */
function handleAllClicks(mesh) {
    const meshName = mesh.name;
    console.log(`Clicked: ${meshName || mesh.uuid}`);

    switch (meshName) {
        case 'NameTitle': // Action for NameTitle
            toggleCurrentlyShown([FaceImageMesh,BioImageMesh,BioTitleTextMesh]);
            currentLink = "";
            break;

        case 'BeeAlgoBtn': // Action for Bee algo btn
            toggleCurrentlyShown([BeeAlgorithmSimTitleTextMesh, LinkTextMesh]);
            currentLink = "https://www.linkedin.com/feed/update/urn:li:activity:7327398103840342017/";
            break;
        
        case 'BearPitBtn': // Action for BearPit btn
            toggleCurrentlyShown([BearPitTitleTextMesh, BearPitDescTextMesh, BearPitImageMesh, LinkTextMesh]);
            currentLink = "https://afirend.itch.io/bearpit"
            break;

        case 'ARMuseumAppBtn': // Action for ARMuseumApp btn
            toggleCurrentlyShown([ARMuseumAppTitleTextMesh, MuseumARAppDescTextMesh, LinkTextMesh])
            currentLink = "https://www.linkedin.com/posts/josephcarlyle_here-is-a-small-prototype-of-a-mobile-app-activity-7054878268495126528-U6_s?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6chn4BOtPxhFgp6MeOJ1N5seTxsG1_ito";
            break;

        case 'TheatrixVRBtn': // Action for TheatrixVRBtn
            toggleCurrentlyShown([TheatrixVRTitleTextMesh, TheatrixVRDescTextMesh, LinkTextMesh]);
             currentLink = "https://www.linkedin.com/feed/update/urn:li:activity:7028067059804557312/";
            break;

        case 'Link': // Action for TheatrixVRBtn
            window.open(currentLink, "_blank");;
            break;

        default:
            // Optional: Action for any other clickable mesh without a specific case
            console.log(`No specific case defined for ${meshName}.`);
            break;
    }
}

//DONT FORGET TO MAKE CLICKABLE
makeClickable(NameTitleMesh, handleAllClicks); 
makeClickable(BeeAlgorithmSimTextMesh, handleAllClicks);
makeClickable(BearPitTextMesh, handleAllClicks);
makeClickable(ARMuseumAppTextMesh, handleAllClicks);
makeClickable(TheatrixVRTextMesh, handleAllClicks);

makeClickable(LinkTextMesh, handleAllClicks);
// --- End of makeClickable calls ------------



// Initialize click listener for interactivity
setupClickListener(camera, renderer.domElement);

// Load and start the background audio
loadAudio(camera);

    // Temp orbital controls setup
//const controls = new OrbitControls(camera, renderer.domElement);
//controls.enableDamping = true; // Use damping for smoother controls

// --- Animation Loop ---

function animate() {
    requestAnimationFrame(animate);

    // Update object rotations
    const delta = clock.getDelta();
    updateAnimation(delta, torus1, torus2, sphere, pole, pole2, smokeParticles);

    // Update orbital controls
  //  controls.update();

    // Render the scene
    renderer.render(scene, camera);
}

animate();