import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function Add({ students, setStudents, setIsAdding }) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [grade, setGrade] = useState('');
    const [dateofbirth, setDateOfBirth] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !grade || !dateofbirth) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = students.length + 1;
        const newStudent = {
            id,
            firstName,
            lastName,
            email,
            grade,
            dateofbirth
        }
        students.push(newStudent);
        setStudents(students);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${firstName} ${lastName}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Student</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    ref={textInput}
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="grade">Grade</label>
                <input
                    id="grade"
                    type="number"
                    name="grade"
                    value={grade}
                    onChange={e => setGrade(e.target.value)}
                />
                <label htmlFor="date">Date Of Birth</label>
                <input
                    id="dateofbirth"
                    type="date"
                    name="dateofbirth"
                    value={dateofbirth}
                    onChange={e => setDateOfBirth(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add