import {TypeAnimation} from "react-type-animation";
import React from "react";

const TypingAnimationComponent = () => {
        return (
            <TypeAnimation
                style={{whiteSpace: 'pre-line'}}
                sequence={[
                    `HTML`,
                    3000,
                    `CSS`,
                    3000,
                    `JavaScript`,
                    3000,
                    `Bootstrap`,
                    3000,
                    `React`,
                    3000,
                    `Tailwind`,
                    3000,
                    `UI/UX`,
                    3000,
                    `Next.js`,
                    3000
                ]}
                cursor={true}
                speed={50}
                repeat={Infinity}
            />
        )
}

export default TypingAnimationComponent;