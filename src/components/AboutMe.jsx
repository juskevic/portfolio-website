import React from 'react';
import {Chip} from "@nextui-org/react";

export default function AboutMe() {
    return (
        <>
            <div className="flex justify-center mx-auto">
                <Chip
                    size="lg"
                    variant="shadow"
                    color="warning"
                >
                    {"The \"About me\" section is being reworked ⚒️"}
                </Chip>
            </div>
        </>
    )
}

