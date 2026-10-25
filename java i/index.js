import * as THREE from 'three'

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x8ecae6);

const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000
);

camera.position.set(4, 3, 8);
camera.lookAt(0, 1.5, 0);

const house = new THREE.Group();

const wallGeometry = new THREE.BoxGeometry(4, 2.6, 3.2);
const wallMaterial = new THREE.MeshBasicMaterial({color: 0xe4c99a});
const walls = new THREE.Mesh(wallGeometry, wallMaterial);
walls.position.y = 1.3;
house.add(walls);

const roofGeometry = new THREE.ConeGeometry(2.9, 1.7, 4);
const roofMaterial = new THREE.MeshBasicMaterial({color: 0xa33b3b});
const roof = new THREE.Mesh(roofGeometry, roofMaterial);
roof.position.y = 3.2;
roof.rotation.y = Math.PI / 4;
house.add(roof);

const chimneyGeometry = new THREE.CylinderGeometry(0.22, 0.22, 1.25, 20);
const chimneyMaterial = new THREE.MeshBasicMaterial({color: 0x6d6d6d});
const chimney = new THREE.Mesh(chimneyGeometry, chimneyMaterial);
chimney.position.set(0.95, 3.75, 0.35);
house.add(chimney);

const doorGeometry = new THREE.BoxGeometry(0.75, 1.45, 0.08);
const doorMaterial = new THREE.MeshBasicMaterial({color: 0x6b3e26});
const door = new THREE.Mesh(doorGeometry, doorMaterial);
door.position.set(0, 0.72, 1.64);
house.add(door);

const windowGeometry = new THREE.BoxGeometry(0.7, 0.65, 0.08);
const windowMaterial = new THREE.MeshBasicMaterial({color: 0x7ec8e3});
const leftWindow = new THREE.Mesh(windowGeometry, windowMaterial);
leftWindow.position.set(-1.15, 1.65, 1.64);
house.add(leftWindow);

const rightWindow = new THREE.Mesh(windowGeometry, windowMaterial);
rightWindow.position.set(1.15, 1.65, 1.64);
house.add(rightWindow);

scene.add(house);

const groundGeometry = new THREE.BoxGeometry(16, 0.2, 16);
const groundMaterial = new THREE.MeshBasicMaterial({color: 0x4c9a4a});
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.position.y = -0.1;
scene.add(ground);

const light = new THREE.AmbientLight(0xffffff, 0.6); 
scene.add(light);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene').appendChild(renderer.domElement);


function animate() {
    requestAnimationFrame(animate);
    house.rotation.y += 0.005;
    renderer.render(scene, camera);
}
animate();
