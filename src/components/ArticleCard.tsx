import Link from 'next/link'
import ReadDots from './ReadDots'

export type TagVariant = 'interp' | 'notes' | 'tools' | 'safety' | 'systems' | 'default'

export interface ArticleCardProps {
  slug: string
  title: React.ReactNode
  dek?: string
  date: string          // formatted display date, e.g. "APR 02"
  readTime: number      // minutes
  tags: { label: string; variant?: TagVariant }[]
  pinned?: boolean
}

export default function ArticleCard({
  slug,
  title,
  dek,
  date,
  readTime,
  tags,
  pinned,
}: ArticleCardProps) {
  return (
    <li className={`post${pinned ? ' post-pinned' : ''}`}>
      <span className="post-date">{date}</span>
      <div className="post-body">
        <h3 className="post-title">
          <Link href={`/writing/${slug}`}>{title}</Link>
        </h3>
        {dek && <p className="post-dek">{dek}</p>}
        <div className="post-meta">
          {tags.map((t) => (
            <span key={t.label} className={`tag ${t.variant ?? 'default'}`}>
              {t.label}
            </span>
          ))}
        </div>
      </div>
      <ReadDots minutes={readTime} />
    </li>
  )
}
