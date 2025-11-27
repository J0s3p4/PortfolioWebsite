import * as THREE from 'three';
import './style.css';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { setupScene, scene, camera, renderer } from './sceneManager.js';
import { loadAudio, sound } from './audio.js';
import { torus1, torus2, sphere, pole, pole2, smokeParticles, setupObjects } from './objects.js';
import { updateAnimation } from './animation.js';

// --- Global Setup ---

// Define color and clock (these are used across multiple modules)
const color = 0x1f8eed; // blue
var clock = new THREE.Clock();

// Initialize the scene, camera, and renderer
setupScene(color);

// Add all objects to the scene
setupObjects(scene, color);

// Load and start the background audio
loadAudio(camera);

// Temp orbital controls setup
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Use damping for smoother controls

// --- Animation Loop ---

function animate() {
    requestAnimationFrame(animate);

    // Update object rotations
    const delta = clock.getDelta();
    updateAnimation(delta, torus1, torus2, sphere, pole, pole2, smokeParticles);

    // Update orbital controls
    controls.update();

    // Render the scene
    renderer.render(scene, camera);
}

animate();