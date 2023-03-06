/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect } from 'react';

interface PlayerProps {
    activeSong: any,
    isPlaying: boolean,
    volume: number,
    seekTime: number,
    onEnded: React.ReactEventHandler<HTMLAudioElement>,
    onTimeUpdate: React.ReactEventHandler<HTMLAudioElement>,
    onLoadedData: React.ReactEventHandler<HTMLAudioElement>,
    currentIndex: number,
    repeat: boolean
}


const Player: React.FC<PlayerProps> = ({ activeSong, isPlaying, volume, seekTime, onEnded, onTimeUpdate, onLoadedData, repeat }) => {
  const ref = useRef<HTMLAudioElement>(null); //unsure if correct type
  // eslint-disable-next-line no-unused-expressions
  if (ref.current) {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  useEffect(() => {
    if (ref.current)
    ref.current.volume = volume;
  }, [volume]);
  // updates audio element only on seekTime change (and not on each rerender):
  useEffect(() => {
    if (ref.current)
    ref.current.currentTime = seekTime;
  }, [seekTime]);

  return (
    <audio
      src={activeSong?.hub?.actions[1]?.uri}
      ref={ref}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};

export default Player;