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

const container = document.querySelector(".container");

const canvas = renderer.domElement;

canvas.style.display="block";
canvas.style.margin="20px auto";
canvas.style.cursor="pointer";

const oldGlobe=document.querySelector(".globe");

oldGlobe.replaceWith(canvas);

const geometry=new THREE.SphereGeometry(1,64,64);

const textureLoader = new THREE.TextureLoader();

const earthTexture = textureLoader.load("physiotexture.jpg");

const material = new THREE.MeshPhysicalMaterial({

    map: earthTexture,

    transmission: 0.1,

    thickness: 0.5,

    roughness: 0.8,

    metalness: 0.1,

    clearcoat: 0.3,

    clearcoatRoughness: 0.2

});
const globe=new THREE.Mesh(geometry,material);

scene.add(globe);
const glowGeometry = new THREE.SphereGeometry(1.08,64,64);

const glowMaterial = new THREE.MeshBasicMaterial({

    color:0x33ccff,

    transparent:true,

    opacity:0.18,

    side:THREE.BackSide

});

const glow = new THREE.Mesh(glowGeometry,glowMaterial);

scene.add(glow);

const light1=new THREE.PointLight(0xffffff,3);

light1.position.set(3,3,3);

scene.add(light1);

const light2=new THREE.AmbientLight(0x5599ff,2);

scene.add(light2);

function animate(){

requestAnimationFrame(animate);

globe.rotation.y += 0.005;
glow.rotation.y += 0.005;
renderer.render(scene,camera);

}

animate();
