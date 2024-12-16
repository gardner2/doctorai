import { SymptomAssessment } from '../../models/diagnosis.model';

export class SymptomTrackerService {
  private assessmentHistory: SymptomAssessment[] = [];

  addAssessment(assessment: SymptomAssessment) {
    this.assessmentHistory.push({
      ...assessment,
      timestamp: new Date()
    });
  }

  getHistory(): SymptomAssessment[] {
    return [...this.assessmentHistory];
  }

  getLatestAssessment(): SymptomAssessment | null {
    return this.assessmentHistory[this.assessmentHistory.length - 1] || null;
  }

  clearHistory() {
    this.assessmentHistory = [];
  }
}