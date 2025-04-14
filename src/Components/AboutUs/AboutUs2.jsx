
import React from 'react';
import Img from '../../Assets/homepage4.png';
import ConnectingImg from '../../Assets/connectingImg.svg';
import aboutusImg from '../../Assets/aboutus.svg';
import ConnectingImg2 from '../../Assets/Vector 22.svg';
import image from '../../Assets/au2.svg';
import Image0 from '../../Assets/au2(0).svg';
import image2 from '../../Assets/au2(1).svg';
import image3 from '../../Assets/au2(2).svg';
import image4 from '../../Assets/au2(3).png';

const AboutUs2 = () => {
    return (
        <div className="relative w-full overflow-x-hidden flex flex-col items-center">

            {/* Desktop */}
            <div className="hidden md:flex w-full flex-col items-center">

                <div
                    className="rounded-full opacity-40 absolute"
                    style={{
                        top: '150px',
                        left: '-706px',
                        backgroundColor: 'rgba(199, 183, 158, 0.7)',
                        width: '1050px',
                        height: '1095px',
                        zIndex: -1,
                    }}
                />


                <div className="mt-[170px] flex flex-col items-center">
                    <div className="relative flex flex-col items-center gap-4 mt-10 mb-16">
                        <div className="relative flex justify-center">
                            <img
                                src={aboutusImg}
                                alt=""
                                className="absolute bottom-0 left-1/2 transform -translate-x-[68px] w-[137px] h-[137px] z-0"
                            />
                            <div className="text-[26px] text-[#43577a] text-center inline-block w-[927px] relative z-10 !font-['Nunito']">
                                <span>
                                    {`We know the devastating physical, emotional, and financial toll these accidents can take, and `}
                                </span>
                                <span className="font-extrabold">we are here</span>
                                <span>{` to guide you every step of the way. `}</span>
                            </div>
                        </div>
                        <div className="text-[26px] text-[#43577a] text-center inline-block w-[909px] !font-['Nunito']">
                            We commit to holding negligent trucking companies and drivers accountable, ensuring your rights are protected.
                        </div>
                    </div>

                    <img
                        src={image4}
                        alt=""
                        className="mt-10 rounded-[80px] w-[957px] h-[411px] object-cover"
                        style={{ left: "calc(50% - 479px)" }}
                    />

                    <b
                        className="text-[34px] text-[#5d2446] inline-block mt-10 w-[803px] h-[33px] !font-['Nunito']"
                        style={{ left: "calc(50% - 402px)" }}
                    >
                        <p className="m-0">At Big Rig Lawsuit, we don't just represent clients</p>
                    </b>

                    <b
                        className="text-[42px] text-[#816756] inline-block mt-20 w-[73px] h-[49px] !font-['Nunito']"
                        style={{ left: "calc(50% - 37px)" }}
                    >
                        We
                    </b>

              
                    <img
                        src={ConnectingImg}
                        alt=""
                        className="mt-6"
                        style={{ left: "-100px", width: "715px", height: "347px", position: "relative" }}
                    />

               
                    <div className="relative top-[-165px] flex gap-[80px] justify-center px-10">
                   
                        <div className="relative rounded-[60px] bg-[rgba(199,183,158,0.8)] w-[364px] h-[329px] overflow-hidden">
                            <img
                                src={image}
                                alt=""
                                className="absolute w-[25.16%] h-[20.97%] left-[37.64%] bottom-[49.85%] max-w-full max-h-full"
                            />
                            <div className="absolute left-[22.25%] top-[70%] text-[24px] !font-['Nunito']">Stand beside them</div>
                        </div>

                    
                        <div className="relative rounded-[60px] bg-[rgba(199,183,158,0.8)] w-[364px] h-[329px] overflow-hidden">
                            <img
                                src={image2}
                                alt=""
                                className="absolute w-[23.1%] h-[20.97%] left-[38.46%] bottom-[49.85%] max-w-full max-h-full"
                            />
                            <div className="absolute left-[13.74%] top-[70%] text-[24px] !font-['Nunito']">Advocate for their future</div>
                        </div>

                 
                        <div className="relative rounded-[60px] bg-[rgba(199,183,158,0.8)] w-[364px] h-[329px] overflow-hidden">
                            <img
                                src={image3}
                                alt=""
                                className="absolute w-[20.33%] h-[20.97%] left-[39.84%] bottom-[49.85%] max-w-full max-h-full"
                            />
                            <div className="absolute left-[7.97%] top-[70%] text-[24px] !font-['Nunito']">Help them rebuild their lives</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className="block md:hidden w-full px-4 flex flex-col items-center mt-10 gap-6">

                <div className="flex flex-col items-center text-center gap-4">
                    <img src={aboutusImg} alt="Decor" className="w-[100px] h-[100px]" />
                    <p className="text-[18px] text-[#43577a] leading-6">
                        We know the devastating physical, emotional, and financial toll these accidents can take, and <strong>we are here</strong> to guide you every step of the way.
                    </p>
                    <p className="text-[18px] text-[#43577a] leading-6">
                        We commit to holding negligent trucking companies and drivers accountable, ensuring your rights are protected.
                    </p>
                </div>


                <img src={image4} alt="Main Visual" className="rounded-[40px] w-full object-cover h-[200px]" />

                <p className="text-[22px] text-[#5d2446] font-bold text-center mt-6">
                    At Big Rig Lawsuit, we don't just represent clients
                </p>

                <p className="text-[28px] text-[#816756] font-bold mt-10">We</p>

                <img
                    src={ConnectingImg2}
                    alt="Connecting"
                    className="w-full h-[625px] mt-6"
                    style={{ height: '626px !important', position: 'absolute', top: '880px' }}
                />

                <div className="flex flex-col gap-12 mt-10 w-full">
                    {[
                        { text: "Stand beside them", image: image },
                        { text: "Advocate for their future", image: image2 },
                        { text: "Help them rebuild their lives", image: Image0 },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="rounded-[40px] bg-[rgba(199,183,158,0.8)] w-full h-[220px] relative flex flex-col items-center justify-center"
                        >
                            <img src={item.image} alt="" className="w-[50px] h-[50px] mb-4" />
                            <div className="text-center font-medium text-[16px] px-4">{item.text}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUs2;
