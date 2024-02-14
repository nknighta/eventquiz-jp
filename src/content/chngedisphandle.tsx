import React, {useState} from 'react';
import { useRouter } from 'next/router';
import { quizlist } from '../content/quiz';

export default function ChngeDispHandle({ children }  : any) {
    const router = useRouter();
    const qid = router.query.id;
    const inputw = router.query.inputw;

    const Input = () => {
        return (
            <div style={{
                height  :'50px',
                width  : '300px',
                border  : '2px solid #00ff00',
                borderRadius  : '50px',
                display  : 'flex',
                justifyContent  : 'center',
                alignItems  : 'center'
            }}>
                <input style={{
                    width  : '90%',
                    height  : '90%',
                    border  : 'none',
                    background  : '#00000000',
                    cursor  : 'none',
                    fontSize  : '30px',
                    color  : '#00ff00',
                    outline  : 'none'
                }}/>
            </div>
        )
    }
    const StoryDisp = () => {
        return (
            <>
                {quizlist.map((quiz) => {
                    if (qid === quiz.id) {
                        return (
                            <button style={{
                                width  : "30vh",
                                height  : "50px",
                                fontSize  : "1.76rem",
                                backgroundColor  : "#00000000",
                                border  : "2px solid #00ff00",
                                outline  : "none",
                                color  : "#00ff00",
                                cursor  : "pointer",
                                borderRadius  : "5px"
                            }}
                                onClick={() => {
                                    router.push(quiz.button.link)
                                }}>
                                {quiz.button.text}
                            </button>
                        )
                    }
                })}
            </>
        )
    };
    return (
        <div style={{
            height  : "80vh",
            padding  : "60px 20px",
            margin  : "60px auto",
        }}>
            {quizlist.map((quiz) => {
                if (qid === quiz.id) {
                    return (
                        <>
                            {quiz.text}
                        </>
                    )
                }
            })}
            <div style={{
                display  : "flex",
                justifyContent  : "center",
                alignItems  : "center",
                height  : "50%",
            }}>
                <StoryDisp />
            </div>
            {inputw == "1" ? (
                <Input/>
            )   : ' '}
        </div>
    )
};
