
export default function History() {
  return (
    <div className="relative z-10 w-full animate-fade-in p-12 max-w-5xl mx-auto">
      <h1 className="font-headline-lg text-4xl text-on-surface font-bold mb-6">History</h1>
      <p className="font-body-md text-on-surface-variant">A timeline of milestones and notable work.</p>
      <div className="mt-8">
        <div className="glass-panel p-6 rounded-lg mb-4">
          <h3 className="font-headline-md text-lg font-bold">AuthBridge - Backend Intern</h3>
          <p className="font-body-md text-sm text-on-surface-variant">Dec '25 - Feb '26 — Backend API design, auth flows, and system design.</p>
        </div>
        <div className="glass-panel p-6 rounded-lg">
          <h3 className="font-headline-md text-lg font-bold">IIT Patna - B.Sc. (In progress)</h3>
          <p className="font-body-md text-sm text-on-surface-variant">2024 - 2028 — Computer Science & Data Analytics</p>
        </div>
      </div>
    </div>
  )
}
