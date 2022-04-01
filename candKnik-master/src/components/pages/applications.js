import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Video from '../cards/video';

const Applications = () => {
    const { id } = useParams();
    const [applicant, setApplicant] = useState(null);
    const [isExist, setIsExist] = useState(true);

    const getApplicant = async() => {
        const res = await fetch(`http://localhost:3010/applications/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        if (res.status === 200) {
            setApplicant(data);
        }
        else{
            setIsExist(false);
        }
    };

    const sendComment = async(comment, index) => {
        var temp = applicant;
        temp.videos[index].comments = comment;

        const res = await fetch(`http://127.0.0.1:3010/applications/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(temp)
        });

        if (res.status === 200) {
            await getApplicant();
        }
        
    };

    useEffect(() => {
        getApplicant();
    }, []);
    return (
        <main className='px-3'>
            <div className='container'>
                {isExist ?
                    <div className='row'>
                        {applicant ?  
                            applicant.videos.map((e, i) => (
                                <div style={{margin: "30px auto"}} key={i} className="container ">
                                    <Video vd={e} sendComment={sendComment} index={i}/>
                                </div>
                            ))
                            :<div className="spinner-border" style={{margin: 'auto'}} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        }
                    </div>

                    :<div>No application found</div>
                }
            </div>
        </main>
    )
}

export default Applications