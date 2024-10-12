import React from 'react'
import styles from '../../styles/Services.module.css'
import Card from './Card'

const Services = () => {
  return (
    <div className={styles.container}>
        <div className={styles.bg}>
            <div className={styles.title}>OUR SERVICES</div>
            <div className={styles.services}>
              <Card title="Web Designing And Development" description="Crafting fully responsive and modern websites that adapt to any screen size. We focus on optimizing user experience, performance, and functionality to ensure your site engages visitors, loads quickly, and ranks well in search engines." />
              <Card title="Logo Design And Branding" description="Creating distinctive and memorable logos that capture the essence of your brand. Our logo designs are visually striking and carefully crafted to leave a lasting impression, ensuring your brand stands out in a crowded marketplace." />
              <Card title="Animation" description="Bringing your ideas to life with engaging animations that captivate and communicate your message effectively. From subtle web animations to dynamic motion graphics, we create visually compelling content that enhances user interaction and elevates your brand's storytelling." />
              <Card title="UI/UX Design" description="Designing user interfaces that are intuitive, engaging, and tailored to your audience. We combine creativity with user-centric design principles to ensure every interaction with your product feels seamless and enjoyable." />
              <Card title="SEO Optimization" description="Improving your website's visibility on search engines through on-page and off-page optimization. Our SEO strategies focus on driving organic traffic, improving search rankings, and ensuring your business reaches the right audience."
 />
              <Card title="Content Management Systems (CMS)" description="Implementing and customizing CMS platforms like WordPress, Shopify, and Drupal to give you complete control over your content. We ensure your site is easy to manage, scalable, and customizable to meet your business needs." />
            </div>
        </div>
    </div>
  )
}

export default Services