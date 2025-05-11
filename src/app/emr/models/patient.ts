export interface Patient {
  id: string;
  fullName: string;
  email?: string;
  dob?: string;
  birthDate?: string; // ISO string format (e.g., "1990-05-15T00:00:00.000Z")
  // Add other relevant patient fields here, for example:
  // phoneNumber?: string;
  // address?: string;
  // gender?: string; // e.g., 'Male', 'Female', 'Other'
  // medicalHistorySummary?: string;
  // allergies?: string[];
  // currentMedications?: string[];
  // insuranceProvider?: string;
  // insurancePolicyNumber?: string;
  // emergencyContactName?: string;
  // emergencyContactPhone?: string;
}
