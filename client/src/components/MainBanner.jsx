import React from 'react';
import { assets } from '../assets/assets';

function MainBanner(){
    return(
        <div className='relative'>
            <img src={assets.main_banner_bg} alt="mainbanner" className='w-full hidden md:block' />
            <img src={assets.main_banner_bg_sm} alt="mainbanner" className='w-full md:hidden' />
        </div>
    )
}

export default MainBanner