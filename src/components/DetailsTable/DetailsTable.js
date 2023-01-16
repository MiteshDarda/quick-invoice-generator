import { useEffect, useState } from "react";
import styles from "./DetailsTable.module.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

function DetailsTable() {
  const [rows, setRows] = useState([]);
  const [newId, setNewId] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let val = 0;
    rows.forEach((e) => {
      val += e.quantity * e.rate;
    });
    setTotal(val);
  }, [rows]);
  function increaseHandler() {
    setRows([
      ...rows,
      { id: newId, item: "", description: "", quantity: 0, rate: 0 },
    ]);
    setNewId(newId + 1);
  }
  function decreaseHandler(key) {
    setRows(
      rows.filter((r, i) => {
        return r.id !== key;
      })
    );
  }
  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr className={styles.firstRow}>
            <th>Item</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Rate</th>
            <th>Amount</th>
            <th>
              <AddCircleIcon onClick={increaseHandler} />
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            return (
              <tr key={row.id}>
                <td>
                  <input placeholder="Enter Item" />
                </td>
                <td>
                  <input placeholder="Enter Description" />
                </td>
                <td>
                  <input
                    value={row.quantity}
                    onChange={(e) => {
                      setRows(
                        rows.map((r) => {
                          if (r.id === row.id)
                            r.quantity = Number(e.target.value);
                          if (r.quantity < 0) r.quantity *= -1;
                          return r;
                        })
                      );
                    }}
                    type="number"
                    placeholder="Enter Quantity"
                  />
                </td>
                <td>
                  <input
                    value={row.rate}
                    onChange={(e) => {
                      setRows(
                        rows.map((r) => {
                          if (r.id === row.id) r.rate = Number(e.target.value);
                          if (r.rate < 0) r.rate *= -1;
                          return r;
                        })
                      );
                    }}
                    type="number"
                    placeholder="Enter Rate"
                  />
                </td>
                <td>
                  <input
                    disabled
                    value={`₹${row.quantity * row.rate}`}
                    placeholder="Enter Amount"
                  />
                </td>
                <td>
                  <RemoveCircleIcon
                    onClick={() => {
                      decreaseHandler(row.id);
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {rows.length ? (
            <tr>
              <td colSpan={3}>Total</td>
              <td colSpan={3}>₹{total}</td>
            </tr>
          ) : (
            <tr>
              <td colSpan={6}>No Items Added</td>
            </tr>
          )}
        </tfoot>
      </table>
    </>
  );
}

export default DetailsTable;
