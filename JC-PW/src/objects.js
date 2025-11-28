//objects.js

import * as THREE from 'three';

// Exported Meshes (initialized later)
export let torus1, torus2, sphere, pole, pole2, NameTitleMesh;
export const smokeParticles = [];

/**
 * Creates and adds all 3D objects to the scene.
 * @param {THREE.Scene} scene - The main Three.js scene.
 * @param {number} color - The primary accent color.
 */
export function setupObjects(scene, color) {

    // --- Tori ---
    const torus1Geometry = new THREE.TorusGeometry(10, 3, 16, 25)
    const torus1Material = new THREE.MeshBasicMaterial({ color: color, wireframe: true });
    torus1 = new THREE.Mesh(torus1Geometry, torus1Material);

    const torus2Geometry = new THREE.TorusGeometry(5, 1.5, 8, 25)
    const torus2Material = new THREE.MeshBasicMaterial({ color: color, wireframe: true });
    torus2 = new THREE.Mesh(torus2Geometry, torus2Material);

    scene.add(torus2);
    scene.add(torus1);
    torus1.name = 'Torus1';

    // --- Background Sphere ---
    const sphereGeometry = new THREE.SphereGeometry(50, 30, 20)
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: color, wireframe: true });
    sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);
  

    /*
    // --- SMOKE Particles ---
    var smokeTexture = new THREE.TextureLoader().load('/assets/images/smoke.png');
    var smokeGeometry = new THREE.PlaneGeometry(200, 200);
    var smokeMaterial = new THREE.MeshLambertMaterial({ map: smokeTexture, opacity: 0.6, transparent: true });

    for (var i = 0; i < 5; i++) {
        var smoke_element = new THREE.Mesh(smokeGeometry, smokeMaterial);
        smoke_element.scale.set(2, 2, 2);
        smoke_element.position.set(Math.random() * 200 - 100, Math.random() * 200 - 300, Math.random() * 200 - 100);
        smoke_element.rotation.z = Math.random() * 360;

        scene.add(smoke_element);
        smokeParticles.push(smoke_element);
    }
*/
    // --- Top Menu Box & Text ------------------------------------------------
    var roundedBoxGeometry = new THREE.BoxGeometry(70, 5, 1, 5, 1, 5);
    var roundedBox = new THREE.Mesh(roundedBoxGeometry, new THREE.MeshBasicMaterial({ color: color, transparent: true, opacity: 0.3 }));
    roundedBox.position.set(0, 20.5, 0);
    scene.add(roundedBox);

    const NameTitleTexture = new THREE.TextureLoader().load('/assets/textimages/NameText1000x200.png');
    const NameTitleGeometry = new THREE.PlaneGeometry(20, 4);
    const NameTitleMaterial = new THREE.MeshBasicMaterial({ map: NameTitleTexture, 
        transparent: true,
        side: THREE.DoubleSide, });
    NameTitleMesh = new THREE.Mesh(NameTitleGeometry, NameTitleMaterial);
    NameTitleMesh.position.set(0, 19.5, 1);
    scene.add(NameTitleMesh);

    NameTitleMesh.name = 'NameTitle';

    // ---- Menu1 RIGHTMENU ------------------------------------------------
    var rightMenuBoxGeometry = new THREE.BoxGeometry(25, 35, 1, 5, 1, 5);
    var rightMenuBox = new THREE.Mesh(rightMenuBoxGeometry, new THREE.MeshBasicMaterial({ color: color, transparent: true, opacity: 0.3 }));
    rightMenuBox.position.set(27.5, -2.5, 0);
    scene.add(rightMenuBox);

    // FaceImage
    var FaceImageTexture = new THREE.TextureLoader().load('/assets/images/Face.jpg');
    const FaceImageGeometry = new THREE.PlaneGeometry(10, 10);
    const FaceImageMaterial = new THREE.MeshBasicMaterial({ map: FaceImageTexture });
    const FaceImageMesh = new THREE.Mesh(FaceImageGeometry, FaceImageMaterial);
    FaceImageMesh.position.set(26, 7, 1);
    scene.add(FaceImageMesh);

    // Bio Text/Title Meshes 
    var BioImageTexture = new THREE.TextureLoader().load('/assets/textimages/BioText2000x2000.png');
    const BioImageGeometry = new THREE.PlaneGeometry(20, 20);
    const BioImageMaterial = new THREE.MeshBasicMaterial({ map: BioImageTexture, transparent: true, });
    const BioImageMesh = new THREE.Mesh(BioImageGeometry, BioImageMaterial);
    BioImageMesh.position.set(26, -8, 1);
    scene.add(BioImageMesh);

    var BioTitleTexture = new THREE.TextureLoader().load('/assets/textimages/BioTitleText1000x200.png');
    const BioTitleTextGeometry = new THREE.PlaneGeometry(15, 3);
    const BioTitleTextMaterial = new THREE.MeshBasicMaterial({ map: BioTitleTexture, transparent: true, });
    const BioTitleTextMesh = new THREE.Mesh(BioTitleTextGeometry, BioTitleTextMaterial);
    BioTitleTextMesh.position.set(23, 13, 1);
    scene.add(BioTitleTextMesh);


    // --- Menu2 LEFTMENU -------------------------------------------------
    var leftMenuBox = new THREE.Mesh(rightMenuBoxGeometry, new THREE.MeshBasicMaterial({ color: color, transparent: true, opacity: 0.3 }));
    leftMenuBox.position.set(-27.5, -2.5, 0);
    scene.add(leftMenuBox);

    // Projects Text
    var ProjectsTextTexture = new THREE.TextureLoader().load('/assets/textimages/ProjectsText1000x200.png');
    const ProjectsTextGeometry = new THREE.PlaneGeometry(15, 3);
    const ProjectsTextMaterial = new THREE.MeshBasicMaterial({ map: ProjectsTextTexture, transparent: true, });
    const ProjectsTextMesh = new THREE.Mesh(ProjectsTextGeometry, ProjectsTextMaterial);
    ProjectsTextMesh.position.set(-29, 13, 1);
    scene.add(ProjectsTextMesh);

    // --- Portfolio Project Buttons ---------------

    //UNREAL ENGINE text
    var UnrealEngineTextTexture = new THREE.TextureLoader().load('/assets/textimages/UnrealEngineText800x160.png');
    const UnrealEngineTextGeometry = new THREE.PlaneGeometry(12, 2.4);
    const UnrealEngineTextMaterial = new THREE.MeshBasicMaterial({ map: UnrealEngineTextTexture, transparent: true, });
    const UnrealEngineTextMesh = new THREE.Mesh(UnrealEngineTextGeometry, UnrealEngineTextMaterial);
    UnrealEngineTextMesh.position.set(-30.5, 10, 1);
    scene.add(UnrealEngineTextMesh);    

        //Bee algorithm sim text
        var BeeAlgorithmSimTextTexture = new THREE.TextureLoader().load('/assets/textimages/BeeAlgorithmSimText800x130.png');
        const BeeAlgorithmSimTextGeometry = new THREE.PlaneGeometry(12, 2.4);
        const BeeAlgorithmSimTextMaterial = new THREE.MeshBasicMaterial({ map: BeeAlgorithmSimTextTexture, transparent: true, });
        const BeeAlgorithmSimTextMesh = new THREE.Mesh(BeeAlgorithmSimTextGeometry, BeeAlgorithmSimTextMaterial);
        BeeAlgorithmSimTextMesh.position.set(-30, 8, 1);
        scene.add(BeeAlgorithmSimTextMesh);    

        //BearPit text
        var BearPitTextTexture = new THREE.TextureLoader().load('/assets/textimages/BearPitText800x130.png');
        const BearPitTextGeometry = new THREE.PlaneGeometry(12, 2.4);
        const BearPitTextMaterial = new THREE.MeshBasicMaterial({ map: BearPitTextTexture, transparent: true, });
        const BearPitTextMesh = new THREE.Mesh(BearPitTextGeometry, BearPitTextMaterial);
        BearPitTextMesh.position.set(-30, 6.25, 1);
        scene.add(BearPitTextMesh);    


    // --- Poles ---
    var poleGeometry = new THREE.CylinderGeometry(1, 1, 35, 10, 30);
    const poleMaterial = new THREE.MeshBasicMaterial({ color: color, wireframe: true });
    
    pole = new THREE.Mesh(poleGeometry, poleMaterial);
    pole.position.set(-40, -2.5, 0);
    scene.add(pole);
    
    pole2 = new THREE.Mesh(poleGeometry, poleMaterial);
    pole2.position.set(40, -2.5, 0);
    scene.add(pole2);
}