// src/forms/validators.ts
import type { DataRequestFormData, PartnerFormData } from '../types/forms';

export const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validateRequired = (value: string | string[]): boolean => {
  if (Array.isArray(value)) {
    return value.length > 0;
  }
  return value.trim().length > 0;
};

export const validateMinLength = (value: string, min: number): boolean => {
  return value.trim().length >= min;
};

export const validateEmail = (email: string): string | null => {
  if (!email) return 'Email is required';
  if (!isValidEmail(email)) return 'Invalid email format';
  return null;
};

export const validateDataRequestForm = (formData: DataRequestFormData): string[] => {
  const errors: string[] = [];

  if (!validateRequired(formData.fullName)) {
    errors.push('Full name is required');
  }

  const emailError = validateEmail(formData.email);
  if (emailError) errors.push(emailError);

  if (!validateRequired(formData.company)) {
    errors.push('Company name is required');
  }

  if (!validateRequired(formData.sector)) {
    errors.push('Industry sector is required');
  }

  if (!validateRequired(formData.mineralFocus)) {
    errors.push('Please select at least one mineral focus');
  }

  if (!validateRequired(formData.requestType)) {
    errors.push('Please select at least one request type');
  }

  if (!validateRequired(formData.applicationDetails)) {
    errors.push('Application details are required');
  }

  if (!validateMinLength(formData.applicationDetails, 20)) {
    errors.push('Application details must be at least 20 characters');
  }

  return errors;
};

export const validatePartnerForm = (formData: PartnerFormData): string[] => {
  const errors: string[] = [];

  if (!validateRequired(formData.contactName)) {
    errors.push('Contact name is required');
  }

  const emailError = validateEmail(formData.email);
  if (emailError) errors.push(emailError);

  if (!validateRequired(formData.companyName)) {
    errors.push('Company name is required');
  }

  if (!validateRequired(formData.sector)) {
    errors.push('Industry sector is required');
  }

  if (!validateRequired(formData.partnershipInterest)) {
    errors.push('Partnership interest description is required');
  }

  return errors;
};
