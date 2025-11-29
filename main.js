//main.js

// previously from 'three'
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.module.js';

// when commented out causes white border
// import '/style.css';


import { setupScene, scene, camera, renderer } from './sceneManager.js';
// Import { loadAudio, sound } from './audio.js';

// Import animated and clickable meshes from objects.js
import { torus1, torus2, sphere, pole, pole2,
     FaceImageMesh, BioImageMesh, BioTitleTextMesh, NameTitleSelectedMesh,
     setupObjects, 
     NameTitleMesh, 
     BeeAlgorithmSimTextMesh, BeeAlgorithmSimSelectedMesh, BeeAlgorithmSimTitleTextMesh, BeeAlgorithmDescTextMesh,
     BearPitTextMesh, BearPitSelectedMesh, BearPitTitleTextMesh, BearPitDescTextMesh, 
     ARMuseumAppTextMesh, ARMuseumAppSelectedMesh, ARMuseumAppTitleTextMesh, MuseumARAppDescTextMesh,
     TheatrixVRTextMesh, TheatrixSelectedMesh, TheatrixVRTitleTextMesh, TheatrixVRDescTextMesh,
     LinkTextMesh, YouTubeTextMesh,
     Date2023TextMesh, Date2025TextMesh,
     LinkedInTextMesh, GithubTextMesh,
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

// Link for opening other pages
var currentLink;
var currentYouTubeLink;

// Only some desc pages have links
var linkOpen = false;
var YouTubeLinkOpen = false;

// Default page is the Bio
var currentlyShownMeshes = [FaceImageMesh,BioImageMesh,BioTitleTextMesh,NameTitleSelectedMesh];

// Toggles currently shown meshes
function toggleCurrentlyShown(arrayToShow) {
    currentlyShownMeshes.forEach(mesh => {
        if (mesh) mesh.visible = false;
    });

    currentlyShownMeshes = arrayToShow;

    arrayToShow.forEach(mesh => {
        if (mesh) mesh.visible = true;
    });
}



 // handler function for each named clickable object
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
            toggleCurrentlyShown([BeeAlgorithmSimTitleTextMesh, BeeAlgorithmSimSelectedMesh, BeeAlgorithmDescTextMesh, LinkTextMesh,  YouTubeTextMesh, Date2025TextMesh]);
            currentLink = "https://www.linkedin.com/feed/update/urn:li:activity:7327398103840342017/";
            currentYouTubeLink = "https://www.youtube.com/@JosephCarlyle";
            linkOpen = true;
            YouTubeLinkOpen = true;
            break;
        
        case 'BearPitBtn': // Action for BearPit btn
            toggleCurrentlyShown([BearPitTitleTextMesh, BearPitSelectedMesh, BearPitDescTextMesh, LinkTextMesh, YouTubeTextMesh, Date2025TextMesh]);
            currentLink = "https://afirend.itch.io/bearpit"
            currentYouTubeLink = "https://www.youtube.com/@A.Firend";
            linkOpen = true;
            YouTubeLinkOpen = true;
            break;

        case 'ARMuseumAppBtn': // Action for ARMuseumApp btn
            toggleCurrentlyShown([ARMuseumAppTitleTextMesh, ARMuseumAppSelectedMesh, MuseumARAppDescTextMesh, LinkTextMesh, Date2023TextMesh])
            currentLink = "https://www.linkedin.com/posts/josephcarlyle_here-is-a-small-prototype-of-a-mobile-app-activity-7054878268495126528-U6_s?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6chn4BOtPxhFgp6MeOJ1N5seTxsG1_ito";
            currentYouTubeLink = "";
            linkOpen = true;
            YouTubeLinkOpen = false;
            break;

        case 'TheatrixVRBtn': // Action for TheatrixVRBtn
            toggleCurrentlyShown([TheatrixVRTitleTextMesh, TheatrixSelectedMesh, TheatrixVRDescTextMesh, LinkTextMesh, Date2023TextMesh]);
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

        case 'LinkedInBtn': // Action for LinkedIn Link
            window.open("https://www.linkedin.com/in/josephcarlyle/", "_blank");;
            break;

        case 'GithubBtn': // Action for GitHub Link
            window.open("https://github.com/J0s3p4", "_blank");;
            break;

        default:
            // For clickable mesh without a specific case
            console.log(`No specific case defined for ${meshName}.`);
            break;
    }
}

//DONT FORGET TO MAKE CLICKABLE

// -------- makeClickable calls ------------
makeClickable(NameTitleMesh, handleAllClicks); 
makeClickable(BeeAlgorithmSimTextMesh, handleAllClicks);
makeClickable(BearPitTextMesh, handleAllClicks);
makeClickable(ARMuseumAppTextMesh, handleAllClicks);
makeClickable(TheatrixVRTextMesh, handleAllClicks);

makeClickable(LinkTextMesh, handleAllClicks);
makeClickable(YouTubeTextMesh, handleAllClicks);

makeClickable(LinkedInTextMesh, handleAllClicks);
makeClickable(GithubTextMesh, handleAllClicks);


// Initialize click listener for interactivity
setupClickListener(camera, renderer.domElement);

// Load and start the background audio
//loadAudio(camera);

// Temp orbital controls setup
//const controls = new OrbitControls(camera, renderer.domElement);
//controls.enableDamping = true; // Use damping for smoother controls

// --- Animation Loop ---

function animate() {
    requestAnimationFrame(animate);

    // Update object rotations
    const delta = clock.getDelta();
    updateAnimation(delta, torus1, torus2, sphere, pole, pole2);

    // Update orbital controls
  //  controls.update();

    // Render the scene
    renderer.render(scene, camera);
}

animate();