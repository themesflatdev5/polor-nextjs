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
    const timerRef = useRef(null);

    const currentSong = songs[currentSongIndex];

    useEffect(() => {
        setCurrentTime(0);
        setDuration(0);

        if (isPlaying) {
            setTimeout(() => {
                if (playerRef.current) {
                    playerRef.current.seek(0);
                }
            }, 100);
        }
    }, [currentSongIndex]);

 
    useEffect(() => {
        if (isPlaying) {
            timerRef.current = setInterval(() => {
                if (playerRef.current) {
                    const time = playerRef.current.seek();
                    if (typeof time === "number") {
                        setCurrentTime(time);
                    }
                }
            }, 1000);
        } else {
            clearInterval(timerRef.current);
        }

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current); 
            }
        };
    }, [isPlaying]);

    const handleLoad = () => {
        if (playerRef.current) {
            setDuration(playerRef.current.duration());
        }
    };

    const formatTime = (time) => {
        if (!time) return "00:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes < 10 ? "0" : ""}${minutes}:${
            seconds < 10 ? "0" : ""
        }${seconds}`;
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
        if (duration === 0) return; // Wait until duration is set

        const progressBar = e.currentTarget;
        const clickPosition = e.nativeEvent.offsetX;
        const progressBarWidth = progressBar.clientWidth;
        const seekPosition = (clickPosition / progressBarWidth) * duration;

        if (playerRef.current) {
            playerRef.current.seek(seekPosition);
            setCurrentTime(seekPosition);
        }
    };

    const handleSongEnd = () => {
        handleNext(); // Move to next song when the current song ends
    };

    const progressPercentage =
        duration > 0 ? (currentTime / duration) * 100 : 0;

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
                            >
                                <i className="icon-step-backward-solid" />
                            </button>
                            {!isPlaying ? (
                                <button
                                    className="control-btn play-btn"
                                    onClick={handlePlayPause}
                                >
                                    <i className="icon-play-solid" />
                                </button>
                            ) : (
                                <button
                                    className="control-btn pause-btn"
                                    onClick={handlePlayPause}
                                >
                                    <i className="icon-pause-circle-solid"></i>
                                </button>
                            )}
                            <button
                                className="control-btn next-btn"
                                onClick={handleNext}
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
            />
        </>
    );
}
