import React from 'react'

function Home() {

    const downloadImgStyle ='border-[1px] border-[#232A4E] h-[1.5rem] w-[5rem] md:rounded-[9px] md:h-[2rem] md:w-[7rem] lg:rounded-[13px] lg:h-[3rem] lg:w-[10rem]'

    return (
        <div className="wrapper lg:flex items-center justify-between px-10 sm:px-10 md:px-[60px] lg:px-[90px] xl:px-[110px] 2xl:px-52 w-[100%] h-[380px] sm:h-[290px] md:h-[400px] lg:h-[550px] xl:h-[600px] z-[3]">
            {/* left side */}
            <div className="heading flex flex-col items-start justify-center text-slate-700 h-[100%] text-[18px] sm:text-[19px] md:text-[20px] lg:text-[32px] xl:text-[40px]">
                <span>Experience The</span>
                <span className='text-[16px] md:text-[22px] lg:text-[34px] xl:text-[37px]'>
                    <b>Best Quality Game</b>
                </span>

                {/* Center side Mobile screen */}
                <div className="block sm:hidden  w-[28%]">
                    <img
                        src="/img/pikachu.png"
                        alt=""
                        className="absolute left-[40px] top-[160px] h-[140px] "
                    />
                    <img
                        src="/img/Jigglypuff.png"
                        alt=""
                        className="absolute left-[240px] h-[80px]  "
                    />
                    <img
                        src="/img/wartortle.png"
                        alt=""
                        className="absolute top-[180px] left-[160px] h-[110px] "
                    />

                </div>

                <span className="text-[14px] md:text-[15px] lg:text-[18px] pt-[180px] pb-[10px] sm:py-4 text-slate-600 text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>

                {/* download ads */}
                <div>
                    <span className="text-[11px] md:text-[13px] lg:text-[15px] ">Download now on IOS and Android</span>
                    <div className="download">
                        <div className="download_images flex">
                            <img
                                src={require("../img/App Store.png")}
                                alt=""
                                className={downloadImgStyle + ` mr-5`}
                            />
                            <img
                                src={require("../img/Google Play.png")}
                                alt=""
                                className={downloadImgStyle}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* right side */}
            <div className="hidden sm:block images relative md:w-[28%] lg:w-[90%] xl:w-[75%] 2xl:w-[60%]">
                <img
                    src="/img/pikachu.png"
                    alt=""
                    className="absolute -top-[230px] left-[325px] h-[160px] md:left-[390px] md:h-[200px] md:-top-[310px] lg:left-[90px] lg:-top-[180px] lg:h-[300px] xl:h-[430px] xl:-top-[190px] xl:left-[10px] 2xl"
                />
                <img
                    src="/img/Jigglypuff.png"
                    alt=""
                    className="absolute md:h-[115px] h-[80px] left-[515px] -top-[260px] md:left-[620px] md:-top-[350px] lg:-top-[230px] lg:left-[470px] xl:left-[490px] xl:-top-[250px] lg:h-[150px] xl:h-60 2xl:left-[580px] "
                />
                <img
                    src="/img/wartortle.png"
                    alt=""
                    className="absolute h-[125px] left-[465px] -top-[215px]  md:h-[150px] md:left-[560px] md:-top-[270px] lg:-top-[130px] lg:left-[350px] xl:-top-[110px] xl:left-[380px] lg:h-[240px] xl:h-[320px]"
                />

            </div>

        </div>
    )
}

export default Home