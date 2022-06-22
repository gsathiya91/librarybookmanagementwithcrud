import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Button } from "@mui/material";
import './AddBook.css';

function CreateBook() {
    const navigate = useNavigate();
 
    const [bookName, setBookName] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [publishedYear, setPublishedYear] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        await axios.post(`https://62136ddcf43692c9c604517b.mockapi.io/users`,{
            bookName,
            authorName,
            publishedYear
        });
        navigate("/adminpage");
    };
   
    return (
        <div>
            <div className="box">
                <h3>Add book</h3>
                <form className="form" >
                    <div>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Enter the Book Name"
                            name="bookName"
                            value={bookName}
                            onChange={(e) => setBookName(e.target.value)}
                        />
                    </div><br />
                    <div>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Enter the Author Name"
                            name="authorName"
                            value={authorName}
                            onChange={(e) => setAuthorName(e.target.value)}
                        /> </div><br />
                    <div>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Enter the Published Year"
                            name="publishedYear"
                            value={publishedYear}
                            onChange={(e) => setPublishedYear(e.target.value)}
                        />
                    </div><br />

                    <Button 
                    type="submit" 
                    class="btn btn-success add" 
                    onClick={handleSubmit}
                    >Submit</Button>

                </form>
            </div>
        </div>
    )
}

export default CreateBook;