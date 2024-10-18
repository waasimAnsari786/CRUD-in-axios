import React, { useEffect, useState } from "react";
import Form from "./Form";
import { deleteData, postData, readData } from "../APIs/CRUDAPIS";
import Card from "./Card";
import { usePost } from "../context/PostContext";

export default function MyWeb() {
  const { setDataObj, dataObj } = usePost();
  const [API_Data, setAPI_Data] = useState([]);

  const [isEdit, setIsEdit] = useState(false);

  const printData = async () => {
    try {
      const res = await readData();

      setAPI_Data(res.data);
    } catch (error) {
      alert(error);
    }
  };

  const deleteAPI_Data = async (id) => {
    try {
      const res = await deleteData(id);
      setAPI_Data((prev) => {
        return prev.filter((curElem) => curElem.id !== id);
      });
    } catch (error) {
      alert(error);
    }
  };

  const editAPI_Data = (data) => {
    setDataObj(data);
    setIsEdit(true);
  };

  useEffect(() => {
    printData();
  }, [setAPI_Data]);

  return (
    <>
      <section className="container mx-auto">
        <Form setAPI_Data={setAPI_Data} isEdit={isEdit} setIsEdit={setIsEdit} />
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 gap-2">
          {API_Data.map((curObj, i) => {
            return (
              <Card
                data={curObj}
                key={i}
                delFunc={deleteAPI_Data}
                editFunc={editAPI_Data}
                setAPI_Data={setAPI_Data}
                index={i}
              />
            );
          })}
        </section>
      </section>
    </>
  );
}
