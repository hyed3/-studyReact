/*islint-disable */
import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';

function App() {

  let [a,b]=[10,100]; /* a라는 변수에 10 b라는 변수에 100 */
  let [modal,modal변경] =useState(false); //모달창을 켜고 닫는 스위치
  let [누른제목,누른제목변경]=useState([0]);
  let [입력값,입력값변경] = useState(''); // ' ' = 빈 문자열

  let posts = '강남 고기 맛집';
  let style1 ={color:'blue',fontSize:'30px'}

  let [글제목,글제목변경]= useState(['남자 코트 추천','강남 우동맛집','파이썬 독학']);  /* [a,b] -> a에는 남자코트추천,b에는 a를 수정할수있는 변수 */
  let [따봉,따봉변경] =useState([0,0,0]);



  function 반복된UI(){  //for문 쓰는 법

    var 어레이 = [];

    for(var i =0; i<3; i++){
      어레이.push(<div>안녕</div>);
    }
    return 어레이
  }

  /* { //함수를 사용하려면
    반복된UI()
  } */


  function 제목추가() {
    var array5 = [...글제목];
    array5.unshift(입력값);
    var array7 = [...따봉];
    array7.unshift(0);
    따봉변경(array7);
    글제목변경(array5);
     
   }

  function 함수(){
    return 100
  }

  return (
    <div className="App">
      <div className="black-nav"> {/* 태그에 class를 주고 싶으면? className */}
        <div>개발 Blog</div> 
      </div>
     

    {/* if 대신 삼항연산자를 사용한다 */}
   {/*  { //리액트에서 UI를 만들때  state 데이터를 이용한다
      modal==true
      ? <Modal/>
      : null //텅빈 html을 뜻함
    } */}

     <button onClick={ ()=>{ modal변경(!modal) } }>열고닫기</button><p></p>
     <button onClick={ ()=>{ 누른제목변경(0) } }>버튼1</button><p></p>
     <button onClick={ ()=>{ 누른제목변경(1) } }>버튼2</button><p></p>
     <button onClick={ ()=>{ 누른제목변경(2) } }>버튼3</button><p></p>

     {
       modal ===true
       ? <Modal 글제목={글제목} 누른제목={누른제목}></Modal> //자식컴포넌트,부모에서 자식한테 props 해야함
       : null
     }

    
     { //map 함수: 자바스크립트에서 쓸 수 있는 array 
       // var 어레이 = [2,3,4]
       // 어레이.map(function(a){
       //  return a*2
       //})

       글제목.map(function(글,i){
         return (
           <div className="list" key={i}>
          <h3 onClick={ ()=>{ 누른제목변경(i)} }>{글}
           <span onClick={()=>{ 
             var array3 = [...따봉];
             array3[i] = array3[i]+1;
             따봉변경(array3);
          } }>👍</span>{따봉[i]}</h3>
              <p>2월 17일 발행</p>
              <hr/>
            </div>)           
       })
     }

     <div className="publish">
       <input onChange={ (e)=>{ 입력값변경(e.target.value) } }/>
       <button onClick={ 제목추가 }>저장</button>  
     </div>

     
   
        

     {/* <input onChange={ (e)=>{ 입력값변경(e.target.value) } } /> */}  {/* e.target : 현재 이벤트가 동작한곳 */}
     
        
    </div>
  );

 

}





function Modal(props){ //props를 받아야함
  return(
    <>
    <div className="modal">
    <h2>{props.글제목[props.누른제목]}</h2>
    <p>날짜</p>
    <p>상세내용</p>
    </div>
    </> //의미없는  div 사용하기 싫으면 프래그먼트
  )
}


export default App;
