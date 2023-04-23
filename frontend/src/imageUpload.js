import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import "./app.css";
import React, { useState } from "react";

function ImageUpload (){


    const [image,setImage]= useState('')
    function handleImage(e){

        console.log(e.target.files);
        setImage(e.target.files[0])

    }

    function handlApi(){
        const formData = new FormData()
        formData.append('image,image')
        axios.post('url',formData).then((res) =>{
            console.log(res)
        })
    }
    return(
        <div>
        <input type= "file" name='file' onChange={handleImage} />
        <button onClick ={handlApi} className="uploadbutton">Upload</button>
        </div>
    )
}

export default ImageUpload;