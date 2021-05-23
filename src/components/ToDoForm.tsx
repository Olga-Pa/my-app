import React, {useState} from 'react';

export const Todo: React.FC = () => {
  const [title, setTitle] = useState<string>('')
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }
  return (
    <div className="Input-file">
      <label htmlFor="title" className="active mf2">What do  you want to do?</label>
      <input
        onChange={changeHandler}
        value={title}
        type="text"
        id="title"
        placeholder="what do you want to do">
        </input>

    </div>
  )
}