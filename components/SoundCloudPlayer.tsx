// src/components/SoundCloudPlayer.tsx
import React from "react";

interface SoundCloudPlayerProps {
  trackUrl: string; // public SoundCloud track URL
  height?: number;
}

const SoundCloudPlayer: React.FC<SoundCloudPlayerProps> = ({ trackUrl, height = 166 }) => {
  const embedUrl = `https://w.soundcloud.com/player/?url=${encodeURIComponent(trackUrl)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`;

  return (
    <iframe
      width="100%"
      height={height}
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      src={embedUrl}
      className="rounded-lg shadow-md"
    ></iframe>
  );
};

export default SoundCloudPlayer;
