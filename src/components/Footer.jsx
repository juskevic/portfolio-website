import React from "react";
import {Card, CardBody} from "@nextui-org/react";

const Footer = () => {
    return (
        <>
            <footer className="flex flex-col justify-center p-5 space-y-2 pt-48 text-neutral-700 xl:text-neutral-400">
                <Card className="mx-auto bg-neutral-950 bg-opacity-50 md:bg-opacity-30 backdrop-blur">
                    <CardBody>
                        <p className="text-center">© 2024 Max Yushkevich. All rights reserved.</p>
                    </CardBody>
                </Card>
            </footer>
        </>
    )
}

export default Footer;
