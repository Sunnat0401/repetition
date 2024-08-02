'use client';

import React, { useState } from 'react';
import styles from './species.module.css';
import Image from 'next/image';
import { baa, discount1, discount2, discount3, misr, turkey, yevro } from '../../../public';
import Link from 'next/link';

const Species: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { href: '/turkey', src: turkey, heading: 'Turkiya', text: 'Toshkent Istanbul' },
    { href: '/yevro', src: yevro, heading: 'Yevropa', text: 'Toshkent Parij' },
    { href: '/misr', src: misr, heading: 'Misr', text: 'Toshkent Qohira' },
    { href: '/baa', src: baa, heading: 'BAA', text: 'Toshkent Dubay' },
    { href: '/tailand', src: yevro, heading: 'Tailand', text: 'Toshkent Parij' },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.species} id='species'>
      <div className={styles.species_container}>
        <h1 className={styles.species_title}>Turlar</h1>
        <div className={styles.carusel}>
          <button className={styles.prev_button} onClick={handlePrev}>‹</button>
          <div className={styles.carusel_inner}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`${styles.carusel_card} ${index === currentIndex ? styles.active : ''}`}
              >
                <Link href={slide.href}>
                  <Image className={styles.swiper_picture} src={slide.src} alt="img" />
                  <h3 className={styles.swiper_heading}>{slide.heading}</h3>
                  <div className={styles.swiper_hr}></div>
                  <p className={styles.swiper_text}>{slide.text}</p>
                </Link>
              </div>
            ))}
          </div>
          <button className={styles.next_button} onClick={handleNext}>›</button>
        </div>
        <div className={styles.discount}>
          <div className={styles.discount_left}>
            <p className={styles.discount_title}>
              <span className={styles.discount_info}>15-Noyabrgacha</span>
              Yevropa uchun tur band qiling
            </p>
            <p className={styles.discount_paragraph}>
              <span className={styles.discout_information}>10%</span>
              chegirmaga ega bo'ling
            </p>
          </div>
          <div className={styles.discount_right}>
            <Image className={styles.discount_image} src={discount1} alt="image" />
            <Image className={styles.discount_images} src={discount3} alt="image" />
            <Image className={styles.discount_picture} src={discount2} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Species;
