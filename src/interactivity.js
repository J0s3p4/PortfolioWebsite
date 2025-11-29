// interactivity.js

import * as THREE from 'three';

// Initialize core components once
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// A map to store meshes and their associated click handlers
const clickableObjects = new Map();


// Stores a mesh and its corresponding callback function.
// Any mesh registered here will be checked by the click listener.
export function makeClickable(mesh, callback) {
    clickableObjects.set(mesh, callback);
}


 // Sets up the primary click listener on the DOM element (canvas).

export function setupClickListener(camera, domElement) {
    domElement.addEventListener('click', (event) => {
        // Calculate mouse position in normalized device coordinates (-1 to +1)
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        // Update the picking ray with the camera and mouse position
        raycaster.setFromCamera(mouse, camera);

        // Check for intersections with all registered clickable objects
        const intersects = raycaster.intersectObjects(Array.from(clickableObjects.keys()));

        if (intersects.length > 0) {
            // The first object in the array is the closest one clicked
            const clickedMesh = intersects[0].object;

            // Look up and execute the registered callback
            const callback = clickableObjects.get(clickedMesh);
            if (callback) {
                callback(clickedMesh); // Pass the mesh to the callback
            }
        }
    });
}