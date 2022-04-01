import React, { useState, useEffect } from 'react';

const Video = (props) => {
    const [question, setquestion] = useState("");
    const [comment, setComment] = useState("");
    const e = props.vd;
    const sendComment = props.sendComment;
    const index = props.index;

    const getQuestion = async() => {
        const res = await fetch(`http://localhost:3010/questions/${e.questionId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();
        if (res.status === 200) {
            setquestion(data);
        }
    };

    const makeComment = async(event) => {
        event.preventDefault();
        await sendComment(comment, index);
        event.target.reset();
    };

    useEffect(() => {
        getQuestion();
    }, []);
    return (
        <div className="row d-flex align-items-center justify-content-center">
            <div className="col">
                <div className="card" style={{backgroundColor: '#1f3042'}}>
                    <div className="d-flex justify-content-between p-2 px-3">
                        
                    </div> 
                    <video className="img-fluid" controls>
                        <source src={e.src} />
                    </video>
                    <div className="p-2">

                        <div className='question'>
                        <p style={{textAlign: 'start'}}><strong style={{display: 'inline-block', marginRight: '20px'}}>Question: </strong>{question.question}</p>
                            
                        </div>
                        <hr />
                        <div className="comments">
                            <div className="d-flex flex-row mb-2">
                                <div className="d-flex flex-column ml-2"> 
                                <strong style={{textAlign: 'start'}}>Comment</strong>
                                <small className="comment-text">{e.comments}</small>
                                </div>
                            </div>
                            <form className="custom-search" onSubmit={(event) => makeComment(event)}>
                                <input onChange={(event) => setComment(event.target.value)} type="text" class="custom-search-input" placeholder="Enter your comment here" required/>
                                <button className="custom-search-botton" type="submit">Comment</button>  
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video