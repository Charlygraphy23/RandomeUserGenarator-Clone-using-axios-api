import React,{useState,useEffect} from 'react';
import axios from 'axios';

const HomePageComponent=() => {

    const [results , setResults] = useState({});
    const [message , setMessage] = useState('');
    const [title,setTitle] = useState('');

    useEffect( ()=>{
            axios.get('https://randomuser.me/api/').then ( response => {
                console.log(response.data.results[0]);
                setResults(response.data.results[0]);

                setMessage("Hi, My name is");
           setTitle(response.data.results[0].name?.title+" "+response.data.results[0].name.first+" "+response.data.results[0].name.last)
    });
    },[])

    const handleMouse= (event) => {

        if(event.target.id === 'name'){
           setMessage("Hi, My name is");
           setTitle(results.name?.title+" "+results.name.first+" "+results.name.last)
        }

        else if(event.target.id === 'mail'){
            setMessage("Hi, My mail is");
            setTitle(results.email)
         }

         else if(event.target.id === 'dob'){
            setMessage("Hi, My Date of Birth is");
            setTitle(results.registered?.date)
         }

         else if(event.target.id === 'address'){
            setMessage("Hi, My address is");
            setTitle(results.location?.postcode+" "+results.location.state+" "+results.location.country)
         }

         else if(event.target.id === 'no'){
            setMessage("Hi, My number is");
            setTitle(results.phone)
         }

         else if(event.target.id === 'pass'){
            setMessage("Hi, My password is");
            setTitle(results.login.password)
         }
    }




  return (
    <div className="container">
            <div style={{width: "50%"}} className="offset-md-3">
                    <div className="card mt-5">
                    <div className="card-body">
                    <img width="150" height="150" src={results.picture?.thumbnail} className="image img-thumbnail rounded-circle border-danger" alt=""/>
                        <p className="mt-2">{message}</p>
                            <h4 className="card-title">{title}</h4>
                        <div className="row justify-content-center mt-4" onMouseOver={handleMouse}>
                                <button className="btn btn-primary m-3" id='name'><i className="fa fa-address-book fa-2x" aria-hidden="true"></i></button>
                                <button className="btn btn-primary m-3" id='mail'><i className="fa fa-envelope fa-2x" aria-hidden="true"></i></button>
                                <button className="btn btn-primary m-3" id='dob'><i className="fa fa-birthday-cake fa-2x" aria-hidden="true"></i></button>
                                <button className="btn btn-primary m-3" id='address'><i className="fa fa-map-marker fa-2x" aria-hidden="true"></i></button>
                                <button className="btn btn-primary m-3" id='no'><i className="fa fa-phone fa-2x" aria-hidden="true"></i></button>
                                <button className="btn btn-primary m-3" id='pass'><i className="fa fa-unlock-alt fa-2x" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
}

export default HomePageComponent;
