import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Shopping from "../components/Shopping";
import ToS from "../components/TermsOfService";
import { ItemType } from "../../../types";

const MenContainer = () => {
  const [Items, setItems] = useState<ItemType[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/men-clothes")
      .then((response) => response.json())
      .then((data) => {
        const categoryItems = [];
        for (const key in data.rows) {
          categoryItems.push(data.rows[key]);
        }
        setItems(categoryItems);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="menContainer">
      <NavBar />
      <Shopping categoryItems={Items} />
      <ToS />
    </div>
  );
};

export default MenContainer;
