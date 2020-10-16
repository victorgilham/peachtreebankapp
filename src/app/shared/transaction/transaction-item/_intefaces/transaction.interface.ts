export interface ITransaction {
  categoryCode?: string;
  dates?: {
    valueDate: number
  };
  transaction?: {
    amountCurrency: {
      amount: number;
      currencyCode: string;
    }
    type: string;
    creditDebtIndicator: string;
  };
  merchant?: {
    accountNumber: string;
    name: string;
    logo: string;
  };
}
