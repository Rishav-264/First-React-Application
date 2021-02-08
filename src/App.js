import Header from './components/Header';
import Tasks from './components/Tasks';
import Intro from './components/Intro';
import IntroForm from './components/IntroForm';
import { useState } from 'react';



function App() {
const [name,setName] = useState('');
const [greeting,setGreeting] = useState(false);
const [tasks,setTasks] = useState(
        [
            {
               id:1,
               text:'Drink some water'
            },
            {
               id:2,
               text:'Get some sleep'
            },
            {
               id:3,
               text:'Sorry for something so basic, I was really sleepy'
            }
        ]
    );

  const deleteTask = (id) =>{
    setTasks(tasks.filter((task) => task.id!=id));
  }

  const enterName = (name) => {
    setName(name);
  }

  return (
    <div className = "container" >
      <Intro />
      <IntroForm name={name} enterName={enterName} setName={setName} toggleGreet={()=>{setGreeting(!greeting)}}/>
      {greeting && <Header name={name}/>}
      {greeting && tasks.length>0?(<Tasks tasks={tasks} onDelete={deleteTask}/>):('')}
    </div>
  );
}

export default App;
