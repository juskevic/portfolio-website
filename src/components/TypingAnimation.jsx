import {TypeAnimation} from "react-type-animation";
import React from "react";

const TypingAnimationComponent = () => {
        return (
            <TypeAnimation
                style={{whiteSpace: 'pre-line'}}
                sequence={[
                        `My name is Max,\n and I'm a Web Developer.`,
                        8000,
                        `I'm currently learning \nJavaScript`,
                        4000,
                        `I'm currently learning \nReact`,
                        4000,
                        `I'm currently learning \nBootstrap`,
                        4000,
                        `I'm currently learning \nTailwind`,
                        4000,
                        `I'm currently learning \nNext.js`,
                        4000,
                        `I'm currently learning \nUI/UX`,
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