import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

// 3D Simplex Noise generator matching the exact reference implementation from akshatmittal.com
const F3 = 1.0 / 3.0;
const G3 = 1.0 / 6.0;

function buildSimplexNoise(random = Math.random) {
  const p = new Uint8Array(256);
  for (let i = 0; i < 256; i++) p[i] = i;
  for (let i = 0; i < 255; i++) {
    const r = i + ~~(random() * (256 - i));
    const temp = p[i];
    p[i] = p[r];
    p[r] = temp;
  }
  const perm = new Uint8Array(512);
  const permMod12 = new Uint8Array(512);
  for (let i = 0; i < 512; i++) {
    perm[i] = p[i & 255];
    permMod12[i] = perm[i] % 12;
  }

  // 12 3D Gradient vectors
  const grad3 = new Float32Array([
    1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0,
    1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1,
    0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1,
  ]);

  return function noise3D(xin: number, yin: number, zin: number): number {
    let n0: number, n1: number, n2: number, n3: number;

    const s = (xin + yin + zin) * F3;
    const i = Math.floor(xin + s);
    const j = Math.floor(yin + s);
    const k = Math.floor(zin + s);
    const t = (i + j + k) * G3;
    const X0 = i - t;
    const Y0 = j - t;
    const Z0 = k - t;
    const x0 = xin - X0;
    const y0 = yin - Y0;
    const z0 = zin - Z0;

    let i1: number, j1: number, k1: number;
    let i2: number, j2: number, k2: number;
    if (x0 >= y0) {
      if (y0 >= z0) {
        i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 1; k2 = 0;
      } else if (x0 >= z0) {
        i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 0; k2 = 1;
      } else {
        i1 = 0; j1 = 0; k1 = 1; i2 = 1; j2 = 0; k2 = 1;
      }
    } else {
      if (y0 < z0) {
        i1 = 0; j1 = 0; k1 = 1; i2 = 0; j2 = 1; k2 = 1;
      } else if (x0 < z0) {
        i1 = 0; j1 = 1; k1 = 0; i2 = 0; j2 = 1; k2 = 1;
      } else {
        i1 = 0; j1 = 1; k1 = 0; i2 = 1; j2 = 1; k2 = 0;
      }
    }

    const x1 = x0 - i1 + G3;
    const y1 = y0 - j1 + G3;
    const z1 = z0 - k1 + G3;
    const x2 = x0 - i2 + 2.0 * G3;
    const y2 = y0 - j2 + 2.0 * G3;
    const z2 = z0 - k2 + 2.0 * G3;
    const x3 = x0 - 1.0 + 3.0 * G3;
    const y3 = y0 - 1.0 + 3.0 * G3;
    const z3 = z0 - 1.0 + 3.0 * G3;

    const ii = i & 255;
    const jj = j & 255;
    const kk = k & 255;

    let t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
    if (t0 < 0) n0 = 0.0;
    else {
      const gi0 = permMod12[ii + perm[jj + perm[kk]]] * 3;
      t0 *= t0;
      n0 = t0 * t0 * (grad3[gi0] * x0 + grad3[gi0 + 1] * y0 + grad3[gi0 + 2] * z0);
    }

    let t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
    if (t1 < 0) n1 = 0.0;
    else {
      const gi1 = permMod12[ii + i1 + perm[jj + j1 + perm[kk + k1]]] * 3;
      t1 *= t1;
      n1 = t1 * t1 * (grad3[gi1] * x1 + grad3[gi1 + 1] * y1 + grad3[gi1 + 2] * z1);
    }

    let t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
    if (t2 < 0) n2 = 0.0;
    else {
      const gi2 = permMod12[ii + i2 + perm[jj + j2 + perm[kk + k2]]] * 3;
      t2 *= t2;
      n2 = t2 * t2 * (grad3[gi2] * x2 + grad3[gi2 + 1] * y2 + grad3[gi2 + 2] * z2);
    }

    let t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
    if (t3 < 0) n3 = 0.0;
    else {
      const gi3 = permMod12[ii + 1 + perm[jj + 1 + perm[kk + 1]]] * 3;
      t3 *= t3;
      n3 = t3 * t3 * (grad3[gi3] * x3 + grad3[gi3 + 1] * y3 + grad3[gi3 + 2] * z3);
    }

    return 32.0 * (n0 + n1 + n2 + n3);
  };
}

const noise3D = buildSimplexNoise();

function checkWebGLSupport(): boolean {
  if (typeof window === 'undefined') return true;
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl2') || canvas.getContext('webgl'))
    );
  } catch {
    return false;
  }
}

