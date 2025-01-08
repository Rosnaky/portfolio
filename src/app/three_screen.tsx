import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const ThreeBackground = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!mountRef.current || !canvasRef.current) return;

        const canvas = canvasRef.current;

        // Scene setup
        const scene = new THREE.Scene();
        const loader = new GLTFLoader();

        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        };

        loader.load('/utils/black-hole.glb', function(gltf) {
            let model = gltf.scene;

            model.position.set(0, -4, -0.5);
            model.scale.set(0.2, 0.2, 0.2);
            model.rotation.x = Math.PI * (10/180);
            // model.rotation.z = Math.PI * (-15/180);

            scene.add(model);

        }, undefined, function (error) {
            console.error(error);
        }) 

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const mesh = new THREE.Mesh(geometry, material);
        // scene.add(mesh);
        // TODO: Resize when window changes size
        const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 2000);
        camera.position.z = 3;
        camera.position.y = 5;
        scene.add(camera);

        const light = new THREE.AmbientLight(0xffffff, 1); // Soft white light
        scene.add(light);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(10, 10, 10);
        // scene.add(directionalLight);


        const controls = new OrbitControls(camera, canvas);
        controls.enableDamping = true;
        controls.enablePan = false;
        controls.enableZoom = false;

        // Restrict vertical rotation
        // controls.maxPolarAngle = Math.PI / 2;
        // controls.minPolarAngle = Math.PI / 2;

        const axesHelper = new THREE.AxesHelper(5); // Size of the axes
        scene.add(axesHelper);
        const gridHelper = new THREE.GridHelper(10, 10); // Size of the grid and number of divisions
        scene.add(gridHelper);

        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true
        });
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 1);
        
        const radius = 7;
        const maxSpeed = 0.005;
        let speed = 0;
        const acceleration = maxSpeed/50;
        let angle = 0;
        let isUserInteracting = false;
        const y_offset = 3;

        const lockAngle = Math.atan(radius/y_offset);
        controls.minPolarAngle = (lockAngle);
        controls.maxPolarAngle = (lockAngle);

        controls.addEventListener('start', () => {
            isUserInteracting = true;  // User started interacting with the controls
        });
            
        controls.addEventListener('end', () => {
            isUserInteracting = false; // User stopped interacting with the controls
            speed = 0;
            angle = Math.atan2(camera.position.z, camera.position.x);
        });

        const animate = () => {            
            requestAnimationFrame(animate);
            
            if (!isUserInteracting) {

                if (speed < maxSpeed) {
                    speed += acceleration;
                }

                angle += speed;
    
                const x = radius * Math.cos(angle);
                const z = radius * Math.sin(angle);
    
                camera.position.set(x, y_offset, z);
                camera.lookAt(0, 0, 0);
            }

            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            renderer.dispose();
            controls.dispose();
        };
    }, []);

    return (
        <div>
            <div ref={mountRef} className="absolute w-full h-full overflow-hidden">
                <canvas ref={canvasRef}/>
            </div>
        </div>
    );
};

export default ThreeBackground;