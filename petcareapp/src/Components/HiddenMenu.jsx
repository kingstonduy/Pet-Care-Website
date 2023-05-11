import React, { useState } from 'react';




const HiddenMenu = () => {

    const [checked, setChecked]= useState([])
    console.log(checked)
    const courses = [
        {
            id: 1,
            name: 'HTML CSS'
        },
        {
            id: 2,
            name: 'Javascript'
        },
        {
            id: 3,
            name: 'ReactJs'
        }
    ]

    const  doSth = () =>{

    }

    const handleChange = (course) => {
        setChecked(prev =>{
            const isChecked= checked.some((item) => item.id === course.id)
            if(isChecked){
                return  checked.filter(item => item.id !== course.id)
            }
            else{
                return [...prev, course]
            }
        })
        
    }

    
    
    return(
        <>
            <div style={{padding: 32}}>
                {
                    courses.map(
                        course => (
                            <div key={course.id}>
                                <input
                                    type='checkbox'
                                    checked={checked.some((item) => item.id === course.id)}
                                    onChange={() => handleChange(course)}
                                >
                                </input>
                                {course.name}

                            </div>
                        )
                    )
                }
            </div>
        </>
    );
};

export default HiddenMenu;
