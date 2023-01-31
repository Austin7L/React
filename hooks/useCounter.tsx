import React, { useState, useEffect, useCallback, useMemo } from 'react';

export const useCounter = () => {
    const [count, setCount] = useState(1);
    const doubleCount = useMemo(() => {
      console.log("useMemo count*2 ")
      return count * 2;
    },[count])
  
    //減少畫面渲染
    const handleClick = useCallback((e: React.MouseEvent) => {
      setCount((count: number) => {return count+1})
    },[count])
  
    //處理複雜的生命週期
    useEffect(() => {
      document.body.style.backgroundColor = "lightblue"; //元件初始化會先跑的段落
      //當監聽參數有變化時，會先跑return段，再跑上面段落
      return() => {
        document.body.style.backgroundColor = "";
      }
    },[count])
  
    return {count, doubleCount, handleClick};
  }