import React from 'react'
import { useState } from 'react'
import { user } from '../../database/user'

export default function ShowUser() {
   

  return (
    <div>
        <button
        onClick = {() => {
            console.log(user)
        }}
        >click</button>
        hello
        </div>
  )
}
