import { useMutation } from '@tanstack/react-query'
import { useNavigate, useRouter } from '@tanstack/react-router'
import { loginApi } from '../api/loginApi'

export const useLoginMutation = () => {
  const navigate = useNavigate()
  const router = useRouter()
  return useMutation({
    mutationFn: loginApi,
    onSuccess: () => { router.invalidate(); navigate({ to: '/' }) },
  })
}
