import { ref, computed, watch } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    taches: {
        type: Array,
        required: true,
    },
    deleteTask: {
        type: Function,
        required: true,
    },
    deleteAllTasks: {
        type: Function,
        required: true,
    },
    deleteCompletedTasks: {
        type: Function,
        required: true,
    },
});
const localTaches = ref([...props.taches]);
const filter = ref('Toutes');
const editingIndex = ref(null);
watch(() => props.taches, (newT) => {
    localTaches.value = [...newT];
}, { deep: true });
const filteredTaches = computed(() => {
    if (filter.value === 'Toutes') {
        return localTaches.value;
    }
    return localTaches.value.filter((tache) => {
        if (filter.value === 'Non Terminées') {
            return tache.etat === 'A faire' || tache.etat === 'En cours';
        }
        else if (filter.value === 'Terminées') {
            return tache.etat === 'Terminé';
        }
        return tache.etat === 'A faire';
    });
});
const startEditing = (index) => {
    editingIndex.value = index;
};
const stopEditing = () => {
    editingIndex.value = null;
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        taches: {
            type: Array,
            required: true,
        },
        deleteTask: {
            type: Function,
            required: true,
        },
        deleteAllTasks: {
            type: Function,
            required: true,
        },
        deleteCompletedTasks: {
            type: Function,
            required: true,
        },
    },
});
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
    __VLS_styleScopedClasses['intitule'];
    __VLS_styleScopedClasses['intitule'];
    __VLS_styleScopedClasses['intitule'];
    __VLS_styleScopedClasses['delete-btn'];
    __VLS_styleScopedClasses['table-container'];
    __VLS_styleScopedClasses['action-buttons'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    if (__VLS_ctx.localTaches.length > 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("filters") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("buttons-container") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("filter-buttons") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.localTaches.length > 0)))
                        return;
                    __VLS_ctx.filter = 'Toutes';
                } }, ...{ class: (({ active: __VLS_ctx.filter === 'Toutes' })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.localTaches.length > 0)))
                        return;
                    __VLS_ctx.filter = 'Non Terminées';
                } }, ...{ class: (({ active: __VLS_ctx.filter === 'Non Terminées' })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.localTaches.length > 0)))
                        return;
                    __VLS_ctx.filter = 'Terminées';
                } }, ...{ class: (({ active: __VLS_ctx.filter === 'Terminées' })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("action-buttons") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.localTaches.length > 0)))
                        return;
                    props.deleteAllTasks();
                } }, ...{ class: ("delete-all-btn") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.localTaches.length > 0)))
                        return;
                    props.deleteCompletedTasks();
                } }, ...{ class: ("delete-completed-btn") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("table-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({});
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.filteredTaches))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({ key: ((index)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        if (__VLS_ctx.editingIndex !== index) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ onDblclick: (...[$event]) => {
                        if (!((__VLS_ctx.editingIndex !== index)))
                            return;
                        __VLS_ctx.startEditing(index);
                    } }, ...{ class: ("intitule") }, });
            (item.intitule);
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onBlur: (__VLS_ctx.stopEditing) }, ...{ class: ("edit-input") }, });
            (item.intitule);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("etat") }, });
        (item.etat);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("date") }, });
        (item.dateech);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("deltebtn") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    props.deleteTask(index);
                } }, ...{ class: ("delete-btn") }, });
    }
    __VLS_styleScopedClasses['filters'];
    __VLS_styleScopedClasses['buttons-container'];
    __VLS_styleScopedClasses['filter-buttons'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['action-buttons'];
    __VLS_styleScopedClasses['delete-all-btn'];
    __VLS_styleScopedClasses['delete-completed-btn'];
    __VLS_styleScopedClasses['table-container'];
    __VLS_styleScopedClasses['intitule'];
    __VLS_styleScopedClasses['edit-input'];
    __VLS_styleScopedClasses['etat'];
    __VLS_styleScopedClasses['date'];
    __VLS_styleScopedClasses['deltebtn'];
    __VLS_styleScopedClasses['delete-btn'];
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
            localTaches: localTaches,
            filter: filter,
            editingIndex: editingIndex,
            filteredTaches: filteredTaches,
            startEditing: startEditing,
            stopEditing: stopEditing,
        };
    },
    props: {
        taches: {
            type: Array,
            required: true,
        },
        deleteTask: {
            type: Function,
            required: true,
        },
        deleteAllTasks: {
            type: Function,
            required: true,
        },
        deleteCompletedTasks: {
            type: Function,
            required: true,
        },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        taches: {
            type: Array,
            required: true,
        },
        deleteTask: {
            type: Function,
            required: true,
        },
        deleteAllTasks: {
            type: Function,
            required: true,
        },
        deleteCompletedTasks: {
            type: Function,
            required: true,
        },
    },
});
; /* PartiallyEnd: #4569/main.vue */
