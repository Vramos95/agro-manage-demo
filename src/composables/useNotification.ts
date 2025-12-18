/**
 * Composable para notificaciones usando PrimeVue Toast
 */
export const useNotification = () => {
  const toast = useToast()

  const showSuccess = (message: string, summary = 'Éxito') => {
    toast.add({
      severity: 'success',
      summary,
      detail: message,
      life: 3000
    })
  }

  const showError = (message: string, summary = 'Error') => {
    toast.add({
      severity: 'error',
      summary,
      detail: message,
      life: 5000
    })
  }

  const showInfo = (message: string, summary = 'Información') => {
    toast.add({
      severity: 'info',
      summary,
      detail: message,
      life: 3000
    })
  }

  const showWarning = (message: string, summary = 'Advertencia') => {
    toast.add({
      severity: 'warn',
      summary,
      detail: message,
      life: 4000
    })
  }

  return {
    showSuccess,
    showError,
    showInfo,
    showWarning
  }
}
