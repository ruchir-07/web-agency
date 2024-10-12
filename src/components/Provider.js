import React from 'react'
import styles from '../styles/Provide.module.css'
import Image from 'next/image'
import satisfy from '@/assets/satisfaction.png'
import ontime from '@/assets/ontime.png'
import expert from '@/assets/expert.png'
import revision from '@/assets/revision.png'

const Provider = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <Image src={satisfy} width={150} height={150} className={styles.img} />
                <p className={styles.heading}>
                    100% SATISFACTION
                </p>
            </div>
            <div className={styles.card}>
                <Image src={ontime} width={150} height={150} className={styles.img} />
                <p className={styles.heading}>
                    ON TIME DELIVERY
                </p>
            </div>
            <div className={styles.card}>
                <Image src={expert} width={150} height={150} className={styles.img} />
                <p className={styles.heading}>
                    100% SATISFACTION
                </p>
            </div>
            <div className={styles.card}>
                <Image src={revision} width={150} height={150} className={styles.img} />
                <p className={styles.heading}>
                    UNNLIMITED REVISIONS
                </p>
            </div>
        </div>
    )
}

export default Provider