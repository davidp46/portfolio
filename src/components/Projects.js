import projects from 'content/projects'
import styles from 'styles/projects.module.scss'

function Projects () {
  return (
    <div className={styles.container}>
      {projects.map((project, i) => {
        if ((i + 1) % 2 === 0) {
          return (
            <article className={styles['project-alt']} key={i}>
              <div className={styles.project__details}>
                <p className={styles.project__category} >{project.category}</p>
                <h2>{project.name}</h2>
                <p>{project.content}</p>
                <div className={styles['project__links-collection']}>
                  <a href={project['link-source']} target="_blank" rel="noreferrer" className={styles['project__link-alt']} >View code</a>
                  <a href={project['link-project']} target="_blank" rel="noreferrer" className={styles.project__link} >Visit site</a>
                </div>
              </div>
              <img src={project.image} alt={project.name}/>
            </article>
          )
        } else {
          return (
            <article className={styles.project} key={i}>
              <img src={project.image} alt={project.name}/>
              <div className={styles.project__details}>
                <p className={styles.project__category} >{project.category}</p>
                <h2>{project.name}</h2>
                <p>{project.content}</p>
                <div className={styles['project__links-collection']}>
                  <a href={project['link-source']} target="_blank" rel="noreferrer" className={styles['project__link-alt']}>View code</a>
                  <a href={project['link-project']} target="_blank" rel="noreferrer" className={styles.project__link} >Visit site</a>
                </div>
              </div>
            </article>
          )
        }
      })}
    </div>
  )
}
export default Projects

// swiper-container swiper-container-initialized swiper-container-horizontal
