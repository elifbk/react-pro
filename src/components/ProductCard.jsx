import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteDataFunc, updateDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ dt }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateFunc = () => {
    dispatch(modalFunc());
    setOpenEdit(false);
    navigate(`/?update=${dt?.id}`);
  };

  return (
    <div className="w-[200px] h-[200px] relative m-2 rounded-md">
      <img src={dt?.url} className="w-full h-full rounded-md" />
      <div className="absolute left-0 bottom-0 bg-red-900 text-white p-2 w-full">
        <div className="text-lg font-semibold">{dt?.name}</div>
        <div>{dt?.price}</div>
      </div>

      <div
        onClick={() => setOpenEdit(!openEdit)}
        className="absolute top-0 right-2 hover:text-black"
      >
        <BsThreeDots color="white" size={24} />
      </div>

      {openEdit && (
        <div className="bg-black border border-white text-white text-sm absolute top-0 right-2 p-3 rounded-md">
          <div
            onClick={() => dispatch(deleteDataFunc(dt?.id))}
            className="cursor-pointer hover:bg-gray-800 p-1 rounded-md"
          >
            Sil
          </div>
          <div
            onClick={updateFunc}
            className="cursor-pointer hover:bg-gray-800 p-1 rounded-md"
          >
            Düzenle
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
