<<<<<<< HEAD
import React, { useRef } from 'react'
=======
import React, {useRef} from 'react';
>>>>>>> 7adc6b4192478d9e7b82afa786e1cf0f81813c5f

interface TodoFormProps {
  onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = props => {
<<<<<<< HEAD
  // const [title, setTitle] = useState<string>('')
  const ref = useRef<HTMLInputElement>(null)

  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value)
  // }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(ref.current!.value)
      ref.current!.value = ''
      // console.log(title)
      // setTitle('')
    }
  }

  return (
    <div className="input-field mt2">
      <input
        // onChange={changeHandler}
        // value={title}
        ref={ref}
        type="text"
        id="title"
        placeholder="Type what you want to do"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        To do
        </label>
    </div>
  )
}


=======
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
>>>>>>> 7adc6b4192478d9e7b82afa786e1cf0f81813c5f
