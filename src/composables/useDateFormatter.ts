/**
 * Composable para formatear fechas
 */
export const useDateFormatter = () => {
  const formatDate = (date: Date | string, locale = 'es-ES'): string => {
    const dateObj = typeof date === 'string' ? new Date(date) : date
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(dateObj)
  }

  const formatDateTime = (date: Date | string, locale = 'es-ES'): string => {
    const dateObj = typeof date === 'string' ? new Date(date) : date
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(dateObj)
  }

  return {
    formatDate,
    formatDateTime
  }
}
