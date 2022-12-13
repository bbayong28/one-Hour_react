import React, { useState } from "react";


const Counter = () => {
  //num : (0)의 기본값 = const num = 0;
  //setNum : num이라는 변수에 대한 세터함수? , 앞의 값을 세팅할 수 있는 세터함수
  const [num, setNum] = useState(0);
  const increase = () => { 
    setNum(num + 1)
  } 
  const decrease = () => { 
    setNum(num - 1)
  } 
  

  return (  
  <div>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      <p>{num}</p>
    </div>
  )
}

export default Counter;