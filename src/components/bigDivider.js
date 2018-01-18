import React from 'react';
import Divider from './divider.js';
import Slug from './dividerSlug.js';
import SlugRight from './dividerSlug-right.js';

    const BigDivider = props => {

        const points = props.points;
        const pointDivide = points.map((point) =>
            <Slug bullet={point} />
        ); 

        return (
            <div className="bigDivider-one" id={props.id}>
                <div className="left-side">
                   {pointDivide}
                </div>
                <div className="right-side">
                    <SlugRight wedo={props.foo} other={props.bar}/>
                </div>
                <Divider/>
            </div>
        );
    }

export default BigDivider;
