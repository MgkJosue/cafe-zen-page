export default function CheckerDivider({ small = false }: { small?: boolean }) {
  return <div className={`checker-divider${small ? ' checker-divider--sm' : ''}`} aria-hidden="true" />
}
