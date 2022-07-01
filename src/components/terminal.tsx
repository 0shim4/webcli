import { KeyboardEvent, useEffect, useRef, useState } from "react"
import styles from "../styles/styles.module.css"

export default function Terminal() {
  const ref = useRef<HTMLInputElement>(null)
  const [text, setText] = useState<string>("")
  const [lines, setLines] = useState<string[]>([
    "webcli",
    "Powered by 0shim4."
  ])
  const ramdomResponse = [
    {
      text: [
        "* Is's Test Message.",
        "* Please enter freely."
      ],
      input: ""
    },
    {
      text: [
        "* I'm speaking.",
      ],
      input: "* Listen to me!"
    }
  ]

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      var response = ramdomResponse[Math.floor(Math.random()*ramdomResponse.length)]
      setLines([...lines, "> " + text])
      if (text.length > 0) {
        setLines([...lines, "> " + text, ...response.text])
      }
      setText(response.input)
    }
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  useEffect(() => {
    if (lines.length > 8) {
      ref?.current?.scrollIntoView()
    }
  })

  return (
    <div className={styles.terminal}>
      {lines.map((line, index) => <input
        readOnly={true}
        key={String(index)}
        value={line}
        className={styles.displayLine}
      />)}
      <div className={styles.line}>
        <input
          readOnly={true}
          value={"> "}
          className={styles.arrow}
        />
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
    </div>
  )
}