const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
45,
1,
0.1,
1000
);

camera.position.z = 3;

const renderer = new THREE.WebGLRenderer({
alpha:true,
antialias:true
});

renderer.setSize(320,320);

document.getElementById("globe").appendChild(renderer.domElement);
}
const geometry = new THREE.SphereGeometry(1,64,64);

const texture = new THREE.TextureLoader().load("globe.png");

const material = new THREE.MeshStandardMaterial({
map:texture
});

const globe = new THREE.Mesh(
geometry,
material
);

scene.add(globe);
