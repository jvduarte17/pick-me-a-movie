export interface Provider {
  id: number,
  results: {
    BR?: {
      buy?: ProviderInstance[],
      flatrate?: ProviderInstance[],
      link: string,
      rent?: ProviderInstance[]
    }
  }
}

interface ProviderInstance {
  display_priority: number,
  logo_path: string,
  provider_id: number,
  provider_name: string
}

export interface ProviderInfo {
  name: string,
  logoPath: string
}