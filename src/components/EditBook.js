import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { Button } from "@mui/material";
import './AddBook.css';

function EditBook() {
    const navigate = useNavigate();
    const {id} = useParams();
  
    const [bookName, setBookName] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [publishedYear, setPublishedYear] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        await axios.put(`https://62136ddcf43692c9c604517b.mockapi.io/users/${id}`,{
            bookName,
            authorName,
            publishedYear
        });
        navigate("/adminpage");
    };

    useEffect(() => {
        updateBook()
    },[])
    const updateBook = async () => {
        const result = await axios.get(`https://62136ddcf43692c9c604517b.mockapi.io/users/${id}`);
        setBookName(result.data.bookName)
        setAuthorName(result.data.authorName)
        setPublishedYear(result.data.publishedYear) 
    }
   
    return (
        <div>
            <div className="box">
                <h3>Edit Book Details</h3>
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
                    >Update</Button>

                </form>
            </div>
        </div>
    )
}

export default EditBook;