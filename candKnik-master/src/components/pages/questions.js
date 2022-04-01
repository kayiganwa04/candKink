import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Questions = () => {
    const [quesList, setQuesList] = useState([]);
    const getQuestions = async() => {
        const res = await fetch('http://localhost:3010/questions', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();
        if (res.status === 200) {
            setQuesList(data);
        }
  };

    useEffect(() => {
        getQuestions();
    }, []);
    return (
        <main className="px-3">
            <h3>Questions List</h3>
            <hr />
            <div className="container" style={{ marginTop: "50px" }}>
                <div className="list-group">
                <div className="list-group">
                    {quesList ? 
                        quesList.map((e, i) => (
                            <Link to={`candidate/${e.id}`} key={i} className="list-group-item list-group-item-action" >
                                {e.question}
                            </Link>
                        ))
                    : <></>}

                </div>
                </div>
            </div>
        </main>
    )
}

export default Questions