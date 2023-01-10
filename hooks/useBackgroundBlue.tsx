import { useRouter } from "next/router"
import { useEffect, useMemo } from "react";

export const useBackgroundBlue = () => {
    const router = useRouter();

    console.log(router);

    const bgColor = useMemo(() => {
        return "";
    },[router.pathname]);
}

useEffect(() => {
    document.body.style.background = bgColor;
    return () => {
        document.body.style.backgroundColor = "";
    }

})