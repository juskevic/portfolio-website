import {TypeAnimation} from "react-type-animation";
import React from "react";

const TypingAnimationComponent = () => {
        return (
            <TypeAnimation
                style={{whiteSpace: 'pre-line'}}
                sequence={[
                        `My name is Max,\n and I'm a \nWeb Developer.`,
                        8000,
                        `I'm currently \nlearning JavaScript`,
                        4000,
                        `I'm currently \nlearning React`,
                        4000,
                        `I'm currently \nlearning Bootstrap`,
                        4000,
                        `I'm currently \nlearning Tailwind`,
                        4000,
                        `I'm currently \nlearning Next.js`,
                        4000,
                        `I'm currently \nlearning UI/UX`,
                        4000,
                        `Thanks \nfor visiting <3`,
                        10000
                ]}
                cursor={true}
                speed={45}
                repeat={Infinity}
            />
        )
}

export default TypingAnimationComponent;