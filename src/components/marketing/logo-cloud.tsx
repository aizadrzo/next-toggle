import { cn } from '@/lib/utils'

interface LogoCloudProps {
  clients: string[]
  className?: string
}

export function LogoCloud({ clients, className }: LogoCloudProps) {
  return (
    <div className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}>
      <div className="mx-auto max-w-2xl text-center mb-10">
        <p className="text-sm uppercase tracking-wider text-muted-foreground">
          Trusted by
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 items-center">
        {clients.map((client) => (
          <div
            key={client}
            className="flex h-16 items-center justify-center rounded-md border border-border/50 bg-muted/20 text-sm text-muted-foreground"
          >
            {client}
          </div>
        ))}
      </div>
    </div>
  )
}


