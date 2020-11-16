import React, { useState } from "react";
import { useMouse, useMouseWheel } from "react-use";
import { ParentSize } from "@visx/visx";
import { Drag } from "@visx/drag";

interface Position {
  x: number;
  y: number;
}

const Map = ({ width, height }) => {
  const ref = React.useRef(null);
  const { elX, elY } = useMouse(ref);
  const m = Math.max(useMouseWheel(), 1);

  const [dragging, setDragging] = useState(false);
  const [offset, _setOffset] = useState({ x: 3000, y: 3000 });
  const setOffset = (x: number, y: number) =>
    _setOffset({
      x: x,
      y: y,
    });

  // maps from screen space to San Andreas world space coordinates
  const screenToWorld = (x: number, y: number) => {
    return [(x / width) * 6000 - 3000, 3000 - (y / height) * 6000];
  };
  const imageToScreenX = (x: number) => {
    return (x * width) / 6000;
  };
  const imageToScreenY = (y: number) => {
    return (y * height) / 6000;
  };

  return (
    <svg style={{ userSelect: "none" }} ref={ref} width={width} height={height}>
      <image
        x={imageToScreenX(offset.x * m)}
        y={imageToScreenX(-offset.y * m)}
        width={width * m}
        height={height * m}
        style={{ userSelect: "none" }}
        href="/assets/zone-editor/gtasa-blank-1.0.jpg"
      />
      <Drag
        width={width}
        height={height}
        onDragStart={() => setDragging(true)}
        onDragEnd={() => setDragging(false)}
        onDragMove={(a) => {
          if (dragging) {
            const [x, y] = screenToWorld(a.dx, a.dy);
            setOffset(x, y);
            console.log("DRAGGING", a);
          }
        }}
      >
        {({ dragStart, dragEnd, dragMove }) => {
          return (
            <rect
              fill="black"
              opacity="10%"
              width={width}
              height={height}
              onMouseMove={dragMove}
              onMouseUp={dragEnd}
              onMouseDown={dragStart}
              onTouchStart={dragStart}
              onTouchMove={dragMove}
              onTouchEnd={dragEnd}
            />
          );
        }}
      </Drag>
      <text dx={10} dy={20} fontSize="12" fill="white">{`
      ${Math.round(elX)}, ${Math.round(elY)}
      Zoom: ${m}
      World: ${screenToWorld(elX, elY).map(Math.round)}
      Offset: ${Math.round(offset.x)} ${Math.round(offset.y)}`}</text>
    </svg>
  );
};

const Canvas = () => (
  <ParentSize debounceTime={10}>
    {({ width, height }) => {
      const maxHeight = width;
      const h = Math.min(height, maxHeight);

      return <Map width={width} height={h} />;
    }}
  </ParentSize>
);

const Page = () => {
  return (
    <div className="h-100">
      <Canvas />
    </div>
  );
};

export default Page;
