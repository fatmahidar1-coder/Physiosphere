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
