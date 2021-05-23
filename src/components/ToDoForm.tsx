import React from 'react';

export const Todo: React.FC = () => {
  return (
    <div className="Input-file">
    <input type="text" id="title"></input>
    <label htmlFor="title" className="active">what do  you want to do</label>
    </div>
  )
}