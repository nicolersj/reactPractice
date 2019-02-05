import React from 'react';

const ImageList = (props) => {

    const images = props.images.map((image) => {
        return <img key={image.id} src={image.urls.regular} alt={image.description} />;

        //image.id key property is important for efficiency of rendering images
    });

    // console.log(props.images);

    return <div>{images}</div>;
};

export default ImageList;