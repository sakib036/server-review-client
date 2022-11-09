import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import MyComment from './MyComment';

const MyReview = () => {
    const { user, logOut } = useContext(AuthContext);

    const [allComment, setAllComment] = useState([]);



    useEffect(() => {
        fetch(`http://localhost:5000/comments?email=${user?.email}`,{
            headers:{
                authorization:`Bearer ${localStorage.getItem('jwt-token')}`
            }
        })
            .then(res => {
                if(res.status===401 ||res.status ===403){
                    logOut()

                }
                return res.json()
            })
            .then(data => setAllComment(data))
    }, [user?.email, logOut])


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
            {(allComment.length<1)?<>
           <div className='h-screen flex justify-center items-center'>
           <h1 className='text-white text-center text-3xl'>You Have No Comment To Show Please Add Comment First</h1>
           </div>
            </>:<>
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
            
            </>}
        </div>
    );
};

export default MyReview;