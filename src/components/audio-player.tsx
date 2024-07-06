"use client"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export function Audio({ word }: {word: string}) {
    return (
        <AudioPlayer
            autoPlay
            src={word}
            onPlay={e => console.log("onPlay")}
            
        />
    )
}