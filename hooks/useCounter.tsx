import React, { useState, useEffect, useCallback } from 'react';

export const useCounter = () => {
    const [count, setCount] = useState(1);
  
    //減少畫面渲染
    const handleClick = useCallback((e: React.MouseEvent) => {
      setCount((count: number) => {return count+1})
    },[count])
  
    //處理複雜的生命週期
    useEffect(() => {
      console.log("count");
      document.body.style.backgroundColor = "lightblue"; //元件初始化會先跑的段落
      //當監聽參數有變化時，會先跑return段，再跑上面段落
      return() => {
        console.log("清除函式"+count);
        document.body.style.backgroundColor = "";
      }
    },[count])
  
    return {count, handleClick};
  }