import guides from '../guides.json';
import styles from '../styles/404.module.css';

const Error = () => {
  return (
    <div className={styles.container}>
      <h1>All Career Guides:</h1>
      <ul>
        {guides.map((guide) => {
          return (
            <li key={guide.id}>
              <span>{guide.icon}</span>
              {guide.career}
            </li>
          );
        })}
      </ul>
      <p>
        To access these Career Guides{' '}
        <a href="https://api.whatsapp.com/send/?phone=919168833977&text&app_absent=0">
          Whatsapp Rutvij
        </a>
      </p>
    </div>
  );
};

export default Error;
