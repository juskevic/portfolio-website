import {TypeAnimation} from "react-type-animation";
import React from "react";

const TypingAnimationComponent = () => {
        return (
            <TypeAnimation
                style={{whiteSpace: 'pre-line'}}
                sequence={[
                        `Hello, I’m Max, and \n I’m a front-end developer!`,
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
                        `Take a look at some of my projects :3`,
                        6000,
                        `Thanks \nfor visiting 💖`,
                        10000
                ]}
                cursor={true}
                speed={35}
                repeat={Infinity}
            />
        )
}

export default TypingAnimationComponent;