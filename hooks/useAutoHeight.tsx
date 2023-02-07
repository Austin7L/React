import { useEffect, useRef } from 'react';

const useAutoHeight = (value: string) => {
  const ref = useRef<HTMLTextAreaElement>(null); //useRef抓到TextArea元件之DOM元素

  //監控text參數異動時，異動元件高度
  useEffect(() => {
    if (!ref.current) return;
    ref.current.style.height = `${ref.current.scrollHeight}px` //抓取元件卷軸高度去調整
  }, [value]);

  return ref;
}

export default useAutoHeight;