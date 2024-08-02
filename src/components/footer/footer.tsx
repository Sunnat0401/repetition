'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './footer.module.css';
import { Phone, face1, face2, face3, face4, face5, footerImage } from '../../../public';

// Telefon raqami validatsiyasi
const validatePhoneNumber = (phone: string): boolean => {
  const regex = /^\+998\d{9}$/;
  return regex.test(phone);
};

const Footer: React.FC = () => {
  const [phone, setPhone] = useState<string>('+998');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    const numericValue = value.replace(/[^+\d]/g, '');
    if (numericValue.length <= 13) {
      setPhone(numericValue);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (validatePhoneNumber(phone)) {
      setSuccess('Telefon raqamingiz to\'g\'ri kiritildi 👍🎉✔');
      setError('');
      setPhone('+998');
      alert('Telefon raqamingiz to\'g\'ri kiritildi 👍🎉✔'); // Alertni qo'shish
    } else {
      setError('Raqam +998 bilan boshlanishi va 9 ta raqamdan tashkil topishi kerak!');
      setSuccess('');
    }
  };

  return (
    <div className={styles.footer} id='contact'>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div className={styles.footerInformation}>
            <p className={styles.footerText}>
              Biz har doim sizning savollaringiz va takliflaringizga ochiqmiz. Biz bilan qulay usulda bog'laning, va bizning jamoamiz sizga imkon qadar tezroq javob beradi.
            </p>
            <form className={styles.footerForm} onSubmit={handleSubmit}>
              <div className={styles.formItem}>
                <input
                  type="text"
                  value={phone}
                  onChange={handlePhoneChange}
                  maxLength={13}
                  className={styles.footerInput}
                />
                <button type="submit" className={styles.footerButton}>
                  Menga qo'ng'iroq qiling
                </button>
              </div>
              {error && <p className={styles.errorMessage}>{error}</p>}
              {success && <p className={styles.successMessage}>{success}</p>}
            </form>
          </div>
          <Image src={footerImage} alt="Footer Image" className={styles.footerImage} width={500} height={300} />
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.footerLeft}>
            <ul className={styles.footerLists}>
              <li className={styles.footerList}>
                <Image src={Phone} alt="Phone Icon" className={styles.footerIcon} width={24} height={24} />
              </li>
              <li className={styles.footerList}>
                <p className={styles.footerNumber}>+ 998 77 273 00 17</p>
              </li>
            </ul>
            <ul className={styles.footerLists}>
              <li className={styles.footerItem}>
                <Image src={face1} alt="Face 1" className={styles.footerPictures}/>
              </li>
              <li className={styles.footerItem}>
                <Image src={face2} alt="Face 2" className={styles.footerPictures}/>
              </li>
              <li className={styles.footerItem}>
                <Image src={face3} alt="Face 3" className={styles.footerPictures}/>
              </li>
              <li className={styles.footerItem}>
                <Image src={face4} alt="Face 4" className={styles.footerPictures}/>
              </li>
              {/* Boshqa rasmlar uchun shunga o'xshash elementlar */}
            </ul>
          </div>
          <div className={styles.footerRight}>
            <div className={styles.footerLocation}>
              <Image src={face5} alt="Location Icon" className={styles.footerLocationIcon}  />
              <p className={styles.footerInfo}>Toshkent, O'zbekiston</p>
            </div>
            <p className={styles.footerInfo}>Chilonzor 18/19 uy</p>
          </div>
        </div>
        <p className={styles.footerName}>DarmonTravel 2024</p>
      </div>
    </div>
  );
};

export default Footer;
