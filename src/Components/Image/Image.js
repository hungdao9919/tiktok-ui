import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import images from '~/assets/images';
import styles from './Image.module.scss';
import PropTypes from 'prop-types';

const Image = forwardRef(
    ({ className, src = images.noImage, alt = 'image', fallback: customFallback = images.noImage }, ref) => {
        const handleError = () => {
            setFallback(customFallback);
        };
        const [fallback, setFallback] = useState();
        return (
            <img
                className={classNames(styles.wrapper, className)}
                ref={ref}
                src={fallback || src}
                onError={handleError}
                alt={alt}
            />
        );
    },
);
Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    fallback: PropTypes.string,
};
export default Image;
