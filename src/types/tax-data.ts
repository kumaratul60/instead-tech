/**
 * Strongly typed taxpayer data structures (simulating tax software return payload).
 */

export interface TaxpayerInfo {
  firstName: string;
  middleInitial?: string;
  lastName: string;
  ssn: string;
  occupation?: string;
  isBlind?: boolean;
  isOver65?: boolean;
}

export interface AddressInfo {
  street: string;
  aptNumber?: string;
  city: string;
  state: string;
  zipCode: string;
  foreignCountry?: string;
}

export interface W2Income {
  employerEin: string;
  employerName: string;
  wages: number; // Box 1
  federalWithholding: number; // Box 2
  socialSecurityWages: number; // Box 3
  socialSecurityTax: number; // Box 4
  medicareWages: number; // Box 5
  medicareTax: number; // Box 6
  stateWages?: number;
  stateTax?: number;
  stateAbbreviation?: string;
}

export interface IncomeBreakdown {
  w2s: W2Income[];
  taxableInterest: number; // Line 2b
  ordinaryDividends: number; // Line 3b
  qualifiedDividends: number; // Line 3a
  capitalGains: number; // Line 7
  totalOtherIncome: number;
}

export interface TaxReturnData {
  taxYear: number;
  filingStatus:
    | "SINGLE"
    | "MARRIED_FILING_JOINTLY"
    | "MARRIED_FILING_SEPARATELY"
    | "HEAD_OF_HOUSEHOLD"
    | "QUALIFYING_SURVIVING_SPOUSE";
  digitalAssetsAnswer: boolean; // Yes/No to digital assets question
  primaryTaxpayer: TaxpayerInfo;
  spouseTaxpayer?: TaxpayerInfo;
  address: AddressInfo;
  income: IncomeBreakdown;
  adjustments: {
    educatorExpenses?: number;
    studentLoanInterest?: number;
    iraDeduction?: number;
  };
  payments: {
    federalWithholdingTotal: number;
    estimatedTaxPayments: number;
  };
  refund: {
    routingNumber: string;
    accountNumber: string;
    accountType: "CHECKING" | "SAVINGS";
  };
  metadata?: Record<string, unknown>;
}
