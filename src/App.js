import logo from './logo.svg';
import './App.css';
import firebase from './firebase';
import { useEffect } from 'react';
import { messaging } from './firebase';
import { getToken } from 'firebase/messaging';

function App() {
async function requestPermission(){
  const permission=await Notification.requestPermission();
  if(permission=== 'granted'){
const token =await getToken(messaging, {vapidKey: 'BPgeKuKeV2NGMiyAVkko6uDys26C3kmBYRZKJ6SYc4yVFVd9mKbIZGdMtdF5Cir6h2KoFhbxVFgGyH85fbgJusQ'});
console.log("Token Gen", token);
  }else if(permission==='denied'){
    alert('You are denied for the notificatiion');
  }
}

useEffect(()=>{
  requestPermission();
},[]);


  return (
    <div>
      <h1>firebase push notificatiion demo!!!</h1>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
    </div>
  );
}

export default App;
