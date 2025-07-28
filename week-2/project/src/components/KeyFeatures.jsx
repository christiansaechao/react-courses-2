import React from 'react'

export const KeyFeatures = ({ features, header }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center text-white">
      <h2 className="pt-4 text-3xl font-bold">{header}</h2>
      {
        features.map((feature, index) => (
          <div key={index} className="flex justify-center items-center flex-col py-6">
            <img src={feature.img} className='rounded-lg w-full'/>
            <h2 className='py-4 text-xl font-bold'>{feature.title}</h2>
            <p>{feature.description} </p>
          </div>
        ))
      }
    </div>
  )
}
