const SectionSkeleton = () => (
  <div className="py-24 px-6 animate-pulse">
    <div className="container max-w-6xl">
      <div className="h-3 w-32 bg-muted rounded mb-3" />
      <div className="h-8 w-48 bg-muted rounded mb-14" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-6 space-y-4">
            <div className="h-4 w-24 bg-muted rounded" />
            <div className="h-3 w-full bg-muted rounded" />
            <div className="h-3 w-3/4 bg-muted rounded" />
            <div className="h-3 w-5/6 bg-muted rounded" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SectionSkeleton;
