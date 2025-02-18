/* eslint-disable @typescript-eslint/no-unused-vars */
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

        const planetOrbitModels: ModelEntry[] = [];
        const lunarOrbitModels: MoonModelEntry[] = [];

        interface ModelEntry {
            model: THREE.Object3D;  
            xRadius: number;         
            yRadius: number;
            zRadius: number;
            speed: number;          
            angle: number;
            rotation: THREE.Vector3; 
            pos_offset: THREE.Vector3;   
        }

        interface MoonModelEntry extends ModelEntry {
            parentModelIndex: number;
        }

        function addModelToOrbit(model: THREE.Object3D, radius: THREE.Vector3, speed: number, rotation: THREE.Vector3, pos_offset? : THREE.Vector3) {
            planetOrbitModels.push({
                model: model, 
                xRadius: radius.x,
                yRadius: radius.y,
                zRadius: radius.z,
                speed: speed, 
                angle: 0 ,
                rotation: rotation,
                pos_offset: pos_offset ?? new THREE.Vector3(0, 0, 0),
            });
        
            scene.add(model); // Add the model to the scene
        }

        function AddMoonToOrbit(
            model: THREE.Object3D,
            radius: THREE.Vector3,
            speed: number,
            rotation: THREE.Vector3,
            parentModelIndex: number,
        ) {
            lunarOrbitModels.push({
                model: model,
                xRadius: radius.x,
                yRadius: radius.y,
                zRadius: radius.z,
                speed: speed,
                angle: 0,
                rotation: rotation,
                pos_offset: new THREE.Vector3(0, 0, 0),
                parentModelIndex: parentModelIndex
            });
        }

        const origin = new THREE.Vector3(0, -4, -0.5);

        // Black hole
        loader.load('/utils/black-hole.glb', function(gltf) {
            // eslint-disable-next-line prefer-const
            let model = gltf.scene;

            model.position.set(origin.x, origin.y, origin.z);
            model.scale.set(0.2, 0.2, 0.2);
            model.rotation.x = Math.PI * (10/180);
            // model.rotation.z = Math.PI * (-15/180);

            addModelToOrbit(model, new THREE.Vector3(0, 0, 0), 0, new THREE.Vector3(0, 0.001, 0), origin);

            scene.add(model);

        }, undefined, function (error) {
            console.error(error);
        }) 

        // Saturn planet
        loader.load('/utils/saturn-planet.glb', function(gltf) {
            // eslint-disable-next-line prefer-const
            let model = gltf.scene;

            model.position.set(4, 1.25, -0.5);
            model.scale.set(0.15, 0.15, 0.15);
            // model.rotation.x = Math.PI * (10/180);
            // model.rotation.z = Math.PI * (-15/180);

            addModelToOrbit(model, model.position, 0.002, new THREE.Vector3(0.003, 0.001, 0.0005));

            scene.add(model);

        }, undefined, function (error) {
            console.error(error);
        }) 

        // Colourful saturn planet
        loader.load('/utils/colourful-saturn-planet.glb', function(gltf) {
            // eslint-disable-next-line prefer-const
            let model = gltf.scene;

            model.position.set(-4, 3, -3);
            model.scale.set(0.0002, 0.0002, 0.0002);
            // model.rotation.x = Math.PI * (10/180);
            // model.rotation.z = Math.PI * (-15/180);

            addModelToOrbit(model, model.position, 0.0008, new THREE.Vector3(0.007, 0.001, 0.0005));

            scene.add(model);

        }, undefined, function (error) {
            console.error(error);
        }) 

        // Earth planet
        loader.load('/utils/earth.glb', function(gltf) {
            // eslint-disable-next-line prefer-const
            let model = gltf.scene;

            model.position.set(-1, 2.5, 3);
            model.scale.set(0.15, 0.15, 0.15);
            // model.rotation.x = Math.PI * (10/180);
            // model.rotation.z = Math.PI * (-15/180);

            addModelToOrbit(model, model.position, 0.0012, new THREE.Vector3(0.001, 0.005, 0.0005));

            scene.add(model);

        }, undefined, function (error) {
            console.error(error);
        }) 

        // Neptune planet
        loader.load('/utils/neptune-planet.glb', function(gltf) {
            // eslint-disable-next-line prefer-const
            let model = gltf.scene;

            model.position.set(6, 4, 5);
            model.scale.set(0.02, 0.02, 0.02);
            // model.rotation.x = Math.PI * (10/180);
            // model.rotation.z = Math.PI * (-15/180);

            addModelToOrbit(model, model.position, 0.0012, new THREE.Vector3(-0.001, 0.005, -0.0005));

            scene.add(model);

        }, undefined, function (error) {
            console.error(error);
        }) 
        
        const numPlanets = 4;
        const numMoons = 4;
        const minPosThreshold = 0.5;
        const maxPosThreshold = 1.5;
        const minPlanetSpeed = 0.0005;
        const maxPlanetSpeed = 0.01;

        for (let i = 0; i < numMoons; i++) {
            // Moon planet
            loader.load('/utils/moon.glb', function(gltf) {
                // eslint-disable-next-line prefer-const
                let model = gltf.scene;


                model.position.set(
                    Math.random()*(maxPosThreshold-minPosThreshold) + minPosThreshold, 
                    Math.random()*(maxPosThreshold-minPosThreshold) + minPosThreshold, 
                    Math.random()*(maxPosThreshold-minPosThreshold) + minPosThreshold
                );
                
                const size = (0.002-0.0005)*Math.random() + 0.0005;
                model.scale.set(size, size, size);
                // model.rotation.x = Math.PI * (10/180);
                // model.rotation.z = Math.PI * (-15/180);

                const parentIndex = Math.floor(Math.random()*numPlanets);

                AddMoonToOrbit(model, model.position, Math.random()*(maxPlanetSpeed-minPlanetSpeed) + minPlanetSpeed, new THREE.Vector3(0.001, 0.005, 0.0005), parentIndex);

                scene.add(model);

            }, undefined, function (error) {
                console.error(error);
            }) 
        }

        // Stars
        function createStar(x: number, y: number, z: number): THREE.Mesh {
            const geometry = new THREE.SphereGeometry(0.005, 32); // Circle with radius 0.1
            const material = new THREE.MeshBasicMaterial({ color: 0xffffff }); // White color
            const circle = new THREE.Mesh(geometry, material);
        
            circle.position.set(x, y, z);
            return circle;
        }
        
        const starCount = 600;
        const maxX = 6;
        const maxY = 3.5;
        const maxZ = 6;


        for (let i = 0; i < starCount; i++) {
            const x = THREE.MathUtils.randFloat(-maxX, maxX);
            const y = THREE.MathUtils.randFloat(-maxY, maxY);
            const z = THREE.MathUtils.randFloat(-maxZ, maxZ);
            
            const star = createStar(x, y, z);

            scene.add(star);
        }



        // const geometry = new THREE.BoxGeometry(1, 1, 1);
        // const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        // const mesh = new THREE.Mesh(geometry, material);
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

        // const axesHelper = new THREE.AxesHelper(5); // Size of the axes
        // scene.add(axesHelper);
        // const gridHelper = new THREE.GridHelper(10, 10); // Size of the grid and number of divisions
        // scene.add(gridHelper);

        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true
        });
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 1);
        
        const radius = 8.5;
        const maxSpeed = 0.003;
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

            planetOrbitModels.forEach((entry) => {
                const { model, xRadius, yRadius, zRadius, speed, rotation, pos_offset } = entry;
                
                entry.angle += speed;

                model.position.x = xRadius * Math.cos(entry.angle) + pos_offset.x;
                model.position.y = yRadius * Math.sin(entry.angle) + pos_offset.y;
                model.position.z = zRadius * Math.cos(entry.angle) + pos_offset.z;

                model.rotation.x += rotation.x;
                model.rotation.y += rotation.y;
                model.rotation.z += rotation.z;

            });

            lunarOrbitModels.forEach((entry) => {
                const { model, xRadius, yRadius, zRadius, speed, rotation, parentModelIndex } = entry;
                entry.angle += speed;
                
                if (planetOrbitModels[parentModelIndex].pos_offset.x == 0 &&
                    planetOrbitModels[parentModelIndex].pos_offset.y == -4 &&
                    planetOrbitModels[parentModelIndex].pos_offset.z == -0.5) {
                    return;
                }
                const pos_offset = planetOrbitModels[parentModelIndex].model.position;

                model.position.x = xRadius * Math.cos(entry.angle) + pos_offset.x;
                model.position.y = yRadius * Math.sin(entry.angle) + pos_offset.y;
                model.position.z = zRadius * Math.cos(entry.angle) + pos_offset.z;

                model.rotation.x += rotation.x;
                model.rotation.y += rotation.y;
                model.rotation.z += rotation.z;
            });
            
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
        <>
            <div className="-z-10">
                <div ref={mountRef} className="">
                    <canvas ref={canvasRef}/>
                </div>
            </div>    
        </>
    );
};

export default ThreeBackground;