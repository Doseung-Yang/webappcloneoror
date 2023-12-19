// src/App.js
import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
     
      <header className="App-header">
        <img src='./img/or.png' alt='logo' className='logo-img'></img>
      </header>
      <main className="App-main">
        <img src='./img/story1.jpg' alt='story1' className='story1-img'></img>
        <div className='content'><h2 style={{paddingLeft:15}}>OROR ep.</h2><h6 style={{paddingLeft:15}}>내 선택에 따라 바뀌는 결말 인터랙티브스토리 플랫폼 OROR ep. 나만의 선택<br/>으로 새로운 스토리를 만들어보세요!.</h6><br/></div>
        <img src='./img/story2.jpg' alt='story2' className='story2-img'></img>
        <div className='contents'><br/><br/><h6 style={{paddingLeft:15}}></h6><b>내 선택에 따라 달라지는 인터랙티브 스토리 콘텐츠 플랫폼 OROR<br/>　<br/>매주 업데이트 되는 새로운 스토리를 지금 만나보세요!</b></div>
        <img src='./img/googleplay.png' alt='googleplay' className='google-play'></img>

      </main>
      <footer className="App-footer">
        
      </footer>
    </div>
  );
}

export default App;
