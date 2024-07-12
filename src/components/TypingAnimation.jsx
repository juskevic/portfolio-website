import {TypeAnimation} from "react-type-animation";
import React from "react";

const TypingAnimationComponent = () => {
        return (
            <TypeAnimation
                sequence={[
                    `<Max Yushkevich />`,
                ]}
                cursor={false}
                speed={2}
            />
        )
}

export default TypingAnimationComponent;