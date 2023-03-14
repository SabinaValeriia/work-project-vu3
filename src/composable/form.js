import { reactive, computed } from "vue";
export function useForm(props) {
  const form = reactive({
    title: "",
    description: "",
  });
  const valid = computed(() => {
    return form.title.trim() && form.description.trim();
  });
  const submit = () => {
    const recipe = {
      title: form.title.trim(),
      description: form.description.trim(),
      id: Date.now().toString(),
    };
    //очищаем инпуты
    form.title = form.description = "";
    props.onAdd(recipe);
  };
  return { form, submit, valid };
}
