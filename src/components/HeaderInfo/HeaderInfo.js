import { Input } from "@mui/material";
import styles from "./HeaderInfo.module.css";
function HeaderInfo() {
  let date = new Date();
  let date2 = `${date.getUTCFullYear()}-${
    date.getUTCMonth() + 1 < 10 ? "0" : ""
  }${date.getUTCMonth() + 1}-${date.getUTCDate()}`;
  return (
    <div>
      <h1 className={styles.header}>Invoice</h1>
      <label htmlFor="invoice-no">Invoice No. &nbsp; #</label>
      <Input
        className={styles.input}
        id="invoice-no"
        sx={{ width: "15ch" }}
        defaultValue="01"
      />
      <br />
      <label htmlFor="invoice-date">Invoice Date</label>
      <input id="invoice-date" type={"date"} defaultValue={date2} />
      <br />
      <label htmlFor="due-date">Due Date &nbsp;&nbsp;&nbsp;&nbsp;</label>
      <input type={"date"} id="due-date" defaultValue={date2} />
      <br />
    </div>
  );
}

export default HeaderInfo;
