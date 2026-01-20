'use server'

export interface HeroData {
  title: string
  description: string
}

export async function getHeroData(): Promise<HeroData> {
  // Simulation d'un appel API ou récupération de données
  // Dans un vrai projet, cela pourrait venir d'une base de données ou d'un CMS
  
  return {
    title: 'Bienvenue sur PaniTech Academy',
    description:
      'Découvrez nos formations en développement web, data science et intelligence artificielle. Apprenez avec les meilleurs experts du secteur.',
  }
}
