import React, { useState } from 'react';
import "./gallery.scss";
import { GrClose } from "react-icons/gr";
import { motion } from 'framer-motion';
import gif1 from '../../Assets/giphy.gif';
import gif2 from '../../Assets/deportivo.gif';
import mayor from '../../Assets/mayor.gif';
import gifgallery1 from '../../Assets/gif-gallery-1.gif';
import gifgallery2 from '../../Assets/gif-gallery-2.gif';
import gifgallery3 from '../../Assets/gif-gallery-3.gif';
import estimulacion from '../../Assets/estimulacion.gif';
import grupal from '../../Assets/grupal.gif';
import globalFit from '../../Assets/globalFit.gif';
import funcional from '../../Assets/funcional.gif';

const Gallery = () => {

    let images = [
        { id: 1, src: gif1 },
        { id: 7, src: gifgallery1 },
        { id: 6, src: mayor },
        { id: 2, src: estimulacion },
        { id: 4, src: grupal },
        { id: 12, src: gif2 },
        { id: 9, src: gifgallery2 },
        { id: 10, src: globalFit },
        { id: 11, src: funcional },
        { id: 8, src: gifgallery3 },
    ];

    const [model, setModel] = useState(false);
    const [tempSrc, setTempSrc] = useState('');

    const getImg = (src) => {
        setTempSrc(src); 
        setModel(true); 
    };

    return (
        <section className='gallery-container'>
            <main className='layout'>
                <motion.div className={model ? "model open" : "model"}>
                    <img src={tempSrc} alt="" />
                    <GrClose onClick={() => setModel(false)} className='img-model'/>
                </motion.div>

                {images.map((image) => (
                    <motion.div
                        className='img-container'
                        key={image.id}
                        onClick={() => getImg(image.src)} 
                    >
                        <img src={image.src} alt="" className='img-gallery' />
                    </motion.div>
                ))}
            </main>
        </section>
    );
};

export default Gallery;