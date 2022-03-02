import React, { useState, useRef } from 'react'

export default function Register() {
  const [name, setName] = useState('')
  const inputRef = useRef(null)

  const handleCreateAccount = () => {
    const value = inputRef.current.value
    console.log(inputRef.current)
    console.log('name', value)
  }
  return (
    <div className="flex flex-col items-end md:flex-row">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Your Name</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          ref={inputRef}
        />
      </div>
      <div className="divider divider-horizontal" />
      <button className="btn btn-primary" onClick={handleCreateAccount}>
        Enter
      </button>
    </div>
  )
}
