import React from 'react';
import './App.css';
import Hello from './Components/Hello';
import LifecycleA from './Components/LifecycleA';
// import Form from './Form';
// import StyleSheet from './Components/StyleSheet';
// import InLine from './Components/InLine';
// import NameList from './Components/NameList';
// import Counter from './Components/Counter';
// import Message from './Components/Message';
// import FunctionClick from './Components/FunctionClick';
// import ClassClick from './Components/ClassClick';
// import EventBind from './Components/EventBind';
// import ParentComponent from './Components/ParentComponent';
// import UserGreeting from './Components/UserGreeting';
// import './appStyle.css'
// import styles from './appStyle.module.css'

function App() {
  return (
    <div className="App">
      <Hello name="Nigga" />

      {/* <Form></Form> */}
      {/* <StyleSheet primary={true}></StyleSheet> */}
      {/* <h1 className='error'>Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* <InLine></InLine> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <Counter></Counter> */}
      {/* <Message/> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <ClassClick></ClassClick> */}
      {/* <EventBind></EventBind> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <NameList></NameList> */}
      <LifecycleA></LifecycleA>

    </div>
  );

}

export default App;
