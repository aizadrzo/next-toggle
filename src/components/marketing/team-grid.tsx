import type { TeamMember } from '@/types/company'

interface TeamGridProps {
  title: string
  members: TeamMember[]
}

export function TeamGrid({ title, members }: TeamGridProps) {
  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-semibold mb-8">{title}</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m) => (
            <article key={m.name} className="rounded-lg border p-6">
              <h4 className="text-lg font-semibold text-foreground">{m.name}</h4>
              <p className="text-sm text-muted-foreground mb-4">{m.title}</p>
              {m.details?.length ? (
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  {m.details.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>
              ) : null}
              {m.clients ? (
                <p className="mt-4 text-xs text-muted-foreground">
                  Clients: {m.clients}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


