import React from 'react';

const Maps = () => {
    return (
        <div className="w-[360px] h-[226px]">
            <iframe className='rounded-[30px]'
                src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=39.692665%2C47.208878&mode=poi&poi%5Buri%5D=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DIgoN-cMeQhXf1TxC&source=mapframe&utm_source=mapframe&z=15.5"
                width="360" height="226" frameBorder="1" allowFullScreen="true"></iframe>
        </div>
    );
};

export default Maps;


