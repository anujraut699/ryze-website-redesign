function FeatureCard({ title, description }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.desc}>{description}</p>
    </div>
  )
}

const styles = {
  card: {
    padding: '24px',
    borderRadius: '12px',
    border: '1px solid #e5e7eb',
    backgroundColor: '#ffffff',
  },
  title: {
    marginBottom: '8px',
  },
  desc: {
    color: '#475569',
    fontSize: '15px',
  },
}

export default FeatureCard
