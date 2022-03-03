import React, { useState, useRef } from 'react'
import { trpc } from '../utils/trpc'

export default function Register() {
  const inputRef = useRef(null)
  const createUserMutation = trpc.useMutation(['createUser'])
  const handleCreateAccount = async () => {
    const name = inputRef.current.value
    const result = await createUserMutation.mutate({ name })
    console.log({ result })
  }
  return (
    <div className="flex flex-col items-end md:flex-row" style={{ justifyContent: 'center' }}>
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
      <div
        className="divider divider-horizontal max-h-10 xs:hidden md:display"
        style={{ marginTop: 40 }}
      />
      <button className="btn btn-primary" onClick={handleCreateAccount}>
        Enter
      </button>
    </div>
  )
}
