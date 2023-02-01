import { useCallback, useState } from "react";

export const useInputText = () => {
    const [text, setText] = useState("");
    const [isShow, setIsShow] = useState(false);
    const [array, setArray] = useState<String[]>([]);
  
    //第一種useState的set函式+1，若寫兩段因為延遲更新關係，第二段不會被執行，可想成下一段蓋掉了第一段
    // const handleClick = (e: React.MouseEvent) => {
    //   setCount(count+1);
    //   setCount(count+1);
    // }
  
    //下列setCount使用function更新參數值
    //每次setCount的count會取得前一個狀態值，因function會return count+1，所以可以進行連續計算
    // const handleClick = (e: React.MouseEvent) => {
    //   setCount((count: number) => {return count+1})
    //   setCount((count: number) => {return count+1})
    // }
  
    const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
    }
  
    const handleIsShow = useCallback((e: React.MouseEvent) => {
      setIsShow((previsShow) => {
        return !previsShow;
      })
    },[isShow]);
  
    const handleAdd = useCallback((e: React.MouseEvent) => {
      setArray((prevArray) => {
        const newArray = [...prevArray, text];
        return newArray;
      })
    },[text]);
    
    return {text, isShow, array, handleText, handleIsShow, handleAdd}
  }