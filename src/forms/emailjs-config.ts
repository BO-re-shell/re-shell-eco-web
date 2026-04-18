declare global {
  interface Window {
    emailjs: {
      init: (publicKey: string) => void
      send: (serviceId: string, templateId: string, params: Record<string, unknown>) => Promise<unknown>
    }
  }
}

export const initEmailJS = (): void => {
  if (window.emailjs) {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    if (publicKey) {
      window.emailjs.init(publicKey)
    }
  }
}

export const sendEmail = async (
  serviceId: string,
  templateId: string,
  params: Record<string, unknown>
): Promise<unknown> => {
  if (!window.emailjs) {
    throw new Error('EmailJS not loaded')
  }
  return window.emailjs.send(serviceId, templateId, params)
}
