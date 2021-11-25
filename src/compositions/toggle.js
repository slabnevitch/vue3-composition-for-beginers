//Создание переиспользуемой ф-ции.
import {ref} from 'vue'
export function useToggle() {
	const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    }

    return {
      visible,
      toggle
    }
}