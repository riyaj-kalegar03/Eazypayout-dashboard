import { useState } from "react";
import Tabledata from "./table.jsx";
import Balance from "./available.jsx";
import "./select.css";

const data = {
  companyA: {
    accounts: {
      account1: [
        {
          date: "07/05/2024 01:04 PM",
          credit: "₹1,000.00",
          availableBalance: "₹1,213.27",
          utrBrn: "QOC678I4UQ7OIJ",
          accountNumber: "AQC678I4UQ7OIJ",
        },
        {
          date: "05/04/2024 01:04 PM",
          credit: "₹2,000.00",
          availableBalance: "₹2,213.27",
          utrBrn: "QOIL345MRPTI",
          accountNumber: "OQIL345MRPTI",
        },
        {
          date: "01/04/2024 01:34 PM",
          credit: "₹3,990.00",
          availableBalance: "₹2,213.27",
          utrBrn: "QOIL345MRPTI",
          accountNumber: "CMS1241564511",
        },
      ],
      account2: [
        {
          date: "28/03/2024 01:04 PM",
          credit: "₹1,500.00",
          availableBalance: "₹3,213.27",
          utrBrn: "CMS1241564511",
          accountNumber: "ACD567HYG725C",
        },
        {
          date: "12/02/2024 02:04 PM",
          credit: "₹2,000.00",
          availableBalance: "₹4,213.27",
          utrBrn: "CMS3465615461",
          accountNumber: "ACD678HYG75C",
        },
        {
          date: "06/02/2024 03:06 PM",
          credit: "₹6,000.00",
          availableBalance: "₹4,200.27",
          utrBrn: "CMS24556451E",
          accountNumber: "AQC678PKYLJ7OI",
        },
      ],
    },
  },
  companyB: {
    accounts: {
      account1: [
        {
          date: "10/01/2024 01:04 PM",
          credit: "₹3,500.00",
          availableBalance: "₹5,213.27",
          utrBrn: "CMS2467514561",
          accountNumber: "ACD678YIM4657",
        },
        {
          date: "15/01/2024 11:39 PM",
          credit: "₹1,500.00",
          availableBalance: "₹1,000.00",
          utrBrn: "CMS24556451E",
          accountNumber: "AQC678PKYLJ7OI",
        },
        {
          date: "15/01/2024 11:00 PM",
          credit: "₹1,060.00",
          availableBalance: "₹1,900.00",
          utrBrn: "CMS85697423K",
          accountNumber: "AQC678PKYLJ7OI",
        },
      ],
      account2: [
        {
          date: "20/03/2024 01:04 PM",
          credit: "₹2,500.00",
          availableBalance: "₹6,213.27",
          utrBrn: "CMS3671512561",
          accountNumber: "ACD687YIM4657",
        },
        {
          date: "25/03/2024 11:39 PM",
          credit: "₹1,700.00",
          availableBalance: "₹2,000.00",
          utrBrn: "CMS25656451E",
          accountNumber: "AQC778PKYLJ7OI",
        },
        {
          date: "30/03/2024 10:30 PM",
          credit: "₹1,707.00",
          availableBalance: "₹2,550.00",
          utrBrn: "CMS25655168A",
          accountNumber: "AQC778PKYLJ7OI",
        },
      ],
    },
  },
};

export default function Company() {
  const [selectedCompany, setSelectedCompany] = useState("companyA");
  const [selectedAccount, setSelectedAccount] = useState("account1");

  const handleCompanyChange = (e) => {
    setSelectedCompany(e.target.value);
    setSelectedAccount("account1"); // Reset to first account on company change
  };

  const handleAccountChange = (e) => {
    setSelectedAccount(e.target.value);
  };

  const transactions = data[selectedCompany].accounts[selectedAccount];

  return (
    <div className="select-options">
      <div className="select">
        <div>
          <select
            id="companySelect"
            className="form-select"
            value={selectedCompany}
            onChange={handleCompanyChange}
          >
            <option value="companyA">Company A</option>
            <option value="companyB">Company B</option>
          </select>
        </div>
        <div>
          <select
            id="accountSelect"
            className="form-select"
            value={selectedAccount}
            onChange={handleAccountChange}
          >
            <option value="account1">Account 1</option>
            <option value="account2">Account 2</option>
          </select>
        </div>
      </div>
      <Balance></Balance>
      <Tabledata transactions={transactions}></Tabledata>
      <div className="logout">
        <button>
          <span className="material-symbols-outlined">logout</span> Logout
        </button>
      </div>
    </div>
  );
}
