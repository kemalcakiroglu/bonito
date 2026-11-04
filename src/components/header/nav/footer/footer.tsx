import styles from './style.module.scss';
import { translate } from '../../anim';
import { motion } from 'motion/react';
import { config } from '@/data/config';

export default function Footer() {
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
          <span>{config.author}</span> Reklam Ajansı
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
          <span>E-posta:</span> {config.email}
        </motion.li>
      </ul>
    </div>
  );
}
