//main.js

import * as THREE from 'three';
import './style.css';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { setupScene, scene, camera, renderer } from './sceneManager.js';
import { loadAudio, sound } from './audio.js';

import { torus1, torus2, sphere, pole, pole2, smokeParticles,
     FaceImageMesh, BioImageMesh, BioTitleTextMesh, NameTitleSelectedMesh,
     setupObjects, 
     NameTitleMesh, 
     BeeAlgorithmSimTextMesh, BeeAlgorithmSimSelectedMesh, BeeAlgorithmSimTitleTextMesh, BeeAlgorithmDescTextMesh,
     BearPitTextMesh, BearPitSelectedMesh, BearPitTitleTextMesh, BearPitDescTextMesh, 
     ARMuseumAppTextMesh, ARMuseumAppSelectedMesh, ARMuseumAppTitleTextMesh, MuseumARAppDescTextMesh,
     TheatrixVRTextMesh, TheatrixSelectedMesh, TheatrixVRTitleTextMesh, TheatrixVRDescTextMesh,
     LinkTextMesh, YouTubeTextMesh,
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
var currentYouTubeLink;

var linkOpen = false;
var YouTubeLinkOpen = false;

var currentlyShownMeshes = [FaceImageMesh,BioImageMesh,BioTitleTextMesh,NameTitleSelectedMesh];

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
            toggleCurrentlyShown([FaceImageMesh,BioImageMesh,BioTitleTextMesh,NameTitleSelectedMesh]);
            currentLink = "";
            currentYouTubeLink = "";
            linkOpen = false;
            YouTubeLinkOpen = false;
            break;

        case 'BeeAlgoBtn': // Action for Bee algo btn
            toggleCurrentlyShown([BeeAlgorithmSimTitleTextMesh, BeeAlgorithmSimSelectedMesh, BeeAlgorithmDescTextMesh, LinkTextMesh,  YouTubeTextMesh]);
            currentLink = "https://www.linkedin.com/feed/update/urn:li:activity:7327398103840342017/";
            currentYouTubeLink = "https://www.youtube.com/@JosephCarlyle";
            linkOpen = true;
            YouTubeLinkOpen = true;
            break;
        
        case 'BearPitBtn': // Action for BearPit btn
            toggleCurrentlyShown([BearPitTitleTextMesh, BearPitSelectedMesh, BearPitDescTextMesh, LinkTextMesh, YouTubeTextMesh]);
            currentLink = "https://afirend.itch.io/bearpit"
            currentYouTubeLink = "https://www.youtube.com/@A.Firend";
            linkOpen = true;
            YouTubeLinkOpen = true;
            break;

        case 'ARMuseumAppBtn': // Action for ARMuseumApp btn
            toggleCurrentlyShown([ARMuseumAppTitleTextMesh, ARMuseumAppSelectedMesh, MuseumARAppDescTextMesh, LinkTextMesh])
            currentLink = "https://www.linkedin.com/posts/josephcarlyle_here-is-a-small-prototype-of-a-mobile-app-activity-7054878268495126528-U6_s?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6chn4BOtPxhFgp6MeOJ1N5seTxsG1_ito";
            currentYouTubeLink = "";
            linkOpen = true;
            YouTubeLinkOpen = false;
            break;

        case 'TheatrixVRBtn': // Action for TheatrixVRBtn
            toggleCurrentlyShown([TheatrixVRTitleTextMesh, TheatrixSelectedMesh, TheatrixVRDescTextMesh, LinkTextMesh]);
            currentLink = "https://www.linkedin.com/feed/update/urn:li:activity:7028067059804557312/";
            currentYouTubeLink = "";
            linkOpen = true;
            YouTubeLinkOpen = false;
            break;

        case 'Link': // Action for Link
        if (linkOpen == true) {
            window.open(currentLink, "_blank");;
        } 
            break;

        case 'YouTubeLink': // Action for YouTubeLink
        if (YouTubeLinkOpen == true) {
            window.open(currentYouTubeLink, "_blank");;
        }
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
makeClickable(YouTubeTextMesh, handleAllClicks);
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