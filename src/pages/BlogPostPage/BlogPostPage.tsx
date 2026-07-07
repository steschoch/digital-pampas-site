import { useParams, Link, Navigate } from 'react-router-dom';
import { AnimatedSection } from '@steschoch/digital-pampas-ds';
import { getBlogPostBySlug } from '@/data/blogPosts';
import type { ContentBlock } from '@/data/blogPosts';
import styles from './BlogPostPage.module.css';

function formatDate(iso: string): string {
  const [year, month, day] = iso.split('-').map(Number);
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    month: 'long',
    day:   'numeric',
    year:  'numeric',
  });
}

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p key={index} className={styles.paragraph}>
          {block.content}
        </p>
      );

    case 'heading':
      return (
        <h2 key={index} className={styles.heading}>
          {block.content}
        </h2>
      );

    case 'subheading':
      return (
        <h3 key={index} className={styles.subheading}>
          {block.content}
        </h3>
      );

    case 'list':
      return (
        <ul key={index} className={styles.list}>
          {block.items?.map((item, j) => (
            <li key={j} className={styles.listItem}>{item}</li>
          ))}
        </ul>
      );

    case 'callout':
      return (
        <blockquote key={index} className={styles.callout}>
          <p>{block.content}</p>
        </blockquote>
      );

    case 'divider':
      return <hr key={index} className={styles.divider} aria-hidden="true" />;

    default:
      return null;
  }
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <article className={styles.article}>

      {/* ─── Article header ───────────────────────────────────────── */}
      <header className={styles.articleHeader}>
        <div className={styles.headerContainer}>
          <AnimatedSection animation="fade-up" once>
            <div className={styles.tags} aria-label="Tags">
              {post.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
            <h1 className={styles.h1}>{post.title}</h1>
            <div className={styles.meta}>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true"> · </span>
              <span>{post.readTime}</span>
              <span aria-hidden="true"> · </span>
              <span>by Digital Pampas</span>
            </div>
          </AnimatedSection>
        </div>
      </header>

      {/* ─── Article body ─────────────────────────────────────────── */}
      <section className={styles.bodySection} aria-label="Article content">
        <div className={styles.bodyContainer}>
          <AnimatedSection animation="fade-up" once delay={80}>
            <div className={styles.body}>
              {post.content.map((block, i) => renderBlock(block, i))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CTA bar ──────────────────────────────────────────────── */}
      <aside className={styles.ctaBar}>
        <div className={styles.ctaContainer}>
          <AnimatedSection animation="fade-up" once>
            <p className={styles.ctaText}>Want to talk outbound systems?</p>
            <div className={styles.ctaActions}>
              <a href="/#book-call" className={styles.ctaPrimary}>
                Book a call
              </a>
              <Link to="/blog" className={styles.ctaGhost}>
                Read more posts →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </aside>

    </article>
  );
}
