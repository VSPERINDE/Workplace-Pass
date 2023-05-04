import types from "./types";
import { produce } from "immer";
import _const from "../../../utils/const";
import * as _ from "underscore";

const INITIAL_STATE = {
  form: {
    inputFiltro: "",
    inputFiltroFoco: false,
    modalEspecialista: false,
    modalAgendamento: 0,
    agendamentoLoading: false,
    isLoading: false,
  },
  workplace: [],
  servicos: [],
  agenda: [],
  colaboradores: [],
  agendamento: {
    clienteId: _const.clienteId,
    workplaceId: _const.workplaceId,
    servicoId: null,
    colaboradorId: null,
    data: null,
  },
};

function workplace(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.UPDATE_FORM: {
      return produce(state, (draft) => {
        draft.form = { ...draft.form, [action.key]: action.value };
      });
    }
    case types.UPDATE_WORKPLACE: {
      return produce(state, (draft) => {
        draft.workplace = _.uniq([...draft.workplace, ...action.workplace]);
      });
    }
    case types.UPDATE_SERVICOS: {
      return produce(state, (draft) => {
        draft.servicos = action.servicos;
      });
    }
    case types.UPDATE_AGENDA: {
      return produce(state, (draft) => {
        draft.agenda = [...draft.agenda, ...action.agenda];
      });
    }
    case types.UPDATE_COLABORADORES: {
      return produce(state, (draft) => {
        draft.colaboradores = _.uniq([
          ...draft.colaboradores,
          ...action.colaboradores,
        ]);
      });
    }
    case types.UPDATE_AGENDAMENTO: {
      return produce(state, (draft) => {
        if (action.key === "servicoId") {
          draft.form.modalAgendamento = 2;
        }

        draft.agendamento[action.key] = action.value;
      });
    }
    case types.RESET_AGENDAMENTO: {
      return produce(state, (draft) => {
        draft.agenda = INITIAL_STATE.agenda;
        draft.colaboradores = INITIAL_STATE.colaboradores;
        draft.agendamento = INITIAL_STATE.agendamento;
      });
    }
    case types.RESET_WORKPLACE: {
      return produce(state, (draft) => {
        draft.workplace = INITIAL_STATE.workplace;
      });
    }
    default: {
      return state;
    }
  }
}

export default workplace;
