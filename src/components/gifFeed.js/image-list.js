import React from 'react';
import Image from './image.js';


   const ImageList = props => {

        const results = props.data;
        let images = results.map(image => 
            
                <Image url={image.images.fixed_height.url}/>
        
        );
        
        return (
            <div class="imageList">
                {images}
            </div>
        );
}

export default ImageList;