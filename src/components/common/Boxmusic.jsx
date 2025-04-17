"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import React from "react";
import ReactHowler from "react-howler";
import { songs } from "@/data/songs";

export default function Boxmusic() {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const playerRef = useRef(null);
    const requestRef = useRef(null);
    const previousTimeRef = useRef(null);
    
    const currentSong = songs[currentSongIndex];

    // Reset when song changes
    useEffect(() => {
        setCurrentTime(0);
        if (playerRef.current) {
            // Wait for player to load new song
            setTimeout(() => {
                if (playerRef.current) {
                    setDuration(playerRef.current.duration() || 0);
                    playerRef.current.seek(0);
                }
            }, 100);
        }
        
        return () => {
            cancelAnimationFrame(requestRef.current);
        };
    }, [currentSongIndex]);

    // Use requestAnimationFrame for smooth progress tracking
    const animate = (time) => {
        if (previousTimeRef.current !== undefined) {
            if (playerRef.current && isPlaying) {
                const current = playerRef.current.seek();
                if (typeof current === 'number' && !isNaN(current)) {
                    setCurrentTime(current);
                    
                    // Make sure duration is also set
                    const dur = playerRef.current.duration();
                    if (dur && dur !== duration) {
                        setDuration(dur);
                    }
                }
            }
        }
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    };

    // Set up and clean up animation frame
    useEffect(() => {
        if (isPlaying) {
            requestRef.current = requestAnimationFrame(animate);
        } else {
            cancelAnimationFrame(requestRef.current);
        }
        return () => cancelAnimationFrame(requestRef.current);
    }, [isPlaying]);

    // Make sure we get duration when the player loads
    const handleLoad = () => {
        if (playerRef.current) {
            const dur = playerRef.current.duration();
            setDuration(dur || 0);
        }
    };

    const formatTime = (time) => {
        if (!time || isNaN(time)) return "00:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handlePrevious = () => {
        if (currentTime > 3) {
            if (playerRef.current) {
                playerRef.current.seek(0);
                setCurrentTime(0);
            }
        } else {
            setCurrentSongIndex((prevIndex) =>
                prevIndex === 0 ? songs.length - 1 : prevIndex - 1
            );
        }
    };

    const handleNext = () => {
        setCurrentSongIndex((prevIndex) =>
            prevIndex === songs.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleSeek = (e) => {
        if (!playerRef.current || duration <= 0) return;

        const progressBar = e.currentTarget;
        const rect = progressBar.getBoundingClientRect();
        const clickPosition = e.clientX - rect.left;
        const progressBarWidth = rect.width;
        const seekPosition = (clickPosition / progressBarWidth) * duration;
        playerRef.current.seek(seekPosition);
        setCurrentTime(seekPosition);
    };

    const handleSongEnd = () => {
        handleNext();
    };

    const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;
    

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
                    {/* Add tabIndex to make progress bar keyboard accessible */}                    <div 
                        className="progress-bar" 
                        onClick={handleSeek}
                        tabIndex={0}
                        role="slider"
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={Math.round(progressPercentage)}
                    >
                        <div
                            className="progress"
                            style={{ width: `${Math.min(100, Math.max(0, progressPercentage))}%` }}
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
                format={['mp3']}
            />
        </>
    );
}