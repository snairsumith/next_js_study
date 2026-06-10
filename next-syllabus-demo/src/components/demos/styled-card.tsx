import styles from "@/components/demos/styled-card.module.css"

export function StyledCard() {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>CSS Modules</h3>
      <p className={styles.description}>
        Scoped styles via .module.css — no class name collisions.
      </p>
    </div>
  )
}
