import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import {db} from './firebase-config'
import { set, ref, onValue, remove, update } from "firebase/database";
import Toggle from 'react-toggle';

function App() {

  const [data, setData] = useState([])
  const [state, setIsOn] = useState(false)

  const getAll = async () => {
		try {
			onValue(ref(db), async (snapshot) => {
	
				const data = await snapshot.val()
				
				if(data !== null){
					setData(data)
					return data
				}
			})
		} catch (error) {
			alert(error)
		}
	}

	useEffect(() => {
		getAll()
	}, [])

  console.log(data)

  let leddata = {
    LED: state
}

  const toggleHandler = () => {
    setIsOn(!state)
    update(ref(db, `/`), leddata);
}

  return (
    <div className="App">
      <p>Gas lvl: {data.Gas}</p>
      <p>Humidity: {data.Humidity}</p>
      <p>Temperature: {data.Temperature}</p>
      <p>Waterlvl: {data.Waterlvl}</p>
      <p>LED: {data.LED}</p>

      
      <button onClick={toggleHandler}>
        Control led
      </button>
           

       


    </div>
  );
}

export default App;
