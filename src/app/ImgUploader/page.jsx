'use client'
import { useState, useEffect, useRef } from "react";
import './img.css'
//import axios from 'axios';
const baseurl = 'http://127.0.0.1:5000/';
const ImgInp = () => {
    const [file, setFile] = useState(null);
    const [cap, setCap] = useState();
    const dropArea = useRef();
    const dragText = useRef();
    const handleChange = (e) => {
        setFile(e.target.files[0]);
        dropArea.current.classList.add("active");
    }
    const fileUpload = () => {
        let validExtensions = ["image/jpeg", "image/jpg", "image/png"];
        if (validExtensions.includes(file.type)) {
            let formData = new FormData();
            formData.append(
                "newpic",
                file,
                file.name
            );
            axios.post(baseurl + "api/newpic", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(res => { setCap(res.data) })
                .catch(err => window.alert(err))
        } else {
            alert("This is not an Image File!");
            fileRemove();
        }
    };
    const fileRemove = () => {
        setFile(null);
        dropArea.current.classList.remove("active");
        dragText.current.textContent = "Drag & Drop to Upload File";
    }
    useEffect(() => {
        const dropArea = document.querySelector(".drag-area"),
            dragText = dropArea.querySelector("header");
        dropArea.addEventListener("dragover", (event) => {
            event.preventDefault();
            dropArea.classList.add("active");
            dragText.textContent = "Release to Upload File";
        });
        dropArea.addEventListener("dragleave", () => {
            dropArea.classList.remove("active");
            dragText.textContent = "Drag & Drop to Upload File";
        });
        dropArea.addEventListener("drop", (event) => {
            event.preventDefault();
            setFile(event.dataTransfer.files[0])
        });
    }, [])
    return (
        <div>
            <div className="input_wrap">
            <div className="input_area">
                <div class="drag-area" ref={dropArea}>
                    {file ?
                        <img src={URL.createObjectURL(file)} alt="image"></img>
                        : <>
                            <div class="icon"><i class="fas fa-cloud-upload-alt"></i></div>
                            <header ref={dragText}>Drag & Drop to Upload File</header>
                            <span>OR</span>
                            <button onClick={(e) => e.target.nextSibling.click()}>Browse File</button>
                            <input
                                name="pic"
                                className='drag_input'
                                onChange={handleChange}
                                type="file"
                                hidden
                            />
                        </>
                    }
                </div>
                <div>
                    <button onClick={fileUpload} className='upload'>Generate Caption</button>
                    <button onClick={fileRemove} className='remove_selection'>Remove Selection</button>
                </div>
            {file &&
                <div>
                    {file.lastModified}
                    <br />
                    {file.name}
                    <br />
                    {file.size}
                    <br />
                    {file.type}
                    <br />
                    {cap && cap}
                </div>
            }            
            </div>
            </div>
        </div>
    )
}
export default ImgInp;