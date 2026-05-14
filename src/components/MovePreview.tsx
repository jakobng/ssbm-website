import React from 'react';
import type { MotionKind } from '../data/gameData';

interface MovePreviewProps {
  motion: MotionKind;
  accent: string;
  label: string;
}

const MovePreview: React.FC<MovePreviewProps> = ({ motion, accent, label }) => {
  return (
    <figure
      className={`move-preview move-preview--${motion}`}
      style={{ '--preview-accent': accent } as React.CSSProperties}
      aria-label={label}
    >
      <div className="move-preview__scene" aria-hidden="true">
        <div className="move-preview__floor" />
        <div className="move-preview__target" />
        <div className="move-preview__subject" />
        <div className="move-preview__effect move-preview__effect--one" />
        <div className="move-preview__effect move-preview__effect--two" />
        <div className="move-preview__spark move-preview__spark--one" />
        <div className="move-preview__spark move-preview__spark--two" />
        <div className="move-preview__spark move-preview__spark--three" />
      </div>
      <figcaption className="move-preview__caption">{label}</figcaption>
    </figure>
  );
};

export default MovePreview;
