import styles from './LEDs.module.css'

interface LEDsProps {
  coloursArr: string[]
}

export default function LEDs({ coloursArr }: LEDsProps) {
  if (!coloursArr || coloursArr.length === 0) {
    return (
      <div className={styles['loading']}>
        <div className={styles['loading__dot']} />
        <div className={styles['loading__dot']} />
        <div className={styles['loading__dot']} />
      </div>
    )
  }
  return (
    <div className={styles['leds-colours-container']}>
      <div className={styles['leds-colour-1']} style={{ backgroundColor: coloursArr[0] }} />
      <div className={styles['leds-colour-2']} style={{ backgroundColor: coloursArr[1] }} />
      <div className={styles['leds-colour-3']} style={{ backgroundColor: coloursArr[2] }} />
    </div>
  )
}
