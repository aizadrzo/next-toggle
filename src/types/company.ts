export interface CompanyContact {
  email: string
  phone: string
  phone_person: string
  website: string
}

export interface CompanyInfo {
  name: string
  taglines: string[]
  contact: CompanyContact
}

export interface TeamMember {
  name: string
  title: string
  details: string[]
  clients: string
}

export interface Team {
  leadership: TeamMember[]
  coreTeam: TeamMember[]
}

export interface ServiceItem {
  name: string
  description: string
}

export interface CaseStudy {
  clientName: string
  metric: string
  metricLabel: string
  services: string[]
  timeline?: string
  challenge: string
  solution: string
}

export type ClientList = string[]