export const BlobAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [webglSupported] = useState<boolean>(checkWebGLSupport);

  useEffect(() => {
    if (!webglSupported) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        context: (canvas.getContext('webgl2') || canvas.getContext('webgl')) as WebGLRenderingContext,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 3.25;

    // Adaptive vertex density for guaranteed 60fps/120fps across all screens
    const screenW = window.innerWidth;
    const segments = screenW < 400 ? 50 : screenW < 768 ? 64 : screenW < 1200 ? 80 : 96;
    const geometry = new THREE.SphereGeometry(0.8, segments, segments);

    // Deep neutral dark material matching the reference site (color: 0x171717, shininess: 10)
    const material = new THREE.MeshPhongMaterial({
      color: 0x171717,
      shininess: 10,
      specular: 0x222222,
    });

    // 4 Directional lights + 1 Ambient light matching reference
    const light1 = new THREE.DirectionalLight(0xffffff, 1.0);
    light1.position.set(0, 500, 200);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xffffff, 0.75);
    light2.position.set(0, -500, 200);
    scene.add(light2);

    const light3 = new THREE.DirectionalLight(0xffffff, 0.25);
    light3.position.set(0, 0, 400);
    scene.add(light3);

    const light4 = new THREE.DirectionalLight(0xffffff, 0.55);
    light4.position.set(0, 0, 100);
    scene.add(light4);

    const ambientLight = new THREE.AmbientLight(0x171717, 1);
    scene.add(ambientLight);

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Cache base normalized spherical positions for fast deformation
    const positionAttr = geometry.attributes.position;
    const vertexCount = positionAttr.count;
    const baseCoords = new Float32Array(vertexCount * 3);
    const tempVec = new THREE.Vector3();

    for (let i = 0; i < vertexCount; i++) {
      tempVec.fromBufferAttribute(positionAttr, i);
      tempVec.normalize();
      baseCoords[i * 3] = tempVec.x;
      baseCoords[i * 3 + 1] = tempVec.y;
      baseCoords[i * 3 + 2] = tempVec.z;
    }

    // Responsive clamp sizing that works beautifully on fold phones, mobile, tablets, and 4K displays
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const maxDim = Math.min(w * 0.85, h * 0.68, 620);
      const size = Math.max(maxDim, 210);
      renderer.setSize(size, size, false);
      camera.updateProjectionMatrix();
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Smooth mouse parallax tilt
    let targetRotationX = 0;
    let targetRotationY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) - 0.5;
      const normY = (e.clientY / window.innerHeight) - 0.5;
      targetRotationY = normX * 0.35;
      targetRotationX = normY * 0.35;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Optimization: Pause rendering when scrolled past hero or when tab is hidden
    let isVisible = true;
    let isTabVisible = !document.hidden;

    const handleScroll = () => {
      isVisible = window.scrollY < window.innerHeight * 1.05;
    };
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Deformation & Render loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible || !isTabVisible) return;

      // Noise time step: 0.00001 * Date.now() * 45 * 0.729
      const speed = prefersReducedMotion ? 0 : 0.00001 * Date.now() * 45 * 0.729;

      for (let i = 0; i < vertexCount; i++) {
        const bx = baseCoords[i * 3];
        const by = baseCoords[i * 3 + 1];
        const bz = baseCoords[i * 3 + 2];

        // Reference formula: normalize().multiplyScalar(1 + 0.2 * noise(0.4275 * x, 0.4275 * y, 0.4275 * z + e))
        const noiseVal = noise3D(0.4275 * bx, 0.4275 * by, 0.4275 * bz + speed);
        const scalar = 1.0 + 0.2 * noiseVal;

        positionAttr.setXYZ(i, bx * scalar, by * scalar, bz * scalar);
      }

      positionAttr.needsUpdate = true;
      geometry.computeVertexNormals();

      // Smooth damped rotation
      mesh.rotation.y += (targetRotationY - mesh.rotation.y) * 0.05;
      mesh.rotation.x += (targetRotationX - mesh.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [webglSupported]);

  if (!webglSupported) {
    // Elegant fallback if WebGL is unavailable
    return (
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform z-10 w-72 h-72 rounded-full bg-radial from-neutral-800 to-neutral-900 border border-neutral-700/50 blur-sm opacity-80" />
    );
  }

  return (
    <div className="pointer-events-none select-none">
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform z-10 transition-all duration-1000 ease-out pointer-events-none"
      />
    </div>
  );
};
