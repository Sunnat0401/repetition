import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'
import { AboutImage } from '../../../public'
const About = () => {
  return (
    <div className={styles.about} id='about'>
      <h1 className={styles.about_title}>
        Biz haqimizda
      </h1>
      <div className={styles.about_container}>
        <div className={styles.about_left}>
          <p className={styles.about_texts}>Bizning kompaniyamiz 2024 yilda Toshkentda tashkil etilgan bo'lib, jadal rivojlanib, dunyo bo'ylab noyob turlar va sayohatlar taklif etmoqda.
            Biz unutilmas taassurotlar yaratish va mijozlarimizga yangi
            madaniyatlar, tarixlar va tabiat go'zalliklarini kashf etish
            imkoniyatini berishdan faxrlanamiz.</p>
            <p className={styles.about_texts}>
            Biz - oz ishiga bagishlangan, yosh va dinamik
            mutaxassislar jamoasimiz. Gidlarimiz va
            tashkilotchilarimiz har bir sayohatni
            mijozlarning barcha istaklari va
            afzalliklarini hisobga olgan holda diqqat
            bilan rejalashtiradilar. Har bir
            </p>
            <p className={styles.about_texts}> sayohat haqiqiy sarguzashtga aylanishi uchun
            eng yaxshi yonalishlarni taklif qilishga intilamiz.
            Tashkil etilganimizdan beri biz yuqori sifatli xizmat va har
            bir sayohatchiga individual yondashuv tufayli
            mijozlarimizning ishonchini qozondik. Yevropaga tarixiy
            ekskursiyalar, Tailandda plyaj dam olish yoki Afrikada hayajonli
            safari boladimi, biz har doim eng qiziqarli va unutilmas
            yonalishlarni taklif qilishga tayyormiz. Bizga qoshiling va dunyoni
            yangi nuqtai nazardan kashf eting! Sizning sarguzashtingiz bu yerda boshlanadi.</p>
        </div>
        <div className={styles.about_right}>
          <div className={styles.about_circle}>
            <p></p>
          <Image className={styles.about_image} src={AboutImage} alt='image' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
