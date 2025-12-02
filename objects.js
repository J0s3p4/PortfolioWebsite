//objects.js

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.module.js';


// Exported Meshes (initialized later)
export let torus1, torus2, sphere, pole, pole2, 
NameTitleMesh, NameTitleSelectedMesh,
FaceImageMesh, BioImageMesh, BioTitleTextMesh, 
BeeAlgorithmSimTextMesh, BeeAlgorithmSimSelectedMesh, BeeAlgorithmSimTitleTextMesh, BeeAlgorithmDescTextMesh,
BearPitTextMesh, BearPitSelectedMesh, BearPitTitleTextMesh, BearPitDescTextMesh, BearPitImageMesh, 
ARMuseumAppTextMesh, ARMuseumAppSelectedMesh, ARMuseumAppTitleTextMesh, MuseumARAppDescTextMesh,
TheatrixVRTextMesh, TheatrixSelectedMesh, TheatrixVRTitleTextMesh, TheatrixVRDescTextMesh,
LinkTextMesh, YouTubeTextMesh, 
Date2023TextMesh, Date2025TextMesh,
LinkedInTextMesh, GithubTextMesh; 


// --- Function for creating a textured plane ---
function createPlane(scene, src, w, h, x, y, z = 1) {
    const tex = new THREE.TextureLoader().load(src);
    const geo = new THREE.PlaneGeometry(w, h);
    const mat = new THREE.MeshBasicMaterial({
        map: tex,
        transparent: true,
        side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    scene.add(mesh);
    return mesh;
}


// Creates and adds all 3d objects to the scene
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

    // Project Selected Texture "<"
    var ProjectSelectedTexture = new THREE.TextureLoader().load('./assets/textimages/SubTitle2Selected65x130.png');

    // --- Top Menu Box & Text ------------------------------------------------
    var roundedBoxGeometry = new THREE.BoxGeometry(70, 5, 1, 5, 1, 5);
    var roundedBox = new THREE.Mesh(roundedBoxGeometry, new THREE.MeshBasicMaterial({ color: color, transparent: true, opacity: 0.3 }));
    roundedBox.position.set(0, 20.5, 0);
    scene.add(roundedBox);

    // Name Title
    NameTitleMesh = createPlane(scene, './assets/textimages/NameText1000x200.png', 20, 4, 0, 19.5, 1);
    NameTitleMesh.name = 'NameTitle';

    NameTitleSelectedMesh = createPlane(scene, './assets/textimages/SubTitle2Selected65x130.png', 2, 4, 12, 19.5, 1);

    // ---- Menu1 RIGHTMENU ------------------------------------------------
    var rightMenuBoxGeometry = new THREE.BoxGeometry(25, 35, 1, 5, 1, 5);
    var rightMenuBox = new THREE.Mesh(rightMenuBoxGeometry, new THREE.MeshBasicMaterial({ color: color, transparent: true, opacity: 0.3 }));
    rightMenuBox.position.set(27.5, -2.5, 0);
    scene.add(rightMenuBox);

    // FaceImage
    FaceImageMesh = createPlane(scene, './assets/images/Face.jpg', 10, 10, 26, 7, 1);

    // Bio Image
    BioImageMesh = createPlane(scene, './assets/textimages/BioText2000x2000.png', 20, 20, 26, -8, 1);

    // Bio Title
    BioTitleTextMesh = createPlane(scene, './assets/textimages/BioTitleText1000x200.png', 15, 3, 23, 13, 1);

    // --- Menu2 LEFTMENU -------------------------------------------------
    var leftMenuBox = new THREE.Mesh(rightMenuBoxGeometry, new THREE.MeshBasicMaterial({ color: color, transparent: true, opacity: 0.3 }));
    leftMenuBox.position.set(-27.5, -2.5, 0);
    scene.add(leftMenuBox);

    // Projects Text
    createPlane(scene, './assets/textimages/ProjectsText1000x200.png', 15, 3, -29, 13, 1);

    // Unreal Engine text
    createPlane(scene, './assets/textimages/UnrealEngineText800x160.png', 12, 2.4, -30.5, 10, 1);

    // Bee algorithm sim text
    BeeAlgorithmSimTextMesh = createPlane(scene, './assets/textimages/BeeAlgorithmSimText800x130.png', 12, 2.4, -30, 8, 1);
    BeeAlgorithmSimTextMesh.name = 'BeeAlgoBtn';

    BeeAlgorithmSimSelectedMesh = createPlane(scene, './assets/textimages/SubTitle2Selected65x130.png', 1.2, 2.4, -23, 8, 1);
    BeeAlgorithmSimSelectedMesh.visible = false;

    BeeAlgorithmSimTitleTextMesh = createPlane(scene, './assets/textimages/BeeAlgorithmSimTitleText1400x200.png', 21, 3, 26, 13, 1);
    BeeAlgorithmSimTitleTextMesh.visible = false;

    BeeAlgorithmDescTextMesh = createPlane(scene, './assets/textimages/BeeAlgorithmSimDescText2000x2000.png', 20, 20, 26, 1, 1);
    BeeAlgorithmDescTextMesh.visible = false;

    // BearPit text
    BearPitTextMesh = createPlane(scene, './assets/textimages/BearPitText800x130.png', 12, 2.4, -30, 6.25, 1);
    BearPitTextMesh.name = 'BearPitBtn';

    BearPitSelectedMesh = createPlane(scene, './assets/textimages/SubTitle2Selected65x130.png', 1.2, 2.4, -29.25, 6.25, 1);
    BearPitSelectedMesh.visible = false;

    BearPitTitleTextMesh = createPlane(scene, './assets/textimages/BearPitTitleText1400x200.png', 21, 3, 26, 13, 1);
    BearPitTitleTextMesh.visible = false;

    BearPitDescTextMesh = createPlane(scene, './assets/textimages/BearPitDescText2000x2000.png', 20, 20, 26, 1, 1);
    BearPitDescTextMesh.visible = false;

    // Unity Text
    createPlane(scene, './assets/textimages/UnityText800x160.png', 12, 2.4, -30.5, 4, 1);

    // AR Museum App
    ARMuseumAppTextMesh = createPlane(scene, './assets/textimages/ARMuseumAppText800x130.png', 12, 2.4, -30, 2, 1);
    ARMuseumAppTextMesh.name = 'ARMuseumAppBtn';

    ARMuseumAppSelectedMesh = createPlane(scene, './assets/textimages/SubTitle2Selected65x130.png', 1.2, 2.4, -25.5, 2, 1);
    ARMuseumAppSelectedMesh.visible = false;

    ARMuseumAppTitleTextMesh = createPlane(scene, './assets/textimages/ARMuseumAppTitleText1400x200.png', 21, 3, 26, 13, 1);
    ARMuseumAppTitleTextMesh.visible = false;

    MuseumARAppDescTextMesh = createPlane(scene, './assets/textimages/MuseumARAppDescText2000x1400.png', 20, 14, 26, 4, 1);
    MuseumARAppDescTextMesh.visible = false;

    // Theatrix VR
    TheatrixVRTextMesh = createPlane(scene, './assets/textimages/TheatrixVRText800x130.png', 12, 2.4, -30, 0.25, 1);
    TheatrixVRTextMesh.name = 'TheatrixVRBtn';

    TheatrixSelectedMesh = createPlane(scene, './assets/textimages/SubTitle2Selected65x130.png', 1.2, 2.4, -26.5, 0.25, 1);
    TheatrixSelectedMesh.visible = false;

    TheatrixVRTitleTextMesh = createPlane(scene, './assets/textimages/TheatrixTitleText1400x200.png', 21, 3, 26, 13, 1);
    TheatrixVRTitleTextMesh.visible = false;

    TheatrixVRDescTextMesh = createPlane(scene, './assets/textimages/TheatrixVRDescText2000x1400.png', 20, 14, 26, 4, 1);
    TheatrixVRDescTextMesh.visible = false;

    // --- Links Section ---
    LinkTextMesh = createPlane(scene, './assets/textimages/LinkText800x160.png', 12, 2.4, 21.5, -17, 1);
    LinkTextMesh.visible = false;
    LinkTextMesh.name = 'Link';

    YouTubeTextMesh = createPlane(scene, './assets/textimages/YouTubeText800x160.png', 12, 2.4, 21.5, -15, 1);
    YouTubeTextMesh.visible = false;
    YouTubeTextMesh.name = 'YouTubeLink';

    Date2023TextMesh = createPlane(scene, './assets/textimages/Date2023Text320x160.png', 4.8, 2.4, 35, -17, 1);
    Date2023TextMesh.visible = false;

    Date2025TextMesh = createPlane(scene, './assets/textimages/Date2025Text320x160.png', 4.8, 2.4, 35, -17, 1);
    Date2025TextMesh.visible = false;

    // LinkedIn and Github
    LinkedInTextMesh = createPlane(scene, './assets/textimages/LinkedInText800x130.png', 12, 2.4, -30, -14.5, 1);
    LinkedInTextMesh.name = 'LinkedInBtn';

    GithubTextMesh = createPlane(scene, './assets/textimages/GithubText800x130.png', 12, 2.4, -30, -16.5, 1);
    GithubTextMesh.name = 'GithubBtn';

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