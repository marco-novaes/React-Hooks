import React, {createContext, useContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { useFetch } from './useFetch';


function App({login}){
const {loading, data, error} = useFetch(
  `https://api.github.com/users/${login}`
);
if(loading) return <h1>loading...</h1>;
if(error) return (<pre>{JSON.stringify(error, null, 2)}</pre>
);
return (
  <div>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
);
return (
  <div>
    <img src={data.avatar_url} 
    alt={data.login}/>
 <div>
    <h1>{data.login}</h1>
    {data.name && <p>{data.name}</p>}
    {data.location && <p>data.location</p>}
  </div>
  </div>
 

);
}


 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App login="marco-novaes" />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




 //****************Utilizando useState para setar valores e muda-los
  // const [name, setName] = useState("Jan");
  // const [admin, setAdmin] = useState(false);

  // useEffect(() => {
  //   console.log(`Celebrate ${name}`);
  // },[name]);

  // useEffect(() => {
  //   console.log(
  //     `The user is: 
  //     ${admin ? "admin" : "not admin"}`)
  // },[admin])

  // return (
  //   <section>
  //     <p>Congratulations {name}!</p>
  //     <button onClick={()=> setName ("Will")}>Change Winner</button>
  //     <p> {admin ? "logged in" : "not logged in"}</p>
  //     <button onClick={() => setAdmin(true)}>Log in</button>
  //   </section>
  // )



  //******Clique mudando utilizando useState
  // const [
  //   status,
  //   setStatus
  // ] = useState("Not Delivered");
  // return(
  //   <div>
  //     <h1>The package is:{status}.</h1>
  //     <button onClick={() => setStatus("Delivered")}>
  //       Deliver
  //     </button>
  //   </div>
  // );

  //******Botão CheckBox */
  // const [checked, setChecked] = useState(false);
  // return (
  //   <div>
  //     <input
  //       type="checkbox"
  //       value={checked}
  //       onChange={()=> setChecked((checked) => !checked)}
  //     />
  //     <p>{checked ? "checked" : "not checked"}</p>
  //   </div>
  // )

  //BOTÃO CHECKBOX com USEREDUCER
  // const [checked, toggle] = useReducer(
  //   (checked) => !checked,
  //   false
  // );
  // return (
  //   <>
  //     <input
  //       type="checkbox"
  //       value={checked}
  //       onChange={toggle}
  //     />
  //     {checked ? "checked" : "not checked"}
  //   </>
  // )





  //import {FaStar} from 'react-icons/fa';

//******Utilizando ícones react-icons para criar um rate de estrelas
// const createArray= (length) => [
//   ...Array(length)
// ];
 
// function Star({selected = false, onSelect}){
//   return ( 
//   <FaStar color={selected ? "red" : "gray"}
//   onClick={onSelect}
//   />
//   );
// }

// function StarRating({totalStars = 5}){
//   const [
//     selectedStars, 
//     setSelectedStars
//   ] = useState(0);
//   return <>
//   {createArray(totalStars).map((n,i) => (
//     <Star key={i} 
//     selected={selectedStars > i} 
//     onSelect={()=> setSelectedStars(i + 1)}
//     />
//   ))}
//   <p>{selectedStars} of {totalStars}</p>
//   </>
// }


//Fetching data com useEffect
// const [data, setData] = useState([]);

//  useEffect(() =>{
// fetch(`https://api.github.com/users`)
// .then((response) => response.json())
// .then(setData);
 
// },[]);

// if(data) {
//   return (
//     <div>
//     <ul>
//       {data.map(user => (
//         <li key={user.id}>{user.login}</li>
//       ))}
//     </ul>
//     <button onClick={() => setData([])}>Remove Data</button>
//     </div>
//   )
// }

//  return <p>No Users</p>


  //UseREDUCER
//   const [number, setNumber] = useReducer((number, newNumber) => number + newNumber, 0);
//  return <h1 onClick={()=> setNumber(1)}>{number}</h1>
// }

//DISPATCHING ACTIONS WITH USEREDUCER
// const initialState = {
//   message: "hi"
// };

// function reducer(state, action){
//   switch(action.type){
//     case "yell":
//       return {
//         message: `HEY! I JUST SAID ${state.message}`
//       };
//       case "whisper":
//         return {
//           message: `excuse me, I just said ${state.message}`
//         };
//   }
// }
// const [state, dispatch] = useReducer(
//   reducer,
//   initialState
// );
// return (
//   <>
//    <p>Message: {state.message}</p>
//    <button onClick={()=> dispatch({type:"yell"})}>YELL</button>
//    <button onClick={()=> dispatch({type:"whisper"})}>whisper</button>
//   </>
// )

//MANAGING FORM INPUTS WITH USEREF
// const sound = useRef();
//   const color = useRef();

//   const submit = (e) => {
//     e.preventDefault();
//     const soundVal = sound.current.value;
//     const colorVal = color.current.value;
//     alert(`${soundVal} sounds like ${colorVal}`);
//     sound.current.value = "";
//     color.current.value = "";

//   };

//   return (
//     <form onSubmit={submit}>
//       <input ref={sound} type="text" placeholder='Sound...'/>
//       <input ref={color} type="color"/>
//       <button>ADD</button>
//     </form>
//   )

//CREATING CONTROLLED COMPONENTS WITH USESTATE
// const [sound, setSound] = useState("");
// const [color, setColor] = useState("#000000");


// const submit = (e) => {
//   e.preventDefault();
//   alert(`${sound} sounds like ${color}`);
//   setSound("");
//   setColor("#000000");

// };

// return (
//   <form onSubmit={submit}>
//     <input value={sound} type="text" placeholder='Sound...' onChange={(e) => setSound(e.target.value)}/>
//     <input value={color} type="color" onChange={(e) => setColor(e.target.value)}/>
//     <button>ADD</button>
//   </form>
// )


//REUSING form logic with custom HOOKS
// const [titleProps, resetTitle] = useInput("");
// const [colorProps, resetColor] = useInput("#000000");


// const submit = (e) => {
//   e.preventDefault();
//   alert(`${titleProps.value} sounds like ${colorProps.value}`);
//   resetTitle();
//   resetColor();

// };

// return (
//   <form onSubmit={submit}>
//     <input {...titleProps} type="text" placeholder='Sound...' />
//     <input {...colorProps} type="color" />
//     <button>ADD</button>
//   </form>
// )

//CREATING a CUSTOM HOOK WITH CONTEXT
// const TreesContext = createContext();

// export const useTrees = () => useContext(TreesContext);

// const trees = [
//   {id:1, type: "Maple"},
//   {id:2, type: "Oak"},
//   {id:3, type: "Family"},
//   {id:4, type: "Component"}
// ];
