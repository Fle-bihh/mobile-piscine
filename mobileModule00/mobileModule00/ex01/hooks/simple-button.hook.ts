import { log } from "@/functions/log.functions"
import { useState } from "react"

const TITLE_1 = "Welcome to the Mobile Piscine!"
const TITLE_2 = "Hello World!"

export const useSimpleButton = () => {
    const [title, setTitle] = useState<[0 | 1, string]>([0, TITLE_1]);

    const onPressButton = () => {
        switch (title[0]) {
            case 0:
                setTitle([1, TITLE_2])
                break;
            case 1:
                setTitle([0, TITLE_1])
                break;
            default:
                break;
        }
        log("Button pressed.")
    }

    return {
        title: title[1],
        onPressButton
    }
}