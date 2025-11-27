// audio.js

import * as THREE from 'three';

const listener = new THREE.AudioListener();
const sound = new THREE.Audio(listener);

/**
 * Loads and plays the background audio.
 * @param {THREE.Camera} camera - The main camera to attach the listener to.
 */
export function loadAudio(camera) {
    camera.add(listener);

    const audioLoader = new THREE.AudioLoader();
    audioLoader.load('assets/Deus Ex OST Main menu theme.mp3', function(buffer) {
        sound.setBuffer(buffer);
        sound.setLoop(true);
        sound.setVolume(0.0);
        sound.play();
    });
}

export { sound };