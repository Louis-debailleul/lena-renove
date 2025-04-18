"use client";
import { useState } from "react";
import Image from "next/image";

const AfterBefore = ({ afterImage, beforeImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event) => {
    event.stopPropagation();
    if (!isDragging) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  };

  const handleMouseDown = (event) => {
    event.stopPropagation();
    setIsDragging(true);
  };

  const handleMouseUp = (event) => {
    event.stopPropagation();
    setIsDragging(false);
  };

  const handleMouseLeave = (event) => {
    event.stopPropagation();
    setIsDragging(false);
  };

  const handleTouchStart = (event) => {
    event.stopPropagation();
    setIsDragging(true);
  };

  const handleTouchMove = (event) => {
    event.stopPropagation();
    if (!isDragging) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const touch = event.touches[0];
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  };

  const handleTouchEnd = (event) => {
    event.stopPropagation();
    setIsDragging(false);
  };

  return (
    <div
      className="w-full overflow-hidden flex justify-center items-center"
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative w-full aspect-[70/45] m-auto overflow-hidden select-none rounded-lg"
        onMouseMove={handleMove}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image alt="" fill draggable={false} priority src={afterImage} />

        <div
          className="absolute top-0 left-0 right-0 w-full aspect-[70/45] m-auto overflow-hidden select-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image fill priority draggable={false} alt="" src={beforeImage} />
        </div>
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{
            left: `calc(${sliderPosition}% - 1px)`,
          }}
        >
          <div className="bg-white absolute rounded-full h-3 w-3 -left-1 top-[calc(50%-5px)]" />
        </div>
      </div>
    </div>
  );
};

export default AfterBefore;
