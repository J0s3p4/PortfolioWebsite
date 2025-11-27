/**
 * Updates the rotation and movement of all animated objects.
 * @param {number} delta - The time elapsed since the last frame (from THREE.Clock).
 * @param {THREE.Mesh} torus1
 * @param {THREE.Mesh} torus2
 * @param {THREE.Mesh} sphere
 * @param {THREE.Mesh} pole
 * @param {THREE.Mesh} pole2
 * @param {THREE.Mesh[]} smokeParticles - Array of smoke meshes.
 */
export function updateAnimation(delta, torus1, torus2, sphere, pole, pole2, smokeParticles) {
    torus1.rotation.x += 0.008;
    torus1.rotation.y += 0.004;
    torus1.rotation.z += 0.008;

    torus2.rotation.x += 0.016;
    torus2.rotation.y += 0.008;
    torus2.rotation.z += 0.016;

    sphere.rotation.y += 0.0025;

    pole.rotation.y += 0.005;
    pole2.rotation.y -= 0.005;

    // Smoke animation
    for (var i = 0; i < smokeParticles.length; i++) {
        smokeParticles[i].rotation.z += (delta * 0.025);
    }
}