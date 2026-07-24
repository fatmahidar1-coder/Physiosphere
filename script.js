const container = document.getElementById("globe-container");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
45,
1,
0.1,
1000
);

camera.position.z = 3;

const renderer = new THREE.WebGLRenderer({
alpha: true,
antialias: true
});

renderer.setSize(340,340);
renderer.setPixelRatio(window.devicePixelRatio);

container.appendChild(renderer.domElement);

// Texture
const texture = new THREE.TextureLoader().load("physio-texture.jpg");

// Globe
const geometry = new THREE.SphereGeometry(1,128,128);

const material = new THREE.MeshStandardMaterial({
map: texture,
roughness: 0.6,
metalness: 0.15
});

const globe = new THREE.Mesh(geometry, material);
scene.add(globe);

// Lights
const light1 = new THREE.DirectionalLight(0xffffff,2.5);
light1.position.set(4,2,3);
scene.add(light1);

const light2 = new THREE.DirectionalLight(0x55ccff,1);
light2.position.set(-3,-2,-3);
scene.add(light2);

scene.add(new THREE.AmbientLight(0xffffff,1));

// Animation
function animate(){

requestAnimationFrame(animate);

globe.rotation.y += 0.004;

renderer.render(scene,camera);

}

animate();

// Click
renderer.domElement.onclick=function(){

window.location.href="courses.html";

};
