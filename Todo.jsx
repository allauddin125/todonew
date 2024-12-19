// import {useState,useEffect} from 'react'

// const Todo = () => {
//     const [title,setTitle] = useState('');
//     const [des,setDes] = useState('')
//     const [alltodo,setAlltodo] = useState([])
//     const [edid,setEdit] = useState('')
//     const [tog,setTog] = useState(true)

//     const Add = () =>{
//         if(!title || !des){
//             alert("Plz enter a data")
//         }else if(!tog){
//             setAlltodo(
//                 alltodo.map((d,i)=>{
//                     if(edid=== i){
//                         return {...alltodo,title:title,des:des}
//                     }
//                     return d;
//                 })
//             )
//             setTitle('')
//             setDes('')
//             setTog(true)
//         }else{
//             let data = {
//                 title:title,
//                 des:des
//             }
    
//             let copy = [...alltodo];
//             copy.push(data)
//             setAlltodo(copy)
//             setTitle('')
//             setDes('')
//             localStorage.setItem('todo',JSON.stringify(copy));
//         }
       
//     }

//     const del = (id) =>{
//         let deldata = alltodo.filter((d,i)=>{
//             return id !== i
//         })
//         setAlltodo(deldata)
//     }

//     const edit =(id) =>{
//         let ed = alltodo.find((d,i)=>{
//             return id === i
//         })
//         setTitle(ed.title)
//         setDes(ed.des)
//         setTog(false)
//         setEdit(id)
//     }
//     useEffect(()=>{
//         let save = JSON.parse(localStorage.getItem('todo'));
//         if(save){
//             setAlltodo(save)
//         }
//     },[])
//   return (
//     <div>
//       <input type="text" value={title}  onChange={(e)=>setTitle(e.target.value)}/>
//       <br/>
//       <br/>
//       <input type="text" value={des} onChange={(e)=>setDes(e.target.value)}/>
//       {
//         tog?(
//             <button onClick={Add}>Add</button>
//         ):
//         (
//             <button onClick={Add}>Edit</button>
//         )
//       }
    
//       {
//         alltodo.map((d,i)=>(
//             <div>
//                 <input type="text" value={d.title} />
//                 <br/>
//                 <input type="text" value={d.des} />
//                 <button onClick={()=>edit(i)}>Edit</button>
//                 <button onClick={()=>del(i)}>Delete</button>
//             </div>
//         ))
//       }
//     </div>
//   )
// }

// export default Todo

import {useState} from 'react'

const Todo = () => {
    const [title,setTitle] = useState('')
    const [des,setDes] = useState('')
    const [all,setAll] = useState([])
    const [tog,setTog] = useState(true)
    const [editid,setEditId] = useState('')


    const addItem = () =>{
        if(!tog){
            setAll(
                all.map((d,i)=>{
                    if(editid === i){
                        return {...all, title:title,des:des}
                    }
                    return d
                })
            )
            setTog(true)
            setTitle('')
            setDes('')
        }
        else if(!title || !des){
            alert("PlZ enter the Data")
        }
        else{
            let data = {
                title:title,
                des:des
            }
            let copy = [...all]
            copy.push(data)
            setAll(copy) 
            setTitle('')
            setDes('')
        }  
    }

    const del= (id) =>{
        let newdel = all.filter((d,i)=>{
            return id !== i
        })
        setAll(newdel)
    }

    const update = (id) => {
        let editdata = all.find((d,i)=>{
            return id === i
        })
        setTitle(editdata.title)
        setDes(editdata.des)
        setTog(false)
        setEditId(id)
    }
  return (
    <div>
        <input type="text" value={title}  onChange={(e)=>setTitle(e.target.value)}/>
        <br/>
        <input type="text" value={des} onChange={(e)=>setDes(e.target.value)}/>
        {
            tog?(
                <button onClick={addItem}>Add</button>
            ):(
                <button onClick={addItem}>Edit</button>
            )
        }
       
        <br/><br/>

        <div>
            {
                all.map((d,i)=>{
                    return(
                        <div>
                            <input type="text" value={d.title} />
                            <br/>
                            <input type="text" value={d.des} />
                            <button onClick={()=>update(i)}>Edit</button>
                            <button onClick={()=>del(i)}>Delete</button>
                        </div>
                        
                        
                    )
                })
            }
        </div>
      
    </div>
  )
}

export default Todo
