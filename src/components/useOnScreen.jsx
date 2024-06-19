import { useEffect, useState, useRef } from 'react';

const useOnScreen = (options) => {
    const ref = useRef();
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIntersecting(entry.isIntersecting);
            },
            options
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        const currentRef = ref.current;

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, options]);

    return [ref, isIntersecting];
};
export default useOnScreen;