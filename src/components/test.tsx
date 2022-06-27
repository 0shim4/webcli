import { useState } from "react"

export default function Test() {
    
  const [text, setText] = useState<string>('')
  const [lines, setLines] = useState<string[]>([])

  const onKeyPress = (key: string) => {
      if (key === 'Enter') {
        setLines([...lines, text])
        setText('')
      }
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
    
  return (
    <div>
      {lines.map((line, index) => <p key={index + ''}>{line}</p>)}
      <input
        value={text}
          onKeyPress={(e) => onKeyPress(e.key)}
          onChange={(e) => onChange(e)}
      />
    </div>
    )
}