'use client';

import { useState } from 'react';
import { useState, useEffect, useRef } from 'react';

declare global {
    interface Window {
        onYouTubeIframeAPIReady: () => void;
        YT: any;
    }
}

export default function MainSection() {
    const handleClick = () => {
@@ -11,6 +18,38 @@ export default function MainSection() {
    };

    const [muted, setMuted] = useState(true);
    const playerRef = useRef<any>(null);

    useEffect(() => {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = () => {
            playerRef.current = new window.YT.Player('youtube-player', {
                events: {
                    'onReady': onPlayerReady,
                }
            });
        };

        return () => {
            window.onYouTubeIframeAPIReady = () => {}; // Clean up
        }
    }, []);

    const onPlayerReady = (event: any) => {
        event.target.playVideo();
    };

    const handleUnmute = () => {
        setMuted(false);
        if (playerRef.current) {
            playerRef.current.unMute();
            playerRef.current.playVideo();
        }
    };

    return (
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center lg:mt-[8vh] mt-[5vh] px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto gap-6 lg:gap-12">
@@ -45,10 +84,19 @@ export default function MainSection() {

            <div className="flex justify-center w-full lg:w-[50%]">
                <div className="relative w-[100%] sm:w-[90%] md:w-[80%] lg:w-[600px] xl:w-[700px] max-w-[900px] lg:mt-6 mt-16">
                    <iframe className="w-full aspect-video" src={`https://www.youtube.com/embed/UWjg98ypwEA?autoplay=1&mute=${muted ? 1 : 0}&modestbranding=1&controls=0`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <iframe
                        id="youtube-player"
                        className="w-full aspect-video"
                        src={`https://www.youtube.com/embed/UWjg98ypwEA?autoplay=1&mute=${muted ? 1 : 0}&modestbranding=1&controls=0&enablejsapi=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                    {muted && (
                        <button
                            onClick={() => setMuted(!muted)}
                            onClick={handleUnmute}
                            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full text-lg font-bold'
                        >
                            Ligar Som
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
Footer
