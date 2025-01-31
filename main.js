import * as THREE from 'three';

var camera, scene, renderer;
var geometry, material, mesh;

function init() {
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.x = 2
  
  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x1b0d72 );
    
  geometry = new THREE.TorusKnotGeometry(20, 1.8, 55, 9, 8, 5);
  material = new THREE.MeshBasicMaterial({ color: 0xfcce30, wireframe: true, wireframeLinewidth: 2});
  mesh = new THREE.Mesh(geometry, material);
  
  scene.add(mesh);
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame( animate );

  mesh.rotation.x = Date.now() * 0.00009;
  mesh.rotation.y = Date.now() * 0.00009;

  renderer.render(scene, camera);
}

init()
animate();
