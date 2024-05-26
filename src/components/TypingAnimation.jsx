import {TypeAnimation} from "react-type-animation";
import React from "react";

const TypingAnimationComponent = () => {
        return (
            <TypeAnimation
                style={{whiteSpace: 'pre-line'}}
                sequence={[
                        `With a strong passion for design and user experience, I strive to create visually appealing and intuitive interfaces. I have experience working with HTML, CSS, JavaScript, and various front-end frameworks such as React and Next.js. I am constantly learning and improving my skills to stay up-to-date with the latest trends and technologies in the industry. Feel free to explore my portfolio and get in touch with me for any inquiries or collaborations.`,
                        8000,
                ]}
                cursor={false}
                speed={50}
            />
        )
}

export default TypingAnimationComponent;