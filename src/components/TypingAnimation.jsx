import {TypeAnimation} from "react-type-animation";
import React from "react";

const TypingAnimationComponent = () => {
        return (
            <TypeAnimation
                style={{whiteSpace: 'pre-line'}}
                sequence={[
                    `<Maku />`,
                ]}
                cursor={false}
                speed={3}
            />
        )
}

export default TypingAnimationComponent;