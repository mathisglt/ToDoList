import { defineProps, computed, ref } from 'vue';
const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps();
const taskDates = computed(() => new Set(props.taches.map((tache) => tache.dateech)));
const tasksByDate = computed(() => {
    const map = new Map();
    props.taches.forEach((tache) => {
        if (!map.has(tache.dateech)) {
            map.set(tache.dateech, []);
        }
        map.get(tache.dateech).push(tache);
    });
    return map;
});
const currentDate = ref(new Date());
const currentMonthLabel = computed(() => {
    return currentDate.value.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
});
const changeMonth = (delta) => {
    currentDate.value = new Date(currentDate.value.setMonth(currentDate.value.getMonth() + delta));
};
const daysInMonth = computed(() => {
    const totalDays = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 0).getDate();
    return Array.from({ length: totalDays }, (_, i) => {
        const dayDate = new Date(Date.UTC(currentDate.value.getFullYear(), currentDate.value.getMonth(), i + 1));
        return {
            day: dayDate.getUTCDate(),
            date: dayDate.toISOString().split('T')[0],
        };
    });
});
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
    __VLS_styleScopedClasses['calendar-cell'];
    __VLS_styleScopedClasses['calendar-cell'];
    __VLS_styleScopedClasses['calendar-cell'];
    __VLS_styleScopedClasses['tooltip'];
    __VLS_styleScopedClasses['nav-button'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("calendar") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("calendar-header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.changeMonth(-1);
            } }, ...{ class: ("nav-button") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("month-label") }, });
    (__VLS_ctx.currentMonthLabel);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.changeMonth(1);
            } }, ...{ class: ("nav-button") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("calendar-grid") }, });
    for (const [day] of __VLS_getVForSourceType((__VLS_ctx.daysInMonth))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((day.date)), ...{ class: ("calendar-cell") }, ...{ class: (({ 'task-day': __VLS_ctx.taskDates.has(day.date) })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (day.day);
        if (__VLS_ctx.tasksByDate.has(day.date)) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tooltip") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
            for (const [task] of __VLS_getVForSourceType((__VLS_ctx.tasksByDate.get(day.date)))) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((task.intitule)), });
                __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
                (task.intitule);
                (task.etat);
            }
        }
    }
    __VLS_styleScopedClasses['calendar'];
    __VLS_styleScopedClasses['calendar-header'];
    __VLS_styleScopedClasses['nav-button'];
    __VLS_styleScopedClasses['month-label'];
    __VLS_styleScopedClasses['nav-button'];
    __VLS_styleScopedClasses['calendar-grid'];
    __VLS_styleScopedClasses['calendar-cell'];
    __VLS_styleScopedClasses['task-day'];
    __VLS_styleScopedClasses['tooltip'];
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
            taskDates: taskDates,
            tasksByDate: tasksByDate,
            currentMonthLabel: currentMonthLabel,
            changeMonth: changeMonth,
            daysInMonth: daysInMonth,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
