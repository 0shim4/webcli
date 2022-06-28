import { KeyboardEvent, useRef, useState } from "react"
import styles from "../styles/styles.module.css"

export default function Terminal() {
  const ARROW_TEXT = "> ";
  const ref = useRef<HTMLInputElement>(null);
  const [text, setText] = useState<string>("")
  const [lines, setLines] = useState<string[]>([])

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setLines([...lines, ARROW_TEXT + text])
      if (text === "clear" || text === "cls") {
        setLines([])
      }
      setText("")
    }
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value.substring(2))
  }
    
  return (
    <div className={styles.terminal}>
      {lines.map((line, index) => <input
        readOnly={true}
        key={String(index)}
        value={line}
        className={styles.inputLine}
      />)}
      <input
        ref={ref}
        className={styles.inputLine}
        value={ARROW_TEXT + text}
        onKeyPress={(e) => onKeyPress(e)}
        onChange={(e) => onChange(e)}
        onBlur={(e) => ref.current?.focus()}
        autoFocus={true}
      />
    </div>
    )
}