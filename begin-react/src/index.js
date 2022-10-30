import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card'
import Collapse from './components/Collapse';

// const names=["aaa","bbb","ccc"]

// function App(){
//   return( <div>
//     {names.map(name=>(<h1>{name}</h1>))}
//   </div>
// )};

// className App extends React.Component{
// render(){
//   return <h1>className deneme</h1>
// }
// }

// function App(){
//   const str1="Click";
//   const str2="Me";
//   return(
//     <div>
//       <button tabIndex="3" classNameName="jsxclassName" type="button" style={{padding:'10px',color:'white',backgroundColor:'blue'}}>{str1.concat(str2)}</button>
//     </div>
//   )
// }

const App = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className="card-group w-100">
          <div className='col'>
            <Collapse href="collapseExample1">
              <Card cardText="denemetext1" updatedTime="one hour" image="https://picsum.photos/id/1/200/200" />
            </Collapse>
          </div>
          <div className='col'>
            <Collapse href="collapseExample2">
              <Card cardTitle="deneme2" updatedTime="one hour"
                image="https://picsum.photos/id/2/200/200" />
            </Collapse>
          </div>
          <div className='col'>
            <Collapse href="collapseExample3">
              <Card cardTitle="deneme3" cardText="denemetext3" updatedTime="one hour"
                image="https://picsum.photos/id/3/200/200" />
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
