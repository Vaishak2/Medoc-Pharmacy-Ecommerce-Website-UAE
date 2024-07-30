import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


function PriceRangeSlider() {

    const [value, setValue] = useState([0, 5000]);

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <div className='mt-4'>
            <div className='w-[225px] mx-auto'>
                <Slider
                    min={0}
                    max={5000}
                    range
                    value={value}
                    onChange={handleChange}
                    trackStyle={[{ backgroundColor: '#304BA0', height: 6 }]}
                    handleStyle={[
                        { borderColor: '#304BA0', height: 20, width: 20, marginTop: -7, backgroundColor: '#304BA0' },
                        { borderColor: '#304BA0', height: 20, width: 20, marginTop: -7, backgroundColor: '#304BA0' }
                    ]}
                    railStyle={{ backgroundColor: 'lightgray', height: 6 }}
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <span className='text-[12px] font-medium'>0</span>
                <span className='text-[12px] font-medium'>5000</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
                <div className='border-2 border-solid border-[#EAEAEA] w-[88px] h-[32px] flex justify-center items-center text-[12px] font-medium'>{value[0]}</div>
                <div className='w-[88px] h-[32px] flex justify-center items-center text-[12px] font-medium'>to</div>
                <div className='border-2 border-solid border-[#EAEAEA] w-[88px] h-[32px] flex justify-center items-center text-[12px] font-medium'>{value[1]}</div>
            </div>
        </div>
    )
}

export default PriceRangeSlider;
