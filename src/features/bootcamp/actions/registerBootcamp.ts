'use server'

export interface RegisterBootcampParams {
  email: string
  name: string
}

export interface RegisterBootcampResponse {
  success: boolean
  message: string
}

export async function registerBootcamp(
  params: RegisterBootcampParams
): Promise<RegisterBootcampResponse> {
  // Simulation d'un traitement serveur (inscription, validation, etc.)
  // Dans un vrai projet, cela pourrait enregistrer dans une base de données
  
  if (!params.email || !params.name) {
    return {
      success: false,
      message: 'Veuillez remplir tous les champs',
    }
  }

  // Simulation d'un délai de traitement
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    success: true,
    message: `Inscription réussie ! Un email de confirmation a été envoyé à ${params.email}`,
  }
}
