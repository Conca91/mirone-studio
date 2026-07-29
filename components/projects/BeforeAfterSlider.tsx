"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { ChevronsLeftRight } from "lucide-react";

type BeforeAfterSliderProps = {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
};

const MIN_POSITION = 4;
const MAX_POSITION = 96;

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const rect = container.getBoundingClientRect();
    const relativePosition = ((clientX - rect.left) / rect.width) * 100;

    const constrainedPosition = Math.min(
      MAX_POSITION,
      Math.max(MIN_POSITION, relativePosition),
    );

    setPosition(constrainedPosition);
  }, []);

  function handlePointerDown(
    event: React.PointerEvent<HTMLDivElement>,
  ) {
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    updatePosition(event.clientX);
  }

  function handlePointerMove(
    event: React.PointerEvent<HTMLDivElement>,
  ) {
    if (!isDragging) {
      return;
    }

    updatePosition(event.clientX);
  }

  function handlePointerUp(
    event: React.PointerEvent<HTMLDivElement>,
  ) {
    setIsDragging(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLDivElement>,
  ) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();

      setPosition((currentPosition) =>
        Math.max(MIN_POSITION, currentPosition - 2),
      );
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();

      setPosition((currentPosition) =>
        Math.min(MAX_POSITION, currentPosition + 2),
      );
    }

    if (event.key === "Home") {
      event.preventDefault();
      setPosition(MIN_POSITION);
    }

    if (event.key === "End") {
      event.preventDefault();
      setPosition(MAX_POSITION);
    }
  }

  return (
    <div
      ref={containerRef}
      role="slider"
      tabIndex={0}
      aria-label="Confronto tra stato di fatto e progetto"
      aria-valuemin={MIN_POSITION}
      aria-valuemax={MAX_POSITION}
      aria-valuenow={Math.round(position)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => setIsDragging(false)}
      onKeyDown={handleKeyDown}
      className={`group relative aspect-[16/10] w-full touch-none select-none overflow-hidden bg-[#171715] outline-none md:aspect-[16/9] ${
        isDragging ? "cursor-grabbing" : "cursor-ew-resize"
      }`}
    >
      {/* Immagine di progetto */}
      <Image
        src={afterImage}
        alt={afterAlt}
        fill
        sizes="100vw"
        draggable={false}
        className="pointer-events-none object-cover"
      />

      {/* Stato di fatto ritagliato dal cursore */}
      <div
        className="absolute inset-y-0 left-0 z-10 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        {/*
          Questo contenitore mantiene sempre la larghezza complessiva
          dello slider, evitando che la foto si deformi durante il movimento.
        */}
        <div
          className="absolute inset-y-0 left-0 bg-[#171715]"
          style={{
            width: containerRef.current?.clientWidth
              ? `${containerRef.current.clientWidth}px`
              : "100vw",
          }}
        >
          <Image
            src={beforeImage}
            alt={beforeAlt}
            fill
            sizes="100vw"
            draggable={false}
            className="pointer-events-none object-contain object-center grayscale contrast-[1.06] brightness-[0.9]"
            style={{
              transform: "scale(0.82)",
            }}
          />

          <div className="pointer-events-none absolute inset-0 bg-black/5" />
        </div>
      </div>

      {/* Leggera sfumatura generale */}
      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/25 via-transparent to-black/10" />

      {/* Etichetta stato di fatto */}
      <div className="pointer-events-none absolute left-4 top-4 z-30 bg-[#24221f]/75 px-4 py-2.5 text-white backdrop-blur-md md:left-7 md:top-7 md:px-5 md:py-3">
        <span className="text-[9px] uppercase tracking-[0.3em] md:text-[10px]">
          Stato di fatto
        </span>
      </div>

      {/* Etichetta progetto */}
      <div className="pointer-events-none absolute right-4 top-4 z-30 bg-[#24221f]/75 px-4 py-2.5 text-white backdrop-blur-md md:right-7 md:top-7 md:px-5 md:py-3">
        <span className="text-[9px] uppercase tracking-[0.3em] md:text-[10px]">
          Progetto
        </span>
      </div>

      {/* Linea divisoria */}
      <div
        className="pointer-events-none absolute inset-y-0 z-30 w-px bg-white/90 shadow-[0_0_18px_rgba(0,0,0,0.4)]"
        style={{
          left: `${position}%`,
          transform: "translateX(-50%)",
        }}
      >
        {/* Comando centrale */}
        <div
          className={`absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-[#ebe7dc]/90 text-[#24221f] shadow-[0_12px_35px_rgba(0,0,0,0.3)] backdrop-blur-md transition duration-300 md:h-16 md:w-16 ${
            isDragging
              ? "scale-95"
              : "group-hover:scale-105"
          }`}
        >
          <ChevronsLeftRight
            size={24}
            strokeWidth={1.4}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Indicazione mobile */}
      <div className="pointer-events-none absolute inset-x-0 bottom-5 z-30 flex justify-center md:hidden">
        <span className="bg-[#24221f]/70 px-4 py-2 text-[8px] uppercase tracking-[0.24em] text-white backdrop-blur-md">
          Trascina per confrontare
        </span>
      </div>
    </div>
  );
}