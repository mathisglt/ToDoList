import { ref, reactive, computed, onMounted } from 'vue';
import VueFlatpickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import TODOComponent from '@/components/TODOComponent.vue';
import Calendrier from '@/components/Calendrier.vue';
import { todoService } from '@/services/api';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const taches = reactive([]);
const loading = ref(false);
const error = ref(null);
onMounted(async () => {
    loading.value = true;
    try {
        const todos = await todoService.getTodos();
        taches.splice(0, taches.length, ...todos);
    }
    catch (err) {
        error.value = `Erreur lors du chargement des tâches: ${err}`;
    }
    finally {
        loading.value = false;
    }
});
const tasktodo = computed(() => taches.filter(task => task.etat === "En cours" || task.etat === "A faire").length);
const newTask = ref({
    intitule: '',
    etat: 'A faire',
    dateech: '',
});
const flatpickrConfig = {
    dateFormat: 'Y-m-d',
    allowInput: true,
    static: true,
    minDate: 'today',
};
const addTask = async () => {
    if (newTask.value.intitule && newTask.value.dateech) {
        loading.value = true;
        try {
            const createdTodo = await todoService.createTodo({
                intitule: newTask.value.intitule,
                etat: newTask.value.etat,
                dateech: newTask.value.dateech,
            });
            if (createdTodo) {
                taches.push(createdTodo);
                newTask.value.intitule = '';
                newTask.value.dateech = '';
            }
        }
        catch (err) {
            error.value = `Erreur lors de l'ajout de la tâche: ${err}`;
        }
        finally {
            loading.value = false;
        }
    }
    else {
        alert('Veuillez remplir tous les champs.');
    }
};
const deleteTask = async (index) => {
    loading.value = true;
    try {
        const success = await todoService.deleteTodo(index + 1);
        if (success) {
            taches.splice(index, 1);
        }
    }
    catch (err) {
        error.value = `Erreur lors de la suppression de la tâche: ${err}`;
    }
    finally {
        loading.value = false;
    }
};
const deleteAllTasks = () => {
    taches.splice(0, taches.length);
};
const deleteCompletedTasks = () => {
    const restantes = taches.filter((tache) => tache.etat === 'A faire' || tache.etat === 'En cours');
    taches.splice(0, taches.length, ...restantes);
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    __VLS_styleScopedClasses['state-button'];
    __VLS_styleScopedClasses['add-button'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("app-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({});
    if (__VLS_ctx.loading) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("loading") }, });
    }
    if (__VLS_ctx.error) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("error") }, });
        (__VLS_ctx.error);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("content-wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("task-list") }, });
    // @ts-ignore
    [TODOComponent,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(TODOComponent, new TODOComponent({ taches: ((__VLS_ctx.taches)), deleteTask: ((__VLS_ctx.deleteTask)), deleteAllTasks: ((__VLS_ctx.deleteAllTasks)), deleteCompletedTasks: ((__VLS_ctx.deleteCompletedTasks)), }));
    const __VLS_1 = __VLS_0({ taches: ((__VLS_ctx.taches)), deleteTask: ((__VLS_ctx.deleteTask)), deleteAllTasks: ((__VLS_ctx.deleteAllTasks)), deleteCompletedTasks: ((__VLS_ctx.deleteCompletedTasks)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("task-form") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.addTask) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-group") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("form-label") }, for: ("taskName"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ value: ((__VLS_ctx.newTask.intitule)), id: ("taskName"), type: ("text"), placeholder: ("Entrer une tâche"), required: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-group") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("form-label") }, for: ("dueDate"), });
    const __VLS_5 = __VLS_resolvedLocalAndGlobalComponents.VueFlatpickr;
    /** @type { [typeof __VLS_components.VueFlatpickr, typeof __VLS_components.vueFlatpickr, ] } */
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ modelValue: ((__VLS_ctx.newTask.dateech)), config: ((__VLS_ctx.flatpickrConfig)), placeholder: ("Sélectionner une date"), }));
    const __VLS_7 = __VLS_6({ modelValue: ((__VLS_ctx.newTask.dateech)), config: ((__VLS_ctx.flatpickrConfig)), placeholder: ("Sélectionner une date"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-group") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("form-label") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("button-group") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.newTask.etat = 'A faire';
            } }, type: ("button"), ...{ class: ("state-button") }, ...{ class: (({ active: __VLS_ctx.newTask.etat === 'A faire' })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.newTask.etat = 'En cours';
            } }, type: ("button"), ...{ class: ("state-button") }, ...{ class: (({ active: __VLS_ctx.newTask.etat === 'En cours' })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.newTask.etat = 'Terminé';
            } }, type: ("button"), ...{ class: ("state-button") }, ...{ class: (({ active: __VLS_ctx.newTask.etat === 'Terminé' })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("add-button") }, type: ("submit"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("calendar-section") }, });
    // @ts-ignore
    [Calendrier,];
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent(Calendrier, new Calendrier({ taches: ((__VLS_ctx.taches)), }));
    const __VLS_12 = __VLS_11({ taches: ((__VLS_ctx.taches)), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    __VLS_elementAsFunction(__VLS_intrinsicElements.footer, __VLS_intrinsicElements.footer)({});
    if (__VLS_ctx.tasktodo !== 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (__VLS_ctx.tasktodo);
    }
    __VLS_styleScopedClasses['app-container'];
    __VLS_styleScopedClasses['loading'];
    __VLS_styleScopedClasses['error'];
    __VLS_styleScopedClasses['content-wrapper'];
    __VLS_styleScopedClasses['task-list'];
    __VLS_styleScopedClasses['task-form'];
    __VLS_styleScopedClasses['form-group'];
    __VLS_styleScopedClasses['form-label'];
    __VLS_styleScopedClasses['form-group'];
    __VLS_styleScopedClasses['form-label'];
    __VLS_styleScopedClasses['form-group'];
    __VLS_styleScopedClasses['form-label'];
    __VLS_styleScopedClasses['button-group'];
    __VLS_styleScopedClasses['state-button'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['state-button'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['state-button'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['add-button'];
    __VLS_styleScopedClasses['calendar-section'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            VueFlatpickr: VueFlatpickr,
            TODOComponent: TODOComponent,
            Calendrier: Calendrier,
            taches: taches,
            loading: loading,
            error: error,
            tasktodo: tasktodo,
            newTask: newTask,
            flatpickrConfig: flatpickrConfig,
            addTask: addTask,
            deleteTask: deleteTask,
            deleteAllTasks: deleteAllTasks,
            deleteCompletedTasks: deleteCompletedTasks,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
