import styles from "./BillingInfo.module.css";

function BillingInfo() {
  return (
    <div className="flex">
      <div className={styles.children}>
        <h1>Billid By:</h1>
        <div>
          <div className={styles.flex}>
            <label htmlFor="your-name">Name &nbsp;&nbsp;&nbsp;</label>
            <input placeholder="Enter Your Name" id="your-name" type="text" />
          </div>
          <div className={styles.flex}>
            <label htmlFor="your-address">Address&nbsp;</label>
            <textarea id="your-address" placeholder="Enter Your Address" />
          </div>
          <div className={styles.flex}>
            <label htmlFor="your-pan">
              PAN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <input id="your-pan" placeholder="Enter Your Pan" />
          </div>
          <div className={styles.flex}>
            <label htmlFor="your-email">
              Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <input id="your-email" placeholder="Enter Your Email" />
          </div>
          <div className={styles.flex}>
            <label htmlFor="your-number">Phone&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input id="your-number" placeholder="Enter Your Number" />
          </div>
        </div>
      </div>
      <div className={styles.children}>
        <h1>Billid To:</h1>
        <div>
          <div className={styles.flex}>
            <label htmlFor="client-name">Name &nbsp;&nbsp;&nbsp;</label>
            <input
              placeholder="Enter Client's Name"
              id="client-name"
              type="text"
            />
          </div>
          <div className={styles.flex}>
            <label htmlFor="client-address">Address&nbsp;</label>
            <textarea
              id="client-address"
              placeholder="Enter Client's Address"
            />
          </div>
          <div className={styles.flex}>
            <label htmlFor="client-pan">
              PAN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <input id="client-pan" placeholder="Enter Client's Pan" />
          </div>
          <div className={styles.flex}>
            <label htmlFor="client-email">
              Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <input id="client-email" placeholder="Enter Client's Email" />
          </div>
          <div className={styles.flex}>
            <label htmlFor="client-number">Phone&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input id="client-number" placeholder="Enter Client's Number" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillingInfo;
