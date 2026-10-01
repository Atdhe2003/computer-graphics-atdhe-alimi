import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000
);

camera.position.z = 3;

const cubeGeometry = new THREE.BoxGeometry(4, 1, 1);
const cubeMaterial = new THREE.MeshStandardMaterial({color: 0x00ff00});
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

// const sphereGeometry = new THREE.SphereGeometry( 1, 32, 16 );
// const sphereMaterial = new THREE.MeshStandardMaterial( { color: 0xfff000 } );
// const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
// sphere.position.x=8
// scene.add( sphere );

const coneGeometry = new THREE.ConeGeometry( 5, 20, 2 );
const coneMaterial = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const cone = new THREE.Mesh(coneGeometry, coneMaterial );
cone.position.y=10.5

scene.add( cone );



  
const light = new THREE.AmbientLight(0xffffff, 0.6); 
scene.add(light);

const PointLightlight = new THREE.PointLight( 0xffffff, 1, 100 );
light.position.set( 0, 0, 3 );
scene.add( light );


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene').appendChild(renderer.domElement);


const controls = new OrbitControls( camera, renderer.domElement );


function animate() {
    requestAnimationFrame(animate);
    // cube.rotation.y += 0.02;
    // cube.rotation.x += 0.02;
    renderer.render(scene, camera);
}
animate();


