import { KeyboardEvent, useRef, useState } from "react"
import styles from "../styles/styles.module.css"

export default function Terminal() {
  const ref = useRef<HTMLInputElement>(null);
  const [text, setText] = useState<string>("> ")
  const [lines, setLines] = useState<string[]>([])

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setLines([...lines, text])
      setText("> ")
    }
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
    
  return (
    <div className={styles.terminal}>
      {lines.map((line, index) => <p key={String(index)}>{line}</p>)}
      <input
        ref={ref}
        className={styles.inputLine}
        value={text}
        onKeyPress={(e) => onKeyPress(e)}
        onChange={(e) => onChange(e)}
        onBlur={(e) => ref.current?.focus()}
        autoFocus={true}
      />
    </div>
    )
}