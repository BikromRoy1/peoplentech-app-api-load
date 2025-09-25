import VideosPlayingClient from './VideosPlayingClient';

export default function Page({ searchParams }) {
  // searchParams is already passed by Next.js App Router
  // but it's safer to await if needed (depends on Next.js version)
  const slug = searchParams?.slug || '';
  const courseName = searchParams?.courseName || '';

  return <VideosPlayingClient slug={slug} courseName={courseName} />;
}
