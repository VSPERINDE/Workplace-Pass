import { doc, updateDoc } from "firebase/firestore";

import camelize from "camelize";
import { database } from "../../infrastructure/database/firebase";
import { useDispatch, useSelector } from "react-redux";
import { allWorkplace } from "../../store/modules/workplace/sagas";

export const workplaceRequest = () => {
  const dispatch = useDispatch();

  const { workplaces } = useSelector((state) => state.workplaces);
  useEffect(() => {
    dispatch(allWorkplace());
  }, []);

  return new Promise((resolve, reject) => {
    if (!workplaces) {
      reject("404 - Not found");
    }
    resolve(workplaces);
  });
};

export const workplaceTransform = ({ results = [] }) => {
  const mappedResults = results.map((workplace) => {
    return {
      name: workplace.nome,
      photos: workplace.capa,
      address: workplace.endereco.rua,
    };
  });
  return camelize(mappedResults);
};

export const workplaceRegister = async (newItem) => {
  const docRef = doc(database, "workplace-accounts", newItem.email);
  await updateDoc(docRef, {
    ...newItem,
  });
};
