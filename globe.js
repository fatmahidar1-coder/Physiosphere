const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
45,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({
alpha:true,
antialias:true
});

renderer.setSize(window.innerWidth,500);

document.getElementById("scene").appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(2,64,64);

const material = new THREE.MeshBasicMaterial({
color:0x1ea7ff,
wireframe:true
});

const globe = new THREE.Mesh(geometry,material);

scene.add(globe);

camera.position.z=5;

function animate(){

requestAnimationFrame(animate);

globe.rotation.y+=0.003;

renderer.render(scene,camera);

}

animate();
