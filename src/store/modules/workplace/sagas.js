import moment from "moment";
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
} from "./actions";

export function* getWorkplace() {
  try {
    const { data: res } = yield call(
      api.post,
      `/workplace/${consts.workplaceId}`
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
    const { data: res } = yield call(api.post, `/workplace/filter`, {
      filters: {},
    });
    if (res.error) {
      alert(res.message);
      yield put(updateForm("isLoading", false));
      return false;
    }
    yield put(resetWorkplace());
    yield put(updateWorkplace(res.workplaces));
    yield put(updateForm("isLoading", false));
  } catch (err) {
    alert(err.message);
    yield put(updateForm("isLoading", false));
  }
}

export function* allServicos() {
  try {
    const { data: res } = yield call(
      api.get,
      `/servico/workplace/${_const.workplaceId}`
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
      `/agendamento/dias-disponiveis`,
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
      { text: "Voltar", onPress: () => {} },
    ]);

    yield put(updateForm("agendamentoLoading", false));
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
]);
