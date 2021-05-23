import React, {useRef} from 'react';

interface TodoFormProps {
  onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = props => {
 // const [title, setTitle] = useState<string>('')
  const ref = useRef<HTMLInputElement>(null)
  //const changeHandler = (event: React.ChangeEvent<HTMLInputElemen
  //  setTitle(event.target.value)
  //}

  const keyPressHander = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(ref.current!.value)
      ref.current!.value = ''
      //setTitle('')
      //console.log({ changeHandler })
    }
  }

    return (
      <div className="Input-file">
        <label htmlFor="title" className="active mf2">What do  you want to do?</label>
        <input
          //onChange={ref}
         // value={title}
          ref={ref}
          type="text"
          id="title"
          placeholder="what do you want to do"
          onKeyPress={keyPressHander}>
        </input>

      </div>
    )
  }
