import React, { useState } from 'react'

function TodoInput(props) {
    const [InputText, SetInputText] = useState('')
    return (
        <div className="input-container">
            <input
                type="text"
                className='input-box-todo'
                placeholder='Enter your Task'
                onChange={e => { SetInputText(e.target.value) }}
                value={InputText}
            />
            <button
                className="add-btn"
                onClick={() => {
                    props.addList(InputText)
                    SetInputText("")
                }}
            >+</button>
        </div>
    )
}

export default TodoInput