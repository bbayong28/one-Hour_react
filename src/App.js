import React from "react";
import { Routes, Route, Link } from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter"
import Input from "./pages/Input"
import Input2 from "./pages/Input2"

function App() {
  return (
    //html 태그와 유사하지만 html 태그 아님. jsx 문법임 xml이다. 
    <div className="App">
      <nav>{/* 
        html에서 a태그(<a href="/">HOME</a>) = React에서 Link to(<Link to="/">HOME</Link>)*/}
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/counter">Counter</Link> | <Link to="/input">Input</Link> | <Link to="/input2">Input2</Link>
      </nav>
      {/* 화면이 전환되는 페이지 연결 - 브라우저 패스가 바뀔 때마다 어떤ㄷ컴포넌트를 맵핑해서 보여줄지를 라우트라는 태그안에 정의해야함*/}
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/counter" element={ <Counter/> } />
        <Route path="/input" element={ <Input/> } />
        <Route path="/input2" element={ <Input2/> } />
      </Routes>
      
    </div>
  );
}

export default App;
