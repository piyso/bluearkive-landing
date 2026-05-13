import { MembershipApplication } from '@/components/MembershipApplication'
import Image from 'next/image'
import Link from 'next/link'

export default function ApplyPage() {
  return (
    <main className="min-h-screen relative flex flex-col">
      {/* ═══ VIDEO BACKGROUND ═══ */}
      <video className="video-bg" autoPlay muted loop playsInline>
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4"
          type="video/mp4"
        />
      </video>
      <div className="video-overlay" />

      {/* ═══ MINIMAL NAV ═══ */}
      <nav className="relative z-50 flex items-center justify-between px-8 py-6">
        <Link href="/" className="nav-logo">
          <Image src="/logo.svg" alt="BlueArkive Logo" width={32} height={32} />
          BlueArkive
        </Link>
        <Link href="/" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
          Return to Core
        </Link>
      </nav>

      {/* ═══ CONTENT ═══ */}
      <div className="flex-1 relative z-10 flex flex-col justify-center py-12">
        <MembershipApplication />
      </div>
    </main>
  )
}
