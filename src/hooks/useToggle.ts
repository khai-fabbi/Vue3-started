import { ref } from 'vue'

export default function useToggle() {
  const valueRef = ref<boolean>(false)

  const toggleValue = () => (valueRef.value = !valueRef.value)
  return { valueRef, toggleValue }
}
