import type { CaseStudy } from '@/types/company'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

interface CaseTilesProps {
  items: CaseStudy[]
}

export function CaseTiles({ items }: CaseTilesProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((c) => (
        <Card key={c.clientName} className="h-full">
          <CardHeader>
            <CardTitle className="text-primary text-2xl">{c.metric}</CardTitle>
            <CardDescription>{c.metricLabel}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>{c.clientName}</strong>
              {c.timeline ? ` • ${c.timeline}` : ''}
            </p>
            <p className="text-sm mb-3">{c.challenge}</p>
            <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
              {c.services.map((s) => (
                <span key={s} className="rounded-full border px-2 py-1">
                  {s}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}


