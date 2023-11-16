import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type imageProps = {
    src: string,
    alt?: string,
    height: number,
    width: number,
    maxHeight?: string,
    maxWidth?: string
}
const Image = (props: imageProps) => (
    <div>
        <LazyLoadImage
            alt={props?.alt}
            height={props.height}
            src={props.src} // use normal <img> attributes as props
            width={props.width}
            max-height={props?.maxHeight}
            max-width={props?.maxWidth}
        />
    </div>
);

export default Image;