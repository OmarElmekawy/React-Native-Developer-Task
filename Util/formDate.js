export function formatDate(isoDateStr) {
    const date = new Date(isoDateStr);
  
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    };
  
    return date.toLocaleString('en-US', options);
  }

  