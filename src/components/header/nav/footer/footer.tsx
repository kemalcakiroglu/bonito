import styles from './style.module.scss';
import { translate } from '../../anim';
import { motion } from 'motion/react';
import { config } from '@/data/config';
import { useT } from '@/i18n/locale';

export default function Footer() {
  const t = useT().nav;
  return (
    <div className={styles.footer}>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>{config.author}</span> {t.agency}
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>{t.email}</span> {config.email}
        </motion.li>
      </ul>
    </div>
  );
}
