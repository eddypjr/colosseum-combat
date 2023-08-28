import Link from 'next/link';

export default function NavBar() {
  return (
    <nav>
      <h1>Fusion Fight Academy</h1>
      <Link href="/">Home</Link>
      <Link href="/schedule">Schedule</Link>
      <Link href="/about">About</Link>
      <Link href="/classes">Classes</Link>
      <Link href="/pricing">Pricing</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
