import { forwardRef, useState } from "react";
import images from "~/assets/image";
import classNames from "classnames";
import styles from "./Images.module.scss";
import PropTypes from "prop-types";

const Images = forwardRef(
    (
        {
            src,
            alt,
            className,
            fallback: customFallback = images.noimages,
            ...props
        },
        ref
    ) => {
        const [fallback, setFallback] = useState("");
        const handleErrorImage = () => {
            setFallback(customFallback);
        };
        return (
            <img
                src={fallback || src}
                alt={alt}
                ref={ref}
                className={classNames(styles.wrapper, className)}
                onError={handleErrorImage}
                {...props}
            />
        );
    }
);

Images.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Images;
