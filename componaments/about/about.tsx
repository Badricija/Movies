import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import i18n from './i18n';
import styles from './about.module.css';

const Home = () => {
	const navigate = useNavigate();
	const { t } = useTranslation();
	const switchLanguage = (lang: string | undefined) => {
    i18n.changeLanguage(lang);
  };

	return (
		<>
			<p className="movie-paragraph">
				{t('movie_paragraph')}
			</p>
			<button className={styles.button} onClick={() => switchLanguage('en')}>Switch to English</button>
      <button className={styles.button} onClick={() => switchLanguage('lv')}>Switch to Latvian</button>
			<button className={styles.button} onClick={() => navigate("/")}>
				Go back to homepage
			</button>
		</>
	);
};

export default Home;
