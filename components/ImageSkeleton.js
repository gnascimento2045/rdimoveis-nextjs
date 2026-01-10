export default function ImageSkeleton({ className = '' }) {
  return (
    <div className={`w-full h-full bg-gray-200 animate-pulse ${className}`} />
  )
}
