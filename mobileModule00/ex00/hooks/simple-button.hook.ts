import { log } from "@/functions/log.functions"

export const useSimpleButton = () => {
    const onPressButton = () => {
        log("Button pressed.")
    }

    return {
        onPressButton
    }
}