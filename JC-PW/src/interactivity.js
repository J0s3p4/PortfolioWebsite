// interactivity.js

import * as THREE from 'three';

// Initialize core components once
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// A map to store meshes and their associated click handlers
const clickableObjects = new Map();

/**
 * 1. Stores a mesh and its corresponding callback function.
 * Any mesh registered here will be checked by the click listener.
 * @param {THREE.Mesh} mesh - The object to make clickable.
 * @param {Function} callback - The function to execute when the mesh is clicked.
 */
export function makeClickable(mesh, callback) {
    clickableObjects.set(mesh, callback);
}

/**
 * 2. Sets up the primary click listener on the DOM element (canvas).
 * @param {THREE.Camera} camera - The scene camera.
 * @param {HTMLElement} domElement - The canvas or element to attach the listener to.
 */
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