import { useState } from 'react';
import './Project.css'
import CardData from '../../Components/CardData.js'
import { ChevronRight } from '@mui/icons-material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


function Project() {
    const [current, setCurrent] = useState(0);
    const length = CardData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    return (
        <div className="Project">
            {CardData.map((details, index) => {
                return(
                    <div className="project-slider" key={index}>
                        {index === current &&(
                            <>
                                <div className="project-left">
                                    <div className="page-nav">
                                        <div className="chev-container accent"> <ChevronLeftIcon onClick={prevSlide} /> </div>
                                        <p className="page"> {current + 1}/4</p>
                                        <div className="chev-container accent"> <ChevronRight onClick={nextSlide} /> </div>
                                    </div>
                                    <div className="project-card">
                                        <h2 className="project-title accent"> {details.title} </h2>
                                        <p className="project-desc">
                                            {details.description}
                                        </p>

                                        <div className="tools-used">
                                            <span className="dash accent">&#8211;</span>
                                            <p className="tools"> {details.tools} </p>
                                        </div>
                                    </div>

                                    <a href={details.webLink} target="_blank" rel="noreferrer" className="primary-cta ">Visit Website</a>
                                </div>

                                <div className="project-right">
                                    <div className="outer-circle">
                                        <div className="inner-circle">
                                            <img className="thumbnail" src={details.thumbnail} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default Project