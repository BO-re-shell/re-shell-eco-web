export interface DataRequestFormData {
  fullName: string;
  email: string;
  company: string;
  sector: string;
  mineralFocus: string[];
  requestType: string[];
  applicationDetails: string;
}

export interface PartnerFormData {
  contactName: string;
  email: string;
  companyName: string;
  sector: string;
  partnershipInterest: string;
  phone?: string;
}
