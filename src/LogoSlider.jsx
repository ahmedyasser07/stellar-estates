import React, { useState } from "react";
import './animation.css'
const LogosSlider = () => {
    const[state,setState] = useState('running')
    const logos_1 = ['Emaar.png', 'Ewan.png', 'Hyde Park.png', 'khaled sabry.png', 'Lavista.png', 'mabany edris.png', 'marakez.png', 'memaar almorshedy.png']
    const logos_2 = ['Mountain View.png', 'Ora.png', 'Orascom.png', 'Palm Hills.png', 'People & Places.png', 'Sodic.png', 'taj misr.png', 'Tatweer.png']
    return (
        <div class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none"  style={{animation: '20s slide infinite linear'}}>
                {
                    [...logos_1, ...logos_2].map(logo => (

                        <li>
                            <img className="w-28 h-20 md:w-[175px] md:h-[75px]" src={`./logos/${logo}`} alt="Your Image" />
                        </li>

                    ))
                }
            </ul>
            <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none" style={{animation: '20s slide infinite linear'}}>
                {
                    [...logos_1, ...logos_2].map(logo => (

                        <li>
                            <img className="w-28 h-20 md:w-[175px] md:h-[75px]" src={`./logos/${logo}`} alt="Your Image" />
                        </li>

                    ))
                }
            </ul>
        </div >
    );
};

export default LogosSlider;