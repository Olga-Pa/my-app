import React, {useState} from 'react';

interface TodoFormProps {
  onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = props => {
  const [title, setTitle] = useState<string>('')

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const keyPressHander = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(current!.value)
      setTitle('')
      console.log({ changeHandler })
    }

    return (
      <div className="Input-file">
        <label htmlFor="title" className="active mf2">What do  you want to do?</label>
        <input
          onChange={changeHandler}
          value={title}
          type="text"
          id="title"
          placeholder="what do you want to do"
          onKeyPress={keyPressHander}>
        </input>

      </div>
    )
  }
}