const container = document.getElementById("globe-container");

// إنشاء المشهد
const scene = new THREE.Scene();

// الكاميرا
const camera = new THREE.PerspectiveCamera(
45,
1,
0.1,
1000
);

camera.position.z = 2.6;

// الرندر
const renderer = new THREE.WebGLRenderer({
alpha: true,
antialias: true
});

renderer.setSize(340, 340);
renderer.setPixelRatio(window.devicePixelRatio);

container.appendChild(renderer.domElement);

// تحميل الـ Texture
const texture = new THREE.TextureLoader().load("physio-texture.jpg");

texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.ClampToEdgeWrapping;

if (THREE.SRGBColorSpace) {
    texture.colorSpace = THREE.SRGBColorSpace;
}

// إنشاء الكرة
const geometry = new THREE.SphereGeometry(
1,
128,
128
);

// خامة الكرة
const material = new THREE.MeshPhongMaterial({
    map: texture,
    shininess: 35
});

// الكرة
const globe = new THREE.Mesh(
geometry,
material
);

scene.add(globe);

// الإضاءة
const light1 = new THREE.DirectionalLight(
0xffffff,
2.2
);

light1.position.set(
5,
3,
5
);

scene.add(light1);

const light2 = new THREE.DirectionalLight(
0x55ccff,
1
);

light2.position.set(
-5,
-3,
-5
);

scene.add(light2);

const ambient = new THREE.AmbientLight(
0xffffff,
1
);

scene.add(ambient);

// الحركة
function animate(){

requestAnimationFrame(animate);

globe.rotation.y += 0.003;

renderer.render(
scene,
camera
);

}

animate();

// الضغط على الكرة
renderer.domElement.addEventListener("click",function(){

window.location.href="courses.html";

});scene.add(globe);

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
