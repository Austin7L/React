import { useRouter } from "next/router"
import { useEffect, useMemo } from "react";

export const useBackgroundBlue = () => {

  const router = useRouter(); //NextJS提供功能

  const bgColor = useMemo(() => {
    switch (router.pathname) {
      case "/":
        return "lightblue";
      case "/about":
        return "beige"
      case "/totalCount":
        return "LightGreen"
      default:
        return "";
    }
  }, [router.pathname]);

  useEffect(() => {
    document.body.style.background = bgColor;
    return () => {
      document.body.style.backgroundColor = "";
    }
  })
}

