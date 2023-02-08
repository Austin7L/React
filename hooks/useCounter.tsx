import React, { useState, useEffect, useCallback, useMemo, useContext } from 'react';
import { CounterContext } from '../store/counterContext';

export const useCounter = () => {
  const [count, setCount] = useState(0);
  const { CounterState, CounterDispatch } = useContext(CounterContext);

  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count])

  // //減少畫面渲染
  // const handleClick = useCallback((e: React.MouseEvent) => {
  //   setCount((count: number) => { return count + 1 });

  //   CounterDispatch({ type: "VOTE", payload: 1 });
  // }, [count])

  const handleClick = useCallback((e: React.MouseEvent) => {
    if (CounterState.totalCount < 20) {
      setCount((count: number) => {
        return count + 1;
      });
      CounterDispatch({ type: "VOTE", payload: 1 });
    } else {
      alert("已超過totalCount上限");
    }
  }, [CounterState.totalCount]);

  //處理複雜的生命週期
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue"; //元件初始化會先跑的段落
    //當監聽參數有變化時，會先跑return段，再跑上面段落
    return () => {
      document.body.style.backgroundColor = "";
    }
  }, [])

  return { count, doubleCount, handleClick };
}