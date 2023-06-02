import { useRef, useState, useEffect } from "react";
import axios from '../api/axios';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const UserAdd = (props) => {
    const {onAdd} = props

    const errRef = useRef('');
    const user = useRef('')
    const firstname = useRef('')
    const lastname = useRef('')
    const pwd = useRef('')
    const roles = useRef('')
    const intupAvatarRef = useRef(null)

    const [validName, setValidName] = useState(false);
    const [validPwd, setValidPwd] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    //const[roles,setRoles] = useState('')   

  
    //const [imageUrl,setImageUrl] = useState('')

    const formData = new FormData()

    useEffect(() => {
        setValidName(USER_REGEX.test(user.current));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd.current));
    }, [pwd])


    const handleChangeFile = async(event) => {
        try{       

            formData.append('image',event.target.files[0])

            //const formData = new FormData()
            // const {data} = await axios.post('/upload', formData)
            // setImageUrl(data.url)
            // console.log(data)
        }catch(err){
            console.warn(err)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        //if button enabled with JS hack
        const v1 = USER_REGEX.test(user.current);
        const v2 = PWD_REGEX.test(pwd.current);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }     

        const newUser = {
            user:user.current, 
            pwd:pwd.current,
            firstname:firstname.current,
            lastname:lastname.current,
            roles:roles.current
            //,imageUrl
        }        
        
        formData.append('text',formData.append('text', JSON.stringify(user)))
        try {
            const response = await axios.post(REGISTER_URL,
                newUser,
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response))

            //clear state and controlled inputs
            firstname.current='';
            lastname.current='';
            pwd.current='';
            user.current='';
            user.roles='';
            
            //update Users
            onAdd(newUser)
            
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg(' Failed')
            }
          
        }

    }
    return (     
            <section style={{width:'1200px', margin:"0 auto"}}>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1>Create new user</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">
                        Username:
                    </label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Enter Username"
                        autoComplete="off"
                        value={user?.current.value}
                        onChange={(e) => (user.current = e.target.value)}
                        required                       
                    />   
                    <br/>
                    <label htmlFor="firstname">
                        Firstname:
                    </label>
                    <input
                        type="text"
                        id="firstname"
                        placeholder="Enter Firstname"
                        autoComplete="off"
                        onChange={(e) => (firstname.current=e.target.value)}
                        value={firstname.current.value}
                        required                       
                    />   
                    <br/>
                    <label htmlFor="lastname">
                        Lastname:
                    </label>
                    <input
                        type="text"
                        id="lastname"
                        placeholder="Enter Lastname"
                        autoComplete="off"
                        onChange={(e) => (lastname.current=e.target.value)}
                        value={lastname.current.value}
                        required                       
                    /> 
                    <br/>  
                    <label htmlFor="password">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter Password"
                        autoComplete="off"
                        onChange={(e) => (pwd.current = e.target.value)}
                        value={pwd.current.value}
                        required                       
                    />   
                    <br/>
                    <label htmlFor="roles">
                        Role:
                    </label>
                    <select 
                    id="roles" 
                    name="roles" 
                    defaultValue="Enter Role"
                    onChange={(e)  => (roles.current=e.target.value)}>                       
                        <option hidden>Enter Role</option>
                        <option>Admin</option>        
                        <option>Editor</option>        
                    </select>
                    <br/>  
                    <label htmlFor="user_image">
                        Avatar:
                    </label>
                    <button 
                    className="user_image_btn"
                    onClick={()=>intupAvatarRef.current.click()}>Load avatar
                    </button>
                    <input
                        hidden
                        type="file"
                        id="user_image"
                        onChange={handleChangeFile}                                        
                    />  
                    <br/>
                    <button type="submit">Create user</button>
                </form>                   
            </section>
        
    )
}

export default UserAdd
