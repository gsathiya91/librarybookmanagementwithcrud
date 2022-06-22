import React, { useEffect, useState } from "react";
import axios from 'axios';
import './ReadBook.css';
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

function AddBooks() {
    const [book, setBook] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    const [bookName, setBookName] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [publishedYear, setPublishedYear] = useState('');

    useEffect(() => {
        const getBookDetails = async () => {
            var response = await axios.get('https://62136ddcf43692c9c604517b.mockapi.io/users');
            setBook(response.data)
        }
        getBookDetails();
    }, []);

    useEffect(() => {
        updateBook();
    }, [])
    const updateBook = async () => {
        const result = await axios.get(`https://62136ddcf43692c9c604517b.mockapi.io/users/${id}`);
        setBookName(result.data.bookName);
        setAuthorName(result.data.authorName);
        setPublishedYear(result.data.publishedYear);
    };

    const deleteUser = async id => {
        await axios.delete(`https://62136ddcf43692c9c604517b.mockapi.io/users/${id}`);
        updateBook();
    }
   

    return (
        <div className="container">
            <h3 className="heading"> List of Books</h3>
            <Button class="btn btn-info add" onClick={() => navigate("/users/CreateBook")}>Add Book</Button>
            <table class="table border shadow">
                <thead className="head">
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Book Name</th>
                        <th scope="col">Author Name</th>
                        <th scope="col">Published Year</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {book.map((data, index) => (
                        <tr key={data.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{data.bookName}</td>
                            <td>{data.authorName}</td>
                            <td>{data.publishedYear}</td>
                            <td>
                                <Button
                                    type="button"
                                    class="btn btn-info"
                                    onClick={() => navigate(`/users/editbook/${data.id}`)}
                                >Edit</Button>&nbsp;&nbsp;
                                <Button
                                    type="button"
                                    class="btn btn-danger"
                                    onClick={() => deleteUser(data.id)}
                                >Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AddBooks;