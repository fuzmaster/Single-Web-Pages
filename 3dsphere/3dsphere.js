// Create a WebGL renderer and append it to the body
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas') });
renderer.setSize(window.innerWidth, window.innerHeight);

// Create a 3D camera with a 75 degree field of view, aspect ratio based on window size, and near/far planes
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// Move the camera 5 units back from the origin along the z-axis
camera.position.z = 5;

// Create a new Three.js scene
const scene = new THREE.Scene();

// Create a sphere geometry with a radius of 1 and 32 segments for both horizontal and vertical subdivision
const geometry = new THREE.SphereGeometry(1, 32, 32);
// Load a bump map texture from an image file
const textureLoader = new THREE.TextureLoader();
const bumpMap = textureLoader.load('https://threejs.org/examples/textures/brick_bump.jpg');
// Create a material with the bump map texture and shading
const material = new THREE.MeshPhongMaterial({
    map: null,
    bumpMap: bumpMap,
    bumpScale: 0.05,
    shininess: 20
});
// Create a mesh from the geometry and material
const sphere = new THREE.Mesh(geometry, material);
// Add the mesh to the scene
scene.add(sphere);

// Add some lights to the scene
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 0, 10);
scene.add(light);

// Define variables to hold the mouse position and rotation of the sphere
let isDragging = false;
let previousMousePosition = {
    x: 0,
    y: 0
};

// Add event listeners for the mouse down, move, and up events
document.addEventListener('mousedown', onMouseDown);
document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseup', onMouseUp);

// Define a function to handle the mouse down event
function onMouseDown(event) {
    isDragging = true;
}

// Define a function to handle the mouse move event
function onMouseMove(event) {
    // Only rotate the sphere if the mouse is being dragged
    if (isDragging) {
        const deltaMove = {
            x: event.offsetX - previousMousePosition.x,
            y: event.offsetY - previousMousePosition.y
        };

        // Normalize the mouse position to [-1, 1]
        const mousePosition = {
            x: (event.clientX / window.innerWidth) * 2 - 1,
            y: -(event.clientY / window.innerHeight) * 2 + 1
        };

        // Set the rotation of the sphere based on the mouse position and delta movement
        sphere.rotation.y += deltaMove.x * 0.01;
        sphere.rotation.x += deltaMove.y * 0.01;

        previousMousePosition = {
            x: event.offsetX,
            y: event.offsetY
        };
    }
}

// Define a function to handle the mouse up event
function onMouseUp(event) {
    isDragging = false;
}

// Define an animation function that gets called recursively using requestAnimationFrame()
function animate() {
    requestAnimationFrame(animate);

    // Render the scene with the camera using the WebGL renderer
    renderer.render(scene, camera);
}
// Call the animation function to start the animation loop
animate();
