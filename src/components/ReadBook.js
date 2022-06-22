import React, { useEffect, useState } from "react";
import './ReadBook.css';
import axios from 'axios';
import NavBar from "./NavBar";

function ReadBook() {

    const [book, setBook] = useState([]);

    useEffect(() => {
        const getBookDetails = async () => {
            var response = await axios.get('https://62136ddcf43692c9c604517b.mockapi.io/users');
            setBook(response.data)
        }
        getBookDetails();
    }, []);
    return (
        <>
            <NavBar />
            <div className="container">
                <h3 className="heading"> List of Books</h3>
                <table class="table border shadow">
                    <thead className="head">
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Book Name</th>
                            <th scope="col">Author Name</th>
                            <th scope="col">Published Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {book.map((data, index) => (
                            <tr key={data.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{data.bookName}</td>
                                <td>{data.authorName}</td>
                                <td>{data.publishedYear}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ReadBook;