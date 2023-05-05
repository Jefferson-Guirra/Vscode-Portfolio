import styles from './package.module.css'

const Package = () => {
  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <p className={styles.line}>
          <span className={styles.object}> &#123; </span>
        </p>
        <p className={styles.line}>
          &nbsp;&nbsp;&nbsp;&#34;name:&#34;
          <span className={styles.colon}>&#58;&nbsp;&nbsp; </span>
          <span className={styles.text}>&#34; Jefferson Guirra &#34;</span>
          <span className={styles.comma}>&#44;</span>
        </p>
        <p className={styles.line}>
          &nbsp;&nbsp;&nbsp;&#34;version&#34;
          <span className={styles.colon}>&#58;&nbsp;&nbsp; </span>
          <span className={styles.text}>&#34;2.4 age&#34;</span>
          <span className={styles.comma}>&#44;</span>
        </p>

        <p className={styles.line}>
          &nbsp;&nbsp;&nbsp;&#34;scripts&#34;
          <span className={styles.colon}>&#58;&nbsp; </span>
          <span className={styles.object}> &#123;</span>
        </p>
        <p className={styles.line}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#34;start&#34;
          <span className={styles.colon}>&#58;&nbsp;&nbsp; </span>
          <span className={styles.text}>&#34;next start&#34;</span>
        </p>
        <p className={styles.line}>
          <span
            style={{ display: 'inline-block', marginLeft: '20px' }}
            className={styles.object}
          >
            &#125;<span style={{ color: '#fff' }}>&#44;</span>
          </span>
        </p>

        <p className={styles.line}>
          &nbsp;&nbsp;&nbsp;&#34;dependencies&#34;
          <span className={styles.colon}>&#58;&nbsp; </span>
          <span className={styles.object}> &#123; </span>
        </p>
        <p className={styles.line}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#34;silence&#34;
          <span className={styles.colon}>&#58;&nbsp;&nbsp; </span>
          <span className={styles.text}>&#34;1.0.0&#34;</span>
          <span className={styles.comma}>&#44;</span>
        </p>
        <p className={styles.line}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#34;focus&#34;
          <span className={styles.colon}>&#58;&nbsp;&nbsp; </span>
          <span className={styles.text}>&#34;3.5.2&#34;</span>
        </p>
        <p className={styles.line}>
          <span
            style={{ display: 'inline-block', marginLeft: '20px' }}
            className={styles.object}
          >
            &#125;
            <span style={{ color: '#fff' }}>&#44;</span>
          </span>
        </p>

        <p className={styles.line}>
          &nbsp;&#34;devDependencies&#34;
          <span className={styles.colon}>&#58;&nbsp; </span>
          <span className={styles.object}> &#123; </span>
        </p>
        <p className={styles.line}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#34;books&#34;
          <span className={styles.colon}>&#58;&nbsp;&nbsp; </span>
          <span className={styles.text}>&#34;5.2.0&#34;</span>
          <span className={styles.comma}>&#44;</span>
        </p>
        <p className={styles.line}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#34;movies&#34;
          <span className={styles.colon}>&#58;&nbsp;&nbsp; </span>
          <span className={styles.text}>&#34;3.0.2&#34;</span>
        </p>
        <p className={styles.line}>
          <span
            style={{ display: 'inline-block', marginLeft: '20px' }}
            className={styles.object}
          >
            &#125;
          </span>
        </p>
        <p className={styles.line}>
          <span className={styles.object}>&#125;</span>
        </p>
      </section>
    </main>
  )
}

export default Package
