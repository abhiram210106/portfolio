import React, { useEffect, useRef, useState } from 'react';

const checkIsTouchDevice = (): boolean => {
  if (typeof window === 'undefined') return true;
  const isFinePointer = window.matchMedia('(pointer: fine)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return !isFinePointer || prefersReducedMotion;
};

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const isVisibleRef = useRef<boolean>(false);

  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(() => checkIsTouchDevice());
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isTextInput, setIsTextInput] = useState<boolean>(false);

  useEffect(() => {
    // If not a fine pointer device, disable custom cursor completely
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsTouchDevice(!e.matches);
    };
    mediaQuery.addEventListener('change', handleMediaChange);

    if (!mediaQuery.matches) {
      document.body.classList.remove('custom-cursor-active');
      return () => mediaQuery.removeEventListener('change', handleMediaChange);
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    let animId: number;

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') {
        isVisibleRef.current = false;
        setIsVisible(false);
        document.body.classList.remove('custom-cursor-active');
        return;
      }

      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
        document.body.classList.add('custom-cursor-active');
      }

      // Immediate sharp positioning for the central dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }

      // Check if hovering interactive elements or text inputs
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest(
            'a, button, [role="button"], input[type="submit"], input[type="button"], .group-one, [data-cursor="hover"]'
          )
        );
        setIsHovered(isInteractive);

        const isInput = Boolean(
          target.closest('input:not([type="submit"]):not([type="button"]), textarea, [contenteditable="true"]')
        );
        setIsTextInput(isInput);
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === 'touch') {
        isVisibleRef.current = false;
        setIsVisible(false);
        document.body.classList.remove('custom-cursor-active');
        return;
      }
      setIsClicked(true);
    };

    const onPointerUp = () => setIsClicked(false);

    const onMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
      document.body.classList.remove('custom-cursor-active');
    };

    const onMouseEnter = () => {
      isVisibleRef.current = true;
      setIsVisible(true);
      document.body.classList.add('custom-cursor-active');
    };

    // Smooth trailing animation loop for the outer ring using lerp (0.2 factor)
    const render = () => {
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      animId = requestAnimationFrame(render);
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('pointerup', onPointerUp, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      mediaQuery.removeEventListener('change', handleMediaChange);
      cancelAnimationFrame(animId);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
        isVisible && !isTextInput ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Outer trailing ring with subtle blue-white glow & dual-contrast shadow */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none rounded-full border border-sky-400/70 shadow-[0_0_12px_rgba(56,189,248,0.35),0_0_1px_rgba(0,0,0,0.5)] transition-all ease-out ${
          isHovered
            ? 'w-14 h-14 bg-blue-500/15 border-blue-300 scale-100 duration-200 shadow-[0_0_20px_rgba(59,130,246,0.45),inset_0_0_10px_rgba(59,130,246,0.2)]'
            : isClicked
            ? 'w-8 h-8 bg-blue-500/25 border-blue-400 scale-90 duration-100'
            : 'w-9 h-9 bg-transparent scale-100 duration-200'
        }`}
      />

      {/* Sharp central dot with subtle blue-white glow and dark contrast outline */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 pointer-events-none rounded-full bg-blue-400 shadow-[0_0_8px_rgba(255,255,255,0.95)] ring-1 ring-neutral-900/50 transition-transform ease-out ${
          isHovered
            ? 'w-2 h-2 scale-150 duration-150'
            : isClicked
            ? 'w-1.5 h-1.5 scale-75 duration-75'
            : 'w-2 h-2 scale-100 duration-150'
        }`}
      />
    </div>
  );
};
