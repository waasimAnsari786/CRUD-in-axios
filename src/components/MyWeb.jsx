import React, { useEffect, useState } from "react";
import Form from "./Form";
import { getData } from "../APIs/CRUDAPIS";
import { data } from "autoprefixer";
import Card from "./Card";

export default function MyWeb() {
  const [API_Data, setAPI_Data] = useState([]);

  const printData = async () => {
    try {
      const res = await getData();
      setAPI_Data(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    printData();
  }, []);

  return (
    <>
      <section className="container mx-auto">
        <Form />
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 gap-2">
          {API_Data.map((curObj) => {
            return (
              <>
                <Card data={curObj} key={curObj.id} />
              </>
            );
          })}
        </section>
      </section>
    </>
  );
}
