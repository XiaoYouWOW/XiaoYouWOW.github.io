import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import './index.css'

export default function () {

    // 定义背景图片链接数组
    const desktopBackgroundImages = [
        "https://api.miaomc.cn/image/get",
        "https://bing.img.run/rand_1366x768.php",
        "https://api.imlazy.ink/img"
    ];

    const mobileBackgroundImages = [
        "https://api.imlazy.ink/img-phone"
    ];

    // 判断屏幕比例是否接近手机（高宽比大于1）
    var isMobileRatioOld;
    const isMobileRatio = () => {
        const aspectRatio = window.innerHeight / window.innerWidth;
        return aspectRatio > 1;
    };

    // 定义状态存储背景图片
    const [backgroundImage, setBackgroundImage] = useState('');

    // 随机选择背景图片
    const selectRandomBackgroundImage = () => {
        const images = isMobileRatio() ? mobileBackgroundImages : desktopBackgroundImages;
        const randomIndex = Math.floor(Math.random() * images.length);
        setBackgroundImage(images[randomIndex]);
    };

    const [logoColor, setLogoColor] = useState('');
    const [openTime, setOpenTime] = useState('');

    // 在组件挂载时选择背景图片
    useEffect(() => {
        setInterval(() => {
            setLogoColor(`hsl(${(new Date() / 20) % 360},50%,70%)`);
        }, 33);
        setInterval(() => {
            setOpenTime(TimetoText(new Date() - 1732948276347));
            function TimetoText(time) {
                return `${Math.round(time / 864) / 100000}天`
            }
        }, 1000);

        // 初始化时选择背景图片
        selectRandomBackgroundImage();
        isMobileRatioOld = isMobileRatio();

        // 监听窗口大小变化，动态调整背景图片
        const handleResize = () => {
            if (isMobileRatio() == isMobileRatioOld) return;
            isMobileRatioOld = isMobileRatio();
            selectRandomBackgroundImage();
        };

        // 添加resize事件监听器
        window.addEventListener('resize', handleResize);

        // 清理事件监听器
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <Layout description='乾狐のBlog站，乾狐的小站，乾狐离光，乾狐梦影，QHMY, QHLG, Flime'>
            <div id='index-page-container'>
                {/* Set the background image dynamically */}
                <div id='index-page-bg' style={{ backgroundImage: `url(${backgroundImage})` }}></div>
                <div id='index-page-bg-mask'></div>
                <div id='index-page-main'>
                    <div id='logo' style={{ textAlign: "center", color: `${logoColor}` }}>
                        <span>一只快速的Flime跳过了懒惰的QHLG</span>
                    </div>
                    <div id='index-page-description' style={{ textAlign: "center"}}>
                        欢迎来到我的小站!想来点什么?<br />本站已启用{openTime}
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
