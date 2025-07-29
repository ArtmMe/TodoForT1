import { useEffect } from 'react'
import { useNavigate } from '@tanstack/react-router'
import Cookies from 'js-cookie'

export const useAuthGuard = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!Cookies.get('id') || !Cookies.get('login')) {
      navigate({ to: '/login' })
    }
  }, [navigate])
}
