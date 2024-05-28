import React from 'react'
import data from '../../data/data.json'
import sampleImg from '../../images/color.svg'
console.log(data, 'data')
const Detail = () => {
    return (
        <div className='container'>
            <div className="grid-container">
                {data.map((item) => (
                    <div className="grid-box">
                        <img src={sampleImg} alt="AC" />
                        <div className='my-2'>
                            <h6 className='fw-bold'>{item.title}</h6>
                            <p className='detail-grid-text fw-bold mt-4'>{item.desc}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Detail