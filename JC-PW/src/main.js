//main.js

import * as THREE from 'three';
import './style.css';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { setupScene, scene, camera, renderer } from './sceneManager.js';
import { loadAudio, sound } from './audio.js';
import { torus1, torus2, sphere, pole, pole2, smokeParticles, FaceImageMesh, BioImageMesh, BioTitleTextMesh, setupObjects, NameTitleMesh, BeeAlgorithmSimTextMesh, BearPitTextMesh,} from './objects.js';
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

var currentlyShownMeshes = [FaceImageMesh,BioImageMesh,BioTitleTextMesh];

function toggleCurrentlyShown(arrayToShow) {
    currentlyShownMeshes.forEach(mesh => {
        if (mesh) mesh.visible = !mesh.visible;
    });
    currentlyShownMeshes = arrayToShow;
    arrayToShow.forEach(mesh => {
        if (mesh) mesh.visible = !mesh.visible;
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
            break;

        case 'BeeAlgoBtn': // Action for NameTitle
            toggleCurrentlyShown([]);
            break;
        
        case 'BearPitBtn': // Action for NameTitle
            toggleCurrentlyShown([]);
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