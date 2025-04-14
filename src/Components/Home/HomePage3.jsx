import React, { useState, useEffect } from 'react';
import Img from '../../Assets/homepage3.jpg'

const HomePage3 = () => {
    const [deviceType, setDeviceType] = useState('desktop');
    
    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setDeviceType('mobile');
            } else if (width < 1024) {
                setDeviceType('tablet');
            } else {
                setDeviceType('desktop');
            }
        };
        

        checkScreenSize();
        

        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

 
    const renderMobileView = () => (
        <div className="p-4 bg-[#FFFFFF]">
            <div style={{ color: "#5D2446" }} className="text-[22px] sm:text-[28px] font-medium font-['Bricolage_Grotesque'] inline-block w-full mb-4">
                About 18-wheeler accidents, legal rights, and the pursuit of justice for victims.
            </div>

            <div className="flex flex-col items-center pt-4 gap-6">
                <img
                    src={Img}
                    alt="18-wheeler accident"
                    className="w-full rounded-[30px] shadow-lg h-[250px] object-cover"
                />
                <div className="flex flex-col items-start gap-4 w-full text-left">
                    <p className="!font-['Nunito'] !font-normal text-[15px] sm:text-[16px] leading-[22px] sm:leading-[24px] break-words">
                        The freight industry is integral to Australia's economy, with heavy vehicles like semi-trailers and B-doubles transporting goods across vast distances. However, the increasing presence of these large vehicles on Australian roads has heightened safety concerns.
                    </p>
                    <p className="!font-['Nunito'] !font-normal text-[15px] sm:text-[16px] leading-[22px] sm:leading-[24px] break-words">
                        Truck accidents have become increasingly common in Australia, often making headlines due to their devastating impact. These massive vehicles, which can weigh up to 62.5 tonnes (approximately 137,500 pounds) under Australian regulations, pose significant risks on highways, contributing to a rising number of serious and fatal crashes.
                    </p>
                </div>
            </div>
        </div>
    );


    const renderTabletView = () => (
        <div className="p-6 bg-[#FFFFFF]">
            <div style={{ color: "#5D2446" }} className="text-[32px] font-medium font-['Bricolage_Grotesque'] inline-block w-full mb-6">
                About 18-wheeler accidents, legal rights, and the pursuit of justice for victims.
            </div>

            <div className="flex flex-col items-center pt-6 px-4 gap-8">
                <img
                    src={Img}
                    alt="18-wheeler accident"
                    className="w-full rounded-[50px] shadow-lg h-[350px] object-cover"
                />
                <div className="flex flex-col items-start gap-4 w-full text-left">
                    <p className="!font-['Nunito'] !font-normal text-[18px] leading-[28px] ">
                        The freight industry is integral to Australia's economy, with heavy vehicles like semi-trailers and B-doubles transporting goods across vast distances. However, the increasing presence of these large vehicles on Australian roads has heightened safety concerns.
                    </p>
                    <p className="!font-['Nunito'] !font-normal text-[18px] leading-[28px]">
                        Truck accidents have become increasingly common in Australia, often making headlines due to their devastating impact. These massive vehicles, which can weigh up to 62.5 tonnes (approximately 137,500 pounds) under Australian regulations, pose significant risks on highways, contributing to a rising number of serious and fatal crashes.
                    </p>
                </div>
            </div>
        </div>
    );


    const renderDesktopView = () => (
        <div className="p-8 bg-[#FFFFFF]">
            <div style={{ color: "#5D2446" }} className="text-[38px] font-medium font-['Bricolage_Grotesque'] inline-block w-full md:w-[819px] mb-8">
                About 18-wheeler accidents, legal rights, and the pursuit of justice for victims.
            </div>

            <div className="flex flex-row items-start pt-[50px] pl-[170px] gap-12">
                <img
                    src={Img}
                    alt="18-wheeler accident"
                    className="w-[35%] rounded-[85px] shadow-lg relative h-[540px] object-cover"
                />
                <div className="flex flex-col items-start gap-4 text-base w-[45%] text-left">
                    <p className="!font-['Nunito'] !font-normal text-[26px] leading-[36px]">
                        The freight industry is integral to Australia's economy, with heavy vehicles like semi-trailers and B-doubles transporting goods across vast distances. However, the increasing presence of these large vehicles on Australian roads has heightened safety concerns.
                    </p>
                    <p className="!font-['Nunito'] !font-normal text-[26px] leading-[36px]">
                        Truck accidents have become increasingly common in Australia, often making headlines due to their devastating impact. These massive vehicles, which can weigh up to 62.5 tonnes (approximately 137,500 pounds) under Australian regulations, pose significant risks on highways, contributing to a rising number of serious and fatal crashes.
                    </p>
                </div>
            </div>
        </div>
    );


    switch (deviceType) {
        case 'mobile':
            return renderMobileView();
        case 'tablet':
            return renderTabletView();
        case 'desktop':
        default:
            return renderDesktopView();
    }
};

export default HomePage3;
