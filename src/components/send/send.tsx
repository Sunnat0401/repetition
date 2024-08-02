'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import styles from './send.module.css';

interface FormValues {
  name: string;
  phone: string;
}

const Send = () => {
  const [visible, setVisible] = useState(false);
  const [formValues, setFormValues] = useState<FormValues>({ name: '', phone: '+998' });
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  const handleOpenModal = () => {
    setVisible(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
    setErrors({});
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));

    if (name === 'phone') {
      const cleanedValue = value.replace(/[^\d+]/g, '');
      if (/^\+998\d{0,9}$/.test(cleanedValue) || cleanedValue === '+998') {
        setFormValues((prev) => ({ ...prev, phone: cleanedValue }));
      }
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: { name?: string; phone?: string } = {};
    if (!formValues.name) newErrors.name = 'Iltimos, ismingizni kiriting!';
    if (!formValues.phone || !/^\+998\d{9}$/.test(formValues.phone)) {
      newErrors.phone = 'Raqam +998 bilan boshlanishi va 9 ta raqamdan tashkil topishi kerak!';
    }

    if (Object.keys(newErrors).length === 0) {
      console.log('Values:', formValues);
      alert('Sizning ma\'lumotlaringiz qabul qilindi');
      setFormValues({ name: '', phone: '+998' });
      handleCloseModal();
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div>
      <button className={styles.send_button} onClick={handleOpenModal}>
        Buyurtma berish
      </button>
      {visible && (
        <div className={styles.modal_container}>
          <div className={styles.modal_background} onClick={handleCloseModal}></div>
          <div className={styles.modal_content}>
            <div className={styles.modal_title}>
              Iltimos, operatorlarimiz siz bilan boglanishi uchun aloqa malumotlaringizni qoldiring.
            </div>
            <form onSubmit={handleSubmit}>
              <div className={styles.modal_form_item}>
                <input
                  type="text"
                  name="name"
                  placeholder="Sizning ismingiz"
                  value={formValues.name}
                  onChange={handleChange}
                  className={styles.send_input}
                />
                {errors.name && <div className={styles.error_message}>{errors.name}</div>}
              </div>
              <div className={styles.modal_form_item}>
                <input
                  type="text"
                  name="phone"
                  placeholder="+998 99 999 99 99"
                  maxLength={13}
                  value={formValues.phone}
                  onChange={handleChange}
                  className={styles.send_input}
                />
                {errors.phone && <div className={styles.error_message}>{errors.phone}</div>}
              </div>
              <div className={styles.modal_buttons}>
                <button type="submit" className={styles.modal_submit_button}>
                  Buyurtma berish
                </button>
                <button type="button" className={styles.modal_cancel_button} onClick={handleCloseModal}>
                  Cancel
                </button>
              </div>
            </form>
            <div className={styles.modal_description}>
              Ma'lumotlarni to'ldirib 'Buyurtma berish' tugmasini bosish orqali ma'lumotlar yuboriladi va operator siz bilan tez orada bog'lanadi.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Send;
