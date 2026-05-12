export default function Ornament({ glyph = '✦' }: { glyph?: string }) {
  return (
    <div className="ornament">
      <span className="glyph">{glyph}</span>
    </div>
  )
}
