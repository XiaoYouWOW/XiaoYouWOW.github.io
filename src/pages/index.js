import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import './index.css'

export default function () {
    // Define an array of background image URLs
    const backgroundImages = [
        "https://api.miaomc.cn/image/get",
        "https://bing.img.run/rand_1366x768.php",
        "https://api.imlazy.ink/img"
    ];

    // State to store the selected background image URL
    const [backgroundImage, setBackgroundImage] = useState('');

    // Function to randomly select a background image
    const selectRandomBackgroundImage = () => {
        const randomIndex = Math.floor(Math.random() * backgroundImages.length);
        setBackgroundImage(backgroundImages[randomIndex]);
    };

    // Effect to select a random background image on component mount
    useEffect(() => {
        selectRandomBackgroundImage();
    }, []);

    return (
        <Layout description='乾狐のBlog站，乾狐的小站，乾狐离光，乾狐梦影，QHMY, QHLG, Flime'>
            <div id='index-page-container'>
                {/* Set the background image dynamically */}
                <div id='index-page-bg' style={{ backgroundImage: `url(${backgroundImage})` }}></div>
                <div id='index-page-bg-mask'></div>
                <div id='index-page-main'>
                    <div id='logo'>
                        <span>一只快速的Flime跳过了一条懒惰的狐狸</span>
                    </div>

                    <div id='index-page-description'>
                        欢迎你来到这里,想来点什么?
                    </div>
                    <div id='index-page-button-container'>
                        <div id='index-page-button'>
                            <Link
                                className="button button--secondary button--lg"
                                to="./blog">
                                偷看日记
                            </Link>
                            <Link
                                className="button button--secondary button--lg"
                                to="./docs/intro">
                                抱走狐狸
                            </Link>
                            <Link
                                className="button button--secondary button--lg"
                                to="./docs/game">
                                看看游戏
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
