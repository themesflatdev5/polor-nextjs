"use client";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import React from "react";
import ReactHowler from "react-howler";
import { songs } from "@/data/songs";

export default function Boxmusic() {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const playerRef = useRef(null);
    const timerRef = useRef(null);

    
    const currentSong = useMemo(() => songs[currentSongIndex], [currentSongIndex]);

   
    useEffect(() => {
        setCurrentTime(0);
        setDuration(0);

        if (isPlaying && playerRef.current) {
            
            requestAnimationFrame(() => {
                playerRef.current?.seek(0);
            });
        }
        
        
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        };
    }, [currentSongIndex, isPlaying]);

    
    useEffect(() => {
        if (!isPlaying) {
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
            return;
        }

        timerRef.current = setInterval(() => {
            if (playerRef.current) {
                const time = playerRef.current.seek();
                if (typeof time === "number") {
                    setCurrentTime(time);
                }
            }
        }, 1000);

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        };
    }, [isPlaying]);

   
    const formatTime = useCallback((time) => {
        if (!time) return "00:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes < 10 ? "0" : ""}${minutes}:${
            seconds < 10 ? "0" : ""
        }${seconds}`;
    }, []);

    
    const handleLoad = useCallback(() => {
        if (playerRef.current) {
            setDuration(playerRef.current.duration());
        }
    }, []);

    const handlePlayPause = useCallback(() => {
        setIsPlaying(prev => !prev);
    }, []);

    const handlePrevious = useCallback(() => {
        if (currentTime > 3) {
            if (playerRef.current) {
                playerRef.current.seek(0);
                setCurrentTime(0);
            }
        } else {
            setCurrentSongIndex(prevIndex =>
                prevIndex === 0 ? songs.length - 1 : prevIndex - 1
            );
        }
    }, [currentTime]);

    const handleNext = useCallback(() => {
        setCurrentSongIndex(prevIndex =>
            prevIndex === songs.length - 1 ? 0 : prevIndex + 1
        );
    }, []);

    const handleSeek = useCallback((e) => {
        if (duration === 0 || !playerRef.current) return;

        const progressBar = e.currentTarget;
        const clickPosition = e.nativeEvent.offsetX;
        const progressBarWidth = progressBar.clientWidth;
        const seekPosition = (clickPosition / progressBarWidth) * duration;

        playerRef.current.seek(seekPosition);
        setCurrentTime(seekPosition);
    }, [duration]);

    const handleSongEnd = useCallback(() => {
        handleNext();
    }, [handleNext]);


    const progressPercentage = useMemo(() => 
        duration > 0 ? (currentTime / duration) * 100 : 0, 
        [currentTime, duration]
    );

    return (
        <>
            <div className="box-music mb_12">
                <div className="song-info mb_14">
                    <div className="thumbs-song">
                        <Image
                            alt="Album"
                            src={currentSong.thumb}
                            width={107}
                            height={107}
                            priority={true}
                        />
                    </div>
                    <div className="song-details">
                        <div className="logo mb_3">
                            <Image
                                alt="logo"
                                src="/assets/images/logo/spotify-logo.svg"
                                width={52.8}
                                height={16}
                            />
                        </div>
                        <h6 className="song-title fw-6">{currentSong.title}</h6>
                        <div className="artist-name text-body-2 text_mono-gray-5 mb_7">
                            {currentSong.artist}
                        </div>
                        <div className="player-buttons d-flex gap_12">
                            <button
                                className="control-btn prev-btn"
                                onClick={handlePrevious}
                                type="button"
                            >
                                <i className="icon-step-backward-solid" />
                            </button>
                            <button
                                className="control-btn"
                                onClick={handlePlayPause}
                                type="button"
                            >
                                <i className={isPlaying ? "icon-pause-circle-solid" : "icon-play-solid"} />
                            </button>
                            <button
                                className="control-btn next-btn"
                                onClick={handleNext}
                                type="button"
                            >
                                <i className="icon-step-forward-solid" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="progress-container">
                    <div className="progress-bar" onClick={handleSeek}>
                        <div
                            className="progress"
                            style={{ width: `${progressPercentage}%` }}
                        />
                    </div>
                    <div className="time-info">
                        <div className="time-display">
                            {formatTime(currentTime)}
                        </div>
                    </div>
                </div>
            </div>

            <ReactHowler
                src={currentSong.file}
                playing={isPlaying}
                ref={playerRef}
                onLoad={handleLoad}
                onEnd={handleSongEnd}
                html5={true}
                preload={true}
            />
        </>
    );
}