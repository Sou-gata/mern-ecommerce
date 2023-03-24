import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { capitalize } from "../utils/extraFunctions";

const CustomPopup = ({ open, func, id, tableData, name }) => {
    if (!open?.open) open.open = false;
    if (!open?.setOpen) open.setOpen = () => {};
    if (!func) func = () => {};
    if (!id) id = "";
    if (!tableData.tableData) tableData.tableData = [];
    if (!tableData.setTableData) tableData.setTableData = () => {};
    const dispatch = useDispatch();
    return (
        <div className="popup">
            {open.open && (
                <div className="top-box">
                    <div>
                        <p>Are you sure you want to delete this {name} ?</p>
                        <div>
                            <button
                                className="btn btn-primary"
                                onClick={() => {
                                    open.setOpen(false);
                                }}
                            >
                                Cancle
                            </button>
                            <button
                                className="btn btn-danger"
                                onClick={async () => {
                                    const a = await dispatch(func(id));
                                    if (a.payload._id === id) {
                                        toast.success(
                                            `${capitalize(
                                                name
                                            )} deleated successfully`
                                        );
                                        let b = tableData.tableData.filter(
                                            (item) => {
                                                return item.key !== id;
                                            }
                                        );
                                        tableData.setTableData(b);
                                        open.setOpen(false);
                                    }
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomPopup;
