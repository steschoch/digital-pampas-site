import { Link } from 'react-router-dom';
import { AnimatedSection, BlogCard } from '@steschoch/digital-pampas-ds';
import { blogPosts } from '@/data/blogPosts';
import type { BlogPost } from '@/data/blogPosts';
import styles from './BlogListPage.module.css';

const sortedPosts: BlogPost[] = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export default function BlogListPage() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <AnimatedSection animation="fade-up" once className={styles.pageHeader}>
          <p className={styles.eyebrow}>BLOG</p>
          <h1 className={styles.h1}>Infrastructure thinking, written down.</h1>
          <p className={styles.subtitle}>
            Outbound systems, Clay workflows, and the decisions behind a B2B pipeline that actually fills.
          </p>
        </AnimatedSection>

        <div className={styles.grid}>
          {sortedPosts.map((post, i) => (
            <BlogCard
              key={post.slug}
              post={post}
              delay={i * 100}
              renderLink={({ href, className, children, ...rest }) => (
                <Link to={href} className={className} {...rest}>{children}</Link>
              )}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
