export interface DiagnosisResult {
  condition: string;
  confidence: number;
  recommendations: string[];
  severity: 'low' | 'medium' | 'high';
  requiresImmediate: boolean;
}

export interface SymptomAssessment {
  duration: string;
  painLevel: number;
  symptoms: string[];
  images: string[];
}