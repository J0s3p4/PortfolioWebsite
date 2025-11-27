import * as THREE from 'three';

let scene;
let camera;
let renderer;

/**
 * Initializes the Three.js scene, camera, and renderer.
 * @param {number} color - The primary accent color for the scene.
 */
export function setupScene(color) {
    // Initialize 3D scene
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.setZ(30);

    renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#bg'),
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Light
    const light = new THREE.HemisphereLight(0xb9f9f4, color, 1);
    scene.add(light);

    // Responsiveness
    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}

export { scene, camera, renderer };