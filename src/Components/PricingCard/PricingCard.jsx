import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({pricing}) => {
    const {name, price, description, features}=pricing
    return (
        <div className='border bg-amber-300 rounded-2xl p-4 '>
            {/* card header */}
           <div><h1 className='text-7xl text-center'>{name}</h1>
        <h4 className='text-3xl text-center'>{price}</h4>
           </div> 
           {/* card body */}
           <div className='bg-amber-500 p-4 rounded-2xl mt-10 '>
<p className='py-3 bg-green-400 rounded-2xl text-center'>{description}</p>
{
    features.map((feature, index)=><PricingFeatures key={index} feature={feature}></PricingFeatures> )
}
           </div>
        </div>
    );
};

export default PricingCard;