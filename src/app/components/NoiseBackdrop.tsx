export default function NoiseBackdrop() {
  return (
    <div
      tabIndex={-1}
      style={{
        backgroundImage:
          'radial-gradient( rgba(255,255,255,.5), rgba(125,125,125,.2)),url(/images/noise.svg)',
        backgroundSize: 'cover, 250px',
        backgroundPosition: '0 0',
        backgroundRepeat: 'no-repeat, repeat',
      }}
      className="absolute inset-0 -z-10"
    ></div>
  )
}
