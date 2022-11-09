import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import MyComment from './MyComment';

const MyReview = () => {
    const { user } = useContext(AuthContext);

    const [allComment, setAllComment] = useState([]);



    useEffect(() => {
        fetch(`http://localhost:5000/comments?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setAllComment(data))
    }, [user?.email])


    const handelDeleteComment = (oneComment) => {
        const agree = window.confirm(`Are You Sure You Wont to Delete ${oneComment.title}`);

        if (agree) {
            fetch(`http://localhost:5000/comments/${oneComment._id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remainingComment = allComment.filter(comment => comment._id !== oneComment._id);
                        setAllComment(remainingComment);

                    }
                })

        }

    }


    return (
        <div>
            <h1 className='text-white text-center text-2xl'>You Have {allComment.length} comments</h1>
            <div>
                {
                    allComment.map(oneComment => <MyComment
                        key={oneComment._id}
                        oneComment={oneComment}
                        handelDeleteComment={handelDeleteComment}

                    ></MyComment>)
                }
            </div>

        </div>
    );
};

export default MyReview;