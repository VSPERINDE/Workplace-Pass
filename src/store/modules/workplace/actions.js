import types from "./types";

export function allWorkplace() {
  return { type: types.ALL_WORKPLACES };
}

export function getWorkplace(key) {
  return { type: types.GET_WORKPLACE, key };
}

export function updateWorkplace(workplace) {
  return { type: types.UPDATE_WORKPLACE, workplace };
}

export function allServicos(key) {
  return { type: types.ALL_SERVICOS, key };
}

export function updateServicos(servicos) {
  return { type: types.UPDATE_SERVICOS, servicos };
}

export function updateAgendamento(key, value) {
  return { type: types.UPDATE_AGENDAMENTO, key, value };
}

export function updateForm(key, value) {
  return { type: types.UPDATE_FORM, key, value };
}

export function filterAgenda() {
  return { type: types.FILTER_AGENDA };
}

export function updateAgenda(agenda) {
  return { type: types.UPDATE_AGENDA, agenda };
}

export function updateColaboradores(colaboradores) {
  return { type: types.UPDATE_COLABORADORES, colaboradores };
}

export function resetWorkplace() {
  return { type: types.RESET_WORKPLACE };
}

export function resetAgendamento() {
  return { type: types.RESET_AGENDAMENTO };
}

export function saveAgendamento() {
  return { type: types.SAVE_AGENDAMENTO };
}

export function getHorarios() {
  return { type: types.GET_HORARIOS };
}

export function getAgendamentos() {
  return { type: types.GET_AGENDAMENTOS };
}

export function updateAgendamentos(agendamentos) {
  return { type: types.UPDATE_AGENDAMENTOS, agendamentos };
}

export function resetAgendamentos() {
  return { type: types.RESET_AGENDAMENTOS };
}

export function removeAgendamento(key) {
  return { type: types.REMOVE_AGENDAMENTO, key };
}
