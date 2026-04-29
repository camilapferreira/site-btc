export default function SectionEyebrow({ children, className = '', dark = false }) {
  return (
    <div
      className={`text-xs font-semibold tracking-widest uppercase ${
        dark ? 'text-gold-400' : 'text-gold-600'
      } ${className}`}
    >
      {children}
    </div>
  );
}
