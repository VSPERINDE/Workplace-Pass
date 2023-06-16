import { Alert } from "react-native";
import { takeLatest, all, call, put, select } from "redux-saga/effects";
import types from "./types";
import util from "../../../utils/util";

import _const from "../../../utils/const";
import api from "../../../services/api";
import {
  updateWorkplace,
  updateServicos,
  updateAgenda,
  updateAgendamento,
  updateColaboradores,
  updateForm,
  resetWorkplace,
  updateAgendamentos,
  resetAgendamentos,
} from "./actions";
import moment from "moment/min/moment-with-locales";
moment.locale("pt-br");

export function* getWorkplace() {
  try {
    const { data: res } = yield call(
      api.post,
      `/workplace/${_const.workplaceId}`
    );
    if (res.error) {
      alert(res.message);
      return false;
    }

    yield put(updateWorkplace(res.workplace));
  } catch (err) {
    alert(err.message);
  }
}

export function* allWorkplace() {
  try {
    yield put(updateForm("isLoading", true));
    const { data: res } = yield call(api.post, `/workplace/filter-complete`, {
      filters: {},
    });

    if (res.error) {
      alert(res.message);
      yield put(updateForm("isLoading", false));
      return false;
    }
    yield put(resetWorkplace());
    yield put(updateWorkplace(res.result));
    yield put(updateForm("isLoading", false));
  } catch (err) {
    alert(err.message);
    yield put(updateForm("isLoading", false));
  }
}

export function* allServicos(key) {
  try {
    const { workplace } = yield select((state) => state.workplace);

    let workplaces = workplace;
    workplaces = workplaces.filter((w) => w._id === key.key).flat();
    const { data: res } = yield call(
      api.get,
      `/servico/workplace/${workplaces[0]._id}`
    );
    if (res.error) {
      alert(res.message);
      return false;
    }
    yield put(updateServicos(res.servicos));
  } catch (err) {
    alert(err.message);
  }
}

export function* filterAgenda() {
  try {
    const { agendamento, agenda } = yield select((state) => state.workplace);
    const finalStartDate =
      agenda.length === 0
        ? moment().format("YYYY-MM-DD")
        : Object.keys(agenda[0])[0];

    const { data: res } = yield call(
      api.post,
      `/agendamento/horarios-disponiveis`,
      {
        ...agendamento,
        data: finalStartDate,
      }
    );

    if (res.error) {
      alert(res.message);
      return false;
    }

    const { horariosDisponiveis, data, colaboradorId } = yield call(
      util.selectAgendamento,
      res.agenda
    );
    const finalDate = moment(`${data}T${horariosDisponiveis[0][0]}`).format();

    yield put(updateAgenda(res.agenda));
    yield put(updateColaboradores(res.colaboradores));
    yield put(updateAgendamento("data", finalDate));
    yield put(updateAgendamento("colaboradorId", colaboradorId));
  } catch (err) {
    alert(err.message);
  }
}

export function* getAgendamentos() {
  try {
    yield put(updateForm("isLoading", true));
    const { agendamento, agenda } = yield select((state) => state.workplace);
    const finalStartDate =
      agenda.length === 0
        ? moment().format("YYYY-MM-DD")
        : Object.keys(agenda[0])[0];

    const { data: res } = yield call(api.post, `/agendamento/cliente/filter`, {
      clienteId: agendamento.clienteId,
      range: {
        inicio: finalStartDate,
        final: moment(finalStartDate).add(30, "days"),
      },
    });

    if (res.error) {
      alert(res.message);
      return false;
    }

    const agendamentos = res.agendamentos.map((a) => {
      return {
        _id: a._id,
        local: a.workplaceId.nome,
        servico: a.servicoId.nome,
        colaborador: a.colaboradorId?.nome,
        data: moment(a.data).calendar(),
        foto: a.workplaceId.capa,
      };
    });

    yield put(resetAgendamentos());
    yield put(updateAgendamentos(agendamentos));
    yield put(updateForm("isLoading", false));
  } catch (err) {
    alert(err.message);
  }
}

export function* saveAgendamento() {
  try {
    yield put(updateForm("agendamentoLoading", true));

    const { agendamento } = yield select((state) => state.workplace);
    const { data: res } = yield call(api.post, `/agendamento`, agendamento);
    if (res.error) {
      alert(res.message);
      return false;
    }

    Alert.alert("Ebaaaaa!!", "Horário agendado com sucesso", [
      {
        text: "Ok",
      },
    ]);

    yield put(updateForm("agendamentoLoading", false));
  } catch (err) {
    alert(err.message);
  }
}

export function* removeAgendamento(key) {
  try {
    yield put(updateForm("agendamentoLoading", true));
    const { data: res } = yield call(api.delete, `/agendamento/${key.key}`);
    if (res.error) {
      alert(res.message);
      return false;
    }

    Alert.alert(
      "Agendamento cancelado com sucesso, verifique um novo horário e não deixe de agendar!",
      [
        {
          text: "Ok",
        },
      ]
    );

    yield put(updateForm("agendamentoLoading", false));
    yield put(resetAgendamentos());
  } catch (err) {
    alert(err.message);
  }
}

export default all([
  takeLatest(types.ALL_WORKPLACES, allWorkplace),
  takeLatest(types.GET_WORKPLACE, getWorkplace),
  takeLatest(types.ALL_SERVICOS, allServicos),
  takeLatest(types.FILTER_AGENDA, filterAgenda),
  takeLatest(types.SAVE_AGENDAMENTO, saveAgendamento),
  takeLatest(types.GET_AGENDAMENTOS, getAgendamentos),
  takeLatest(types.REMOVE_AGENDAMENTO, removeAgendamento),
]);
