//animation.js


// All of the rotation animations in the scene
export function updateAnimation(delta, torus1, torus2, sphere, pole, pole2) {
    torus1.rotation.x += 0.008 * delta * 60;
    torus1.rotation.y += 0.004 * delta * 60;
    torus1.rotation.z += 0.008 * delta * 60;

    torus2.rotation.x += 0.016 * delta * 60;
    torus2.rotation.y += 0.008 * delta * 60;
    torus2.rotation.z += 0.016 * delta * 60;

    sphere.rotation.y += 0.0025 * delta * 60;

    pole.rotation.y += 0.005 * delta * 60;
    pole2.rotation.y -= 0.005 * delta * 60;

}

