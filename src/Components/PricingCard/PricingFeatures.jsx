import { CircleCheck } from 'lucide-react';

import React from 'react';

const PricingFeatures = ({feature}) => {
    return (
        <p    className='flex text-center gap-1.5 p-2'> <CircleCheck></CircleCheck>{feature}</p>
    );
};

export default PricingFeatures;